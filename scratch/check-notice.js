const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
prisma.systemSetting.findUnique({ where: { key: 'NOTICE_TEXT'} })
  .then(console.log)
  .catch(console.error)
  .finally(() => prisma.$disconnect());
