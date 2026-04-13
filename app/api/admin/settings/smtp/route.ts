import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import prisma from '@/lib/prisma';

async function isAdmin() {
  const session = await getServerSession(authOptions);
  return session?.user && (session.user as any).role === 'ADMIN';
}

export async function GET() {
  if (!(await isAdmin())) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const settings = await prisma.$queryRaw<any[]>`
      SELECT \`key\`, \`value\` FROM SystemSetting 
      WHERE \`key\` IN ('SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS')
    `;

    const config: Record<string, string> = {};
    settings.forEach(s => {
      // Mask password for security
      if (s.key === 'SMTP_PASS') {
        config[s.key] = s.value ? '********' : '';
      } else {
        config[s.key] = s.value;
      }
    });

    return NextResponse.json(config);
  } catch (error) {
    return NextResponse.json({ message: 'Error fetching settings' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  if (!(await isAdmin())) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await req.json();
    const allowedKeys = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS'];

    for (const key of allowedKeys) {
      if (body[key] !== undefined) {
        // If password is masked, don't update it unless a new value is provided
        if (key === 'SMTP_PASS' && body[key] === '********') continue;

        // Use Raw SQL for upsert
        await prisma.$executeRaw`
          INSERT INTO SystemSetting (\`id\`, \`key\`, \`value\`, \`updatedAt\`) 
          VALUES (REPLACE(UUID(), '-', ''), ${key}, ${body[key]}, NOW())
          ON DUPLICATE KEY UPDATE \`value\` = ${body[key]}, \`updatedAt\` = NOW()
        `;
      }
    }

    return NextResponse.json({ message: 'Settings updated successfully' });
  } catch (error) {
    console.error('Error updating SMTP settings:', error);
    return NextResponse.json({ message: 'Error updating settings' }, { status: 500 });
  }
}
