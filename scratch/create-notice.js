const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
prisma.systemSetting.create({
  data: {
    key: 'NOTICE_TEXT',
    value: 'New Mock Exams available! Enroll today to secure your spot for the SPSV test preparation.' 
  }
}).then(() => console.log('CREATED'))
  .catch((e) => console.log(e))
  .finally(() => prisma.$disconnect());
