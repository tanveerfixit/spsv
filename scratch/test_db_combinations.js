const { PrismaClient } = require('@prisma/client');

async function testConnection(url, label) {
  const prisma = new PrismaClient({
    datasources: {
      db: {
        url: url,
      },
    },
  });
  
  try {
    console.log(`Testing ${label}: ${url.replace(/:[^:@]+@/, ':****@')}`);
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
  const pass = 'Tani%408877%21%21';
  const host = '77.37.35.183';
  
  const combinations = [
    { user: 'u583652021_userspsv', db: 'u583652021_spsv', label: 'Original' },
    { user: 'u583652021_spsv', db: 'u583652021_spsv', label: 'User=DB' },
    { user: 'u583652021_spsv', db: 'u583652021_userspsv', label: 'Swapped' },
  ];

  for (const combo of combinations) {
    const url = `mysql://${combo.user}:${pass}@${host}:3306/${combo.db}`;
    const ok = await testConnection(url, combo.label);
    if (ok) break;
  }
}

main();
