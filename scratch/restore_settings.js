const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const settings = [
    { key: 'SMTP_HOST', value: 'smtp.hostinger.com' },
    { key: 'SMTP_PORT', value: '465' },
    { key: 'SMTP_USER', value: 'noreply@icover.ie' },
    { key: 'SMTP_PASS', value: 'Tani$8877!!' },
  ];

  for (const s of settings) {
    await prisma.$executeRaw`
      INSERT INTO SystemSetting (\`id\`, \`key\`, \`value\`, \`updatedAt\`) 
      VALUES (REPLACE(UUID(), '-', ''), ${s.key}, ${s.value}, NOW())
      ON DUPLICATE KEY UPDATE \`value\` = ${s.value}, \`updatedAt\` = NOW()
    `;
  }
  console.log('SMTP Settings restored to Database.');
}

main().catch(console.error).finally(() => prisma.$disconnect());
