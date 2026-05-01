import { Scale, Car, Shield, Info, AlertCircle, BookOpen, Banknote, Receipt } from 'lucide-react';

export const chapter7FaresQuestions = [
    {
        id: 1,
        category: "Regulations",
        icon: <Scale className="w-5 h-5" />,
        question: "When did the latest National Maximum Taxi Fares Order come into law?",
        options: [
            "1 December 2009",
            "1 January 2023",
            "1 December 2024",
            "1 August 2024"
        ],
        correct: 2,
        explanation: "The latest National Maximum Taxi Fares Order came into law on 1 December 2024."
    },
    {
        id: 2,
        category: "Operations",
        icon: <Car className="w-5 h-5" />,
        question: "For an ad hoc trip (hailing or rank), when does the journey officially start?",
        options: [
            "When the passenger sits in the car",
            "When the driver agrees to take the passenger",
            "When the vehicle begins moving",
            "Only after the luggage is loaded"
        ],
        correct: 1,
        explanation: "An ad hoc trip starts when you agree to take the passenger."
    },
    {
        id: 3,
        category: "Operations",
        icon: <Car className="w-5 h-5" />,
        question: "When can a taxi driver turn on the taximeter for an ad hoc journey?",
        options: [
            "Only when the vehicle starts moving",
            "As soon as they agree to take the passenger",
            "After the destination is entered in GPS",
            "When the passenger pays the initial charge"
        ],
        correct: 1,
        explanation: "You can turn on the taximeter for ad hoc journeys as soon as you agree to take the passenger, such as before helping with bags."
    },
    {
        id: 4,
        category: "Operations",
        icon: <Car className="w-5 h-5" />,
        question: "When does a pre-booked trip officially start?",
        options: [
            "When the booking is made on the app",
            "When the driver starts driving toward the pickup point",
            "When the driver meets the passenger at the agreed time",
            "When the passenger enters the vehicle"
        ],
        correct: 2,
        explanation: "A pre-booked trip starts when you meet the passenger at the agreed time."
    },
    {
        id: 5,
        category: "Operations",
        icon: <Car className="w-5 h-5" />,
        question: "When is a driver allowed to start the taximeter for a pre-booked journey?",
        options: [
            "10 minutes before the agreed time",
            "As soon as they arrive at the location, regardless of the time",
            "When they arrive at the right place at the right time",
            "Only after the passenger is seated"
        ],
        correct: 2,
        explanation: "For pre-booked trips, you can start the meter when you arrive at the right place at the right time, but not earlier."
    },
    {
        id: 6,
        category: "Industry Knowledge",
        icon: <BookOpen className="w-5 h-5" />,
        question: "What is the maximum fare a taxi can charge?",
        options: [
            "Any amount agreed with the customer",
            "The amount shown on the taximeter",
            "The taximeter amount plus a 10% tip",
            "Whatever the dispatch operator sets"
        ],
        correct: 1,
        explanation: "The amount shown on the taximeter is the highest amount the driver can charge, even if a different fare was agreed before the trip."
    },
    {
        id: 7,
        category: "Regulations",
        icon: <Scale className="w-5 h-5" />,
        question: "If a fare was agreed before the trip that is LOWER than the taximeter reading, what must the driver charge?",
        options: [
            "The taximeter amount",
            "The lower agreed amount",
            "The average of the two",
            "The taximeter amount plus the booking fee"
        ],
        correct: 1,
        explanation: "If the agreed fare is less than the meter shows, the driver must only charge the agreed amount."
    },
    {
        id: 8,
        category: "Industry Knowledge",
        icon: <BookOpen className="w-5 h-5" />,
        question: "What does the initial charge on a taximeter cover?",
        options: [
            "Only the first 100 metres",
            "Travel for up to 500 metres or 85 seconds",
            "The first 1 kilometre or 2 minutes",
            "The first 2 kilometres of every journey"
        ],
        correct: 1,
        explanation: "The initial charge is fixed and covers travel for up to 500 metres or 85 seconds, whichever comes first."
    },
    {
        id: 9,
        category: "Industry Knowledge",
        icon: <BookOpen className="w-5 h-5" />,
        question: "At what speed does the taximeter switch from charging by distance to charging by time?",
        options: [
            "Below 10 km/h",
            "Below 15.5 km/h",
            "Below 21.2 km/h",
            "Below 30 km/h"
        ],
        correct: 2,
        explanation: "The taximeter adds charges based on time if the speed goes below 21.2 km/h."
    },
    {
        id: 10,
        category: "Operations",
        icon: <Info className="w-5 h-5" />,
        question: "Which number appears on the taximeter to indicate 'Standard Rates' are being applied?",
        options: [
            "1",
            "2",
            "3",
            "S"
        ],
        correct: 0,
        explanation: "Standard rates show as a '1' on a taximeter."
    },
    {
        id: 11,
        category: "Industry Knowledge",
        icon: <BookOpen className="w-5 h-5" />,
        question: "What are the hours for 'Standard Rates' Monday to Saturday?",
        options: [
            "6 AM to 6 PM",
            "8 AM to 8 PM",
            "9 AM to 5 PM",
            "Midnight to 8 AM"
        ],
        correct: 1,
        explanation: "Standard rates apply from 8 AM to 8 PM, Monday to Saturday, excluding holidays."
    },
    {
        id: 12,
        category: "Industry Knowledge",
        icon: <BookOpen className="w-5 h-5" />,
        question: "What is the initial charge for 'Standard Rates' as of December 2024?",
        options: [
            "€3.80",
            "€4.40",
            "€4.80",
            "€5.40"
        ],
        correct: 1,
        explanation: "The initial charge for Standard rates is €4.40."
    },
    {
        id: 13,
        category: "Industry Knowledge",
        icon: <BookOpen className="w-5 h-5" />,
        question: "Under Standard Rates, Tariff A applies up to what distance or time limit?",
        options: [
            "10 km or 30 min",
            "15 km or 43 min",
            "20 km or 60 min",
            "30 km or 90 min"
        ],
        correct: 1,
        explanation: "Tariff A applies to the next 15 km or 43 min after the initial charge."
    },
    {
        id: 14,
        category: "Industry Knowledge",
        icon: <BookOpen className="w-5 h-5" />,
        question: "What is the maximum fare (excluding extras) for Tariff A under Standard Rates?",
        options: [
            "€15.00",
            "€23.60",
            "€31.80",
            "€40.00"
        ],
        correct: 1,
        explanation: "Under Standard rates, Tariff A goes up to €23.60."
    },
    {
        id: 15,
        category: "Operations",
        icon: <Info className="w-5 h-5" />,
        question: "Which number appears on the taximeter to indicate 'Premium Rates' are being applied?",
        options: [
            "1",
            "2",
            "3",
            "P"
        ],
        correct: 1,
        explanation: "Premium rates show as '2' on a taximeter."
    },
    {
        id: 16,
        category: "Industry Knowledge",
        icon: <BookOpen className="w-5 h-5" />,
        question: "When do 'Premium Rates' apply?",
        options: [
            "8 PM to 8 AM Monday to Saturday, all day Sunday, and most holidays",
            "Only on Saturdays and Sundays",
            "Only during Christmas and New Year",
            "8 AM to 8 PM on Sundays only"
        ],
        correct: 0,
        explanation: "Premium rates apply from 8 PM to 8 AM Monday to Saturday, all day Sunday, and most holidays."
    },
    {
        id: 17,
        category: "Industry Knowledge",
        icon: <BookOpen className="w-5 h-5" />,
        question: "What is the initial charge for 'Premium Rates'?",
        options: [
            "€4.40",
            "€4.80",
            "€5.40",
            "€6.00"
        ],
        correct: 2,
        explanation: "The initial charge for Premium rates is €5.40."
    },
    {
        id: 18,
        category: "Industry Knowledge",
        icon: <BookOpen className="w-5 h-5" />,
        question: "What is the maximum fare (excluding extras) for Tariff A under Premium Rates?",
        options: [
            "€23.60",
            "€25.00",
            "€31.80",
            "€35.40"
        ],
        correct: 2,
        explanation: "Under Premium rates, Tariff A goes up to €31.80."
    },
    {
        id: 19,
        category: "Operations",
        icon: <Info className="w-5 h-5" />,
        question: "Which number appears on the taximeter to indicate 'Special Rates'?",
        options: [
            "1",
            "2",
            "3",
            "X"
        ],
        correct: 2,
        explanation: "Special rates show as '3' on a taximeter."
    },
    {
        id: 20,
        category: "Industry Knowledge",
        icon: <BookOpen className="w-5 h-5" />,
        question: "When do 'Special Rates' specifically apply during the weekends?",
        options: [
            "All day Saturday and Sunday",
            "12 AM midnight to 4 AM Saturdays and Sundays",
            "8 PM to 8 AM Saturdays and Sundays",
            "Only on Sunday afternoons"
        ],
        correct: 1,
        explanation: "Special rates apply from 12 AM midnight to 4 AM on Saturdays and Sundays."
    },
    {
        id: 21,
        category: "Industry Knowledge",
        icon: <BookOpen className="w-5 h-5" />,
        question: "During which timeframe over Christmas do 'Special Rates' apply?",
        options: [
            "All day 25 December",
            "8 PM, 24 December to 8 AM, 26 December",
            "Midnight 24 December to midnight 26 December",
            "8 AM, 25 December to 8 PM, 25 December"
        ],
        correct: 1,
        explanation: "Special rates apply during Christmas from 8 PM on 24 December to 8 AM on 26 December."
    },
    {
        id: 22,
        category: "Industry Knowledge",
        icon: <BookOpen className="w-5 h-5" />,
        question: "What is the initial charge for 'Special Rates'?",
        options: [
            "€4.40",
            "€5.40",
            "€6.40",
            "€7.00"
        ],
        correct: 1,
        explanation: "The initial charge for Special rates is €5.40."
    },
    {
        id: 23,
        category: "Regulations",
        icon: <Banknote className="w-5 h-5" />,
        question: "What is the standard booking fee for a pre-booked taxi?",
        options: [
            "€1.00",
            "€2.00",
            "€3.00",
            "€5.00"
        ],
        correct: 2,
        explanation: "SPSV drivers can charge a €3 booking fee if the ride is booked."
    },
    {
        id: 24,
        category: "Regulations",
        icon: <Banknote className="w-5 h-5" />,
        question: "How much can a driver charge for each additional adult passenger?",
        options: [
            "€0.50",
            "€1.00",
            "€2.00",
            "Free"
        ],
        correct: 1,
        explanation: "The driver can charge €1 for each additional adult passenger."
    },
    {
        id: 25,
        category: "Regulations",
        icon: <Banknote className="w-5 h-5" />,
        question: "How much is charged for the first child under 12 years of age?",
        options: [
            "€1.00",
            "€0.50",
            "Free",
            "Included in the adult fare"
        ],
        correct: 2,
        explanation: "One child under 12 is free."
    },
    {
        id: 26,
        category: "Regulations",
        icon: <Banknote className="w-5 h-5" />,
        question: "What is the extra charge for 4 to 5 children under 12 years of age?",
        options: [
            "€1.00",
            "€2.00",
            "€3.00",
            "€4.00"
        ],
        correct: 1,
        explanation: "The charge for 4–5 children is €2."
    },
    {
        id: 27,
        category: "Regulations",
        icon: <Banknote className="w-5 h-5" />,
        question: "What is the extra charge for 6 to 7 children under 12 years of age?",
        options: [
            "€2.00",
            "€3.00",
            "€5.00",
            "€6.00"
        ],
        correct: 1,
        explanation: "The charge for 6–7 children is €3."
    },
    {
        id: 28,
        category: "Regulations",
        icon: <Scale className="w-5 h-5" />,
        question: "What is the maximum 'soiling charge' a driver can apply for cleaning or repairs?",
        options: [
            "€50",
            "€100",
            "€140",
            "€200"
        ],
        correct: 2,
        explanation: "If someone damages or stains the taxi, you can charge up to €140 for cleaning or repairs."
    },
    {
        id: 29,
        category: "Compliance",
        icon: <AlertCircle className="w-5 h-5" />,
        question: "Are drivers allowed to charge extra for carrying assistance dogs?",
        options: [
            "Yes, €1 per dog",
            "Yes, if the dog is large",
            "No, extra charges must not be applied for assistance dogs",
            "Only on Premium or Special rates"
        ],
        correct: 2,
        explanation: "Extra charges must not be applied for assistance dogs or carrying luggage."
    },
    {
        id: 30,
        category: "Compliance",
        icon: <AlertCircle className="w-5 h-5" />,
        question: "Are drivers allowed to charge extra for carrying luggage?",
        options: [
            "Yes, €1 per bag",
            "No, luggage is carried free of charge",
            "Only for items over 10kg",
            "Only if it doesn't fit in the boot"
        ],
        correct: 1,
        explanation: "Extra charges must not be applied for carrying luggage."
    },
    {
        id: 31,
        category: "Operations",
        icon: <Car className="w-5 h-5" />,
        question: "If a customer hails a taxi on the street, does a booking fee apply?",
        options: [
            "Yes, always",
            "No, booking fees do not apply for street hails",
            "Only if it's after 8 PM",
            "Only if the driver has to wait"
        ],
        correct: 1,
        explanation: "Booking fees do not apply if a customer hails you on the street or hires you at a taxi rank."
    },
    {
        id: 32,
        category: "Operations",
        icon: <Car className="w-5 h-5" />,
        question: "Who has the right to choose the route for a journey?",
        options: [
            "The driver",
            "The passenger",
            "The GPS",
            "The dispatch operator"
        ],
        correct: 1,
        explanation: "Passengers have the right to choose the route, even if the driver does not agree."
    },
    {
        id: 33,
        category: "Regulations",
        icon: <Banknote className="w-5 h-5" />,
        question: "If a passenger chooses a route with a toll, how should the toll fee be handled?",
        options: [
            "It is included in the meter fare",
            "The driver pays it personally",
            "It is added to the fare and shown on the receipt",
            "It is paid directly to the toll booth by the passenger only"
        ],
        correct: 2,
        explanation: "If a passenger chooses a route with a toll, you can add the toll cost to the fare, and it must be shown on the receipt."
    },
    {
        id: 34,
        category: "Regulations",
        icon: <Receipt className="w-5 h-5" />,
        question: "What must a taxi driver do if they give a discount?",
        options: [
            "Tell the passenger verbally only",
            "Write it on the printed receipt",
            "Report it to the NTA",
            "Discounts are not allowed"
        ],
        correct: 1,
        explanation: "If you give a discount, you should write it on the receipt."
    },
    {
        id: 35,
        category: "Operations",
        icon: <Info className="w-5 h-5" />,
        question: "What must a taxi driver do if their cashless payment device is broken?",
        options: [
            "Accept cash only",
            "Withdraw from service until it is fixed or charged",
            "Ask the passenger to pay via a personal app",
            "Use a manual carbon-copy credit card machine"
        ],
        correct: 1,
        explanation: "If your card machine is broken or the battery is flat, you must stop your services until it is fixed or charged."
    },
    {
        id: 36,
        category: "Regulations",
        icon: <Scale className="w-5 h-5" />,
        question: "Is there a minimum fare required for a customer to pay by card?",
        options: [
            "Yes, €5.00",
            "Yes, €10.00",
            "No, there is no minimum fare for paying by card",
            "Only for Standard rates"
        ],
        correct: 2,
        explanation: "There is no minimum fare for paying by card."
    },
    {
        id: 37,
        category: "Regulations",
        icon: <Scale className="w-5 h-5" />,
        question: "Can a driver charge an extra fee for accepting a card payment?",
        options: [
            "Yes, up to 3%",
            "Yes, a flat €1 fee",
            "No, you cannot charge extra for accepting a card payment",
            "Only for American Express"
        ],
        correct: 2,
        explanation: "You cannot charge extra for accepting a card payment."
    },
    {
        id: 38,
        category: "Regulations",
        icon: <Receipt className="w-5 h-5" />,
        question: "Must the taximeter be on if a fare was agreed before the trip?",
        options: [
            "No, the meter can stay off",
            "Yes, the taximeter must always be switched on and calculating",
            "Only for journeys over 30km",
            "Only if the customer asks"
        ],
        correct: 1,
        explanation: "The taximeter must always be switched on and calculating trips, even if you and the customer agreed on a fare before the trip."
    },
    {
        id: 39,
        category: "Regulations",
        icon: <Receipt className="w-5 h-5" />,
        question: "What type of receipt must be offered to every taxi customer?",
        options: [
            "A handwritten receipt",
            "A printed receipt from the taximeter",
            "An email receipt only",
            "A text message confirmation"
        ],
        correct: 1,
        explanation: "You must offer a printed receipt from the taximeter to every customer. It cannot be handwritten."
    },
    {
        id: 40,
        category: "Regulations",
        icon: <Receipt className="w-5 h-5" />,
        question: "What should a driver do if a customer pays MORE than what is on the meter (e.g., a tip)?",
        options: [
            "Refuse the extra money",
            "Write the reason for the difference on the printed receipt",
            "Keep it and give no receipt",
            "Report the tip as a booking fee"
        ],
        correct: 1,
        explanation: "If a customer pays more or less than what is on the meter, you should write the reason for the difference on the printed receipt."
    },
    {
        id: 41,
        category: "Operations",
        icon: <Car className="w-5 h-5" />,
        question: "How are fares determined for hackneys and limousines?",
        options: [
            "By a taximeter",
            "By the driver at the end of the trip",
            "They must be agreed in advance before the journey starts",
            "Based on the National Maximum Taxi Fare"
        ],
        correct: 2,
        explanation: "Customers must pre-book hackneys and limousines and agree to the fare before the journey starts."
    },
    {
        id: 42,
        category: "Operations",
        icon: <Info className="w-5 h-5" />,
        question: "What document must the driver of a hackney or limousine always carry in the vehicle?",
        options: [
            "A taximeter verification certificate",
            "A booking document showing trip details",
            "A list of all taxi ranks",
            "A printed fare chart"
        ],
        correct: 1,
        explanation: "The driver of a hackney or limousine must always carry a booking document in their vehicle showing the details of the booking."
    },
    {
        id: 43,
        category: "Regulations",
        icon: <Scale className="w-5 h-5" />,
        question: "When is a limousine EXEMPT from carrying booking documents and providing receipts?",
        options: [
            "When driving at night",
            "When used for weddings or funerals",
            "When the passenger is a family member",
            "Limousines are never exempt"
        ],
        correct: 1,
        explanation: "Booking documents and receipts are not required when a limousine is used for weddings or funerals."
    },
    {
        id: 44,
        category: "Operations",
        icon: <Info className="w-5 h-5" />,
        question: "Which detail is NOT required on a hackney/limousine booking document?",
        options: [
            "Contact details of the person booking",
            "The pickup and drop-off points",
            "The driver's home address",
            "The agreed fare"
        ],
        correct: 2,
        explanation: "Details must include the person booking, pickup/drop-off points, and the agreed fare. The driver's home address is not listed."
    },
    {
        id: 45,
        category: "Compliance",
        icon: <AlertCircle className="w-5 h-5" />,
        question: "How long must hackney and limousine drivers keep records of their trips?",
        options: [
            "Only until the end of the shift",
            "For one week",
            "They must keep records and make them available to NTA at any time",
            "Records are only required for taxis"
        ],
        correct: 2,
        explanation: "Hackney and limousine drivers must keep records of all their trips and the NTA may ask to see these at any time."
    },
    {
        id: 46,
        category: "Industry Knowledge",
        icon: <BookOpen className="w-5 h-5" />,
        question: "In what year was the 'single taximeter area' rule introduced in Ireland?",
        options: [
            "2000",
            "2006",
            "2013",
            "2024"
        ],
        correct: 1,
        explanation: "In 2006, the whole country became one single taximeter area."
    },
    {
        id: 47,
        category: "Compliance",
        icon: <AlertCircle className="w-5 h-5" />,
        question: "What can happen to a driver who breaks the rules for fares or charges?",
        options: [
            "They receive a verbal warning only",
            "They may have to pay a fixed payment penalty",
            "They are banned from the industry for life immediately",
            "Their car is impounded for 30 days"
        ],
        correct: 1,
        explanation: "If you break the rules for fares or charges, you may have to pay a fixed payment penalty for committing an offence."
    },
    {
        id: 48,
        category: "Industry Knowledge",
        icon: <BookOpen className="w-5 h-5" />,
        question: "Where can customers find information on extra charges while inside a taxi?",
        options: [
            "On the driver's ID card",
            "On the In-Vehicle Information Card",
            "By calling the Gardaí",
            "Only on the printed receipt at the end"
        ],
        correct: 1,
        explanation: "Extra charges are listed on the In-Vehicle Information Card."
    },
    {
        id: 49,
        category: "Operations",
        icon: <Car className="w-5 h-5" />,
        question: "What should a driver do if extra charges for a journey are going to be very high?",
        options: [
            "Keep it a secret until the end",
            "Make that clear to the customer before the journey starts",
            "Refuse the passenger",
            "Ask for a deposit in cash only"
        ],
        correct: 1,
        explanation: "If extra charges are going to be very high, you should make that clear to the customer before the journey."
    },
    {
        id: 50,
        category: "Regulations",
        icon: <Banknote className="w-5 h-5" />,
        question: "Under Special Rates, what is the charge for Tariff B after the first 15km/43min?",
        options: [
            "€1.72 per km",
            "€2.20 per km",
            "€2.50 per km",
            "There is no Tariff B for Special Rates"
        ],
        correct: 1,
        explanation: "Under Special rates, Tariff B is €2.20 per km or €0.78 per min."
    }
];