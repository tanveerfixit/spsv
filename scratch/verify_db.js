const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('--- Verifying Database Integrity ---');
  
  // 1. Check User table
  const users = await prisma.$queryRaw`SELECT count(*) as count FROM User`;
  console.log('Users count:', Number(users[0].count));
  
  const admin = await prisma.$queryRaw`SELECT email, role FROM User WHERE role = 'ADMIN' LIMIT 1`;
  console.log('Admin User:', admin[0] || 'NOT FOUND');

  // 2. Check SystemSetting table
  const smtp = await prisma.$queryRaw`SELECT count(*) as count FROM SystemSetting`;
  console.log('SMTP Settings count:', Number(smtp[0].count));

  // 3. Check TestResult table
  const results = await prisma.$queryRaw`SELECT count(*) as count FROM TestResult`;
  console.log('Test Results count:', Number(results[0].count));

  console.log('--- Integrity Check Complete ---');
}

main().catch(console.error).finally(() => prisma.$disconnect());
