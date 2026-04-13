const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  try {
    console.log('Attempting to connect to database...');
    const users = await prisma.user.findMany({ take: 1 });
    console.log('Connection successful! Found', users.length, 'users.');
  } catch (error) {
    console.error('Connection failed:');
    console.error(error.message);
  } finally {
    await prisma.$disconnect();
  }
}

main();
