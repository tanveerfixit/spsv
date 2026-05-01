import { Scale, Info, BookOpen, Car, AlertCircle, Shield } from 'lucide-react';

export const chapter5SpsvQuestions = [
  {
    id: 1,
    category: "Compliance",
    icon: <AlertCircle className="w-5 h-5" />,
    question: "If a vehicle is used as an SPSV without a licence, who can be charged with an offence?",
    options: [
      "Only the driver",
      "Only the vehicle owner",
      "Both the driver and the vehicle owner",
      "Only the dispatch operator"
    ],
    correct: 2,
    explanation: "According to the regulations, if a vehicle is used as an SPSV without a licence, both the driver and the vehicle owner can be charged with an offence."
  },
  {
    id: 2,
    category: "Regulations",
    icon: <Scale className="w-5 h-5" />,
    question: "Whose responsibility is it to ensure the vehicle follows the rules, even if they do not own it?",
    options: [
      "The NTA",
      "The driver",
      "The local council",
      "The insurance provider"
    ],
    correct: 1,
    explanation: "It is the driver’s responsibility to make sure the vehicle they are driving follows the rules, even if someone else owns the vehicle or holds the licence."
  },
  {
    id: 3,
    category: "Vehicle Standards",
    icon: <Car className="w-5 h-5" />,
    question: "Where must tamper-proof licence discs be displayed in all SPSVs?",
    options: [
      "On the dashboard and sun visor",
      "In the front and rear windows",
      "On the exterior of the front doors",
      "In the glovebox for inspection"
    ],
    correct: 1,
    explanation: "All SPSVs must display tamper-proof licence discs in both the front and rear windows."
  },
  {
    id: 4,
    category: "Regulations",
    icon: <Scale className="w-5 h-5" />,
    question: "What is the maximum passenger limit for an SPSV?",
    options: [
      "The number of seatbelts available",
      "Eight passengers, excluding the driver",
      "The number listed on the tamper-proof licence discs",
      "The number stated in the vehicle's logbook"
    ],
    correct: 2,
    explanation: "An SPSV must not carry more passengers than the number listed on the tamper-proof licence discs."
  },
  {
    id: 5,
    category: "Vehicle Standards",
    icon: <Car className="w-5 h-5" />,
    question: "Which vintage vehicles are exempt from showing a rear tamper-proof disc?",
    options: [
      "Taxis over 20 years old",
      "Hackneys over 25 years old",
      "Limousines over 30 years old",
      "Any SPSV over 30 years old"
    ],
    correct: 2,
    explanation: "Vintage vehicles in the limousine category that are over 30 years old do not need to show a rear disc."
  },
  {
    id: 6,
    category: "Vehicle Standards",
    icon: <Car className="w-5 h-5" />,
    question: "What color is the tamper-proof licence disc for a taxi?",
    options: [
      "Blue",
      "Yellow",
      "Silver",
      "Green"
    ],
    correct: 1,
    explanation: "Tamper-proof licence discs are yellow for taxis and wheelchair accessible taxis."
  },
  {
    id: 7,
    category: "Vehicle Standards",
    icon: <Car className="w-5 h-5" />,
    question: "What color is the tamper-proof licence disc for a limousine?",
    options: [
      "Blue",
      "Yellow",
      "Silver",
      "Green"
    ],
    correct: 2,
    explanation: "Tamper-proof licence discs for limousines are silver."
  },
  {
    id: 8,
    category: "Vehicle Standards",
    icon: <Car className="w-5 h-5" />,
    question: "What color is the tamper-proof licence disc for a hackney?",
    options: [
      "Blue",
      "Yellow",
      "Silver",
      "Green"
    ],
    correct: 0,
    explanation: "Tamper-proof licence discs are blue for hackneys, wheelchair accessible hackneys, and local area hackneys."
  },
  {
    id: 9,
    category: "Compliance",
    icon: <AlertCircle className="w-5 h-5" />,
    question: "Who is authorized to remove and dispose of tamper-proof licence discs?",
    options: [
      "The vehicle owner",
      "A Licensing Inspector",
      "The driver",
      "Any Garda officer"
    ],
    correct: 1,
    explanation: "Tamper-proof licence discs can only be removed and disposed of by a Licensing Inspector."
  },
  {
    id: 10,
    category: "Regulations",
    icon: <Scale className="w-5 h-5" />,
    question: "What must a vehicle licence holder provide regarding their drivers?",
    options: [
      "A copy of the driver's PPS card",
      "A record with the name, address, contact number, and SPSV driver licence details",
      "The driver's medical history",
      "A list of the driver's family members"
    ],
    correct: 1,
    explanation: "Vehicle licence holders must keep a record with the name, address, and contact number of each driver, along with their SPSV driver licence details."
  },
  {
    id: 11,
    category: "Operations",
    icon: <Car className="w-5 h-5" />,
    question: "When must an SPSV driver notify the NTA about the vehicle they are driving?",
    options: [
      "Only when they buy a new car",
      "Once a year during renewal",
      "Whenever they start or take over operating an SPSV",
      "Only if the vehicle is owned by a company"
    ],
    correct: 2,
    explanation: "Drivers must notify the NTA whenever they start or take over operating an SPSV to create a driver-to-vehicle link."
  },
  {
    id: 12,
    category: "Operations",
    icon: <Info className="w-5 h-5" />,
    question: "Which app allows drivers to complete notifications on the go?",
    options: [
      "NTA Connect",
      "Driver Check",
      "SPSV+ App",
      "Taxi Notify"
    ],
    correct: 2,
    explanation: "The SPSV+ App allows SPSV licence holders to complete their required notifications on the go."
  },
  {
    id: 13,
    category: "Industry Knowledge",
    icon: <BookOpen className="w-5 h-5" />,
    question: "What is the purpose of the 'Driver Check' app?",
    options: [
      "To help drivers find passengers",
      "To allow customers to check if an SPSV is properly licensed and registered",
      "To calculate the fastest route",
      "To pay the NTA for licence renewals"
    ],
    correct: 1,
    explanation: "The Driver Check app helps customers check if an SPSV is properly licensed and registered before they hire it."
  },
  {
    id: 14,
    category: "Operations",
    icon: <Car className="w-5 h-5" />,
    question: "Which type of bus lanes can taxis use while operating as an SPSV?",
    options: [
      "Contra-flow bus lanes",
      "With-flow bus lanes",
      "All bus lanes at all times",
      "Only bus lanes on private grounds"
    ],
    correct: 1,
    explanation: "Taxis are allowed to use normal (with-flow) bus lanes while they are operating as an SPSV."
  },
  {
    id: 15,
    category: "Operations",
    icon: <Car className="w-5 h-5" />,
    question: "When can a taxi NOT use a with-flow bus lane?",
    options: [
      "When carrying a passenger",
      "When going to pick up a pre-booked customer",
      "When driving home after a shift on personal business",
      "When plying for hire"
    ],
    correct: 2,
    explanation: "Taxis cannot use bus lanes if they are not operating as an SPSV (e.g., driving home after a shift or on personal business)."
  },
  {
    id: 16,
    category: "Operations",
    icon: <Car className="w-5 h-5" />,
    question: "Are hackneys or limousines allowed to use bus lanes?",
    options: [
      "Yes, if pre-booked",
      "Only at night",
      "No, they are never allowed to use bus lanes",
      "Only if they have a special permit"
    ],
    correct: 2,
    explanation: "Hackneys and limousines are not allowed to use bus lanes."
  },
  {
    id: 17,
    category: "Regulations",
    icon: <Scale className="w-5 h-5" />,
    question: "What must a taxi driver offer a customer at the end of every journey?",
    options: [
      "A business card",
      "A printed receipt from the taximeter",
      "A discount for the next trip",
      "A verbal confirmation of the fare"
    ],
    correct: 1,
    explanation: "Taxis must print a receipt from the taximeter and offer it to the customer at the end of every journey."
  },
  {
    id: 18,
    category: "Regulations",
    icon: <Scale className="w-5 h-5" />,
    question: "Can a taxi driver charge more than the amount shown on the taximeter?",
    options: [
      "Yes, if there is traffic",
      "Yes, if the customer agrees",
      "No, they must charge the meter amount or less",
      "Only for journeys over 30km"
    ],
    correct: 2,
    explanation: "Taxis must charge either the fare shown on the meter or a lower amount, but not more than the National Maximum Taxi Fare."
  },
  {
    id: 19,
    category: "Operations",
    icon: <Car className="w-5 h-5" />,
    question: "Where should the accessibility symbol be displayed on a wheelchair accessible taxi?",
    options: [
      "On the front door",
      "On the regulation roof sign",
      "On the front bumper",
      "On the back window"
    ],
    correct: 1,
    explanation: "Wheelchair accessible taxis must display the accessibility symbol on the regulation roof sign."
  },
  {
    id: 20,
    category: "Operations",
    icon: <Car className="w-5 h-5" />,
    question: "Where should the accessibility symbol be displayed on a wheelchair accessible hackney?",
    options: [
      "On the roof sign",
      "On the front bumper",
      "On a passenger door",
      "On the rear bumper"
    ],
    correct: 2,
    explanation: "Wheelchair accessible hackneys must display the accessibility symbol on a passenger door."
  },
  {
    id: 21,
    category: "Industry Knowledge",
    icon: <BookOpen className="w-5 h-5" />,
    question: "To whom must wheelchair accessible SPSVs give booking priority?",
    options: [
      "Corporate clients",
      "People with disabilities",
      "Frequent travellers",
      "Groups of four or more"
    ],
    correct: 1,
    explanation: "Wheelchair accessible taxis and hackneys must give booking priority to people with disabilities."
  },
  {
    id: 22,
    category: "Operations",
    icon: <Car className="w-5 h-5" />,
    question: "What is a restriction for local area hackneys regarding their area of operation?",
    options: [
      "They can only drive in urban areas",
      "They can only pick up passengers in the area listed on their licence",
      "They must avoid motorways",
      "They cannot pick up passengers after midnight"
    ],
    correct: 1,
    explanation: "Local area hackneys must only operate in the area listed on the licence and not provide services outside that area."
  },
  {
    id: 23,
    category: "Operations",
    icon: <Info className="w-5 h-5" />,
    question: "When is a limousine exempt from carrying booking documents?",
    options: [
      "At night",
      "When working as part of a wedding or funeral service",
      "When the passenger is a regular customer",
      "Limousines never need booking documents"
    ],
    correct: 1,
    explanation: "Limousines do not need to carry booking documents when working as part of a wedding or funeral service."
  },
  {
    id: 24,
    category: "Industry Knowledge",
    icon: <BookOpen className="w-5 h-5" />,
    question: "What is a sustainability tip for saving fuel when waiting in line?",
    options: [
      "Keep the engine running to stay warm",
      "Turn off the engine if waiting for more than three minutes",
      "Idle the engine for 5 minutes before driving",
      "Never turn off the engine during a shift"
    ],
    correct: 1,
    explanation: "A sustainability tip is to turn off the engine if you are waiting in line for more than three minutes."
  },
  {
    id: 25,
    category: "Industry Knowledge",
    icon: <BookOpen className="w-5 h-5" />,
    question: "Who is responsible for planning and managing taxi ranks?",
    options: [
      "The NTA",
      "Local authorities in consultation with An Garda Síochána",
      "Private taxi companies",
      "The Department of Transport"
    ],
    correct: 1,
    explanation: "Local authorities, in consultation with An Garda Síochána, are responsible for planning and managing taxi ranks."
  },
  {
    id: 26,
    category: "Regulations",
    icon: <Scale className="w-5 h-5" />,
    question: "Can a taxi be left unattended at a taxi rank?",
    options: [
      "Yes, for up to 10 minutes",
      "Only if the driver is within sight of the vehicle",
      "No, taxis must never be left unattended at a rank",
      "Only if it is the last taxi in the queue"
    ],
    correct: 2,
    explanation: "Taxis must never leave their taxi unattended at a rank."
  },
  {
    id: 27,
    category: "Industry Knowledge",
    icon: <BookOpen className="w-5 h-5" />,
    question: "At a taxi rank, must a customer hire the first taxi in the queue?",
    options: [
      "Yes, by law",
      "No, customers can choose which taxi to hire",
      "Only if there are more than three taxis",
      "Only during peak hours"
    ],
    correct: 1,
    explanation: "Customers can choose which taxi to hire — they are not required to hire the first taxi in the queue."
  },
  {
    id: 28,
    category: "Regulations",
    icon: <Scale className="w-5 h-5" />,
    question: "When must the light on a taxi roof sign be switched ON?",
    options: [
      "When carrying a passenger",
      "When available for hire",
      "Only at night",
      "At all times while the vehicle is in motion"
    ],
    correct: 1,
    explanation: "The roof sign light must be on when the taxi is available for hire."
  },
  {
    id: 29,
    category: "Regulations",
    icon: <Scale className="w-5 h-5" />,
    question: "When must the light on a taxi roof sign be switched OFF?",
    options: [
      "When available for hire at a rank",
      "When the taxi is hired or carrying a passenger",
      "Only during daylight hours",
      "When the driver is taking a break"
    ],
    correct: 1,
    explanation: "The roof sign light must be off when not available for hire, such as when carrying a passenger."
  },
  {
    id: 30,
    category: "Operations",
    icon: <Car className="w-5 h-5" />,
    question: "Under what condition can a taxi roof sign be placed length-ways?",
    options: [
      "Only for local area hackneys",
      "For journeys likely to exceed 30 kilometres, with passenger agreement",
      "If the driver prefers the appearance",
      "When the taxi is being serviced"
    ],
    correct: 1,
    explanation: "For journeys longer than 30 km outside urban areas, you may, with the passenger’s agreement, position the roof sign lengthways to improve fuel efficiency."
  },
  {
    id: 31,
    category: "Operations",
    icon: <Info className="w-5 h-5" />,
    question: "What is mandatory for all taxis regarding payments?",
    options: [
      "Accepting cash only",
      "Having a working cashless payment facility",
      "Having a mobile banking app",
      "Providing a monthly invoice"
    ],
    correct: 1,
    explanation: "When operating a taxi, you must have a cashless payment facility and ensure it works properly."
  },
  {
    id: 32,
    category: "Operations",
    icon: <Info className="w-5 h-5" />,
    question: "What must a taxi driver do if their cashless payment terminal is broken?",
    options: [
      "Ask passengers for cash only",
      "Use a manual receipt book",
      "Withdraw from service",
      "Borrow a terminal from another driver"
    ],
    correct: 2,
    explanation: "If the payment terminal is broken or the battery needs to be charged, you must withdraw from service."
  },
  {
    id: 33,
    category: "Regulations",
    icon: <Scale className="w-5 h-5" />,
    question: "Can a surcharge be applied to cashless payments in taxis?",
    options: [
      "Yes, up to 5%",
      "No, no surcharge or extra fee can be applied",
      "Only for fares under €10",
      "Only for credit cards, not debit cards"
    ],
    correct: 1,
    explanation: "No surcharge or extra fee can be applied to cashless payments."
  },
  {
    id: 34,
    category: "Compliance",
    icon: <AlertCircle className="w-5 h-5" />,
    question: "Is it an offence for a person to hire a taxi and refuse to pay the meter-calculated fare?",
    options: [
      "No, it is a civil matter",
      "Yes, unless they have a reasonable excuse",
      "Only if the fare is above €50",
      "Only if they damage the vehicle"
    ],
    correct: 1,
    explanation: "Under the Taxi Regulation Act 2013, it is an offence for a person to hire a taxi and refuse to pay a fare calculated by a verified taximeter without a reasonable excuse."
  },
  {
    id: 35,
    category: "Regulations",
    icon: <Scale className="w-5 h-5" />,
    question: "Which of the following is a valid reason for a taxi driver to refuse a journey?",
    options: [
      "The journey is under 5km",
      "The journey is over 30km",
      "The passenger has a guide dog",
      "The passenger is a different nationality"
    ],
    correct: 1,
    explanation: "Valid reasons for refusing a passenger include a journey over 30km in a taxi."
  },
  {
    id: 36,
    category: "Regulations",
    icon: <Scale className="w-5 h-5" />,
    question: "Can a driver refuse a passenger who is consuming food or drink?",
    options: [
      "Yes, they have the right to refuse",
      "No, passengers are allowed to eat",
      "Only if it's hot food",
      "Only if it's an alcoholic drink"
    ],
    correct: 0,
    explanation: "A passenger who is consuming food or drink is a valid reason for a driver to refuse service."
  },
  {
    id: 37,
    category: "Regulations",
    icon: <Scale className="w-5 h-5" />,
    question: "Can a driver refuse a passenger who refuses to put out a cigarette?",
    options: [
      "Yes",
      "No",
      "Only if it's an e-cigarette",
      "Only if children are present"
    ],
    correct: 0,
    explanation: "A passenger who refuses to put out a cigarette is a valid reason for refusal."
  },
  {
    id: 38,
    category: "Vehicle Standards",
    icon: <Car className="w-5 h-5" />,
    question: "What is the recommended minimum tyre tread depth for SPSV vehicles?",
    options: [
      "1.0mm",
      "1.6mm",
      "2.0mm",
      "3.0mm"
    ],
    correct: 1,
    explanation: "Most vehicles need tyre tread to be at least 1.6mm deep."
  },
  {
    id: 39,
    category: "Vehicle Standards",
    icon: <Car className="w-5 h-5" />,
    question: "How should a driver check if their rear lights work at night?",
    options: [
      "Look in the side mirrors while driving",
      "Reverse toward a wall and use mirrors to see the reflection",
      "Rear lights do not need frequent checks",
      "Only a mechanic can check this"
    ],
    correct: 1,
    explanation: "To check that your rear lights work, reverse toward a wall at night and use your mirrors to see the lights."
  },
  {
    id: 40,
    category: "Compliance",
    icon: <AlertCircle className="w-5 h-5" />,
    question: "What must a compliance officer do when they speak with a driver?",
    options: [
      "Give them a verbal warning",
      "Show their official ID card and be polite",
      "Confiscate the driver's display card",
      "Ask for the day's cash earnings"
    ],
    correct: 1,
    explanation: "Compliance officers must tell the driver who they are, show their official ID card, and be polite and respectful."
  },
  {
    id: 41,
    category: "Compliance",
    icon: <AlertCircle className="w-5 h-5" />,
    question: "What can a compliance officer check during a vehicle stop?",
    options: [
      "The driver's banking history",
      "The vehicle standards, driver behavior, and identification",
      "The passenger's ID",
      "The driver's personal car insurance"
    ],
    correct: 1,
    explanation: "Compliance officers can check vehicle standards, driver behavior, and identification, and make sure bookings and fares are correct."
  },
  {
    id: 42,
    category: "Compliance",
    icon: <AlertCircle className="w-5 h-5" />,
    question: "When might the NTA ask a driver to pass the Area Knowledge Module again?",
    options: [
      "Every five years",
      "After three or more complaints about area knowledge in three years",
      "If the driver gets five penalty points",
      "If they move to a new house"
    ],
    correct: 1,
    explanation: "If there are three or more complaints about you in three years related to not knowing your area well, NTA can ask you to take and pass the module."
  },
  {
    id: 43,
    category: "Compliance",
    icon: <AlertCircle className="w-5 h-5" />,
    question: "What is the fixed payment fine for not telling the NTA about the vehicle you are driving?",
    options: [
      "€80",
      "€100",
      "€200",
      "€250"
    ],
    correct: 2,
    explanation: "Not telling the NTA about the vehicle you are driving carries a fixed payment fine of €200."
  },
  {
    id: 44,
    category: "Compliance",
    icon: <AlertCircle className="w-5 h-5" />,
    question: "What is the fixed payment fine for taking off or trying to take off a tamper-proof licence disc?",
    options: [
      "€80",
      "€100",
      "€150",
      "€250"
    ],
    correct: 2,
    explanation: "Taking off or trying to take off a tamper-proof licence disc carries a fixed payment fine of €150."
  },
  {
    id: 45,
    category: "Compliance",
    icon: <AlertCircle className="w-5 h-5" />,
    question: "What is the fixed payment fine for not displaying the required driver ID?",
    options: [
      "€100",
      "€150",
      "€200",
      "€500"
    ],
    correct: 2,
    explanation: "Not displaying the required driver ID carries a fixed payment fine of €200."
  },
  {
    id: 46,
    category: "Compliance",
    icon: <AlertCircle className="w-5 h-5" />,
    question: "What is the fixed payment fine for refusing a short journey under 30km without good reason?",
    options: [
      "€100",
      "€150",
      "€250",
      "€500"
    ],
    correct: 1,
    explanation: "Refusing a short journey under 30km without good reason carries a fixed payment fine of €150."
  },
  {
    id: 47,
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
    explanation: "Refusing to carry a guide dog or assistance dog carries a fixed payment fine of €250."
  },
  {
    id: 48,
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
    explanation: "Refusing to carry a wheelchair user carries a fixed payment fine of €250."
  },
  {
    id: 49,
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
    explanation: "You must pay the amount in the fine notice within 28 days or pay the amount plus 50% within 56 days."
  },
  {
    id: 50,
    category: "Regulations",
    icon: <Info className="w-5 h-5" />,
    question: "Who must an SPSV driver notify as soon as possible if they change their address?",
    options: [
      "The Revenue Commissioners",
      "The NTA",
      "The Department of Transport",
      "The Road Safety Authority"
    ],
    correct: 1,
    explanation: "If you move to a new address, you must tell the NTA as soon as possible."
  },
  {
    id: 51,
    category: "Regulations",
    icon: <Info className="w-5 h-5" />,
    question: "In addition to the NTA, who must an SPSV driver notify about a change of address?",
    options: [
      "An Garda Síochána",
      "The local county council",
      "Their insurance broker",
      "Their bank"
    ],
    correct: 0,
    explanation: "If you are an SPSV driver, you also need to tell An Garda Síochána when you change your address."
  },
  {
    id: 52,
    category: "Regulations",
    icon: <Scale className="w-5 h-5" />,
    question: "What must a driver do if they start another job besides being an SPSV driver?",
    options: [
      "They do not need to tell anyone",
      "Tell An Garda Síochána",
      "Tell the Revenue only",
      "Tell the local council"
    ],
    correct: 1,
    explanation: "If you are an SPSV driver and you start another job, you must tell An Garda Síochána."
  },
  {
    id: 53,
    category: "Compliance",
    icon: <AlertCircle className="w-5 h-5" />,
    question: "What is the fixed payment fine for not having the approved door signs on a taxi?",
    options: [
      "€100",
      "€150",
      "€250",
      "€500"
    ],
    correct: 2,
    explanation: "Not having the approved door signs on a taxi or wheelchair accessible taxi carries a €250 fine."
  },
  {
    id: 54,
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
    explanation: "Not carrying a cashless payment device carries a fixed payment fine of €200."
  },
  {
    id: 55,
    category: "Compliance",
    icon: <AlertCircle className="w-5 h-5" />,
    question: "What is the fine for waiting for a fare at a place that is not an official stand?",
    options: [
      "€80",
      "€100",
      "€150",
      "€200"
    ],
    correct: 1,
    explanation: "Waiting for a fare at a place that is not an official stand carries a €100 fine."
  },
  {
    id: 56,
    category: "Compliance",
    icon: <AlertCircle className="w-5 h-5" />,
    question: "What is the fine for not keeping the taximeter correctly calibrated?",
    options: [
      "€150",
      "€200",
      "€250",
      "€500"
    ],
    correct: 2,
    explanation: "Not keeping the taximeter correctly calibrated carries a €250 fine."
  },
  {
    id: 57,
    category: "Compliance",
    icon: <AlertCircle className="w-5 h-5" />,
    question: "What is the fine for operating in a county where you are not licensed?",
    options: [
      "€100",
      "€150",
      "€200",
      "€250"
    ],
    correct: 2,
    explanation: "Operating in a county where you are not licensed carries a €200 fine."
  },
  {
    id: 58,
    category: "Operations",
    icon: <Car className="w-5 h-5" />,
    question: "Is it required to fit a cashless payment device permanently in the vehicle?",
    options: [
      "Yes, it must be screwed to the dashboard",
      "No, it is not required to fit it permanently",
      "Yes, it must be integrated into the taximeter",
      "Only for wheelchair accessible taxis"
    ],
    correct: 1,
    explanation: "It is not required to fit the payment device permanently, but if you choose to, certain safety guidelines must be followed."
  },
  {
    id: 59,
    category: "Industry Knowledge",
    icon: <BookOpen className="w-5 h-5" />,
    question: "Which of the following is a financial benefit of adopting sustainable practices?",
    options: [
      "Petrol becomes cheaper for SPSV drivers",
      "Electric vehicles have lower maintenance costs",
      "The NTA pays for the driver's electricity",
      "Taximeter calibration is free"
    ],
    correct: 1,
    explanation: "Electric vehicles (EVs) have lower maintenance costs compared to petrol-powered cars, which can save money in the long run."
  },
  {
    id: 60,
    category: "Compliance",
    icon: <AlertCircle className="w-5 h-5" />,
    question: "What can happen if a driver fails to pay a fixed payment fine within 56 days?",
    options: [
      "The fine is cancelled",
      "They receive a third reminder",
      "Court proceedings begin",
      "The NTA pays the fine on their behalf"
    ],
    correct: 2,
    explanation: "If you do not pay within 56 days, court proceedings begin."
  }
];