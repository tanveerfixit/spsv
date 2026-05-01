import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const key = searchParams.get('key');

  if (!key) {
    const settings = await prisma.systemSetting.findMany();
    return NextResponse.json(settings);
  }

  try {
    const setting = await prisma.systemSetting.findUnique({
      where: { key },
    });

    return NextResponse.json(setting || { key, value: '' });
  } catch (error) {
    console.error('Settings API Error:', error);
    return NextResponse.json({ key, value: '' });
  }
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  
  // Check if admin
  if (!session || (session.user as any)?.role !== 'ADMIN') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  const { key, value } = body;

  if (!key) {
    return NextResponse.json({ error: 'Key is required' }, { status: 400 });
  }

  const setting = await prisma.systemSetting.upsert({
    where: { key },
    update: { value },
    create: { key, value },
  });

  return NextResponse.json(setting);
}
