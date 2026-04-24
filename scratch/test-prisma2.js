const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  try {
    const users = await prisma.user.findMany({ take: 1 });
    console.log("SUCCESS");
  } catch(e) {
    console.error("ERROR:");
    console.error(e);
  } finally {
    await prisma.$disconnect();
  }
}
main();
