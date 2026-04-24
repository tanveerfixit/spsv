import { Scale, Info, BookOpen, Car, AlertCircle, Shield } from 'lucide-react';

export const chapter2DriverLicensingQuestions = [
  {
    id: 1,
    category: "Regulations",
    icon: <Scale className="w-5 h-5" />,
    question: "Which organisation is the official licensing authority for SPSV drivers in Ireland?",
    options: [
      "The National Transport Authority (NTA)",
      "An Garda Síochána",
      "The Road Safety Authority (RSA)",
      "The Department of Transport"
    ],
    correct: 1,
    explanation: "An Garda Síochána is the national police service and the official SPSV driver licensing authority."
  },
  {
    id: 2,
    category: "Licensing",
    icon: <Info className="w-5 h-5" />,
    question: "Which form is used to apply for a new SPSV driver licence?",
    options: [
      "Form VL1",
      "Form PSV 15",
      "Form PSV 18",
      "Form S15N"
    ],
    correct: 1,
    explanation: "Applicants must go to their local Garda station and complete the PSV 15 application form."
  },
  {
    id: 3,
    category: "Regulations",
    icon: <Scale className="w-5 h-5" />,
    question: "Who is responsible for issuing SPSV driver identification (ID) cards once a licence is granted?",
    options: [
      "The local Garda station",
      "The Carriage Office",
      "The National Transport Authority (NTA)",
      "The National Driver Licence Service (NDLS)"
    ],
    correct: 2,
    explanation: "The NTA issues the driver ID cards once the licence has been granted by An Garda Síochána."
  },
  {
    id: 4,
    category: "Licensing",
    icon: <Info className="w-5 h-5" />,
    question: "What is the minimum driving licence class required to hold an SPSV driver licence?",
    options: [
      "Class A",
      "Class B or higher",
      "Class C1 only",
      "Class D"
    ],
    correct: 1,
    explanation: "Applicants must have an up-to-date and official driving licence for Class B or higher."
  },
  {
    id: 5,
    category: "Compliance",
    icon: <AlertCircle className="w-5 h-5" />,
    question: "Which group of applicants is exempt from passing the SPSV Driver Entry Test?",
    options: [
      "Taxi driver applicants",
      "Limousine driver applicants",
      "Local area hackney driver applicants",
      "Wheelchair accessible hackney applicants"
    ],
    correct: 2,
    explanation: "Applicants for local area hackney driver licences do not have to pass the SPSV Driver Entry Test."
  },
  {
    id: 6,
    category: "Industry Knowledge",
    icon: <BookOpen className="w-5 h-5" />,
    question: "Where must an applicant's name match exactly to pass the tax clearance check?",
    options: [
      "The name on their birth certificate",
      "The name on their passport",
      "The name with Revenue must match the one on the licence",
      "The name on their utility bills"
    ],
    correct: 2,
    explanation: "Proof of tax clearance must be given, and the name with Revenue must match the one on the licence."
  },
  {
    id: 7,
    category: "Licensing",
    icon: <Info className="w-5 h-5" />,
    question: "What is the fee for a new SPSV driver's licence application paid to the NTA?",
    options: [
      "€100",
      "€150",
      "€250",
      "€400"
    ],
    correct: 2,
    explanation: "The licence fee for a new SPSV Driver's Licence is €250."
  },
  {
    id: 8,
    category: "Compliance",
    icon: <AlertCircle className="w-5 h-5" />,
    question: "Are SPSV driver licence application fees refundable?",
    options: [
      "Yes, if the application is rejected",
      "No, there are no refunds for the licence fee",
      "Only if cancelled within 24 hours",
      "Only if the applicant fails the medical"
    ],
    correct: 1,
    explanation: "There are no refunds for the licence fee, so you should only pay it when you have passed the tests and meet all conditions."
  },
  {
    id: 9,
    category: "Industry Knowledge",
    icon: <BookOpen className="w-5 h-5" />,
    question: "Where can an applicant obtain their driver licence history?",
    options: [
      "From any Garda station",
      "From the NTA website",
      "From the National Driver Licence Service (NDLS)",
      "From their insurance company"
    ],
    correct: 2,
    explanation: "Driver licence history is available from the National Driver Licence Service (NDLS)."
  },
  {
    id: 10,
    category: "Licensing",
    icon: <Info className="w-5 h-5" />,
    question: "How many official photographs are required for a driver licence application?",
    options: [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    correct: 2,
    explanation: "Three official photographs meeting passport standards are required."
  },
  {
    id: 11,
    category: "Licensing",
    icon: <Info className="w-5 h-5" />,
    question: "What size should the driver licence application photographs be?",
    options: [
      "3.5 cm by 4.5 cm",
      "5 cm by 5 cm",
      "10 cm by 7 cm",
      "Postcard size"
    ],
    correct: 2,
    explanation: "The photographs should each measure approximately 10 cm by 7 cm."
  },
  {
    id: 12,
    category: "Operations",
    icon: <Car className="w-5 h-5" />,
    question: "What is the maximum number of hours a driver should agree not to exceed on any three consecutive days?",
    options: [
      "8 hours",
      "10 hours",
      "11 hours",
      "13 hours"
    ],
    correct: 2,
    explanation: "Applicants must sign a statement agreeing not to drive an SPSV for more than 11 hours on any three days one after the other."
  },
  {
    id: 13,
    category: "Regulations",
    icon: <Scale className="w-5 h-5" />,
    question: "If an applicant has another job involving driving, what must they provide proof of?",
    options: [
      "Their salary from that job",
      "Their shift schedule",
      "That they have told that employer of their plans to apply for an SPSV licence",
      "A recommendation letter from that employer"
    ],
    correct: 2,
    explanation: "If your other job involves driving, you must provide proof that you told that employer about your SPSV application."
  },
  {
    id: 14,
    category: "Operations",
    icon: <Car className="w-5 h-5" />,
    question: "Where must applicants living in Dublin submit their application?",
    options: [
      "Store Street Garda Station",
      "The Carriage Office",
      "The NTA Headquarters",
      "The NDLS Centre"
    ],
    correct: 1,
    explanation: "If you live in Dublin, you will submit your application to the Carriage Office."
  },
  {
    id: 15,
    category: "Regulations",
    icon: <Scale className="w-5 h-5" />,
    question: "How long can the SPSV driver licence application process typically take?",
    options: [
      "2 to 4 weeks",
      "Up to 6 weeks",
      "Up to 12 weeks",
      "6 months"
    ],
    correct: 2,
    explanation: "The application process can take up to 12 weeks to complete and includes a background check."
  },
  {
    id: 16,
    category: "Operations",
    icon: <Car className="w-5 h-5" />,
    question: "What is the typical pick-up radius allowed for a local area hackney?",
    options: [
      "1 to 2 km",
      "5 to 7 km",
      "10 to 15 km",
      "Anywhere in the county"
    ],
    correct: 1,
    explanation: "The pick-up area is usually within a radius of 5 to 7 km of an approved local area."
  },
  {
    id: 17,
    category: "Compliance",
    icon: <AlertCircle className="w-5 h-5" />,
    question: "Which of the following crimes can result in a lifetime disqualification from holding an SPSV licence?",
    options: [
      "Careless driving",
      "Failure to provide a specimen",
      "Murder or rape",
      "Exceeding 11 hours of work"
    ],
    correct: 2,
    explanation: "Crimes like murder, rape, and some sexual offences can result in a lifetime disqualification."
  },
  {
    id: 18,
    category: "Compliance",
    icon: <AlertCircle className="w-5 h-5" />,
    question: "After release from prison, for how long is a person generally disqualified from holding an SPSV licence?",
    options: [
      "12 months",
      "Two years",
      "Five years",
      "Ten years"
    ],
    correct: 2,
    explanation: "You are disqualified for up to five years after being released from prison."
  },
  {
    id: 19,
    category: "Regulations",
    icon: <Scale className="w-5 h-5" />,
    question: "To whom must a driver appeal a mandatory disqualification?",
    options: [
      "The NTA Board",
      "The Garda Commissioner",
      "The appropriate court",
      "The Minister for Transport"
    ],
    correct: 2,
    explanation: "If automatically disqualified, you can ask the appropriate court for permission to apply for a licence or get your current one back."
  },
  {
    id: 20,
    category: "Compliance",
    icon: <AlertCircle className="w-5 h-5" />,
    question: "Who must a driver notify immediately of any relevant conviction?",
    options: [
      "Their dispatch operator",
      "The NTA only",
      "An Garda Síochána",
      "The Revenue Commissioners"
    ],
    correct: 2,
    explanation: "You must tell An Garda Síochána immediately of any relevant conviction or any crime related to your licence."
  },
  {
    id: 21,
    category: "Industry Knowledge",
    icon: <BookOpen className="w-5 h-5" />,
    question: "What is the document number for the paper SPSV driver licence?",
    options: [
      "VL1",
      "PSV 15",
      "PSV 17",
      "PSV 18"
    ],
    correct: 2,
    explanation: "The paper licence (PSV 17) is issued directly from the An Garda Síochána PSV Office."
  },
  {
    id: 22,
    category: "Operations",
    icon: <Car className="w-5 h-5" />,
    question: "Where must the driver display card be placed while working?",
    options: [
      "In the driver's wallet",
      "On the dashboard",
      "In the glovebox",
      "On the rear window"
    ],
    correct: 1,
    explanation: "The large driver display card must be clearly shown on the dashboard whenever you are working."
  },
  {
    id: 23,
    category: "Operations",
    icon: <Car className="w-5 h-5" />,
    question: "Which ID must a driver carry on their person at all times when operating?",
    options: [
      "The large display card",
      "The paper PSV 17 licence",
      "The small smart card",
      "A copy of the VRC"
    ],
    correct: 2,
    explanation: "The small smart card must always be kept with you while you are driving an SPSV."
  },
  {
    id: 24,
    category: "Safety",
    icon: <Shield className="w-5 h-5" />,
    question: "What colour are the county area stickers that must be displayed on a taxi roof sign?",
    options: [
      "Yellow",
      "Blue",
      "Silver",
      "Green"
    ],
    correct: 2,
    explanation: "Area stickers are silver and show a one or two-letter code for the county."
  },
  {
    id: 25,
    category: "Licensing",
    icon: <Info className="w-5 h-5" />,
    question: "What is the maximum validity period for a regular SPSV driver licence?",
    options: [
      "One year",
      "Three years",
      "Five years",
      "Ten years"
    ],
    correct: 2,
    explanation: "A regular SPSV driver licence can be valid for up to five years."
  },
  {
    id: 26,
    category: "Licensing",
    icon: <Info className="w-5 h-5" />,
    question: "How long is a local area hackney driver licence valid for?",
    options: [
      "One year",
      "Three years",
      "Five years",
      "Indefinitely"
    ],
    correct: 1,
    explanation: "A local area hackney driver licence can be valid for three years and cannot be renewed."
  },
  {
    id: 27,
    category: "Licensing",
    icon: <Info className="w-5 h-5" />,
    question: "How early can a driver apply to renew their regular SPSV driver licence?",
    options: [
      "One month before expiry",
      "Three months before expiry",
      "Six months before expiry",
      "Any time after the first year"
    ],
    correct: 1,
    explanation: "You can apply to renew your licence early, up to three months before it expires."
  },
  {
    id: 28,
    category: "Compliance",
    icon: <AlertCircle className="w-5 h-5" />,
    question: "What is the maximum time after expiry that a driver licence can be renewed?",
    options: [
      "30 days",
      "3 months",
      "12 months",
      "24 months"
    ],
    correct: 2,
    explanation: "Licences expired for more than 12 months cannot be renewed or reactivated; the driver must apply as a new applicant."
  },
  {
    id: 29,
    category: "Licensing",
    icon: <Info className="w-5 h-5" />,
    question: "What is the renewal fee if submitted before the licence expires?",
    options: [
      "€100",
      "€250",
      "€300",
      "€400"
    ],
    correct: 1,
    explanation: "The fee for renewal submitted before the licence expires is €250."
  },
  {
    id: 30,
    category: "Licensing",
    icon: <Info className="w-5 h-5" />,
    question: "What is the renewal fee if the application is submitted more than 30 days after expiry?",
    options: [
      "€250",
      "€300",
      "€400",
      "€500"
    ],
    correct: 2,
    explanation: "Renewal submitted more than 30 days but within 12 months after expiry costs €400."
  },
  {
    id: 31,
    category: "Regulations",
    icon: <Scale className="w-5 h-5" />,
    question: "Which form is used for the renewal of an SPSV driver licence?",
    options: [
      "PSV 15",
      "PSV 17",
      "PSV 18",
      "VL1"
    ],
    correct: 2,
    explanation: "Drivers must collect and complete a PSV 18 renewal form at their local Garda station."
  },
  {
    id: 32,
    category: "Licensing",
    icon: <Info className="w-5 h-5" />,
    question: "A licence that has been expired for over 12 months is in which 'state'?",
    options: [
      "Active",
      "Inactive",
      "Timed Out",
      "Revoked"
    ],
    correct: 2,
    explanation: "A licence expired for over 12 months is 'Timed Out' and cannot be replaced."
  },
  {
    id: 33,
    category: "Operations",
    icon: <Car className="w-5 h-5" />,
    question: "If a passenger refuses to pay a fare, what right does the driver have?",
    options: [
      "To seize the passenger's phone",
      "To lock the passenger in the vehicle",
      "To end the journey or the hire of the vehicle",
      "To drive the passenger to their own home"
    ],
    correct: 2,
    explanation: "The driver has the right to end the journey if the passenger fails or refuses to pay the fare."
  },
  {
    id: 34,
    category: "Compliance",
    icon: <AlertCircle className="w-5 h-5" />,
    question: "What is the maximum fine for driving an SPSV with an expired licence?",
    options: [
      "€500",
      "€1,500",
      "€5,000",
      "€10,000"
    ],
    correct: 2,
    explanation: "You could be fined up to €5,000 for driving without a valid SPSV licence."
  },
  {
    id: 35,
    category: "Licensing",
    icon: <Info className="w-5 h-5" />,
    question: "When renewing a licence, do you need to take the Entry Test again?",
    options: [
      "Yes, every time",
      "Only if you are over 65",
      "No, you are not required to pass the test for renewal",
      "Only if you have penalty points"
    ],
    correct: 2,
    explanation: "Renewal requirements are similar to new applications, except you do not need to pass the Entry Test."
  },
  {
    id: 36,
    category: "Compliance",
    icon: <AlertCircle className="w-5 h-5" />,
    question: "A driver licence is granted to a specific individual. Can it be used by anyone else?",
    options: [
      "Yes, by a family member",
      "Only if they are also a licensed SPSV driver",
      "No, it cannot be used by anyone else",
      "Only for short emergency trips"
    ],
    correct: 2,
    explanation: "A driver licence is given to a specified individual and cannot be used by anyone else."
  },
  {
    id: 37,
    category: "Safety",
    icon: <Shield className="w-5 h-5" />,
    question: "If a driver is licensed in more than one county, how many area stickers can they use?",
    options: [
      "Only one",
      "A maximum of two",
      "More than one sticker can be used",
      "Stickers are only for the primary county"
    ],
    correct: 2,
    explanation: "If you are licensed in more than one county, you can use more than one sticker."
  },
  {
    id: 38,
    category: "Industry Knowledge",
    icon: <BookOpen className="w-5 h-5" />,
    question: "Who must be informed if an identification card is lost?",
    options: [
      "The NTA only",
      "The An Garda Síochána PSV Office immediately",
      "The local council",
      "The vehicle owner"
    ],
    correct: 1,
    explanation: "If you lose either identification card, you must report the loss to the An Garda Síochána PSV Office immediately."
  },
  {
    id: 39,
    category: "Regulations",
    icon: <Scale className="w-5 h-5" />,
    question: "What must a nominee do within 9 months of a licence holder's death?",
    options: [
      "Sell the vehicle",
      "Surrender the licence",
      "Apply to take over the licence",
      "Pass the Driver Entry Test"
    ],
    correct: 2,
    explanation: "The nominee must apply to take over the licence within 9 months of the licence holder's death."
  },
  {
    id: 40,
    category: "Licensing",
    icon: <Info className="w-5 h-5" />,
    question: "Is tax clearance status checked by the NTA during the renewal process?",
    options: [
      "No, only for new applications",
      "Yes, it is checked and confirmed online",
      "Only if the driver is a sole trader",
      "Only once every five years"
    ],
    correct: 1,
    explanation: "Tax clearance status is checked and confirmed online by the NTA during the renewal process."
  }
];