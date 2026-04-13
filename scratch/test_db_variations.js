const { PrismaClient } = require('@prisma/client');

async function testConnection(url) {
  const prisma = new PrismaClient({
    datasources: {
      db: {
        url: url,
      },
    },
  });
  
  try {
    console.log(`Testing: ${url.replace(/:[^:@]+@/, ':****@')}`);
    await prisma.user.findMany({ take: 1 });
    console.log('SUCCESS!');
    return true;
  } catch (error) {
    console.log(`FAILED: ${error.message.split('\n')[0]}`);
    return false;
  } finally {
    await prisma.$disconnect();
  }
}

async function main() {
  const base = 'u583652021_userspsv';
  const db = 'u583652021_spsv';
  const host = '77.37.35.183';
  
  const passwords = [
    'Tani%408877%21%21', // Both encoded
    'Tani%408877!!',     // Only @ encoded
  ];

  for (const pass of passwords) {
    const url = `mysql://${base}:${pass}@${host}:3306/${db}`;
    const ok = await testConnection(url);
    if (ok) break;
  }
}

main();
