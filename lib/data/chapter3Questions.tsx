import { Scale, Info, BookOpen, Car, AlertCircle, Shield } from 'lucide-react';

export const chapter3VehicleQuestions = [
  {
    id: 1,
    category: "Vehicle Standards",
    icon: <Car className="w-5 h-5" />,
    question: "What are the two types of standards that all SPSVs must meet?",
    options: [
      "Roadworthiness and Commercial standards",
      "Roadworthiness and SPSV Specific Suitability standards",
      "Driver health and Vehicle age standards",
      "Insurance and Revenue standards"
    ],
    correct: 1,
    explanation: "There are two types of standards: Roadworthiness (safety/maintenance) and SPSV Specific Suitability (properties, age, comfort, size)."
  },
  {
    id: 2,
    category: "Regulations",
    icon: <Scale className="w-5 h-5" />,
    question: "Which authority sets the criteria used to assess the roadworthiness of road vehicles in Ireland?",
    options: [
      "National Transport Authority (NTA)",
      "Road Safety Authority (RSA)",
      "An Garda Síochána",
      "National Car Testing Services (NCTS)"
    ],
    correct: 1,
    explanation: "The Road Safety Authority (RSA) sets the criteria used to assess roadworthiness."
  },
  {
    id: 3,
    category: "Vehicle Standards",
    icon: <Car className="w-5 h-5" />,
    question: "How many days prior to being licensed must an SPSV pass the National Car Test (NCT)?",
    options: [
      "30 days",
      "60 days",
      "90 days",
      "180 days"
    ],
    correct: 2,
    explanation: "An SPSV must pass the NCT roadworthiness test within 90 days prior to being licensed."
  },
  {
    id: 4,
    category: "Vehicle Standards",
    icon: <Car className="w-5 h-5" />,
    question: "Under what conditions is a vehicle exempt from the NCT roadworthiness test requirement for licensing?",
    options: [
      "If it is less than six months old",
      "If it is less than three months old and has travelled less than 3,000 kilometres",
      "If it is a vintage limousine over 30 years old",
      "No vehicle is ever exempt"
    ],
    correct: 1,
    explanation: "An NCT is not required for a vehicle that is less than three months old and has travelled less than 3,000 kilometres."
  },
  {
    id: 5,
    category: "Regulations",
    icon: <Scale className="w-5 h-5" />,
    question: "Which manual provides the clear and detailed set of rules for vehicle suitability created by the NTA?",
    options: [
      "The Driver Licensing Manual",
      "The Initial Suitability Inspection Manual",
      "The RSA Roadworthiness Guide",
      "The Revenue Tax Clearance Handbook"
    ],
    correct: 1,
    explanation: "The rules for safety and comfort are explained in the NTA’s Initial Suitability Inspection Manual."
  },
  {
    id: 6,
    category: "Industry Knowledge",
    icon: <BookOpen className="w-5 h-5" />,
    question: "What is the maximum number of people an SPSV can be licensed to carry, not counting the driver?",
    options: [
      "Four people",
      "Six people",
      "Eight people",
      "Twelve people"
    ],
    correct: 2,
    explanation: "All SPSVs must be able to carry up to eight people, not counting the driver."
  },
  {
    id: 7,
    category: "Vehicle Standards",
    icon: <Car className="w-5 h-5" />,
    question: "What is the maximum weight allowed for an SPSV?",
    options: [
      "2,500 kg",
      "3,500 kg",
      "5,000 kg",
      "There is no weight limit"
    ],
    correct: 1,
    explanation: "All SPSVs must weigh no more than 3,500 kg."
  },
  {
    id: 8,
    category: "Vehicle Standards",
    icon: <Car className="w-5 h-5" />,
    question: "How many doors must a standard SPSV have?",
    options: [
      "Two doors",
      "Three doors",
      "Four doors",
      "Five doors"
    ],
    correct: 2,
    explanation: "All SPSVs must have four doors (except for some limousines)."
  },
  {
    id: 9,
    category: "Regulations",
    icon: <Scale className="w-5 h-5" />,
    question: "Which type of vehicle is specifically prohibited from being an SPSV?",
    options: [
      "Hybrid vehicles",
      "Electric vehicles",
      "A ‘crew-cab’ or ‘pick-up’ truck",
      "Vehicles with a sunroof"
    ],
    correct: 2,
    explanation: "SPSVs must be designed mainly for carrying passengers; 'crew-cabs' or 'pick-up' trucks are not allowed."
  },
  {
    id: 10,
    category: "Regulations",
    icon: <Scale className="w-5 h-5" />,
    question: "Where can you find the list of vehicles that meet the size requirements for taxis and hackneys?",
    options: [
      "The Garda PSV Office",
      "The Suitable Vehicle List on the NTA website",
      "The RSA technical database",
      "The Revenue VRT office"
    ],
    correct: 1,
    explanation: "NTA produced the Suitable Vehicle List to tell you if a vehicle meets size requirements."
  },
  {
    id: 11,
    category: "Vehicle Standards",
    icon: <Car className="w-5 h-5" />,
    question: "What is the minimum luggage capacity required for an SPSV?",
    options: [
      "300 litres",
      "420 litres",
      "500 litres",
      "600 litres"
    ],
    correct: 1,
    explanation: "The luggage area must have a minimum capacity of 420 litres."
  },
  {
    id: 12,
    category: "Safety",
    icon: <Shield className="w-5 h-5" />,
    question: "What must be included in the luggage area to prevent injury to passengers in an accident?",
    options: [
      "A first-aid kit",
      "A fire extinguisher",
      "A protector or cover",
      "A secondary lock"
    ],
    correct: 2,
    explanation: "The luggage area must have a protector or cover to stop luggage from causing injury during an accident."
  },
  {
    id: 13,
    category: "Vehicle Standards",
    icon: <Car className="w-5 h-5" />,
    question: "What dimension box must the boot be able to fit to accommodate a folded wheelchair?",
    options: [
      "500 mm x 200 mm x 600 mm",
      "735 mm x 330 mm x 805 mm",
      "900 mm x 500 mm x 1000 mm",
      "1200 mm x 800 mm x 400 mm"
    ],
    correct: 1,
    explanation: "The boot must fit a folded wheelchair with a minimum box dimension of 735 mm x 330 mm x 805 mm."
  },
  {
    id: 14,
    category: "Vehicle Standards",
    icon: <Car className="w-5 h-5" />,
    question: "What is the minimum visible light transmission required for the front windscreen?",
    options: [
      "50%",
      "60%",
      "70%",
      "80%"
    ],
    correct: 2,
    explanation: "The front windscreen must let in at least 70% of visible light."
  },
  {
    id: 15,
    category: "Vehicle Standards",
    icon: <Car className="w-5 h-5" />,
    question: "What is the maximum depth allowed for a darker band at the top of the windscreen?",
    options: [
      "100 mm",
      "125 mm",
      "150 mm",
      "200 mm"
    ],
    correct: 1,
    explanation: "A darker band at the top of the windscreen is allowed if it is not more than 125 mm in depth."
  },
  {
    id: 16,
    category: "Vehicle Standards",
    icon: <Car className="w-5 h-5" />,
    question: "Which windows in an SPSV must let in at least 70% visible light?",
    options: [
      "Only the front windscreen",
      "All windows in the vehicle",
      "The front windscreen and all passenger side windows",
      "Only the driver's side window"
    ],
    correct: 2,
    explanation: "Both the front windscreen and all passenger side windows must let in 70% light."
  },
  {
    id: 17,
    category: "Vehicle Standards",
    icon: <Car className="w-5 h-5" />,
    question: "What indicates that glass is too dark to pass the Initial Suitability Inspection?",
    options: [
      "A black sticker on the corner",
      "A Roman numeral V next to the European approval number",
      "A serial number starting with 'D'",
      "An 'X' marked on the glass"
    ],
    correct: 1,
    explanation: "If there is a Roman numeral V next to the European approval number, the glass is too dark."
  },
  {
    id: 18,
    category: "Vehicle Standards",
    icon: <Car className="w-5 h-5" />,
    question: "Are side-facing seats permitted in standard taxis?",
    options: [
      "Yes, if they have seatbelts",
      "Only if they are original manufacturer equipment",
      "No, side-facing seats are not permitted except in limousines",
      "Only for children"
    ],
    correct: 2,
    explanation: "Side-facing seats are not permitted in SPSVs, except in limousines."
  },
  {
    id: 19,
    category: "Vehicle Standards",
    icon: <Car className="w-5 h-5" />,
    question: "What temperature must the vehicle be able to maintain inside even if it is -5°C outside?",
    options: [
      "15° Celsius",
      "18° Celsius",
      "20° Celsius",
      "25° Celsius"
    ],
    correct: 2,
    explanation: "The vehicle must be able to stay at 20° Celsius inside even if it is -5°C outside."
  },
  {
    id: 20,
    category: "Safety",
    icon: <Shield className="w-5 h-5" />,
    question: "If a 'bull bar' is fitted to the front of a vehicle, which regulation must it comply with?",
    options: [
      "EC Regulation 78/2009/EC",
      "ISO 9001",
      "DIN 13164",
      "EN 471"
    ],
    correct: 0,
    explanation: "Any bull bar fitted must comply with EC Regulation 78/2009/EC."
  },
  {
    id: 21,
    category: "Industry Knowledge",
    icon: <BookOpen className="w-5 h-5" />,
    question: "Wheelchair accessible taxis must be able to carry how many people in a wheelchair?",
    options: [
      "At least one",
      "At least two",
      "Exactly three",
      "Up to four"
    ],
    correct: 0,
    explanation: "They must fit at least one person sitting in a wheelchair."
  },
  {
    id: 22,
    category: "Industry Knowledge",
    icon: <BookOpen className="w-5 h-5" />,
    question: "How many adult passengers must a wheelchair accessible taxi carry when no wheelchair is on board?",
    options: [
      "One adult",
      "Two adults",
      "Three adults",
      "Four adults"
    ],
    correct: 2,
    explanation: "The vehicle must be able to carry three adults when no wheelchair is on board."
  },
  {
    id: 23,
    category: "Regulations",
    icon: <Scale className="w-5 h-5" />,
    question: "Who must certify the standards of structural changes in wheelchair accessible vehicles?",
    options: [
      "The vehicle manufacturer",
      "An NTA Licensing Inspector",
      "A qualified Technical Assessor",
      "A local mechanic"
    ],
    correct: 2,
    explanation: "These standards must be formally certified by a qualified Technical Assessor."
  },
  {
    id: 24,
    category: "Regulations",
    icon: <Scale className="w-5 h-5" />,
    question: "Within how many days prior to inspection must a Technical Assessor’s Full Report be dated?",
    options: [
      "30 days",
      "60 days",
      "90 days",
      "180 days"
    ],
    correct: 1,
    explanation: "The report must be dated no more than 60 days before the Initial Suitability Inspection."
  },
  {
    id: 25,
    category: "Industry Knowledge",
    icon: <BookOpen className="w-5 h-5" />,
    question: "What is the minimum engineering qualification level required for a Technical Assessor?",
    options: [
      "Level 5",
      "Level 6",
      "Level 7",
      "Level 8"
    ],
    correct: 2,
    explanation: "They should hold an engineering qualification of Level 7 or higher on the NFQ."
  },
  {
    id: 26,
    category: "Industry Knowledge",
    icon: <BookOpen className="w-5 h-5" />,
    question: "How many years of technical experience should a Technical Assessor have?",
    options: [
      "One year",
      "Three years",
      "Five years",
      "Ten years"
    ],
    correct: 2,
    explanation: "They should have a minimum of five years’ experience working in a suitable technical environment."
  },
  {
    id: 27,
    category: "Vehicle Standards",
    icon: <Car className="w-5 h-5" />,
    question: "Which safety item in a wheelchair accessible vehicle requires EC approval markings ('e' or 'E')?",
    options: [
      "The first-aid kit",
      "Seatbelts",
      "The high-visibility vest",
      "The fire extinguisher"
    ],
    correct: 1,
    explanation: "Seatbelts require EC approval markings or labels."
  },
  {
    id: 28,
    category: "Vehicle Standards",
    icon: <Car className="w-5 h-5" />,
    question: "What is the minimum headroom required near the wheelchair occupant during turning?",
    options: [
      "1,150 mm",
      "1,250 mm",
      "1,350 mm",
      "1,500 mm"
    ],
    correct: 2,
    explanation: "Headroom requires a minimum of 1,350 mm in the area around the wheelchair occupant."
  },
  {
    id: 29,
    category: "Vehicle Standards",
    icon: <Car className="w-5 h-5" />,
    question: "What are the minimum dimensions for a wheelchair accessible door?",
    options: [
      "600 mm x 1,100 mm",
      "745 mm x 1,250 mm",
      "800 mm x 1,300 mm",
      "900 mm x 1,500 mm"
    ],
    correct: 1,
    explanation: "The door must be at least 745 mm x 1,250 mm."
  },
  {
    id: 30,
    category: "Vehicle Standards",
    icon: <Car className="w-5 h-5" />,
    question: "What is the maximum slope allowed for a solid surface access ramp?",
    options: [
      "10°",
      "12°",
      "16°",
      "20°"
    ],
    correct: 2,
    explanation: "A solid surface access ramp requires a maximum slope of 16°."
  },
  {
    id: 31,
    category: "Safety",
    icon: <Shield className="w-5 h-5" />,
    question: "How much weight must a wheelchair access ramp be capable of supporting?",
    options: [
      "150 kg",
      "200 kg",
      "300 kg",
      "500 kg"
    ],
    correct: 2,
    explanation: "The ramp must be capable of supporting 300 kg."
  },
  {
    id: 32,
    category: "Regulations",
    icon: <Scale className="w-5 h-5" />,
    question: "If an access ramp is removable, what must be marked on it?",
    options: [
      "The driver's name",
      "The vehicle registration number",
      "The maximum weight limit",
      "The date of manufacture"
    ],
    correct: 1,
    explanation: "If removable, the ramp must be marked with the vehicle registration number."
  },
  {
    id: 33,
    category: "Vehicle Standards",
    icon: <Car className="w-5 h-5" />,
    question: "When is an external step required for a wheelchair accessible vehicle?",
    options: [
      "For all vehicles",
      "When the opening height of the door exceeds 1,150 mm",
      "Only for vintage vehicles",
      "When the driver chooses to fit one"
    ],
    correct: 1,
    explanation: "An external step is required where the opening height of the door exceeds 1,150 mm."
  },
  {
    id: 34,
    category: "Vehicle Standards",
    icon: <Car className="w-5 h-5" />,
    question: "What is the maximum allowed distance of an access step from the ground?",
    options: [
      "150 mm",
      "230 mm",
      "300 mm",
      "400 mm"
    ],
    correct: 1,
    explanation: "If the integrated step is more than 230 mm from the ground, an access step is required."
  },
  {
    id: 35,
    category: "Vehicle Standards",
    icon: <Car className="w-5 h-5" />,
    question: "What is the required approximate diameter for handholds?",
    options: [
      "20 mm",
      "35 mm",
      "50 mm",
      "75 mm"
    ],
    correct: 1,
    explanation: "Handholds must be circular and approximately 35 mm in diameter."
  },
  {
    id: 36,
    category: "Vehicle Standards",
    icon: <Car className="w-5 h-5" />,
    question: "What must be obvious about a limousine to make it suitable for hire?",
    options: [
      "It must be black",
      "It must have a mini-bar",
      "It should be obvious that it is suitable for ceremonial or formal occasions",
      "It must be over 5 metres long"
    ],
    correct: 2,
    explanation: "A limousine's style and condition should make it obvious it is suitable for ceremonial occasions like weddings."
  },
  {
    id: 37,
    category: "Regulations",
    icon: <Scale className="w-5 h-5" />,
    question: "For limousine licences given after 1 January 2013, what is the weight limit?",
    options: [
      "2,500 kg",
      "3,000 kg",
      "3,500 kg",
      "No weight limit"
    ],
    correct: 2,
    explanation: "For licences given after Jan 1, 2013, the gross vehicle weight must not exceed 3,500 kg."
  },
  {
    id: 38,
    category: "Regulations",
    icon: <Scale className="w-5 h-5" />,
    question: "What document is required for a stretched vehicle or kit car before it is first licensed?",
    options: [
      "A manufacturer's warranty",
      "A Technical Assessor’s Basic Report",
      "A letter from An Garda Síochána",
      "A VRT clearance form"
    ],
    correct: 1,
    explanation: "Unique or modified vehicles like kit cars require a Technical Assessor’s Basic Report."
  },
  {
    id: 39,
    category: "Industry Knowledge",
    icon: <BookOpen className="w-5 h-5" />,
    question: "Which document provides a summary of requirements for wheelchair accessible vehicles?",
    options: [
      "Information Guide G9",
      "The Taxi Driver Rulebook",
      "Form VL1",
      "The Revenue Handbook"
    ],
    correct: 0,
    explanation: "Requirements for wheelchair accessible vehicles are summarised in Information Guide G9."
  },
  {
    id: 40,
    category: "Vehicle Standards",
    icon: <Car className="w-5 h-5" />,
    question: "In what condition is the vehicle expected to be for a suitability inspection?",
    options: [
      "Brand new condition",
      "Good, clean condition, and hygienic",
      "Painted yellow (for taxis)",
      "Empty of all fuel"
    ],
    correct: 1,
    explanation: "The vehicle must be in good, clean condition, and seats must be hygienic."
  },
  {
    id: 41,
    category: "Licensing",
    icon: <Info className="w-5 h-5" />,
    question: "What is checked if a passenger seat is changed or modified?",
    options: [
      "The colour of the fabric",
      "The presence of a cup holder",
      "Dimensions and precision of the fitting",
      "The price of the seat"
    ],
    correct: 2,
    explanation: "Minimum dimensions, height, and distance between seats are specified in detail and must be fitted with precision."
  },
  {
    id: 42,
    category: "Vehicle Standards",
    icon: <Car className="w-5 h-5" />,
    question: "Which specific feature is allowed to be fitted to the solid roof of a taxi or hackney?",
    options: [
      "A loudspeaker",
      "A flashing strobe light",
      "A properly fitted sunroof",
      "A cargo rack"
    ],
    correct: 2,
    explanation: "Vehicles must have a permanent solid roof, but a properly fitted sunroof is allowed."
  },
  {
    id: 43,
    category: "Vehicle Standards",
    icon: <Car className="w-5 h-5" />,
    question: "Is it permitted to have paint or bodywork repairs in progress during an inspection?",
    options: [
      "Yes, if it is minor",
      "Only if it is on the passenger door",
      "No, the vehicle must not have repairs in progress",
      "Yes, if the inspector approves"
    ],
    correct: 2,
    explanation: "The vehicle must not have paint or bodywork repairs in progress."
  },
  {
    id: 44,
    category: "Vehicle Standards",
    icon: <Car className="w-5 h-5" />,
    question: "Are all environmentally friendly vehicles allowed fewer luggage area restrictions?",
    options: [
      "Yes, all of them",
      "No, only hybrid vehicles",
      "No, not all environmentally friendly vehicles are allowed fewer restrictions",
      "Only those over 5 years old"
    ],
    correct: 2,
    explanation: "Some luggage size rules may be less strict for hybrids or EVs, but not for all of them."
  },
  {
    id: 45,
    category: "Regulations",
    icon: <Scale className="w-5 h-5" />,
    question: "What determines the rules for an SPSV's maximum age?",
    options: [
      "Only the vehicle's manufacture date",
      "Only the driver's age",
      "Licence category, transaction type, and licence history",
      "The mileage on the clock"
    ],
    correct: 2,
    explanation: "Rules on maximum age depend on factors like licence category, transaction type, and history."
  },
  {
    id: 46,
    category: "Licensing",
    icon: <Info className="w-5 h-5" />,
    question: "When must suitability inspections be performed?",
    options: [
      "Only when the vehicle is first licensed",
      "Only after an accident",
      "Before first licensing and again at renewal",
      "Every five years"
    ],
    correct: 2,
    explanation: "Suitability inspections happen before first licensing and at every renewal."
  },
  {
    id: 47,
    category: "Vehicle Standards",
    icon: <Car className="w-5 h-5" />,
    question: "What happens to a vehicle inspection if technical specifications like track width are not met?",
    options: [
      "The vehicle passes with a warning",
      "The inspector ignores it",
      "The vehicle will fail the suitability assessment",
      "The driver gets a 30-day extension"
    ],
    correct: 2,
    explanation: "Technical requirements for wheelbase and track width are strictly enforced in the suitability assessment."
  },
  {
    id: 48,
    category: "Regulations",
    icon: <Scale className="w-5 h-5" />,
    question: "What is the primary goal of the suitability rules set by the NTA?",
    options: [
      "To collect more fees",
      "To ensure vehicles are of the highest quality",
      "To limit the number of taxis",
      "To support car manufacturers"
    ],
    correct: 1,
    explanation: "The main goal is to make sure vehicles in the industry are of the highest quality."
  },
  {
    id: 49,
    category: "Vehicle Standards",
    icon: <Car className="w-5 h-5" />,
    question: "How often should you check the Suitable Vehicle List?",
    options: [
      "Once a year",
      "Only when you buy your first car",
      "Before buying any vehicle to use as an SPSV",
      "After you pass the inspection"
    ],
    correct: 2,
    explanation: "The manual advises to check the list before buying any vehicle."
  },
  {
    id: 50,
    category: "Regulations",
    icon: <Scale className="w-5 h-5" />,
    question: "What must you do if your car is not on the Suitable Vehicle List?",
    options: [
      "Buy the car anyway",
      "Contact the NTA for information",
      "Assume it is suitable",
      "Contact a local Garda station"
    ],
    correct: 1,
    explanation: "If your car is not listed, you should contact the NTA."
  }
];