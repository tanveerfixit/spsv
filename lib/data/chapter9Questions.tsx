import { Scale, Car, Info, AlertCircle, BookOpen, Briefcase, TrendingUp, DollarSign, PieChart, ShieldCheck } from 'lucide-react';

export const chapter9BusinessQuestions = [
  {
    id: 1,
    category: "Operations",
    icon: <Briefcase className="w-5 h-5" />,
    question: "What is required of a driver who holds a local area hackney driver licence?",
    options: [
      "They can drive any taxi in the country",
      "They can only provide services within the specific area for which the vehicle is licensed",
      "They must own the vehicle they drive",
      "They are exempt from notifying the NTA about the vehicle they use"
    ],
    correct: 1,
    explanation: "Holders of a local area hackney driver licence are restricted to providing services only within the licensed area [1]."
  },
  {
    id: 2,
    category: "Operations",
    icon: <Car className="w-5 h-5" />,
    question: "If a vehicle owner rents their vehicle to another driver, what must they do?",
    options: [
      "Keep it a private arrangement",
      "Inform the NTA about the arrangement",
      "Charge a standard NTA-set rental fee",
      "Surrender their own driver licence"
    ],
    correct: 1,
    explanation: "Vehicle owners who rent their vehicle to another driver are required to inform the NTA of this link [2]."
  },
  {
    id: 3,
    category: "Industry Knowledge",
    icon: <Info className="w-5 h-5" />,
    question: "What does the role of an SPSV dispatch operator primarily involve?",
    options: [
      "Fixing broken taximeters",
      "Coordinating the logistics of SPSV services and taking bookings",
      "Performing vehicle suitability inspections",
      "Managing the national driver register"
    ],
    correct: 1,
    explanation: "A dispatch operator's role focuses on coordinating logistics and managing passenger bookings via phone, online, or other systems [3]."
  },
  {
    id: 4,
    category: "Business",
    icon: <PieChart className="w-5 h-5" />,
    question: "What is one of the most important decisions to make when starting or growing an SPSV business?",
    options: [
      "The colour of the vehicle",
      "Whether to work as a sole trader or set up a private limited company",
      "Which radio station to play for customers",
      "How many spare tyres to carry"
    ],
    correct: 1,
    explanation: "Choosing between a sole trader model and a private limited company is a major structural decision for any SPSV business [4]."
  },
  {
    id: 5,
    category: "Business",
    icon: <TrendingUp className="w-5 h-5" />,
    question: "How is a 'sole trader' defined in the context of the SPSV industry?",
    options: [
      "A person who only drives for one dispatch operator",
      "An individual operating a business on their own without partners or a separate legal entity",
      "A driver who does not accept cashless payments",
      "A vehicle owner who employs at least ten drivers"
    ],
    correct: 1,
    explanation: "A sole trader operates independently and is personally responsible for all aspects of the business [5]."
  },
  {
    id: 6,
    category: "Business",
    icon: <Scale className="w-5 h-5" />,
    question: "What is a sole trader personally responsible for?",
    options: [
      "Only the profits",
      "Only the vehicle maintenance",
      "All aspects including profits, losses, and liabilities",
      "Only the NTA licensing fees"
    ],
    correct: 2,
    explanation: "The sole trader model places personal responsibility for all financial and legal liabilities on the individual [5]."
  },
  {
    id: 7,
    category: "Compliance",
    icon: <ShieldCheck className="w-5 h-5" />,
    question: "What must you prove to Revenue to obtain or renew any SPSV licence?",
    options: [
      "That you have a university degree",
      "That your tax affairs are up to date",
      "That you have never had a traffic fine",
      "That you own at least two vehicles"
    ],
    correct: 1,
    explanation: "Tax compliance is a mandatory requirement for obtaining or renewing vehicle, driver, or dispatch licences [6]."
  },
  {
    id: 8,
    category: "Regulations",
    icon: <AlertCircle className="w-5 h-5" />,
    question: "Why might the NTA temporarily limit the issuing of new licences for certain types of SPSV?",
    options: [
      "To save money on paper",
      "To improve services for the public",
      "Because there are too many drivers in one county",
      "To encourage people to use buses only"
    ],
    correct: 1,
    explanation: "Temporary limits on new licences are sometimes implemented to better manage and improve public transport services [7]."
  },
  {
    id: 9,
    category: "Business",
    icon: <BookOpen className="w-5 h-5" />,
    question: "What is a primary benefit of writing a business plan?",
    options: [
      "It is required by the Gardaí to drive",
      "It helps you be clear about your goals and check business progress later",
      "It automatically guarantees a bank loan",
      "It replaces the need for an accountant"
    ],
    correct: 1,
    explanation: "A business plan serves as a roadmap for goals, financial planning, and performance tracking [8]."
  },
  {
    id: 10,
    category: "Business",
    icon: <PieChart className="w-5 h-5" />,
    question: "What should you research before starting your SPSV business?",
    options: [
      "The history of the internal combustion engine",
      "How many people need your service and how much competition exists",
      "The best local places to buy coffee",
      "The latest trends in car upholstery"
    ],
    correct: 1,
    explanation: "Market research involves identifying customer demand and evaluating the competition in your operating area [9]."
  },
  {
    id: 11,
    category: "Business",
    icon: <TrendingUp className="w-5 h-5" />,
    question: "Which group might be a target customer for an SPSV operator?",
    options: [
      "Other taxi drivers",
      "City shoppers, business clients, or people needing wheelchair services",
      "People who only use their own private cars",
      "NTA compliance officers"
    ],
    correct: 1,
    explanation: "Target customers can vary from business professionals to those with specific mobility needs or late-night travellers [9, 10]."
  },
  {
    id: 12,
    category: "Business",
    icon: <PieChart className="w-5 h-5" />,
    question: "What is a way to make your service different from other drivers?",
    options: [
      "Using a car with no branding",
      "Offering a luxury car, an eight-seater, or a wheelchair accessible car",
      "Charging more than the taximeter displays",
      "Only working on bank holidays"
    ],
    correct: 1,
    explanation: "Differentiation can be achieved through vehicle type, seating capacity, or specialized services like wheelchair accessibility [10]."
  },
  {
    id: 13,
    category: "Business",
    icon: <DollarSign className="w-5 h-5" />,
    question: "Is spotting a good opportunity enough for a successful business?",
    options: [
      "Yes, opportunity is everything",
      "No, you must also carefully figure out how much business you realistically expect to get",
      "Yes, as long as you have a new car",
      "No, only if you work for a large dispatch operator"
    ],
    correct: 1,
    explanation: "Realistic projections of business volume are essential to supplement any identified market opportunities [11]."
  },
  {
    id: 14,
    category: "Operations",
    icon: <Car className="w-5 h-5" />,
    question: "How can renting a licensed vehicle for a short time help a new driver?",
    options: [
      "It allows them to avoid paying for a driver licence",
      "It helps them learn about demand and find the best times to work without buying a car immediately",
      "It is a requirement before they can sit the Entry Test",
      "It ensures they don't have to follow NTA regulations"
    ],
    correct: 1,
    explanation: "Renting provides a low-risk way to gain practical experience and understand local market demand [12]."
  },
  {
    id: 15,
    category: "Business",
    icon: <DollarSign className="w-5 h-5" />,
    question: "What is true about the cost of running an SPSV compared to a private vehicle?",
    options: [
      "SPSVs are cheaper to maintain",
      "It may be more expensive to run and maintain an SPSV",
      "The costs are exactly the same",
      "The NTA pays for all maintenance for SPSVs"
    ],
    correct: 1,
    explanation: "High usage and strict standards often make SPSV operation more expensive than private car ownership [13, 14]."
  },
  {
    id: 16,
    category: "Business",
    icon: <TrendingUp className="w-5 h-5" />,
    question: "What is a key indicator that your SPSV business is succeeding financially?",
    options: [
      "You have many customers",
      "Your operating profit exceeds your business costs",
      "You drive more than 100km every day",
      "You use a new model of GPS"
    ],
    correct: 1,
    explanation: "Financial success is defined by generating more income than the total expenses required to run the business [15]."
  },
  {
    id: 17,
    category: "Business",
    icon: <PieChart className="w-5 h-5" />,
    question: "How often does the NTA generally review the Taxi Cost Index?",
    options: [
      "Every month",
      "Every six months",
      "About every two years",
      "Only when fares increase"
    ],
    correct: 2,
    explanation: "The Taxi Cost Index, which helps with financial planning, is typically reviewed biennially [16]."
  },
  {
    id: 18,
    category: "Business",
    icon: <DollarSign className="w-5 h-5" />,
    question: "What is a recommended way to group your business costs?",
    options: [
      "By the size of the bill",
      "By how often they happen (weekly, monthly, yearly)",
      "By the color of the receipt",
      "Alphabetically by the name of the company"
    ],
    correct: 1,
    explanation: "Grouping expenses by frequency helps in planning ahead for larger upcoming bills [17]."
  },
  {
    id: 19,
    category: "Business",
    icon: <Car className="w-5 h-5" />,
    question: "Which of the following is considered a 'start-up cost'?",
    options: [
      "Weekly fuel",
      "Purchase of a taximeter and printer",
      "Annual insurance renewal",
      "Puncture repairs"
    ],
    correct: 1,
    explanation: "Equipment like taximeters and printers are initial investments required to get the business running [17, 18]."
  },
  {
    id: 20,
    category: "Business",
    icon: <PieChart className="w-5 h-5" />,
    question: "Which of the following is listed as a 'frequent expense'?",
    options: [
      "Vehicle purchase",
      "Cleaning and valeting",
      "Driver Entry Test fee",
      "Replacement of a fire extinguisher"
    ],
    correct: 1,
    explanation: "Fuel, servicing, and cleaning are recurring costs that happen regularly during operation [18]."
  },
  {
    id: 21,
    category: "Business",
    icon: <DollarSign className="w-5 h-5" />,
    question: "Pen and paper for communication is categorized as which type of expense?",
    options: [
      "Start-up cost",
      "Frequent expense",
      "Occasional expense",
      "Yearly cost"
    ],
    correct: 2,
    explanation: "Stationery and replacement safety items are needed from time to time and are occasional costs [19]."
  },
  {
    id: 22,
    category: "Compliance",
    icon: <ShieldCheck className="w-5 h-5" />,
    question: "The NCT test fee is considered which type of cost for an SPSV operator?",
    options: [
      "Frequent expense",
      "Occasional expense",
      "Yearly cost",
      "Every five years"
    ],
    correct: 2,
    explanation: "NCT fees and annual Licence Renewal Assessments are standard yearly financial requirements [19]."
  },
  {
    id: 23,
    category: "Compliance",
    icon: <Scale className="w-5 h-5" />,
    question: "How often must the SPSV driver licence renewal fee be paid?",
    options: [
      "Every year",
      "Every two years",
      "Every five years",
      "Only once"
    ],
    correct: 2,
    explanation: "The driver licence renewal is a cost incurred every five years [20]."
  },
  {
    id: 24,
    category: "Business",
    icon: <PieChart className="w-5 h-5" />,
    question: "What determines how often a vehicle needs to be replaced?",
    options: [
      "The driver's mood",
      "Age, mileage, and condition of the car",
      "The current price of fuel",
      "How many passengers complained about the radio"
    ],
    correct: 1,
    explanation: "Vehicle replacement frequency is a 'less frequent' cost determined by age limits and wear and tear [20]."
  },
  {
    id: 25,
    category: "Business",
    icon: <DollarSign className="w-5 h-5" />,
    question: "Why should an SPSV operator set up a backup fund?",
    options: [
      "To pay for a holiday",
      "To deal with unpredictable costs like unplanned repairs",
      "To buy a second vehicle for personal use",
      "To pay NTA fines in advance"
    ],
    correct: 1,
    explanation: "A backup fund is necessary for financial security against unexpected mechanical failures or repairs [21]."
  },
  {
    id: 26,
    category: "Business",
    icon: <PieChart className="w-5 h-5" />,
    question: "What is a benefit of hiring a professional accountant?",
    options: [
      "They can drive the taxi when you are tired",
      "They may save you more money in tax than they charge in fees",
      "They handle all customer complaints for you",
      "They perform the Initial Suitability Inspection"
    ],
    correct: 1,
    explanation: "Accountants provide expert knowledge on tax credits and reliefs that can improve the business's bottom line [21, 22]."
  },
  {
    id: 27,
    category: "Business",
    icon: <PieChart className="w-5 h-5" />,
    question: "Why might you need audited accounts even if Revenue does not require them?",
    options: [
      "Because the NTA requires them monthly",
      "Many banks and lenders require them to approve loans",
      "To show them to your passengers",
      "To avoid having to use a taximeter"
    ],
    correct: 1,
    explanation: "Financial institutions often require audited records to verify business health for future credit or loans [22]."
  },
  {
    id: 28,
    category: "Business",
    icon: <TrendingUp className="w-5 h-5" />,
    question: "What does being self-employed in the SPSV industry allow you to do?",
    options: [
      "Ignore all road traffic laws",
      "Decide when and how much you want to work",
      "Set your own maximum taxi fares",
      "Operate without a driver display card"
    ],
    correct: 1,
    explanation: "Self-employment offers freedom of schedule but comes with significant legal and business responsibilities [23]."
  },
  {
    id: 29,
    category: "Compliance",
    icon: <ShieldCheck className="w-5 h-5" />,
    question: "What is one of the main reasons everyone in business must keep records?",
    options: [
      "To show them to competitors",
      "To help manage the business and submit accurate tax returns",
      "Because the car won't start without them",
      "To practice their handwriting"
    ],
    correct: 1,
    explanation: "Good record-keeping is vital for business management, tax compliance, and NTA licensing requirements [24]."
  },
  {
    id: 30,
    category: "Business",
    icon: <BookOpen className="w-5 h-5" />,
    question: "What is a simple first step toward keeping good business records?",
    options: [
      "Memorizing every trip",
      "Using a simple diary to note down income and expenditure every day",
      "Buying the most expensive computer available",
      "Asking passengers to keep records for you"
    ],
    correct: 1,
    explanation: "Daily entries in a diary ensure you don't forget financial details needed for tax and business tracking [25]."
  },
  {
    id: 31,
    category: "Business",
    icon: <Scale className="w-5 h-5" />,
    question: "Why is an online or written diary entry about an incident useful?",
    options: [
      "It helps you remember the passenger's name",
      "It is much stronger evidence than memory in court or during investigations",
      "It allows you to charge the passenger more later",
      "It is required to be displayed on the dashboard"
    ],
    correct: 1,
    explanation: "Records made at the time of an event are more reliable and legally weighted than memory [26]."
  },
  {
    id: 32,
    category: "Business",
    icon: <BookOpen className="w-5 h-5" />,
    question: "How should you divide a page in your business diary for easy tracking?",
    options: [
      "Write everything in one long list",
      "Note fares on the left and expenses (like fuel) on the right",
      "Use different coloured pens for each passenger",
      "Write on the front and back of the same page"
    ],
    correct: 1,
    explanation: "Separating income (fares) and expenses (costs) on the same page provides a clear financial overview [25, 26]."
  },
  {
    id: 33,
    category: "Business",
    icon: <DollarSign className="w-5 h-5" />,
    question: "When might you need to show your business records to a bank?",
    options: [
      "Every time you make a deposit",
      "If you want to apply for a bank loan",
      "To open a personal savings account",
      "Only if you lose your debit card"
    ],
    correct: 1,
    explanation: "Banks require financial records to assess a business's ability to repay a loan [27]."
  },
  {
    id: 34,
    category: "Business",
    icon: <Info className="w-5 h-5" />,
    question: "Which device in a taxi may record detailed information about trips?",
    options: [
      "The radio",
      "The taximeter",
      "The spare tyre",
      "The door handles"
    ],
    correct: 1,
    explanation: "Modern taximeters can store trip data that is useful for business records [27, 28]."
  },
  {
    id: 35,
    category: "Compliance",
    icon: <AlertCircle className="w-5 h-5" />,
    question: "When should you apply to renew your SPSV driver licence?",
    options: [
      "The day it expires",
      "At least six weeks before it expires",
      "Six months after it expires",
      "Whenever you have extra money"
    ],
    correct: 1,
    explanation: "Applying at least six weeks early helps avoid delays that could prevent you from working legally [28]."
  },
  {
    id: 36,
    category: "Compliance",
    icon: <Scale className="w-5 h-5" />,
    question: "What is true about driving an untaxed vehicle?",
    options: [
      "It is allowed for the first 30 days of the business",
      "It is illegal",
      "It is okay if the vehicle is also a private car",
      "Only the NTA can tax the vehicle"
    ],
    correct: 1,
    explanation: "It is a legal requirement to maintain a valid motor tax disc to operate any vehicle on the road [28]."
  },
  {
    id: 37,
    category: "Compliance",
    icon: <ShieldCheck className="w-5 h-5" />,
    question: "How early can you renew your vehicle licence?",
    options: [
      "30 days before expiry",
      "Up to 60 days before it expires",
      "90 days before expiry",
      "One year before expiry"
    ],
    correct: 1,
    explanation: "Vehicle licences can be renewed starting 60 days prior to their expiration date [29]."
  },
  {
    id: 38,
    category: "Compliance",
    icon: <Info className="w-5 h-5" />,
    question: "How long can it take for tax or NCT updates to show in the NTA system?",
    options: [
      "Instantly",
      "About 48 hours",
      "One full week",
      "One month"
    ],
    correct: 1,
    explanation: "Operators should account for a 48-hour delay for external system updates to reflect in NTA records [29]."
  },
  {
    id: 39,
    category: "Compliance",
    icon: <ShieldCheck className="w-5 h-5" />,
    question: "How long might it take for new insurance documents to arrive after changing details?",
    options: [
      "One day",
      "About a week",
      "Exactly 24 hours",
      "Insurance documents are not required for licensing"
    ],
    correct: 1,
    explanation: "The manual advises starting early because new insurance documents can take a week to arrive [29]."
  },
  {
    id: 40,
    category: "Regulations",
    icon: <AlertCircle className="w-5 h-5" />,
    question: "Which Act controls the collection and storage of personal customer information?",
    options: [
      "The Taxi Regulation Act 2013",
      "The Data Protection Act 2018",
      "The Road Traffic Act 1961",
      "The Consumer Rights Act 2022"
    ],
    correct: 1,
    explanation: "The Data Protection Act 2018 sets the rules for how personal data must be handled [29, 30]."
  },
  {
    id: 41,
    category: "Regulations",
    icon: <Scale className="w-5 h-5" />,
    question: "If you collect personal customer info, what is a restriction on its use?",
    options: [
      "You can sell it to advertising companies",
      "You cannot share it with anyone and must use it only for the reason it was collected",
      "You must post it on your website",
      "You must share it with other taxi drivers"
    ],
    correct: 1,
    explanation: "Data protection laws strictly prohibit unauthorized sharing or secondary usage of personal customer data [30]."
  },
  {
    id: 42,
    category: "Business",
    icon: <TrendingUp className="w-5 h-5" />,
    question: "What is another common term for promoting your SPSV service?",
    options: [
      "Licensing",
      "Marketing",
      "Compliance",
      "Accounting"
    ],
    correct: 1,
    explanation: "Marketing is the ongoing process of planning and promoting your business services [30]."
  },
  {
    id: 43,
    category: "Business",
    icon: <PieChart className="w-5 h-5" />,
    question: "When should marketing for your business take place?",
    options: [
      "Only before you start the business",
      "Only when business is slow",
      "Continuously, even after the business is up and running",
      "Only on weekends"
    ],
    correct: 2,
    explanation: "To secure long-term success, a business must continue to promote itself consistently [31]."
  },
  {
    id: 44,
    category: "Business",
    icon: <TrendingUp className="w-5 h-5" />,
    question: "What is considered one of the best forms of advertising?",
    options: [
      "A very expensive billboard",
      "A satisfied customer who recommends you",
      "A fast car",
      "Having a loud horn"
    ],
    correct: 1,
    explanation: "Word-of-mouth recommendations from happy customers are highly effective and free [32]."
  },
  {
    id: 45,
    category: "Business",
    icon: <Briefcase className="w-5 h-5" />,
    question: "With which local business might an SPSV operator partner for airport trips?",
    options: [
      "A local grocery shop",
      "A hotel",
      "A primary school",
      "A car wash"
    ],
    correct: 1,
    explanation: "Hotels often recommend SPSV services to their guests for transport to hubs like airports [32]."
  },
  {
    id: 46,
    category: "Business",
    icon: <TrendingUp className="w-5 h-5" />,
    question: "How can you encourage customers to call you again using your receipts?",
    options: [
      "By writing a joke on them",
      "By printing your contact details on them",
      "By charging less every second trip",
      "By asking for their email address"
    ],
    correct: 1,
    explanation: "Including contact information on receipts makes it easy for customers to secure repeat bookings [32, 33]."
  },
  {
    id: 47,
    category: "Business",
    icon: <PieChart className="w-5 h-5" />,
    question: "What is an example of an online marketing strategy for an SPSV business?",
    options: [
      "Search Engine Optimisation (SEO)",
      "Buying more petrol",
      "Cleaning the vehicle's interior",
      "Passing the Area Knowledge Test"
    ],
    correct: 0,
    explanation: "SEO, email marketing, and pay-per-click advertising are standard digital promotion tools [33]."
  },
  {
    id: 48,
    category: "Business",
    icon: <TrendingUp className="w-5 h-5" />,
    question: "For which events might you use special promotional flyers?",
    options: [
      "Going to the grocery store",
      "Weddings or school debs/proms",
      "Driving home after a shift",
      "Visiting the bank"
    ],
    correct: 1,
    explanation: "Specialized events like weddings provide targeted opportunities for marketing through leaflets and flyers [33]."
  },
  {
    id: 49,
    category: "Business",
    icon: <PieChart className="w-5 h-5" />,
    question: "What information about yourself should be included in a business plan?",
    options: [
      "Your high school grades",
      "Your background and work experience",
      "Your favorite type of car",
      "Your home address only"
    ],
    correct: 1,
    explanation: "Describing your background helps define the starting point and vision for the business [34]."
  },
  {
    id: 50,
    category: "Business",
    icon: <PieChart className="w-5 h-5" />,
    question: "What is a decision regarding your vehicle mentioned in the business plan section?",
    options: [
      "Whether to own your own vehicle or rent one from another holder",
      "What color to paint the engine",
      "Whether to install a television for the driver",
      "How many air fresheners to use"
    ],
    correct: 0,
    explanation: "Determining whether to invest in ownership or use a rental model is a core part of the business plan [9]."
  }
];