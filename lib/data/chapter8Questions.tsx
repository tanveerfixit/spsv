import { Heart, Info, Scale, AlertCircle, Car, Shield, UserCheck, MessageSquare, BookOpen } from 'lucide-react';

export const chapter8CustomerServiceQuestions = [
  {
    id: 1,
    category: "Customer Service",
    icon: <Heart className="w-5 h-5" />,
    question: "What is the primary objective of providing high-quality customer service in the SPSV industry?",
    options: [
      "To allow the driver to charge higher fares",
      "To give customers a safe, efficient, and high-quality service while helping your business",
      "To avoid having to use a taximeter",
      "To ensure the driver can work shorter hours"
    ],
    correct: 1,
    explanation: "Good service helps your **passengers and your business**, ensuring a safe and efficient experience."
  },
  {
    id: 2,
    category: "Operations",
    icon: <Info className="w-5 h-5" />,
    question: "Which app allows passengers to check a driver's and a vehicle's details before or during a trip?",
    options: [
      "SPSV+ App",
      "Driver Check Customer App",
      "NTA Connect",
      "Taxi Finder"
    ],
    correct: 1,
    explanation: "The **Driver Check Customer App** is free to download and allows passengers to verify licensing details."
  },
  {
    id: 3,
    category: "Regulations",
    icon: <Scale className="w-5 h-5" />,
    question: "Can a taxi driver charge more than the amount shown on the taximeter if a different fare was agreed before the journey?",
    options: [
      "Yes, if the passenger agrees",
      "No, taxi drivers cannot charge more than what the taximeter shows",
      "Only for journeys over 30km",
      "Only if the booking was made via an app"
    ],
    correct: 1,
    explanation: "Taxi drivers **cannot charge more than the taximeter shows**, even if a different fare was discussed beforehand."
  },
  {
    id: 4,
    category: "Compliance",
    icon: <AlertCircle className="w-5 h-5" />,
    question: "What is considered an 'unreasonable refusal of service' for a taxi driver?",
    options: [
      "Refusing a journey over 100km",
      "Refusing a short trip of 30km or less without a good reason",
      "Refusing a passenger who is smoking",
      "Refusing a passenger who is being offensive"
    ],
    correct: 1,
    explanation: "Taxi drivers **must not refuse short trips of 30km or less** without a valid reason."
  },
  {
    id: 5,
    category: "Regulations",
    icon: <Scale className="w-5 h-5" />,
    question: "At a taxi rank, which taxi is a customer allowed to hire?",
    options: [
      "Only the first taxi in the line",
      "The first three taxis only",
      "Any taxi in the line, regardless of its position",
      "Only the newest vehicle in the line"
    ],
    correct: 2,
    explanation: "At a taxi rank, **customers can choose to travel in any taxi in line**, not just the one at the front."
  },
  {
    id: 6,
    category: "Operations",
    icon: <Car className="w-5 h-5" />,
    question: "What must a taxi driver offer regarding payment methods?",
    options: [
      "Cash only",
      "Card only",
      "The option to accept cash, card, or digital payments",
      "They only need to accept card if the fare is over €20"
    ],
    correct: 2,
    explanation: "Taxi drivers **cannot say 'cash only'**; they must offer cash, card, and digital payment options."
  },
  {
    id: 7,
    category: "Safety",
    icon: <Shield className="w-5 h-5" />,
    question: "Are SPSV drivers allowed to charge extra for carrying a guide dog or assistance dog?",
    options: [
      "Yes, a €1.00 surcharge",
      "No, they must allow these dogs at no extra cost",
      "Only if the dog is large",
      "Only on weekends"
    ],
    correct: 1,
    explanation: "SPSV drivers **must allow guide/assistance dogs free of charge**."
  },
  {
    id: 8,
    category: "Compliance",
    icon: <AlertCircle className="w-5 h-5" />,
    question: "What should a driver do if a passenger makes the car so dirty it must be taken off the road?",
    options: [
      "Ask for a tip to clean it",
      "Apply a 'soiling charge'",
      "Refuse to let the passenger leave until they clean it",
      "Report the passenger to the NTA only"
    ],
    correct: 1,
    explanation: "If a car is made dirty enough to require being taken off the road, the passenger must pay a **'soiling charge'**."
  },
  {
    id: 9,
    category: "Customer Service",
    icon: <UserCheck className="w-5 h-5" />,
    question: "What is the recommended professional appearance for an SPSV driver?",
    options: [
      "Casual sportswear",
      "Formal evening wear only",
      "Clean, neat, and comfortable clothing",
      "A uniform provided by the NTA"
    ],
    correct: 2,
    explanation: "A driver’s clothes should be **clean, neat, and comfortable** to provide a strong first impression."
  },
  {
    id: 10,
    category: "Customer Service",
    icon: <MessageSquare className="w-5 h-5" />,
    question: "Which topics are specifically mentioned as being best to avoid with passengers?",
    options: [
      "Weather and traffic",
      "Local landmarks and restaurants",
      "Politics and religion",
      "Arrival times and route options"
    ],
    correct: 2,
    explanation: "Drivers should stay away from personal topics like **politics and religion**."
  },
  {
    id: 11,
    category: "Operations",
    icon: <Info className="w-5 h-5" />,
    question: "What is a mandatory action at the start of a journey for a taxi?",
    options: [
      "Ask the passenger for their phone number",
      "Start the taximeter",
      "Check the vehicle's oil level",
      "Ask the passenger to pay in advance"
    ],
    correct: 1,
    explanation: "Starting the **taximeter** is a required step when beginning a journey."
  },
  {
    id: 12,
    category: "Safety",
    icon: <Shield className="w-5 h-5" />,
    question: "Which passengers should a driver especially remind to wear seatbelts?",
    options: [
      "Only passengers in the front seat",
      "All passengers, especially those under 17",
      "Only passengers on motorways",
      "Seatbelts are optional for passengers"
    ],
    correct: 1,
    explanation: "Always wear your seatbelt and **remind passengers (especially under 17s)** to do the same."
  },
  {
    id: 13,
    category: "Operations",
    icon: <Car className="w-5 h-5" />,
    question: "Where should a driver set their sat-nav or mapping device?",
    options: [
      "While driving in heavy traffic",
      "Before pulling off to start the journey",
      "Only if the passenger gets lost",
      "At every red light"
    ],
    correct: 1,
    explanation: "The route should be set **before you pull off**; do not use devices while driving."
  },
  {
    id: 14,
    category: "Customer Service",
    icon: <MessageSquare className="w-5 h-5" />,
    question: "What should a driver do regarding their mobile phone during a ride?",
    options: [
      "Use it for personal calls with hands-free",
      "Not use it at all during the ride",
      "Check text messages at traffic lights",
      "Allow the passenger to use it"
    ],
    correct: 1,
    explanation: "**Do not use your mobile phone (even hands-free)** during the ride as it is unprofessional."
  },
  {
    id: 15,
    category: "Operations",
    icon: <Info className="w-5 h-5" />,
    question: "What type of receipt must a taxi driver provide at the end of a journey?",
    options: [
      "A handwritten note on a business card",
      "A printed receipt from the taximeter",
      "An email only",
      "A verbal confirmation of the fare"
    ],
    correct: 1,
    explanation: "Taxi drivers must provide a **printed receipt from the taximeter**, not a handwritten one."
  },
  {
    id: 16,
    category: "Operations",
    icon: <BookOpen className="w-5 h-5" />,
    question: "What information should be on a hackney or limousine receipt?",
    options: [
      "The driver's home address",
      "Specific trip information as requested by the customer",
      "Only the total amount in Euros",
      "A list of all other passengers from that day"
    ],
    correct: 1,
    explanation: "Hackney and limousine drivers must provide a **written receipt with specific trip information** if requested."
  },
  {
    id: 17,
    category: "Industry Knowledge",
    icon: <Info className="w-5 h-5" />,
    question: "Which group of passengers does the TFI WAV Register help to support?",
    options: [
      "Corporate clients",
      "Tourists",
      "Wheelchair users",
      "Long-distance travellers"
    ],
    correct: 2,
    explanation: "The **WAV Register** allows wheelchair users to identify accessible vehicle licence holders in their area."
  },
  {
    id: 18,
    category: "Operations",
    icon: <Car className="w-5 h-5" />,
    question: "Which role does a dispatch operator play regarding disability service?",
    options: [
      "They only take cash bookings",
      "They can prioritize bookings for people with disabilities",
      "They provide free insurance for accessible vehicles",
      "They handle vehicle suitability inspections"
    ],
    correct: 1,
    explanation: "Dispatch operators have the ability to **prioritize bookings for people with disabilities**."
  },
  {
    id: 19,
    category: "Regulations",
    icon: <Scale className="w-5 h-5" />,
    question: "Under the Equal Status Acts 2000-2011, how many grounds for discrimination are specified?",
    options: [
      "Five",
      "Seven",
      "Nine",
      "Twelve"
    ],
    correct: 2,
    explanation: "The law prohibits discrimination based on **nine specific grounds**, including race, gender, and disability."
  },
  {
    id: 20,
    category: "Safety",
    icon: <Shield className="w-5 h-5" />,
    question: "What is a 'hidden disability'?",
    options: [
      "A disability the passenger is trying to hide",
      "A condition like arthritis or diabetes that may not be immediately visible",
      "A disability that only affects the driver",
      "A mechanical fault in the car"
    ],
    correct: 1,
    explanation: "**Hidden disabilities** include conditions like arthritis, diabetes, or epilepsy that aren't obvious to an observer."
  },
  {
    id: 21,
    category: "Customer Service",
    icon: <MessageSquare className="w-5 h-5" />,
    question: "What should a driver do if they do not understand a customer who has difficulty speaking?",
    options: [
      "Pretend to understand to avoid being rude",
      "Be direct and politely say they do not understand",
      "Ask the customer to get out of the vehicle",
      "Wait for an interpreter to arrive"
    ],
    correct: 1,
    explanation: "**Be patient and direct**; if you do not understand, admit it and look for other ways to communicate."
  },
  {
    id: 22,
    category: "Customer Service",
    icon: <UserCheck className="w-5 h-5" />,
    question: "When picking up a pre-booked passenger who is blind, what should the driver avoid using?",
    options: [
      "The car's heater",
      "The horn",
      "The passenger's name",
      "The taximeter"
    ],
    correct: 1,
    explanation: "**Do not sound your horn**; instead, arrange a signal beforehand, like a phone ring."
  },
  {
    id: 23,
    category: "Customer Service",
    icon: <Heart className="w-5 h-5" />,
    question: "What is the correct way to speak to a passenger using an interpreter?",
    options: [
      "Speak only to the interpreter",
      "Look at and speak directly to the customer",
      "Whisper to the interpreter",
      "Only use hand gestures"
    ],
    correct: 1,
    explanation: "Always address the **customer directly**, even if they are using an interpreter."
  },
  {
    id: 24,
    category: "Customer Service",
    icon: <Info className="w-5 h-5" />,
    question: "What should a driver have ready for customers who are deaf or hard of hearing?",
    options: [
      "A loudspeaker",
      "A pen and paper",
      "A sign language dictionary",
      "A bright flashlight"
    ],
    correct: 1,
    explanation: "Have a **pen and paper ready** to write down and confirm destinations."
  },
  {
    id: 25,
    category: "Customer Service",
    icon: <MessageSquare className="w-5 h-5" />,
    question: "How should you get the attention of a passenger who is deaf or hard of hearing?",
    options: [
      "Shout loudly",
      "Tap them gently on the arm or shoulder",
      "Flick the car's headlights",
      "Stomp on the floor"
    ],
    correct: 1,
    explanation: "**Tap them gently on the arm or shoulder**, preferably approaching from the front."
  },
  {
    id: 26,
    category: "Regulations",
    icon: <Scale className="w-5 h-5" />,
    question: "Which direction should a wheelchair face inside a vehicle?",
    options: [
      "Sideways",
      "Either forward or backward, never sideways",
      "Only forward",
      "Only toward the driver"
    ],
    correct: 1,
    explanation: "A wheelchair should face **forward or backward**, but never sideways."
  },
  {
    id: 27,
    category: "Compliance",
    icon: <AlertCircle className="w-5 h-5" />,
    question: "Which organization investigates smoking violations in SPSVs?",
    options: [
      "The NTA",
      "An Garda Síochána",
      "Office of Tobacco Control",
      "The Department of Transport"
    ],
    correct: 2,
    explanation: "The **Office of Tobacco Control** handles complaints for smoking violations."
  },
  {
    id: 28,
    category: "Operations",
    icon: <Info className="w-5 h-5" />,
    question: "If the NTA receives three or more complaints about area knowledge in three years, what can they require?",
    options: [
      "A €500 fine",
      "The driver must take and pass the Area Knowledge Test again",
      "Immediate revocation of the licence",
      "The driver must only work during the day"
    ],
    correct: 1,
    explanation: "The NTA may require the driver to **pass the Area Knowledge Test** before renewing their licence."
  },
  {
    id: 29,
    category: "Compliance",
    icon: <AlertCircle className="w-5 h-5" />,
    question: "Where should lost property be taken if it cannot be returned to the passenger?",
    options: [
      "The NTA Headquarters",
      "The local Garda station",
      "The nearest shopping centre",
      "The driver's home for 30 days"
    ],
    correct: 1,
    explanation: "Drivers should hand lost property over to their **local Garda station**."
  },
  {
    id: 30,
    category: "Compliance",
    icon: <AlertCircle className="w-5 h-5" />,
    question: "Which specific Dublin Garda station is designated for lost property?",
    options: [
      "Pearse Street",
      "Store Street",
      "Dublin Castle",
      "Mountjoy"
    ],
    correct: 1,
    explanation: "**Store Street** is one of the designated stations for Dublin lost property."
  },
  {
    id: 31,
    category: "Customer Service",
    icon: <Heart className="w-5 h-5" />,
    question: "What should a driver do if a customer asks to break a road traffic law, like speeding?",
    options: [
      "Agree if they give a good tip",
      "Kindly explain that it is against the law and refuse",
      "Do it only if the customer is in a rush for a flight",
      "Call the NTA immediately"
    ],
    correct: 1,
    explanation: "Explain that you **cannot agree to such requests** and, if needed, ask them to leave the vehicle."
  },
  {
    id: 32,
    category: "Operations",
    icon: <UserCheck className="w-5 h-5" />,
    question: "What must a driver display where the customer can easily see it?",
    options: [
      "Their home address",
      "Their ID card and the In-Vehicle Information Card",
      "A copy of their insurance policy",
      "Their daily earnings log"
    ],
    correct: 1,
    explanation: "SPSV drivers must display their **ID card and the In-Vehicle Information Card** prominently."
  },
  {
    id: 33,
    category: "Safety",
    icon: <Shield className="w-5 h-5" />,
    question: "What is a 'soiling charge'?",
    options: [
      "A fee for carrying heavy luggage",
      "A charge for when a passenger makes the car dirty enough to be taken off the road",
      "A fee for driving on dirt roads",
      "The cost of a car wash after a shift"
    ],
    correct: 1,
    explanation: "The **soiling charge** is for repairs or cleaning needed because a passenger made the vehicle dirty."
  },
  {
    id: 34,
    category: "Industry Knowledge",
    icon: <Info className="w-5 h-5" />,
    question: "Which authority provides suggestions on how to help customers with disabilities?",
    options: [
      "The Revenue Commissioners",
      "The National Disability Authority",
      "The Road Safety Authority",
      "The Central Bank"
    ],
    correct: 1,
    explanation: "The **National Disability Authority** provides these recommendations."
  },
  {
    id: 35,
    category: "Customer Service",
    icon: <MessageSquare className="w-5 h-5" />,
    question: "What should you do if you picked up a passenger who is vision impaired and you stop guiding them?",
    options: [
      "Leave them in an open space",
      "Direct them to a landmark like a bench or wall",
      "Tell them to wait for a passerby",
      "Walk away silently"
    ],
    correct: 1,
    explanation: "Direct them to a **landmark** so they know where they are; never leave them standing in the open."
  },
  {
    id: 36,
    category: "Customer Service",
    icon: <Car className="w-5 h-5" />,
    question: "What is a recommended way to support someone who is lip-reading?",
    options: [
      "Shout the words",
      "Face the customer when talking",
      "Cover your mouth to avoid distractions",
      "Turn the radio volume up"
    ],
    correct: 1,
    explanation: "It is important to **face the customer** and keep your face turned toward them while they are lip-reading."
  },
  {
    id: 37,
    category: "Customer Service",
    icon: <Heart className="w-5 h-5" />,
    question: "What is the best approach when interacting with difficult or upset customers?",
    options: [
      "Raise your voice to match theirs",
      "Remain calm, speak clearly, and avoid arguing",
      "Tell them they are being rude immediately",
      "Ignore them completely"
    ],
    correct: 1,
    explanation: "**Stay calm and controlled**; avoid raising your voice and aim to fix the issue peacefully."
  },
  {
    id: 38,
    category: "Operations",
    icon: <Info className="w-5 h-5" />,
    question: "What details should a customer provide when making a complaint to the NTA?",
    options: [
      "The driver's age",
      "The driver's name or vehicle licence number",
      "The make and model of the engine",
      "The driver's home phone number"
    ],
    correct: 1,
    explanation: "To address a complaint, customers should provide the **driver's name, licence number, or vehicle registration**."
  },
  {
    id: 39,
    category: "Compliance",
    icon: <Scale className="w-5 h-5" />,
    question: "What right does an SPSV driver have if a passenger behaves in a disorderly way?",
    options: [
      "To seize the passenger's luggage",
      "To refuse service or ask the customer to leave the vehicle",
      "To charge double the fare",
      "To drive the passenger to a Garda station immediately"
    ],
    correct: 1,
    explanation: "You have the **right to refuse service** if a passenger is disorderly or offensive."
  },
  {
    id: 40,
    category: "Customer Service",
    icon: <MessageSquare className="w-5 h-5" />,
    question: "What should you avoid using when communicating with a tourist who finds English difficult?",
    options: [
      "Short sentences",
      "Slang or local expressions like 'How's the craic?'",
      "Maps and diagrams",
      "Slow and clear speech"
    ],
    correct: 1,
    explanation: "**Avoid slang** or local expressions which may be confusing to someone outside Ireland."
  },
  {
    id: 41,
    category: "Regulations",
    icon: <Scale className="w-5 h-5" />,
    question: "Is it legal to display racist signs or slogans in an SPSV?",
    options: [
      "Yes, if the driver thinks it's funny",
      "No, it is illegal",
      "Only if it is in the front window",
      "Only if it is a religious sign"
    ],
    correct: 1,
    explanation: "Racist pictures, signs, or slogans are **illegal** according to the IHREC recommendations."
  },
  {
    id: 42,
    category: "Operations",
    icon: <Car className="w-5 h-5" />,
    question: "Who should a customer contact first if they have a complaint about a pre-booked journey?",
    options: [
      "The NTA",
      "The dispatch operator",
      "The Garda Síochána",
      "The Revenue Commissioners"
    ],
    correct: 1,
    explanation: "If the booking was through an operator, the customer should **contact the dispatch operator first**."
  },
  {
    id: 43,
    category: "Industry Knowledge",
    icon: <Info className="w-5 h-5" />,
    question: "Where can you find the TFI Wheelchair Accessible Vehicle (WAV) Register?",
    options: [
      "In the newspaper",
      "At every taxi rank",
      "On the Transport for Ireland (TFI) website",
      "In the driver's logbook"
    ],
    correct: 2,
    explanation: "The register is available on the **TFI website**."
  },
  {
    id: 44,
    category: "Safety",
    icon: <Shield className="w-5 h-5" />,
    question: "If a customer asks for help with payment, what must the driver do?",
    options: [
      "Refuse to touch their money",
      "Ask permission to handle their wallet and do it in full view of the customer",
      "Take the wallet and walk away to calculate the change",
      "Keep the change as a tip"
    ],
    correct: 1,
    explanation: "Always **ask permission** and assist in full view of the customer."
  },
  {
    id: 45,
    category: "Operations",
    icon: <UserCheck className="w-5 h-5" />,
    question: "When should you adjust the air conditioning or windows?",
    options: [
      "Never, the driver chooses the setting",
      "If requested by the passenger to make them comfortable",
      "Only if the heater breaks",
      "Only at the end of the journey"
    ],
    correct: 1,
    explanation: "Adjust these settings **if requested** to ensure passenger comfort."
  },
  {
    id: 46,
    category: "Safety",
    icon: <Heart className="w-5 h-5" />,
    question: "How should a driver talk to a customer in a wheelchair?",
    options: [
      "Stand as far back as possible",
      "Sit, kneel, or bend down to their level for eye contact",
      "Shout so they can hear you clearly",
      "Speak only to their companion"
    ],
    correct: 1,
    explanation: "Get to their **level for eye contact** when talking."
  },
  {
    id: 47,
    category: "Regulations",
    icon: <Scale className="w-5 h-5" />,
    question: "What is a ground for discrimination under the Equal Status Acts?",
    options: [
      "The color of the passenger's shirt",
      "Membership of the Traveller community",
      "The brand of phone the passenger uses",
      "The length of the journey"
    ],
    correct: 1,
    explanation: "**Membership of the Traveller community** is one of the nine protected grounds."
  },
  {
    id: 48,
    category: "Regulations",
    icon: <Scale className="w-5 h-5" />,
    question: "Are wheelchair accessible licence and renewal fees higher or lower than other SPSVs?",
    options: [
      "Higher",
      "Lower",
      "They are exactly the same",
      "Accessible vehicles don't pay fees"
    ],
    correct: 1,
    explanation: "Fees for accessible vehicles are **lower** to make services more available."
  },
  {
    id: 49,
    category: "Customer Service",
    icon: <MessageSquare className="w-5 h-5" />,
    question: "What should a driver do if they do not agree with something a customer says about politics?",
    options: [
      "Argue their point firmly",
      "Change the subject politely",
      "Stop the car and ask them to leave",
      "Tell them they are wrong"
    ],
    correct: 1,
    explanation: "**Change the subject politely** to avoid conflict."
  },
  {
    id: 50,
    category: "Operations",
    icon: <Info className="w-5 h-5" />,
    question: "What can you offer to a customer at the end of a trip to encourage repeat business?",
    options: [
      "A free ride next time",
      "A business card with your contact details",
      "A discount on their current fare",
      "A candy or snack"
    ],
    correct: 1,
    explanation: "Offer a **business card** to help secure repeat business."
  }
];