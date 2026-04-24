import { Scale, Info, BookOpen, Car, AlertCircle, Shield } from 'lucide-react';

export const maximumSpsvQuestions = [
  {
    id: 1,
    category: "Industry Knowledge",
    icon: <BookOpen className="w-5 h-5" />,
    question: "For seatbelt usage, what is the definition of 'adult size' in an SPSV?",
    options: [
      "Over 130 centimetres and weighing 30 kilograms",
      "Over 150 centimetres and weighing 36 kilograms",
      "Anyone over the age of 12",
      "Anyone over 160 centimetres"
    ],
    correct: 1,
    explanation: "'Adult size' refers to individuals over 150 centimetres and weighing 36 kilograms or more."
  },
  {
    id: 2,
    category: "Industry Knowledge",
    icon: <Info className="w-5 h-5" />,
    question: "What does the abbreviation CCSN stand for?",
    options: [
      "Certified Car Safety Number",
      "Confidential Customer Service Number",
      "Commercial County Support Network",
      "Central Council for SPSV Notifications"
    ],
    correct: 1,
    explanation: "CCSN is your confidential customer service number included on all correspondence regarding your SPSV licence."
  },
  {
    id: 3,
    category: "Industry Knowledge",
    icon: <BookOpen className="w-5 h-5" />,
    question: "What is an SPSV dispatch operator?",
    options: [
      "A person who drives a taxi for a company",
      "An individual or organisation providing a booking service for journeys delivered by someone else",
      "A mechanic who repairs taximeters",
      "An NTA official who manages taxi ranks"
    ],
    correct: 1,
    explanation: "A dispatch operator provides a booking service or facility for passengers to arrange SPSV journeys."
  },
  {
    id: 4,
    category: "Industry Knowledge",
    icon: <Scale className="w-5 h-5" />,
    question: "What is the difference between a driver display card and a driver smart card?",
    options: [
      "The smart card is for taxis, the display card is for hackneys",
      "The display card is shown in the vehicle; the smart card is carried by the driver",
      "They are the same thing",
      "One is paper and the other is plastic"
    ],
    correct: 1,
    explanation: "The driver display card must be displayed in the vehicle, while the driver smart card must always be carried by the driver while operating."
  },
  {
    id: 5,
    category: "Compliance",
    icon: <AlertCircle className="w-5 h-5" />,
    question: "What is a 'fixed payment offence' commonly referred to as in the industry?",
    options: [
      "A court summons",
      "A parking ticket",
      "An 'on-the-spot fine'",
      "A licence suspension"
    ],
    correct: 2,
    explanation: "Fixed payment offences allow the NTA to charge fines, commonly referred to as 'on-the-spot fines'."
  },
  {
    id: 6,
    category: "Industry Knowledge",
    icon: <BookOpen className="w-5 h-5" />,
    question: "What does the 'initial charge' on a taximeter cover at the start of a journey?",
    options: [
      "The first 2 kilometres or 5 minutes",
      "The first 500 metres or 85 seconds",
      "Only the first 100 metres",
      "There is no distance covered by the initial charge"
    ],
    correct: 1,
    explanation: "The initial charge covers the first 500 metres of a journey or a period of 85 seconds."
  },
  {
    id: 7,
    category: "Industry Knowledge",
    icon: <Info className="w-5 h-5" />,
    question: "What is the purpose of the 'In-Vehicle Information Card'?",
    options: [
      "To show the driver's home address",
      "To provide fare information, taximeter instructions, and extra charges to passengers",
      "To display the vehicle's NCT history",
      "To list the driver's previous employers"
    ],
    correct: 1,
    explanation: "This card provides passengers with fare information and details on how to read the taximeter."
  },
  {
    id: 8,
    category: "Industry Knowledge",
    icon: <BookOpen className="w-5 h-5" />,
    question: "When is a taxi considered to be 'plying for hire'?",
    options: [
      "When it is pre-booked via an app",
      "When it is stationary at a rank",
      "When it is available for hire in a public area, allowing passengers to hail it or enter at a rank",
      "When it is driving to a funeral"
    ],
    correct: 2,
    explanation: "Plying for hire means the taxi is available for hire in a public area, whether in motion or at a rank."
  },
  {
    id: 9,
    category: "Industry Knowledge",
    icon: <BookOpen className="w-5 h-5" />,
    question: "How is a 'sole trader' defined in the SPSV industry?",
    options: [
      "A person who only drives one type of car",
      "An individual who operates a business on their own without partners or a separate legal entity",
      "A company with at least five shareholders",
      "A driver who does not use a dispatch operator"
    ],
    correct: 1,
    explanation: "A sole trader is an individual personally responsible for all areas of their business, including profits and liabilities."
  },
  {
    id: 10,
    category: "Industry Knowledge",
    icon: <Car className="w-5 h-5" />,
    question: "SPSV stands for Small Public Service Vehicle. How many categories are included under this term?",
    options: [
      "Three",
      "Four",
      "Six",
      "Eight"
    ],
    correct: 2,
    explanation: "There are six categories: taxis, wheelchair accessible taxis, hackneys, wheelchair accessible hackneys, local area hackneys, and limousines."
  },
  {
    id: 11,
    category: "Industry Knowledge",
    icon: <BookOpen className="w-5 h-5" />,
    question: "What is 'Tariff A' in relation to taxi fares?",
    options: [
      "The premium rate for night driving",
      "The standard fare charge that applies for the next 14.5 km or 42 minutes after the initial charge",
      "A special discount for wheelchair users",
      "The fee for booking a taxi via a phone"
    ],
    correct: 1,
    explanation: "Tariff A is the standard fare following the initial charge, covering up to 14.5 km or 42 minutes."
  },
  {
    id: 12,
    category: "Industry Knowledge",
    icon: <BookOpen className="w-5 h-5" />,
    question: "What does 'standing for hire' mean?",
    options: [
      "A driver standing outside their car",
      "A taxi that is stationary and available for hire in a public area",
      "A limousine waiting for a wedding party",
      "A vehicle parked in a private driveway"
    ],
    correct: 1,
    explanation: "Standing for hire occurs when a taxi is stationary and available for hire in a public area."
  },
  {
    id: 13,
    category: "Licensing",
    icon: <Scale className="w-5 h-5" />,
    question: "Which immigration status forbids a person from holding an SPSV vehicle licence?",
    options: [
      "Stamp 4",
      "EU Citizenship",
      "Immigration Stamp 2 (student visa)",
      "Stamp 1"
    ],
    correct: 2,
    explanation: "Holders of an Immigration Stamp 2 (student visa) are not permitted to hold an SPSV vehicle licence or engage in self-employment."
  },
  {
    id: 14,
    category: "Licensing",
    icon: <Info className="w-5 h-5" />,
    question: "How long is a Conditional Offer letter valid for during the application process?",
    options: [
      "30 days",
      "60 days",
      "90 days",
      "One year"
    ],
    correct: 2,
    explanation: "The Conditional Offer letter is valid for 90 days, during which you must finish the licensing steps."
  },
  {
    id: 15,
    category: "Safety",
    icon: <Shield className="w-5 h-5" />,
    question: "What is the requirement for a fire extinguisher in an SPSV?",
    options: [
      "1 Kg of water",
      "2 Kg of dry powder or equivalent, meeting EN3 standards",
      "Any fire extinguisher as long as it is red",
      "Fire extinguishers are only required for limousines"
    ],
    correct: 1,
    explanation: "All SPSVs must carry a fire extinguisher with at least 2 Kg of dry powder or equivalent meeting EN3 standards."
  },
  {
    id: 16,
    category: "Safety",
    icon: <Shield className="w-5 h-5" />,
    question: "Which standard must the high-visibility reflective safety vest meet?",
    options: [
      "DIN13164",
      "EN3",
      "EN471",
      "ECE Regulation 27"
    ],
    correct: 2,
    explanation: "The high-visibility reflective safety vest must meet the EN471 standard."
  },
  {
    id: 17,
    category: "Licensing",
    icon: <Info className="w-5 h-5" />,
    question: "Can you link more than one vehicle to a single SPSV licence?",
    options: [
      "Yes, if they are both owned by the same person",
      "No, only one vehicle can be associated with a licence at any time",
      "Only for wheelchair accessible categories",
      "Yes, up to a maximum of two vehicles"
    ],
    correct: 1,
    explanation: "The regulations specify that only one vehicle can be associated with a licence at any time."
  },
  {
    id: 18,
    category: "Operations",
    icon: <Car className="w-5 h-5" />,
    question: "What are the rules regarding a taxi's roof sign light?",
    options: [
      "It must be on at all times while driving",
      "It must be on when available for hire and off when hired",
      "It should only be turned on at night",
      "It must flash when the driver is on a break"
    ],
    correct: 1,
    explanation: "The light must be on when the taxi is available for hire and off when the taxi is hired."
  },
  {
    id: 19,
    category: "Compliance",
    icon: <AlertCircle className="w-5 h-5" />,
    question: "What is the fixed payment fine for not displaying the required driver ID?",
    options: [
      "€80",
      "€100",
      "€150",
      "€200"
    ],
    correct: 3,
    explanation: "Not displaying the required driver ID carries a fixed payment fine of €200."
  },
  {
    id: 20,
    category: "Compliance",
    icon: <AlertCircle className="w-5 h-5" />,
    question: "What is the fixed payment fine for refusing to carry a wheelchair user?",
    options: [
      "€150",
      "€200",
      "€250",
      "€500"
    ],
    correct: 2,
    explanation: "Refusing to carry a wheelchair user is a serious offence with a fixed payment fine of €250."
  },
  {
    id: 21,
    category: "Industry Knowledge",
    icon: <Info className="w-5 h-5" />,
    question: "What does 'calibration' ensure in the context of SPSV instruments?",
    options: [
      "That the vehicle is clean",
      "Measurement accuracy by comparing readings against known standards",
      "That the driver is medically fit",
      "That the insurance policy is active"
    ],
    correct: 1,
    explanation: "Calibration ensures measurement accuracy by comparing an instrument’s readings directly against known standards."
  },
  {
    id: 22,
    category: "Industry Knowledge",
    icon: <BookOpen className="w-5 h-5" />,
    question: "A Private Limited Company (PLC) is legally separate from its owners. What happens to its owners' liability?",
    options: [
      "They are fully responsible for all debts",
      "They are not personally responsible for the company’s debts",
      "They must pay the company's taxes from personal accounts",
      "They lose their driving licence if the company fails"
    ],
    correct: 1,
    explanation: "In a Private Limited Company, owners are not personally responsible for the company’s debts."
  },
  {
    id: 23,
    category: "Safety",
    icon: <Shield className="w-5 h-5" />,
    question: "What standard must an SPSV first-aid kit meet?",
    options: [
      "EN3",
      "EN471",
      "DIN13164",
      "ECE Regulation 27"
    ],
    correct: 2,
    explanation: "The first-aid kit must meet the DIN13164 standard or be recommended by the Health & Safety Authority."
  },
  {
    id: 24,
    category: "Safety",
    icon: <Info className="w-5 h-5" />,
    question: "Why must a driver carry a pen and paper in their SPSV?",
    options: [
      "To record the passenger's home address",
      "To communicate with passengers who may have difficulty understanding or speaking",
      "To write down the names of other drivers",
      "To sign for fuel at petrol stations"
    ],
    correct: 1,
    explanation: "A pen and paper are required for communicating with passengers who have difficulty understanding or speaking."
  },
  {
    id: 25,
    category: "Licensing",
    icon: <Scale className="w-5 h-5" />,
    question: "What is the maximum time a vehicle licence can be expired before it can no longer be replaced?",
    options: [
      "6 months",
      "12 months",
      "24 months",
      "5 years"
    ],
    correct: 2,
    explanation: "Vehicle licences that are expired for more than 24 months cannot be replaced."
  },
  {
    id: 26,
    category: "Operations",
    icon: <Car className="w-5 h-5" />,
    question: "Under what condition may a taxi roof sign be placed length-ways?",
    options: [
      "Only when the taxi is off-duty",
      "For journeys likely to exceed 30 kilometres, with passenger agreement",
      "When the taxi is parked at a rank",
      "Only for local area hackneys"
    ],
    correct: 1,
    explanation: "To conserve fuel, the roof sign may be placed length-ways for journeys likely to exceed 30 kilometres."
  },
  {
    id: 27,
    category: "Licensing",
    icon: <Info className="w-5 h-5" />,
    question: "Within how many months of a holder's death must a nominee apply to take over the licence?",
    options: [
      "3 months",
      "6 months",
      "9 months",
      "12 months"
    ],
    correct: 2,
    explanation: "The nominee must apply to take over the licence within 9 months of the licence holder’s death."
  },
  {
    id: 28,
    category: "Compliance",
    icon: <AlertCircle className="w-5 h-5" />,
    question: "Who is responsible for ensuring the vehicle follows rules, even if they do not own it?",
    options: [
      "The vehicle owner only",
      "The NTA",
      "The driver",
      "The insurance company"
    ],
    correct: 2,
    explanation: "It is the driver’s responsibility to make sure the vehicle they are driving follows the rules."
  },
  {
    id: 29,
    category: "Operations",
    icon: <Car className="w-5 h-5" />,
    question: "What colour is the tamper-proof licence disc for hackneys?",
    options: [
      "Yellow",
      "Blue",
      "Silver",
      "Green"
    ],
    correct: 1,
    explanation: "Hackneys, wheelchair accessible hackneys, and local area hackneys use blue tamper-proof discs."
  },
  {
    id: 30,
    category: "Operations",
    icon: <Car className="w-5 h-5" />,
    question: "Taxis are allowed to use which type of bus lanes while operating?",
    options: [
      "Contra-flow bus lanes",
      "With-flow bus lanes (flowing with regular traffic)",
      "All bus lanes at all times",
      "Only bus lanes in Dublin"
    ],
    correct: 1,
    explanation: "Taxis can use normal with-flow bus lanes while operating as an SPSV."
  },
  {
    id: 31,
    category: "Compliance",
    icon: <AlertCircle className="w-5 h-5" />,
    question: "What is the fixed payment fine for refusing to carry a guide dog or assistance dog?",
    options: [
      "€150",
      "€200",
      "€250",
      "€500"
    ],
    correct: 2,
    explanation: "Refusing to carry a guide dog or assistance dog carries a €250 fine."
  },
  {
    id: 32,
    category: "Industry Knowledge",
    icon: <BookOpen className="w-5 h-5" />,
    question: "What does 'maximum age' refer to in the SPSV industry?",
    options: [
      "The age of the driver",
      "A vehicle age limit set to ensure safety and environmental standards",
      "The maximum age of a passenger allowed in the front seat",
      "The age of the dispatch company"
    ],
    correct: 1,
    explanation: "Maximum age refers to a vehicle age limit set to ensure safety and environmental standards are met."
  },
  {
    id: 33,
    category: "Industry Knowledge",
    icon: <BookOpen className="w-5 h-5" />,
    question: "What is a 'modified vehicle'?",
    options: [
      "A vehicle with a new engine",
      "Any vehicle changed or adapted for a specific use (e.g., wheelchair accessibility)",
      "A car with a custom paint job",
      "A vehicle with a broken taximeter"
    ],
    correct: 1,
    explanation: "A modified vehicle is any vehicle that has been changed or adapted for a specific use."
  },
  {
    id: 34,
    category: "Licensing",
    icon: <Scale className="w-5 h-5" />,
    question: "What happens to an SPSV licence when it is surrendered?",
    options: [
      "It is suspended for 12 months",
      "It is permanently cancelled and cannot be used again",
      "It is transferred to the NTA",
      "It can be reactivated for a fee"
    ],
    correct: 1,
    explanation: "When you surrender a vehicle licence, it is permanently cancelled and cannot be used again."
  },
  {
    id: 35,
    category: "Operations",
    icon: <Info className="w-5 h-5" />,
    question: "What must a taxi driver do if their cashless payment terminal is broken?",
    options: [
      "Accept cash only for the rest of the day",
      "Withdraw from service",
      "Ask passengers to pay via bank transfer",
      "Report it to the Gardaí"
    ],
    correct: 1,
    explanation: "If the payment terminal is broken or the battery needs to be charged, you must withdraw from service."
  },
  {
    id: 36,
    category: "Operations",
    icon: <Info className="w-5 h-5" />,
    question: "How many days must an NCT certificate be issued prior to an Initial Suitability Inspection?",
    options: [
      "Within 30 days",
      "Within 60 days",
      "Within 90 days",
      "Within 180 days"
    ],
    correct: 2,
    explanation: "The NCT certificate must be issued no more than 90 days before your Initial Suitability Inspection."
  },
  {
    id: 37,
    category: "Compliance",
    icon: <AlertCircle className="w-5 h-5" />,
    question: "What is the penalty for using a vehicle as an SPSV without a valid licence?",
    options: [
      "A €500 fine",
      "A maximum fine of €5,000",
      "A 3-point penalty on your driving licence",
      "Automatic vehicle seizure"
    ],
    correct: 1,
    explanation: "Using a vehicle as an SPSV without a valid licence is an offence punishable by a fine of up to €5,000."
  },
  {
    id: 38,
    category: "Compliance",
    icon: <AlertCircle className="w-5 h-5" />,
    question: "Within how many days must a fixed payment fine be paid to avoid a 50% increase?",
    options: [
      "14 days",
      "21 days",
      "28 days",
      "56 days"
    ],
    correct: 2,
    explanation: "You must pay the amount in the fine notice within 28 days to avoid a 50% increase."
  },
  {
    id: 39,
    category: "Industry Knowledge",
    icon: <BookOpen className="w-5 h-5" />,
    question: "What information is shown on the 'Tariff B' charge?",
    options: [
      "The fee for the first 500 metres",
      "The fare charge that applies after the distance of 14.5 km or 42 minutes",
      "The rate for carrying pets",
      "The surcharge for airport pickups"
    ],
    correct: 1,
    explanation: "Tariff B covers the distance after the first 14.5 km or 42 minutes of the journey."
  },
  {
    id: 40,
    category: "Industry Knowledge",
    icon: <Info className="w-5 h-5" />,
    question: "What is the purpose of a 'two-way radio' in a taxi?",
    options: [
      "To listen to music",
      "To allow real-time voice communication between the driver and operator",
      "To track the vehicle's speed",
      "To communicate with other drivers on the road"
    ],
    correct: 1,
    explanation: "A two-way radio allows real-time, two-sided voice communication between the driver and operator."
  },
  {
    id: 41,
    category: "Operations",
    icon: <Info className="w-5 h-5" />,
    question: "Are surcharges allowed for cashless payments in taxis?",
    options: [
      "Yes, up to 3%",
      "No surcharge or extra fee can be applied",
      "Only for journeys over €50",
      "Only for credit cards"
    ],
    correct: 1,
    explanation: "The regulations state that no surcharge or extra fee can be applied to cashless payments."
  },
  {
    id: 42,
    category: "Operations",
    icon: <Car className="w-5 h-5" />,
    question: "Where should the accessibility symbol be displayed on a wheelchair accessible hackney?",
    options: [
      "On the roof",
      "On the front bumper",
      "On a passenger door",
      "In the rear window"
    ],
    correct: 2,
    explanation: "Wheelchair accessible hackneys must have the accessibility symbol displayed on a passenger door."
  },
  {
    id: 43,
    category: "Licensing",
    icon: <Scale className="w-5 h-5" />,
    question: "What is the standard validity period for a vehicle licence if the vehicle is under 10 years old?",
    options: [
      "6 months",
      "12 months",
      "24 months",
      "36 months"
    ],
    correct: 1,
    explanation: "A vehicle licence is usually valid for 12 months unless the vehicle is over 10 years old."
  },
  {
    id: 44,
    category: "Licensing",
    icon: <Scale className="w-5 h-5" />,
    question: "If a vehicle is over 10 years old, how long is the licence valid for?",
    options: [
      "3 months",
      "6 months",
      "12 months",
      "It cannot be renewed"
    ],
    correct: 1,
    explanation: "If a vehicle is more than 10 years old, the licence will be valid for only six months at a time."
  },
  {
    id: 45,
    category: "Compliance",
    icon: <AlertCircle className="w-5 h-5" />,
    question: "What is the fixed payment fine for taking off or trying to take off a tamper-proof licence disc?",
    options: [
      "€80",
      "€100",
      "€150",
      "€200"
    ],
    correct: 2,
    explanation: "Taking off or attempting to remove a tamper-proof licence disc carries a €150 fine."
  },
  {
    id: 46,
    category: "Licensing",
    icon: <Info className="w-5 h-5" />,
    question: "How early can a licence holder apply to renew their vehicle licence?",
    options: [
      "30 days before expiry",
      "60 days before expiry",
      "90 days before expiry",
      "Any time"
    ],
    correct: 1,
    explanation: "You can renew your licence up to 60 days before it expires."
  },
  {
    id: 47,
    category: "Operations",
    icon: <Car className="w-5 h-5" />,
    question: "When should an SPSV driver turn off their engine while waiting to save fuel?",
    options: [
      "After 30 seconds",
      "If waiting for more than three minutes",
      "Only when the passenger gets out",
      "Never turn off the engine during a shift"
    ],
    correct: 1,
    explanation: "Sustainability tips recommend turning off the engine if waiting in line for more than three minutes."
  },
  {
    id: 48,
    category: "Compliance",
    icon: <AlertCircle className="w-5 h-5" />,
    question: "What is the fixed payment fine for not carrying a cashless payment device?",
    options: [
      "€100",
      "€150",
      "€200",
      "€250"
    ],
    correct: 2,
    explanation: "Not carrying a cashless payment device results in a €200 fine."
  },
  {
    id: 49,
    category: "Compliance",
    icon: <Scale className="w-5 h-5" />,
    question: "Who must an SPSV driver notify in addition to the NTA when they change their address?",
    options: [
      "The Department of Transport",
      "An Garda Síochána",
      "Their local council",
      "Revenue"
    ],
    correct: 1,
    explanation: "SPSV drivers must notify both the NTA and An Garda Síochána when they change their address."
  },
  {
    id: 50,
    category: "Industry Knowledge",
    icon: <BookOpen className="w-5 h-5" />,
    question: "What does a GPS system help SPSV drivers to do?",
    options: [
      "Calculate the fare automatically",
      "Know where they are and navigate quickly from one place to another",
      "Check the vehicle's oil level",
      "Communicate with the NTA"
    ],
    correct: 1,
    explanation: "GPS lets us know where we are and helps drivers quickly determine their location and navigate."
  }
];