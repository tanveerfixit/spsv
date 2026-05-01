import { Shield, AlertCircle, Scale, Car, Info, BookOpen, User, Phone, LifeBuoy, Zap } from 'lucide-react';

export const chapter10SafetyQuestions = [
    {
        id: 1,
        category: "Safety",
        icon: <Shield className="w-5 h-5" />,
    question: "What is the NTA's primary role in safety according to the manual?",
        options: [
            "To provide insurance for all taxi drivers",
            "To ensure SPSV services are professional and safe",
            "To build new taxi ranks",
            "To manufacture taximeters"
        ],
        correct: 1,
        explanation: "The NTA creates regulations focusing on both driver and customer safety to maintain high standards."
    },
    {
        id: 2,
        category: "Regulations",
        icon: <Scale className="w-5 h-5" />,
    question: "Which right does a driver have regarding unsafe or bulky items?",
        options: [
            "They must carry any item the passenger brings",
            "They can charge a triple fare for heavy items",
            "They have the right to refuse passengers carrying unsafe, bulky, or too heavy items",
            "They must call the NTA for permission to refuse"
        ],
        correct: 2,
        explanation: "Drivers can refuse items that pose a safety risk or are too bulky to transport safely."
    },
    {
        id: 3,
        category: "Compliance",
        icon: <AlertCircle className="w-5 h-5" />,
    question: "Which organization is responsible for vehicle safety regulations like mobile phone use while driving?",
        options: [
            "The NTA",
            "An Garda Síochána",
            "The Health Service Executive",
            "The Revenue Commissioners"
        ],
        correct: 1,
        explanation: "An Garda Síochána manages vehicle safety regulations, road legislation, and criminal incidents."
    },
    {
        id: 4,
        category: "Compliance",
        icon: <Scale className="w-5 h-5" />,
    question: "Who is responsible for enforcing the Safety, Health & Welfare at Work Act 2005?",
        options: [
            "The Road Safety Authority (RSA)",
            "The Health Service Executive (HSE)",
            "The Health and Safety Authority (HSA)",
            "The NTA"
        ],
        correct: 2,
        explanation: "The HSA is responsible for health and safety legislation in the workplace."
    },
    {
        id: 5,
        category: "Safety",
        icon: <Shield className="w-5 h-5" />,
    question: "What is the responsibility of the Health Service Executive (HSE) in the SPSV industry?",
        options: [
            "Enforcing taximeter standards",
            "Ensuring compliance with smoke-free workplace legislation",
            "Checking tyre tread depth",
            "Issuing driver ID cards"
        ],
        correct: 1,
        explanation: "The HSE ensures that the smoking ban in SPSVs (which are places of work) is followed."
    },
    {
        id: 6,
        category: "Safety",
        icon: <Shield className="w-5 h-5" />,
    question: "Driver fatigue is estimated to be a factor in what percentage of road traffic collisions?",
        options: [
            "1-5%",
            "5-10%",
            "10-20%",
            "30-40%"
        ],
        correct: 2,
        explanation: "The RSA states that fatigue is a factor in approximately 10-20% of road collisions."
    },
    {
        id: 7,
        category: "Safety",
        icon: <Shield className="w-5 h-5" />,
    question: "What should a driver do during a short break to stay alert?",
        options: [
            "Check emails and text messages",
            "Stay in the driver's seat and nap",
            "Get some fresh air and stretch their legs",
            "Eat a large heavy meal"
        ],
        correct: 2,
        explanation: "Rest, fresh air, and movement are recommended to combat fatigue during shifts."
    },
    {
        id: 8,
        category: "Regulations",
        icon: <Scale className="w-5 h-5" />,
    question: "What is the maximum number of hours an SPSV driver agrees not to exceed on any three consecutive days?",
        options: [
            "8 hours",
            "10 hours",
            "11 hours",
            "13 hours"
        ],
        correct: 2,
        explanation: "Drivers formally agree not to use an SPSV for more than 11 hours on any three days in a row."
    },
    {
        id: 9,
        category: "Operations",
        icon: <Car className="w-5 h-5" />,
    question: "If you work 11 hours on Monday and 11 hours on Tuesday, how many hours can you work on Wednesday?",
        options: [
            "Another 11 hours",
            "Less than 11 hours",
            "Up to 13 hours",
            "You must take the day off"
        ],
        correct: 1,
        explanation: "You cannot work more than 11 hours if you have already hit that limit on the two previous days."
    },
    {
        id: 10,
        category: "Safety",
        icon: <Shield className="w-5 h-5" />,
    question: "Which of these are considered 'vulnerable road users'?",
        options: [
            "Bus drivers and truck drivers",
            "Pedestrians, cyclists, and motorcyclists",
            "Traffic wardens and NTA inspectors",
            "Passengers in the rear seat"
        ],
        correct: 1,
        explanation: "Professional drivers must be extra careful around those with less protection on the road."
    },
    {
        id: 11,
        category: "Safety",
        icon: <Shield className="w-5 h-5" />,
    question: "Which of the following is a benefit of developing good driving habits?",
        options: [
            "It allows you to bypass taxi ranks",
            "It saves money on running and repair costs",
            "It removes the need for annual NCT tests",
            "It allows you to ignore speed limits in emergencies"
        ],
        correct: 1,
        explanation: "Smooth driving reduces wear and tear, saving money on maintenance and fuel."
    },
    {
        id: 12,
        category: "Safety",
        icon: <Shield className="w-5 h-5" />,
    question: "How does the RSA describe aggressive driving?",
        options: [
            "A necessary skill for city driving",
            "Dangerous, stressful, and expensive",
            "The best way to get through traffic",
            "Efficient and professional"
        ],
        correct: 1,
        explanation: "Aggressive driving increases the risk of accidents and fuel consumption while causing stress."
    },
    {
        id: 13,
        category: "Compliance",
        icon: <AlertCircle className="w-5 h-5" />,
    question: "What is the specific risk of penalty points for SPSV drivers compared to regular drivers?",
        options: [
            "SPSV drivers get double points for every offence",
            "Penalty points make SPSV insurance much more expensive and can lead to loss of licence",
            "SPSV drivers are exempt from penalty points",
            "Penalty points are only recorded by the NTA, not the Gardaí"
        ],
        correct: 1,
        explanation: "Loss of a licence due to penalty points directly results in loss of employment and income for professional drivers."
    },
    {
        id: 14,
        category: "Safety",
        icon: <Shield className="w-5 h-5" />,
    question: "What should a driver do to ensure passenger safety when exiting the vehicle?",
        options: [
            "Let them out as quickly as possible anywhere",
            "Only let passengers leave where it is safe and warn them of dangers like busy roads",
            "Ask the passenger to check for traffic themselves",
            "Always exit the vehicle first to open the door"
        ],
        correct: 1,
        explanation: "Drivers must take reasonable steps to keep passengers safe during entry and exit."
    },
    {
        id: 15,
        category: "Safety",
        icon: <Shield className="w-5 h-5" />,
    question: "Which road users are particularly at risk when a passenger opens a car door to exit?",
        options: [
            "Bus drivers",
            "Cyclists and pedestrians",
            "Truck drivers",
            "Other taxi drivers"
        ],
        correct: 1,
        explanation: "Exiting passengers can accidentally strike cyclists or pedestrians if the door is opened without checking."
    },
    {
        id: 16,
        category: "Regulations",
        icon: <Scale className="w-5 h-5" />,
    question: "Is it legal to hold a mobile phone while driving if using the speakerphone?",
        options: [
            "Yes, as long as you are not texting",
            "No, it is against the law to hold a phone or support it with your body",
            "Only for calls under 2 minutes",
            "Only if the vehicle is stationary at a red light"
        ],
        correct: 1,
        explanation: "Holding or supporting a phone with any part of the body while driving is a dangerous distraction and an offence."
    },
    {
        id: 17,
        category: "Compliance",
        icon: <AlertCircle className="w-5 h-5" />,
    question: "What is the fixed charge fine for using a mobile phone while driving?",
        options: [
            "€60",
            "€80",
            "€120",
            "€200"
        ],
        correct: 2,
        explanation: "The fixed charge notice for mobile phone use while driving is €120."
    },
    {
        id: 18,
        category: "Compliance",
        icon: <AlertCircle className="w-5 h-5" />,
    question: "How many penalty points do you receive if you pay the mobile phone fixed charge?",
        options: [
            "2 points",
            "3 points",
            "5 points",
            "6 points"
        ],
        correct: 1,
        explanation: "Paying the fixed charge results in 3 penalty points on your driving licence."
    },
    {
        id: 19,
        category: "Compliance",
        icon: <AlertCircle className="w-5 h-5" />,
    question: "If you are convicted in court for mobile phone use, how many penalty points are applied?",
        options: [
            "3 points",
            "4 points",
            "5 points",
            "7 points"
        ],
        correct: 2,
        explanation: "A court conviction for mobile phone use while driving results in 5 penalty points."
    },
    {
        id: 20,
        category: "Compliance",
        icon: <Scale className="w-5 h-5" />,
    question: "What is the maximum fine if convicted in court for mobile phone use while driving?",
        options: [
            "€500",
            "€1,000",
            "€2,000",
            "€5,000"
        ],
        correct: 2,
        explanation: "Court conviction can lead to a fine of up to €2,000."
    },
    {
        id: 21,
        category: "Regulations",
        icon: <Phone className="w-5 h-5" />,
    question: "What is the only exception for using a handheld phone while driving?",
        options: [
            "Calling your dispatch operator",
            "Using the GPS function",
            "Emergency calls to 999 or 112",
            "Calls from family members"
        ],
        correct: 2,
        explanation: "Emergency calls to 999 or 112 are the only legal exception for handheld phone use."
    },
    {
        id: 22,
        category: "Compliance",
        icon: <AlertCircle className="w-5 h-5" />,
    question: "How many penalty points lead to driver disqualification for a standard driver?",
        options: [
            "6 points",
            "7 points",
            "10 points",
            "12 points"
        ],
        correct: 3,
        explanation: "Twelve penalty points results in disqualification for most drivers."
    },
    {
        id: 23,
        category: "Compliance",
        icon: <AlertCircle className="w-5 h-5" />,
    question: "What is the penalty point threshold for learner or novice drivers?",
        options: [
            "5 points",
            "7 points",
            "9 points",
            "12 points"
        ],
        correct: 1,
        explanation: "A lower threshold of 7 points applies to learner or novice drivers."
    },
    {
        id: 24,
        category: "Safety",
        icon: <Shield className="w-5 h-5" />,
    question: "Is using a hands-free kit completely safe?",
        options: [
            "Yes, it removes all risk",
            "No, it is still a distraction and you could still be prosecuted for careless driving",
            "Yes, as long as the volume is low",
            "Only if used for less than 5 minutes"
        ],
        correct: 1,
        explanation: "Hands-free kits still disrupt concentration and put road users at risk."
    },
    {
        id: 25,
        category: "Safety",
        icon: <Shield className="w-5 h-5" />,
    question: "What is an RSA recommendation for phone use while driving?",
        options: [
            "Keep calls as brief as possible",
            "Never try to write notes or look up phone numbers while driving",
            "Only use the phone when stopped in traffic",
            "Use headphones instead of a car kit"
        ],
        correct: 1,
        explanation: "Drivers should avoid any manual interaction with phones, including searching for numbers or taking notes."
    },
    {
        id: 26,
        category: "Operations",
        icon: <Car className="w-5 h-5" />,
    question: "When should you enter your destination into a GPS or Sat Nav?",
        options: [
            "While pulling out from the rank",
            "Before starting your journey",
            "At the first set of traffic lights",
            "Whenever the passenger decides where to go"
        ],
        correct: 1,
        explanation: "Always set your route before you commence the journey to avoid distractions."
    },
    {
        id: 27,
        category: "Regulations",
        icon: <Scale className="w-5 h-5" />,
    question: "Legally, an SPSV is considered what type of environment?",
        options: [
            "A private residence",
            "A place of work",
            "A social club",
            "A temporary shelter"
        ],
        correct: 1,
        explanation: "Under the law, an SPSV is a place of work, meaning standard workplace regulations apply."
    },
    {
        id: 28,
        category: "Regulations",
        icon: <Scale className="w-5 h-5" />,
    question: "According to the Public Health (Tobacco) Act, when is smoking allowed in an SPSV?",
        options: [
            "When the driver is alone",
            "When the vehicle is not for hire",
            "Never, smoking is always banned in the vehicle",
            "Only if the windows are fully open"
        ],
        correct: 2,
        explanation: "Smoking is banned in SPSVs at all times, regardless of whether a passenger is present."
    },
    {
        id: 29,
        category: "Compliance",
        icon: <AlertCircle className="w-5 h-5" />,
    question: "What must be displayed in the vehicle regarding smoking?",
        options: [
            "The driver's name",
            "A 'No Smoking' sign",
            "The NTA's phone number",
            "A list of fines"
        ],
        correct: 1,
        explanation: "All SPSVs must display a 'No Smoking' sign to comply with the law."
    },
    {
        id: 30,
        category: "Regulations",
        icon: <Scale className="w-5 h-5" />,
    question: "Who is responsible for ensuring no one smokes in the SPSV?",
        options: [
            "The passenger",
            "The local council",
            "The owner and/or person in charge of the vehicle",
            "The NTA"
        ],
        correct: 2,
        explanation: "The driver/owner is responsible for enforcing the smoke-free environment."
    },
    {
        id: 31,
        category: "Compliance",
        icon: <AlertCircle className="w-5 h-5" />,
    question: "What right does a driver have if a passenger refuses to stop smoking?",
        options: [
            "To charge an extra €50",
            "To refuse them service",
            "To take their cigarettes away",
            "To drive them to the nearest Garda station"
        ],
        correct: 1,
        explanation: "Drivers have the right to refuse service to non-compliant passengers."
    },
    {
        id: 32,
        category: "Safety",
        icon: <Shield className="w-5 h-5" />,
    question: "What should you do if you are taking prescription medicine?",
        options: [
            "Stop taking it while working",
            "Check with your doctor if it could make you drowsy or affect driving",
            "Assume it is safe if it was prescribed",
            "Only drive during daylight hours"
        ],
        correct: 1,
        explanation: "Certain medications can impair driving ability, so professional medical advice is essential."
    },
    {
        id: 33,
        category: "Safety",
        icon: <Shield className="w-5 h-5" />,
    question: "Can small amounts of alcohol affect your driving?",
        options: [
            "No, as long as it's below the legal limit",
            "Yes, it can affect judgment and slow reactions",
            "Only if you haven't eaten",
            "Only at night"
        ],
        correct: 1,
        explanation: "Even small amounts of intoxicants can make you a danger to yourself and others."
    },
    {
        id: 34,
        category: "Regulations",
        icon: <Scale className="w-5 h-5" />,
    question: "What is the legal status of a driver not wearing a seatbelt?",
        options: [
            "It is a minor recommendation",
            "It is a criminal offence",
            "It is only required on motorways",
            "It is optional for professional drivers"
        ],
        correct: 1,
        explanation: "By law, drivers must always wear a seatbelt while driving unless specifically exempt."
    },
    {
        id: 35,
        category: "Regulations",
        icon: <Scale className="w-5 h-5" />,
    question: "Under what specific condition is a driver exempt from wearing a seatbelt?",
        options: [
            "When they are in a hurry",
            "When they are reversing a vehicle",
            "When they are in a taxi rank",
            "When they are carrying more than four passengers"
        ],
        correct: 1,
        explanation: "The only exceptions are medical exemptions and when reversing the vehicle."
    },
    {
        id: 36,
        category: "Regulations",
        icon: <Scale className="w-5 h-5" />,
    question: "Who is required to wear a seatbelt in an SPSV?",
        options: [
            "Only the driver",
            "Only the front-seat passenger",
            "Anyone 17 years or older, whether in the front or back seat",
            "Only children"
        ],
        correct: 2,
        explanation: "All adult passengers must wear seatbelts regardless of where they sit."
    },
    {
        id: 37,
        category: "Compliance",
        icon: <AlertCircle className="w-5 h-5" />,
    question: "What is the penalty for an adult passenger who fails to wear a seatbelt?",
        options: [
            "A €50 on-the-spot fine",
            "Penalty points on their passport",
            "Prosecution and a fine of up to €2,000",
            "Banning from using taxis for one year"
        ],
        correct: 2,
        explanation: "Adults are personally responsible and can be prosecuted with significant fines."
    },
    {
        id: 38,
        category: "Operations",
        icon: <Info className="w-5 h-5" />,
    question: "What is the driver's duty regarding an adult passenger's seatbelt?",
        options: [
            "They must physically fasten it for them",
            "They should remind them to wear it, but it is not their legal duty to ensure they do",
            "They must refuse the journey if they won't wear it",
            "They must record the passenger's ID for the Gardaí"
        ],
        correct: 1,
        explanation: "Drivers should provide a reminder, but the legal responsibility lies with the adult passenger."
    },
    {
        id: 39,
        category: "Regulations",
        icon: <Scale className="w-5 h-5" />,
    question: "Who is responsible for ensuring a passenger under 17 wears a seatbelt?",
        options: [
            "The child",
            "The child's parent only",
            "The driver",
            "The NTA"
        ],
        correct: 2,
        explanation: "The driver is legally responsible for the safety of minors in their vehicle."
    },
    {
        id: 40,
        category: "Regulations",
        icon: <Scale className="w-5 h-5" />,
    question: "Which children must wear an adult seatbelt in an SPSV?",
        options: [
            "All children over 5 years old",
            "Only children sitting in the front",
            "Children who are at least 150 cm tall and 36 kg or more",
            "Every child regardless of size"
        ],
        correct: 2,
        explanation: "Seatbelts are designed for adult size, which is defined as 150cm/36kg+."
    },
    {
        id: 41,
        category: "Regulations",
        icon: <Scale className="w-5 h-5" />,
    question: "Are SPSVs required to carry special car seats or baby restraints?",
        options: [
            "Yes, for all children under 12",
            "No, SPSVs are exempt from the rule requiring child seats",
            "Only if they work for a dispatch operator",
            "Only on school runs"
        ],
        correct: 1,
        explanation: "SPSVs are exempt, allowing children to travel in the back seat supervised appropriately."
    },
    {
        id: 42,
        category: "Security",
        icon: <Shield className="w-5 h-5" />,
    question: "According to the Garda Crime Prevention Unit, when are violent incidents most likely to happen?",
        options: [
            "Monday mornings",
            "Rush hour on weekdays",
            "Weekend nights between midnight and 4 AM",
            "During major sporting events only"
        ],
        correct: 2,
        explanation: "Late-night weekends are identified as high-risk periods for drivers."
    },
    {
        id: 43,
        category: "Security",
        icon: <Shield className="w-5 h-5" />,
    question: "Which type of customers are statistically more likely to present safety problems?",
        options: [
            "Pre-booked passengers",
            "Passengers hired off the street",
            "Airport travellers",
            "Business clients"
        ],
        correct: 1,
        explanation: "Hiring off the street carries a higher risk because there is often no prior record of the booking."
    },
    {
        id: 44,
        category: "Security",
        icon: <Shield className="w-5 h-5" />,
    question: "How does working with a dispatch operator improve security?",
        options: [
            "They pay for the driver's health insurance",
            "They keep detailed booking records and allow for immediate radio help",
            "They provide security guards for every vehicle",
            "They check the passenger's bank balance"
        ],
        correct: 1,
        explanation: "Records and communication provide an extra layer of protection for the driver."
    },
    {
        id: 45,
        category: "Security",
        icon: <User className="w-5 h-5" />,
    question: "What is a benefit of making eye contact with a customer when they enter the car?",
        options: [
            "It makes the trip more social",
            "It shows you have seen them and could identify them later if needed",
            "It is a requirement for the taximeter to start",
            "It helps you judge their weight for fuel efficiency"
        ],
        correct: 1,
        explanation: "Eye contact is a subtle way to let the customer know they are recognized and identifiable."
    },
    {
        id: 46,
        category: "Security",
        icon: <Zap className="w-5 h-5" />,
    question: "Why does the Garda recommend reversing into cul-de-sacs?",
        options: [
            "It's better for the vehicle's transmission",
            "It allows you to drive away quickly if needed",
            "It helps with the GPS signal",
            "It's easier for the passenger to see the number plate"
        ],
        correct: 1,
        explanation: "Positioning the vehicle for a quick exit is a key safety tactic in dead-end streets."
    },
    {
        id: 47,
        category: "Security",
        icon: <Zap className="w-5 h-5" />,
    question: "What is a recommended safety use for a spare vehicle key?",
        options: [
            "Give it to your dispatch operator",
            "Hide it under the car bumper",
            "Always carry it in your pocket",
            "Leave it in the glovebox"
        ],
        correct: 2,
        explanation: "Carrying a spare key in your pocket allows you to recover the car if it is stolen and abandoned."
    },
    {
        id: 48,
        category: "Security",
        icon: <Shield className="w-5 h-5" />,
    question: "What should you do with large amounts of cash during a shift?",
        options: [
            "Keep it in a hidden box in the boot",
            "Deposit it at a bank or leave it in a secure place at home during a break",
            "Carry it in your wallet to show you are successful",
            "Give it to the first passenger of the day for safekeeping"
        ],
        correct: 1,
        explanation: "Reducing the amount of cash on hand makes a driver a less attractive target for robbery."
    },
    {
        id: 49,
        category: "Security",
        icon: <Shield className="w-5 h-5" />,
    question: "What should you say if a customer asks if you have made a lot of money that day?",
        options: [
            "Tell them exactly how much you earned",
            "Do not say that you have been busy or made a lot of money",
            "Brag about your best fares",
            "Show them your taximeter's daily total"
        ],
        correct: 1,
        explanation: "Hiding your success prevents people from knowing how much cash you might be carrying."
    },
    {
        id: 50,
        category: "Security",
        icon: <Car className="w-5 h-5" />,
    question: "When should you keep your vehicle doors locked and windows closed?",
        options: [
            "Only when the vehicle is parked at home",
            "Whenever driving in an isolated area, parked on the street, or waiting for a customer",
            "Only during the winter",
            "Only if carrying expensive luggage"
        ],
        correct: 1,
        explanation: "Keeping the vehicle secure at all times prevents unauthorized entry."
    },
    {
        id: 51,
        category: "Security",
        icon: <Shield className="w-5 h-5" />,
    question: "What is 'fare evasion'?",
        options: [
            "When a driver refuses a fare",
            "When a customer leaves without paying",
            "When a passenger negotiates a lower price",
            "When the taximeter is not used"
        ],
        correct: 1,
        explanation: "Fare evasion is the act of avoiding payment for the transportation service provided."
    },
    {
        id: 52,
        category: "Security",
        icon: <Shield className="w-5 h-5" />,
    question: "If a customer refuses to pay, should you force them to stay in the vehicle?",
        options: [
            "Yes, until they pay",
            "No, you must not force them or take them anywhere against their will",
            "Yes, but only if the fare is over €50",
            "No, but you should take their phone as security"
        ],
        correct: 1,
        explanation: "Forcing a customer to stay is illegal; drivers should call the Gardaí instead."
    },
    {
        id: 53,
        category: "Security",
        icon: <Shield className="w-5 h-5" />,
    question: "Should you chase a fare evader who runs away?",
        options: [
            "Yes, to recover your earnings",
            "No, your safety is more important than a lost fare",
            "Only if you have a passenger to witness it",
            "Only if they are slow"
        ],
        correct: 1,
        explanation: "Putting yourself at risk for a fare is never recommended by safety experts."
    },
    {
        id: 54,
        category: "Operations",
        icon: <Car className="w-5 h-5" />,
    question: "Where is the best place to settle the fare with a customer?",
        options: [
            "Outside on the pavement",
            "Through the window after they exit",
            "While the customer is still inside the vehicle",
            "At a nearby ATM"
        ],
        correct: 2,
        explanation: "Customers are less likely to run without paying if the transaction happens while they are still in the car."
    },
    {
        id: 55,
        category: "Regulations",
        icon: <Scale className="w-5 h-5" />,
    question: "If you take a deposit from a customer, what is the rule?",
        options: [
            "The deposit can be any amount you want",
            "The deposit must not be more than the expected fare",
            "You do not have to refund the difference if the meter is lower",
            "Deposits must be paid in cash only"
        ],
        correct: 1,
        explanation: "Deposits must be reasonable and balanced against the final meter reading."
    },
    {
        id: 56,
        category: "Security",
        icon: <Shield className="w-5 h-5" />,
    question: "What safety equipment can protect a driver from an attack from behind?",
        options: [
            "A loud car horn",
            "A safety screen",
            "A front-facing dashcam",
            "Extra bright headlights"
        ],
        correct: 1,
        explanation: "Safety screens provide a physical barrier between the driver and the rear seat."
    },
    {
        id: 57,
        category: "Compliance",
        icon: <Info className="w-5 h-5" />,
    question: "What must you do if you install a security camera (CCTV) in your SPSV?",
        options: [
            "Charge passengers an extra 'tech fee'",
            "Follow data protection laws and put up clear signs inside your vehicle",
            "Send a copy of all footage to the NTA every day",
            "Hide the camera so passengers don't act differently"
        ],
        correct: 1,
        explanation: "Privacy and data laws require notification to anyone being recorded."
    },
    {
        id: 58,
        category: "Security",
        icon: <Shield className="w-5 h-5" />,
    question: "What is the very first step to take after a safety incident like an attack?",
        options: [
            "Check your vehicle for damage",
            "Call for help and raise the alarm as soon as you can",
            "Clean the interior",
            "Call your insurance company"
        ],
        correct: 1,
        explanation: "Immediate alert is vital for both medical help and law enforcement."
    },
    {
        id: 59,
        category: "Security",
        icon: <Shield className="w-5 h-5" />,
    question: "Why should you report even minor safety incidents?",
        options: [
            "To get a discount on your licence",
            "It could be part of a bigger investigation and help solve other crimes",
            "It is required for tax purposes",
            "To get a free dashcam from the Gardaí"
        ],
        correct: 1,
        explanation: "Small incidents often form patterns that help police track professional criminals."
    },
    {
        id: 60,
        category: "Safety",
        icon: <Shield className="w-5 h-5" />,
    question: "When should you wear your high-visibility vest?",
        options: [
            "While driving on motorways only",
            "When working outside of your vehicle in poorly lit areas at night",
            "At all times during a shift",
            "Only when the vehicle has broken down"
        ],
        correct: 1,
        explanation: "The vest ensures you are seen by other drivers when you are outside the vehicle in the dark."
    },
    {
        id: 61,
        category: "Safety",
        icon: <LifeBuoy className="w-5 h-5" />,
    question: "In an emergency, what timeframe is most critical for a victim's survival?",
        options: [
            "The first 15 minutes",
            "The first hour (the golden hour)",
            "The first three hours",
            "The first 24 hours"
        ],
        correct: 1,
        explanation: "Medical help received within the first hour significantly improves survival rates."
    },
    {
        id: 62,
        category: "Safety",
        icon: <LifeBuoy className="w-5 h-5" />,
    question: "What is the 'golden rule' at the scene of an accident?",
        options: [
            "Rescue everyone immediately",
            "Do no harm and do not risk your own safety",
            "Move the vehicles off the road",
            "Take photos for social media"
        ],
        correct: 1,
        explanation: "Ensuring your own safety prevents you from becoming another victim and making the situation worse."
    },
    {
        id: 63,
        category: "Safety",
        icon: <Shield className="w-5 h-5" />,
    question: "What is a fire risk at the scene of an accident?",
        options: [
            "Using hazard lights",
            "Smoking near the accident",
            "Using a handheld torch",
            "Leaving the engine off"
        ],
        correct: 1,
        explanation: "Smoking near spilled fuel or damaged vehicles is extremely dangerous."
    },
    {
        id: 64,
        category: "Operations",
        icon: <Car className="w-5 h-5" />,
    question: "What should you do if you suffer from shock after a traffic incident?",
        options: [
            "Drink a strong coffee and keep working",
            "Get someone else to drive you home and rest",
            "Ignore it as it's just mental stress",
            "Drive faster to get home quickly"
        ],
        correct: 1,
        explanation: "Shock can impair judgment and physical control, making driving unsafe."
    },
    {
        id: 65,
        category: "Safety",
        icon: <LifeBuoy className="w-5 h-5" />,
    question: "Where should you place the advance-warning triangle at a collision scene?",
        options: [
            "On top of the vehicle",
            "A good distance away to alert oncoming traffic",
            "In the boot for safekeeping",
            "Right next to the front tyre"
        ],
        correct: 1,
        explanation: "The triangle must give other drivers enough time to react and slow down."
    },
    {
        id: 66,
        category: "Regulations",
        icon: <Scale className="w-5 h-5" />,
    question: "When are you legally required to report a collision to An Garda Síochána?",
        options: [
            "Only if the car is written off",
            "If anyone is hurt",
            "Only if it happens at night",
            "Only if three or more cars are involved"
        ],
        correct: 1,
        explanation: "Reporting is mandatory if there is any injury at the scene."
    },
    {
        id: 67,
        category: "Safety",
        icon: <Shield className="w-5 h-5" />,
    question: "How should you help an injured person covered in blankets?",
        options: [
            "Give them a hot drink",
            "Do not move them or give them anything to eat or drink",
            "Help them stand up and walk",
            "Remove their motorcycle helmet"
        ],
        correct: 1,
        explanation: "Movement or ingestion can complicate injuries or make medical treatment harder."
    },
    {
        id: 68,
        category: "Operations",
        icon: <Car className="w-5 h-5" />,
    question: "What is a common type of injury from lifting heavy luggage incorrectly?",
        options: [
            "Eye strain",
            "Back problems",
            "Hearing loss",
            "High blood pressure"
        ],
        correct: 1,
        explanation: "Incorrect manual handling is a major cause of workplace absence due to back injuries."
    },
    {
        id: 69,
        category: "Operations",
        icon: <Car className="w-5 h-5" />,
    question: "Is it easier to put luggage into a vehicle or take it out?",
        options: [
            "It's easier to take it out",
            "It's easier and safer to put something in than to take it out",
            "The effort is exactly the same",
            "It depends on the time of day"
        ],
        correct: 1,
        explanation: "Gravity helps when placing items in, but lifting them out requires more careful planning."
    },
    {
        id: 70,
        category: "Safety",
        icon: <Shield className="w-5 h-5" />,
    question: "What is the correct foot position for lifting heavy items?",
        options: [
            "Feet together",
            "Stand with good balance with feet a little apart, one foot slightly in front of the other",
            "On tip-toes",
            "Crossing your legs"
        ],
        correct: 1,
        explanation: "A stable base is essential for a safe and steady lift."
    },
    {
        id: 71,
        category: "Safety",
        icon: <Shield className="w-5 h-5" />,
    question: "Should you bend your waist (stoop) when lifting?",
        options: [
            "Yes, it's the fastest way",
            "No, bending too much at the waist can cause injury; bend your knees instead",
            "Yes, if the item is small",
            "Only if you have a safety belt"
        ],
        correct: 1,
        explanation: "Leg muscles should do the work, not the lower back."
    },
    {
        id: 72,
        category: "Safety",
        icon: <Shield className="w-5 h-5" />,
    question: "Where should you hold a heavy item while carrying it?",
        options: [
            "At arm's length",
            "Close to your body with the heaviest part nearest to you",
            "On one shoulder",
            "Above your head"
        ],
        correct: 1,
        explanation: "Keeping weight near your centre of gravity improves balance and reduces strain."
    },
    {
        id: 73,
        category: "Safety",
        icon: <Shield className="w-5 h-5" />,
    question: "If you need to turn while holding a heavy box, how should you do it?",
        options: [
            "Twist your back",
            "Move your feet instead of twisting your body",
            "Lean to the side",
            "Jump slightly"
        ],
        correct: 1,
        explanation: "Twisting while under load is a high-risk move for back injuries."
    },
    {
        id: 74,
        category: "Safety",
        icon: <Shield className="w-5 h-5" />,
    question: "What should you do if you need to adjust an item once it's in the boot?",
        options: [
            "Adjust it while still holding its full weight",
            "Put it down first and then slide or adjust it carefully",
            "Kick it into place",
            "Ask the passenger to do it"
        ],
        correct: 1,
        explanation: "Setting the load down before adjusting prevents unexpected strain."
    },
    {
        id: 75,
        category: "Compliance",
        icon: <Scale className="w-5 h-5" />,
    question: "What is your 'workplace' as a self-employed SPSV driver?",
        options: [
            "The NTA office",
            "Your vehicle",
            "The taxi rank",
            "The Garda station"
        ],
        correct: 1,
        explanation: "Legally, the vehicle is the driver's place of work, and workplace safety rules apply to it."
    },
    {
        id: 76,
        category: "Regulations",
        icon: <Scale className="w-5 h-5" />,
    question: "Are you legally required to identify and document hazards in your vehicle?",
        options: [
            "No, only for companies with 10+ cars",
            "Yes, you must document hazards and take steps to remove identified risks",
            "Only if you have an accident",
            "Only for wheelchair accessible vehicles"
        ],
        correct: 1,
        explanation: "Proactive hazard identification is a legal requirement for all operators."
    },
    {
        id: 77,
        category: "Safety",
        icon: <Shield className="w-5 h-5" />,
    question: "Which of the following must be considered regarding health and welfare in an SPSV?",
        options: [
            "Noise, exhaust fumes, and extreme temperatures",
            "The colour of the dashboard",
            "The type of radio antenna",
            "The price of nearby fuel"
        ],
        correct: 0,
        explanation: "Environmental factors in the vehicle affect the long-term health of the driver."
    },
    {
        id: 78,
        category: "Compliance",
        icon: <AlertCircle className="w-5 h-5" />,
    question: "What must an employee driver do if fatigue affects their ability to work?",
        options: [
            "Keep driving until the shift ends",
            "Advise their employer immediately",
            "Drink energy drinks",
            "Increase their speed to finish faster"
        ],
        correct: 1,
        explanation: "Safety is a shared responsibility; reporting fatigue is a duty of the employee."
    },
    {
        id: 79,
        category: "Regulations",
        icon: <Scale className="w-5 h-5" />,
    question: "What is the safety risk of noise in the workplace?",
        options: [
            "It improves concentration",
            "It can be a health and welfare hazard that must be considered",
            "It is required for passenger entertainment",
            "Noise is not mentioned in safety rules"
        ],
        correct: 1,
        explanation: "Long-term exposure to high noise levels can impact physical and mental well-being."
    },
    {
        id: 80,
        category: "Security",
        icon: <Zap className="w-5 h-5" />,
    question: "What should you do before starting a journey if you are unsure if a customer can pay?",
        options: [
            "Charge them double in advance",
            "Tell your dispatch operator and consider asking for a deposit",
            "Drive to a Garda station first",
            "Check their pockets"
        ],
        correct: 1,
        explanation: "Open communication with dispatch and securing a deposit are professional ways to handle financial uncertainty."
    }
];