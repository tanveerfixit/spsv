const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const faqs = [
    {
      question: "How is the SPSV Driver Entry Test conducted?",
      answer: "The test is a computer-based examination held at official centers across Ireland. It consists of 90 multiple-choice questions where you select the correct answer from four options using a touch-screen or mouse. The exam is split into two distinct parts: the Industry Knowledge Module (54 questions) and the Area Knowledge Module (36 questions).",
      category: "SPSV Driver Entry Test",
      order: 1
    },
    {
      question: "What score do I need to pass the exam?",
      answer: "To be successful, you must achieve a minimum score of 75% in both modules. If you pass one module but fail the other, you are only required to repeat the specific module you failed, provided you do so within 12 months.",
      category: "SPSV Driver Entry Test",
      order: 2
    },
    {
      question: "Which manual chapters should I focus on most for the Industry Knowledge module?",
      answer: "While you should study the entire manual, the \"backbone\" of the test consists of SPSV Regulations (Chapters 1, 2, 4, and 5) and Customer Satisfaction & Disability Awareness (Chapter 8). These sections cover critical legal obligations, licensing rules, and equality laws.",
      category: "SPSV Driver Entry Test",
      order: 3
    },
    {
      question: "What is covered in the Area Knowledge module?",
      answer: "This module is a separate assessment focused on the specific county where you intend to operate. It contains 36 questions testing your knowledge of local hospitals, hotels, major street names, sports venues, and one-way traffic systems.",
      category: "SPSV Driver Entry Test",
      order: 4
    },
    {
      question: "Have there been any recent changes to the navigation requirements?",
      answer: "Yes. For candidates testing in 2025 and 2026, the focus of Chapter 6 has shifted. As of October 1, 2025, questions regarding traditional physical map reading have been replaced by the practical and safe use of digital navigation (GPS) technology.",
      category: "SPSV Driver Entry Test",
      order: 5
    },
    {
      question: "What safety topics are included in the test?",
      answer: "The exam includes questions on personal security, emergency procedures, and collision protocols (Chapter 10). You will also be tested on the safe handling and transport of heavy luggage and other items to ensure the safety of both the driver and the passengers.",
      category: "SPSV Driver Entry Test",
      order: 6
    }
  ];

  console.log('Inserting FAQs...');
  for (const faq of faqs) {
    await prisma.fAQ.create({ data: faq });
    console.log(`Added: ${faq.question}`);
  }
  console.log('All FAQs inserted successfully.');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
