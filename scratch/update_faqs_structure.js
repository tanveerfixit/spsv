const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const faqs = [
    {
      question: "How is the SPSV Driver Entry Test conducted?",
      answer: "The SPSV Driver Entry Test is a computer-based examination held at official test centers across Ireland.\n\n**Format:** It consists of 90 multiple-choice questions.\n**Method:** Candidates use a mouse or touch-screen to select the correct answer from four options.\n**Structure:** The test is split into two distinct modules:\n- **Module 1:** Industry Knowledge (54 questions).\n- **Module 2:** Area Knowledge (36 questions).\n\n**Pass Mark:** You must achieve at least **75% in both modules** to pass. If you fail one but pass the other, you only need to repeat the failed module (provided you do so within 12 months).",
      category: "SPSV Driver Entry Test",
      order: 1
    },
    {
      question: "What types of questions are asked in each chapter?",
      answer: "The Industry Knowledge Module is based entirely on the contents of the Official Manual. Questions are drawn from the following key areas:\n\n- **Regulations (Chapters 1, 2, 4, 5 & 10):** Licensing rules for drivers and vehicles, use of taxi ranks, and fixed payment offences.\n- **Fares & Charges (Chapter 7):** Calculating taxi fares, using the taximeter, and cashless payment requirements.\n- **Customer Service (Chapter 8):** Assisting passengers with disabilities, equality laws, and handling complaints.\n- **Navigation (Chapter 6):** Effective and safe use of GPS technology (replaces traditional map reading from Oct 2025).\n- **Safety (Chapter 10):** Personal security, what to do in a collision, and transporting heavy luggage.\n- **Business (Chapter 9):** Business plans, choosing a business model, and promoting your service.",
      category: "SPSV Driver Entry Test",
      order: 2
    },
    {
      question: "Which chapters have the maximum questions?",
      answer: "While the NTA does not publish the exact weight for every individual chapter, the Industry Knowledge Module (54 questions) heavily emphasizes these areas:\n\n- **SPSV Regulations (Chapters 1, 2, 4, 5):** These form the 'backbone' of the test, covering the legal framework you must operate within.\n- **Customer Satisfaction & Disability Awareness (Chapter 8):** Historically a high-volume area covering critical legal obligations regarding diversity and limited mobility.\n- **Area Knowledge (Separate Module):** Contains 36 questions specifically about your chosen county, focusing on hospitals, hotels, sports venues, and local navigation.\n\n**Note for 2025/2026 Candidates:** Starting October 1, 2025, Chapter 6 questions have shifted from physical map reading toward the practical and safe use of digital navigation (GPS).",
      category: "SPSV Driver Entry Test",
      order: 3
    }
  ];

  console.log('Updating/Inserting Structured FAQs...');
  for (const faq of faqs) {
    // Upsert by question to update existing or create new
    await prisma.fAQ.upsert({
      where: { id: (await prisma.fAQ.findFirst({ where: { question: faq.question } }))?.id || 'temp-id' },
      update: {
        answer: faq.answer,
        category: faq.category,
        order: faq.order
      },
      create: faq
    });
    console.log(`Synced: ${faq.question}`);
  }
  console.log('Structured FAQs synced successfully.');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
