import { Scale, Info, BookOpen, Car, AlertCircle, Shield } from 'lucide-react';

export const chapter1IndustryQuestions = [
  {
    id: 1,
    category: "Regulations",
    icon: <Scale className="w-5 h-5" />,
    question: "When was the National Transport Authority (NTA) established?",
    options: [
      "1 January 2011",
      "1 December 2009",
      "15 August 2013",
      "1 December 2016"
    ],
    correct: 1,
    explanation: "The NTA was established by the Minister for Transport on 1 December 2009."
  },
  {
    id: 2,
    category: "Industry Knowledge",
    icon: <BookOpen className="w-5 h-5" />,
    question: "Which previous regulatory organisation became part of the NTA in 2011?",
    options: [
      "The Road Safety Authority",
      "The Department of Transport",
      "The Commission for Taxi Regulation",
      "An Garda Síochána"
    ],
    correct: 2,
    explanation: "The Commission for Taxi Regulation became part of the NTA in 2011."
  },
  {
    id: 3,
    category: "Licensing",
    icon: <Info className="w-5 h-5" />,
    question: "What is the primary role of the NTA in the SPSV industry?",
    options: [
      "Providing insurance to drivers",
      "It is the licensing authority for Small Public Service Vehicles",
      "Manufacturing taximeters",
      "Building taxi ranks"
    ],
    correct: 1,
    explanation: "The NTA is the licensing authority for Small Public Service Vehicles (SPSVs) and their drivers."
  },
  {
    id: 4,
    category: "Regulations",
    icon: <Scale className="w-5 h-5" />,
    question: "The NTA operates under the control and guidance of which government department?",
    options: [
      "Department of Justice",
      "Department of Social Protection",
      "Department of Transport",
      "The Health Service Executive"
    ],
    correct: 2,
    explanation: "The NTA is a statutory non-commercial body operating under the Department of Transport."
  },
  {
    id: 5,
    category: "Industry Knowledge",
    icon: <BookOpen className="w-5 h-5" />,
    question: "How many categories of Small Public Service Vehicles (SPSVs) are there?",
    options: [
      "Three",
      "Four",
      "Six",
      "Eight"
    ],
    correct: 2,
    explanation: "There are six categories: Taxis, Wheelchair accessible taxis, Limousines, Hackneys, Wheelchair accessible hackneys, and Local area hackneys."
  },
  {
    id: 6,
    category: "Licensing",
    icon: <Info className="w-5 h-5" />,
    question: "Who is responsible for providing and managing SPSV vehicle licences?",
    options: [
      "An Garda Síochána",
      "The Road Safety Authority",
      "The NTA",
      "Local Authorities"
    ],
    correct: 2,
    explanation: "Vehicle licences are provided and managed exclusively by the NTA."
  },
  {
    id: 7,
    category: "Licensing",
    icon: <Info className="w-5 h-5" />,
    question: "Who provides SPSV driver licences with the support of the NTA?",
    options: [
      "The Department of Transport",
      "An Garda Síochána",
      "The Revenue Commissioners",
      "The Health & Safety Authority"
    ],
    correct: 1,
    explanation: "Driver licences are provided by An Garda Síochána with the support of the NTA."
  },
  {
    id: 8,
    category: "Industry Knowledge",
    icon: <BookOpen className="w-5 h-5" />,
    question: "What is a dispatch operator?",
    options: [
      "A person who only drives a taxi",
      "A mechanic who installs taximeters",
      "An individual or organisation that provides a booking service for SPSVs",
      "A Licensing Inspector"
    ],
    correct: 2,
    explanation: "An SPSV dispatch operator provides a booking service or facility for passengers to arrange SPSV journeys."
  },
  {
    id: 9,
    category: "Operations",
    icon: <Car className="w-5 h-5" />,
    question: "A person with a standard SPSV driver licence is licensed to drive which vehicles?",
    options: [
      "Only taxis",
      "Only hackneys",
      "Any category of SPSV",
      "Only vehicles they personally own"
    ],
    correct: 2,
    explanation: "A person with a standard SPSV driver licence is licensed to drive any category of SPSV."
  },
  {
    id: 10,
    category: "Licensing",
    icon: <Info className="w-5 h-5" />,
    question: "A local area hackney driver licence allows a person to drive which vehicles?",
    options: [
      "Any SPSV in their home county",
      "Only local area hackneys",
      "Taxis and limousines",
      "Only wheelchair accessible vehicles"
    ],
    correct: 1,
    explanation: "The holder of a local area hackney driver licence is licensed to drive only local area hackneys."
  },
  {
    id: 11,
    category: "Compliance",
    icon: <AlertCircle className="w-5 h-5" />,
    question: "Is it legal to work in the SPSV industry without a correct licence?",
    options: [
      "Yes, for a 30-day trial period",
      "Only if you are an employee",
      "No, it is against the law to work without the correct licence",
      "Only if the vehicle is already licensed"
    ],
    correct: 2,
    explanation: "It is against the law to work in the SPSV industry without the correct driver, vehicle, or dispatch operator licence."
  },
  {
    id: 12,
    category: "Compliance",
    icon: <AlertCircle className="w-5 h-5" />,
    question: "Who monitors and enforces SPSV regulations in Ireland?",
    options: [
      "NTA's compliance team and An Garda Síochána",
      "Private security companies",
      "Local councils only",
      "The Department of Social Protection"
    ],
    correct: 0,
    explanation: "NTA’s dedicated compliance team works together with An Garda Síochána to monitor and enforce SPSV regulations."
  },
  {
    id: 13,
    category: "Regulations",
    icon: <Scale className="w-5 h-5" />,
    question: "Who chooses the members of the Advisory Committee on Small Public Service Vehicles?",
    options: [
      "The NTA Board",
      "The Minister for Transport",
      "The Garda Commissioner",
      "The Chief Executive of the RSA"
    ],
    correct: 1,
    explanation: "The Advisory Committee, also known as the Taxi Advisory Committee, is chosen by the Minister for Transport."
  },
  {
    id: 14,
    category: "Regulations",
    icon: <Scale className="w-5 h-5" />,
    question: "Does the NTA have to follow the advice given by the Advisory Committee?",
    options: [
      "Yes, the advice is legally binding",
      "Only if the Minister approves it",
      "No, the NTA can decide whether to take or act on the advice",
      "Only if the committee votes unanimously"
    ],
    correct: 2,
    explanation: "The NTA can use the advice to help make decisions, but it can decide whether or not to take or act on that advice."
  },
  {
    id: 15,
    category: "Industry Knowledge",
    icon: <BookOpen className="w-5 h-5" />,
    question: "Which of the following groups is represented on the Advisory Committee?",
    options: [
      "International airlines",
      "Oil and gas companies",
      "People with disabilities",
      "Automobile manufacturers"
    ],
    correct: 2,
    explanation: "The committee represents many groups, including SPSV operators, local authorities, Gardaí, and people with disabilities."
  },
  {
    id: 16,
    category: "Operations",
    icon: <Car className="w-5 h-5" />,
    question: "What unique transport service do SPSVs provide compared to other public transport?",
    options: [
      "They are the cheapest option",
      "They follow a fixed schedule",
      "They provide personalized, door-to-door service 24/7/365",
      "They only operate in urban areas"
    ],
    correct: 2,
    explanation: "SPSVs are the only public transport service providing personalized door-to-door service, 24 hours a day, every day of the year."
  },
  {
    id: 17,
    category: "Licensing",
    icon: <Info className="w-5 h-5" />,
    question: "How many SPSV categories can a vehicle be licensed in at one time?",
    options: [
      "One",
      "Two",
      "Three",
      "As many as the owner wants"
    ],
    correct: 0,
    explanation: "A vehicle may only be licensed in one SPSV category at any time."
  },
  {
    id: 18,
    category: "Compliance",
    icon: <AlertCircle className="w-5 h-5" />,
    question: "What can the NTA do if it finds a breach of SPSV legislation?",
    options: [
      "Nothing, they must call the police",
      "They can fine or prosecute the breach",
      "They can seize the vehicle immediately",
      "They can only issue a verbal warning"
    ],
    correct: 1,
    explanation: "NTA investigates complaints and, when necessary, fines or prosecutes any breach of the law or SPSV legislation."
  },
  {
    id: 19,
    category: "Regulations",
    icon: <Scale className="w-5 h-5" />,
    question: "Which Act gives the NTA duties to manage the taxi industry?",
    options: [
      "The Road Traffic Act 1961",
      "The Taxi Regulation Acts 2013 and 2016",
      "The Public Transport Act 2005",
      "The Companies Act 2014"
    ],
    correct: 1,
    explanation: "The NTA has duties assigned under the Taxi Regulation Acts 2013 and 2016 and other relevant regulations."
  },
  {
    id: 20,
    category: "Operations",
    icon: <Car className="w-5 h-5" />,
    question: "Where is a taxi driver licensed to pick up passengers?",
    options: [
      "Anywhere in Ireland",
      "Only at official taxi ranks",
      "In the county or counties where they have been given a licence",
      "Only within 10km of their home address"
    ],
    correct: 2,
    explanation: "When driving a taxi, the driver is only licensed to pick up passengers in the county or counties where they have been given a licence."
  },
  {
    id: 21,
    category: "Compliance",
    icon: <AlertCircle className="w-5 h-5" />,
    question: "Which of the following is a benefit of SPSV regulation?",
    options: [
      "It makes insurance cheaper for everyone",
      "It ensures legally approved operators do not have to compete with unapproved ones",
      "It removes the need for driver training",
      "It allows drivers to set their own fares"
    ],
    correct: 1,
    explanation: "Regulation ensures equal opportunity so that legally approved operators do not compete for business with people who haven't met standards."
  },
  {
    id: 22,
    category: "Industry Knowledge",
    icon: <BookOpen className="w-5 h-5" />,
    question: "What is required regarding tax clearance for an SPSV licence?",
    options: [
      "You only need to pay tax at the end of the year",
      "You must maintain tax clearance status throughout the period of your licence",
      "Tax clearance is only for vehicle owners, not drivers",
      "The NTA pays the tax for the driver"
    ],
    correct: 1,
    explanation: "Drivers must be up to date in their tax affairs and maintain tax clearance status throughout the period of their licence."
  },
  {
    id: 23,
    category: "Operations",
    icon: <Car className="w-5 h-5" />,
    question: "What is a 'driver to vehicle link'?",
    options: [
      "The physical key for the vehicle",
      "The contract between a driver and a dispatch operator",
      "Providing the NTA with details of the specific SPSV vehicle you are driving",
      "A GPS tracking device"
    ],
    correct: 2,
    explanation: "At all times, you need to provide NTA with details of the SPSV vehicle you are driving; this record is available to the public."
  },
  {
    id: 24,
    category: "Industry Knowledge",
    icon: <BookOpen className="w-5 h-5" />,
    question: "What is the NTA's Skills Development Programme designed for?",
    options: [
      "Teaching drivers how to fix car engines",
      "Helping drivers develop everyday skills needed to work in the industry",
      "Providing advanced stunt driving courses",
      "Training drivers to become Licensing Inspectors"
    ],
    correct: 1,
    explanation: "The programme is designed to help you develop the set of everyday skills you need to work in the SPSV industry."
  },
  {
    id: 25,
    category: "Licensing",
    icon: <Info className="w-5 h-5" />,
    question: "What are the two modules of the SPSV Driver Entry Test?",
    options: [
      "Driving Skills and First Aid",
      "Mechanical Knowledge and Navigation",
      "Industry Knowledge and Area Knowledge",
      "Safeguarding and Business Management"
    ],
    correct: 2,
    explanation: "The entry test has two modules: Industry Knowledge and Area Knowledge (county-specific)."
  },
  {
    id: 26,
    category: "Industry Knowledge",
    icon: <BookOpen className="w-5 h-5" />,
    question: "Which two eLearning modules must be completed after passing the Driver Entry Test?",
    options: [
      "Taxation and Insurance",
      "Safeguarding and Disability Awareness",
      "Customer Service and Vehicle Maintenance",
      "Route Planning and First Aid"
    ],
    correct: 1,
    explanation: "Once you pass the entry test, you must complete the free online Safeguarding and Disability Awareness modules."
  },
  {
    id: 27,
    category: "Licensing",
    icon: <Info className="w-5 h-5" />,
    question: "When must an existing driver take a new Area Knowledge Test?",
    options: [
      "Every year",
      "If they want to operate in a different county than the one originally licensed",
      "Only if they buy a new car",
      "If they change their home address"
    ],
    correct: 1,
    explanation: "A driver must pass the area knowledge module for any additional area they wish to stand or ply for hire in."
  },
  {
    id: 28,
    category: "Compliance",
    icon: <AlertCircle className="w-5 h-5" />,
    question: "How many complaints about area knowledge in three years can trigger a mandatory test?",
    options: [
      "One complaint",
      "Two complaints",
      "Three or more complaints",
      "Five complaints"
    ],
    correct: 2,
    explanation: "NTA can ask you to pass the Area Knowledge Test if they receive three or more complaints about your area knowledge within three years."
  },
  {
    id: 29,
    category: "Industry Knowledge",
    icon: <BookOpen className="w-5 h-5" />,
    question: "What is the 'national register' in the SPSV industry?",
    options: [
      "A list of all passengers who use taxis",
      "The official list of SPSV licences kept by the NTA",
      "A record of all traffic accidents in Ireland",
      "The NTA's financial payroll"
    ],
    correct: 1,
    explanation: "Under Section 18 of the Taxi Regulation Act, NTA must keep an official list of licences known as the national register."
  },
  {
    id: 30,
    category: "Regulations",
    icon: <Scale className="w-5 h-5" />,
    question: "Is the national register of licences accessible to the general public?",
    options: [
      "Yes, anyone can view it online",
      "No, it is not accessible to the wider public",
      "Only if you pay a fee",
      "Only for taxi licences, not limousines"
    ],
    correct: 1,
    explanation: "NTA allows other agencies to access it for enforcement, but the register is not accessible to the wider public."
  },
  {
    id: 31,
    category: "Licensing",
    icon: <Info className="w-5 h-5" />,
    question: "What information is NOT kept on the national register for licence holders?",
    options: [
      "The holder's name and address",
      "The date the licence was given",
      "The holder's personal bank account balance",
      "Details of any licence suspension"
    ],
    correct: 2,
    explanation: "The register includes name, address, date given, and suspension details, but not personal financial records."
  },
  {
    id: 32,
    category: "Licensing",
    icon: <Info className="w-5 h-5" />,
    question: "What vehicle details are recorded on the national register?",
    options: [
      "The vehicle's fuel efficiency rating",
      "The licence number and registration number",
      "The names of all previous passengers",
      "The vehicle's service history from private garages"
    ],
    correct: 1,
    explanation: "The register includes the vehicle licence number, registration number, category, and details of any vehicle changes."
  },
  {
    id: 33,
    category: "Licensing",
    icon: <Info className="w-5 h-5" />,
    question: "What driver information is included on the national register?",
    options: [
      "Driver licence number, photograph, and licensed counties",
      "The driver's medical history",
      "The driver's high school records",
      "A list of the driver's hobbies"
    ],
    correct: 0,
    explanation: "For driver licences, the register includes the licence number, photograph, and the county or counties where they are licensed."
  },
  {
    id: 34,
    category: "Operations",
    icon: <Car className="w-5 h-5" />,
    question: "Which of these is a requirement for 'getting an SPSV on the road'?",
    options: [
      "A valid insurance certificate for SPSV use",
      "A degree in transport logistics",
      "Owning at least three vehicles",
      "Having a private parking spot"
    ],
    correct: 0,
    explanation: "To drive an SPSV, the vehicle must be insured specifically to operate as an SPSV."
  },
  {
    id: 35,
    category: "Industry Knowledge",
    icon: <BookOpen className="w-5 h-5" />,
    question: "What does a roadworthiness certificate for an SPSV refer to?",
    options: [
      "A letter from a mechanic",
      "A current NCT certificate",
      "The manufacturer's warranty",
      "A valid insurance disc"
    ],
    correct: 1,
    explanation: "A valid roadworthiness certificate means the vehicle must have a current National Car Test (NCT) certificate."
  },
  {
    id: 36,
    category: "Regulations",
    icon: <Scale className="w-5 h-5" />,
    question: "One of the NTA's objectives is to encourage competition regarding what?",
    options: [
      "The best car colours",
      "Fares, standards, and customer satisfaction",
      "Who can drive the fastest",
      "The number of apps a driver uses"
    ],
    correct: 1,
    explanation: "NTA encourages and supports competition for SPSV services and standards including pricing, fares, and customer satisfaction."
  },
  {
    id: 37,
    category: "Industry Knowledge",
    icon: <BookOpen className="w-5 h-5" />,
    question: "Why does the NTA work closely with local councils and An Garda Síochána?",
    options: [
      "To help them buy new vehicles",
      "To ensure SPSV issues are included in national and regional policy development",
      "To share the costs of licensing",
      "To allow them to drive taxis for free"
    ],
    correct: 1,
    explanation: "NTA works with various groups to ensure SPSV services are suitable and included in policy development at all levels."
  },
  {
    id: 38,
    category: "Compliance",
    icon: <Shield className="w-5 h-5" />,
    question: "What is the purpose of the commendation scheme mentioned in the manual?",
    options: [
      "To give drivers free fuel",
      "To recognize drivers who deliver high-quality service",
      "To allow drivers to skip inspections",
      "To lower the cost of a licence"
    ],
    correct: 1,
    explanation: "The NTA provides a commendation scheme for SPSV drivers who deliver high-quality service."
  },
  {
    id: 39,
    category: "Industry Knowledge",
    icon: <BookOpen className="w-5 h-5" />,
    question: "The NTA objective 'Promote progress and innovation' involves what?",
    options: [
      "Buying more petrol cars",
      "Support and investment in the industry",
      "Reducing the number of licences",
      "Removing all regulations"
    ],
    correct: 1,
    explanation: "NTA aims to improve services and promote progress and innovation through support and investment."
  },
  {
    id: 40,
    category: "Regulations",
    icon: <Scale className="w-5 h-5" />,
    question: "Which Act assigned duties to the NTA to manage the regulatory framework for SPSVs?",
    options: [
      "The Taxi Regulation Act 2013",
      "The Transport Act 1932",
      "The Road Traffic Act 2004",
      "The Finance Act 2020"
    ],
    correct: 0,
    explanation: "The NTA has duties assigned under the Taxi Regulation Acts 2013 and 2016."
  },
  {
    id: 41,
    category: "Industry Knowledge",
    icon: <BookOpen className="w-5 h-5" />,
    question: "What does 'Affordable high-quality services' refer to in NTA objectives?",
    options: [
      "Making taxis free for everyone",
      "Supporting services that are high quality and meet customer needs at a fair price",
      "Only licensing expensive luxury cars",
      "Reducing driver wages"
    ],
    correct: 1,
    explanation: "One NTA objective is to promote and support the provision of affordable high-quality services delivered by SPSVs."
  },
  {
    id: 42,
    category: "Compliance",
    icon: <Shield className="w-5 h-5" />,
    question: "Who investigates complaints from the public about the SPSV industry?",
    options: [
      "The Department of Transport",
      "The NTA",
      "The vehicle manufacturer",
      "Local newspapers"
    ],
    correct: 1,
    explanation: "The NTA investigates complaints from the public regarding the industry."
  },
  {
    id: 43,
    category: "Industry Knowledge",
    icon: <BookOpen className="w-5 h-5" />,
    question: "Which authority is responsible for legal metrology and taximeter verification?",
    options: [
      "An Garda Síochána",
      "National Standards Authority of Ireland Legal Metrology Service",
      "The Revenue Commissioners",
      "The Office of the Ombudsman"
    ],
    correct: 1,
    explanation: "The National Standards Authority of Ireland Legal Metrology Service is an example of a governing body the NTA works with."
  },
  {
    id: 44,
    category: "Regulations",
    icon: <Scale className="w-5 h-5" />,
    question: "What is one way the NTA helps connect taxi services into the public transport system?",
    options: [
      "By giving taxi drivers bus keys",
      "By managing the placement of taxi services into the wider public transport system",
      "By requiring all taxis to be buses",
      "By making all trains stop at taxi ranks"
    ],
    correct: 1,
    explanation: "One NTA objective is to help increase the connection and placement of taxi services into the public transport system."
  },
  {
    id: 45,
    category: "Industry Knowledge",
    icon: <BookOpen className="w-5 h-5" />,
    question: "Regulation in the SPSV industry aims to grow public confidence. How?",
    options: [
      "By removing all taxes",
      "By having a set of clear standards and rules that are checked and followed",
      "By banning all other forms of transport",
      "By giving passengers free rides"
    ],
    correct: 1,
    explanation: "Customers have greater confidence because there is a set of clear standards and rules that are checked and followed."
  },
  {
    id: 46,
    category: "Industry Knowledge",
    icon: <BookOpen className="w-5 h-5" />,
    question: "What is an 'SPSV register' essentially?",
    options: [
      "A cash machine in the car",
      "A licence database",
      "A list of car repair shops",
      "A map of all taxi ranks"
    ],
    correct: 1,
    explanation: "The National SPSV registers are the licence databases for the industry."
  },
  {
    id: 47,
    category: "Operations",
    icon: <Car className="w-5 h-5" />,
    question: "If a driver is employed by another person, do they still need an SPSV driver licence?",
    options: [
      "No, only the owner needs one",
      "Yes, they must have a valid SPSV driver licence",
      "Only if they drive a taxi",
      "Only if they work at night"
    ],
    correct: 1,
    explanation: "To drive an SPSV, you must have a valid SPSV driver licence in addition to your regular licence, even if you are an employee."
  },
  {
    id: 48,
    category: "Industry Knowledge",
    icon: <BookOpen className="w-5 h-5" />,
    question: "Where can you find further information on SPSV policies and the Advisory Committee?",
    options: [
      "On social media only",
      "At a local library",
      "On the NTA website: www.nationaltransport.ie",
      "In the daily newspaper"
    ],
    correct: 2,
    explanation: "Detailed information on policies and the committee is available on the NTA's official website."
  },
  {
    id: 49,
    category: "Operations",
    icon: <Car className="w-5 h-5" />,
    question: "In the context of 'getting an SPSV on the road', what must be done regarding insurance?",
    options: [
      "The driver needs health insurance",
      "The vehicle must be insured specifically to operate as an SPSV",
      "Insurance is optional if you drive carefully",
      "The NTA provides the insurance certificate"
    ],
    correct: 1,
    explanation: "A valid insurance certificate stating the vehicle is insured to operate as an SPSV is mandatory."
  },
  {
    id: 50,
    category: "Compliance",
    icon: <AlertCircle className="w-5 h-5" />,
    question: "What happens if NTA receives three complaints about your area knowledge in three years?",
    options: [
      "Your licence is automatically cancelled",
      "You are required to pass the Area Knowledge Test before renewal",
      "You receive a free GPS device",
      "You must pay a €5,000 fine"
    ],
    correct: 1,
    explanation: "If there are three or more complaints about area knowledge within three years, the NTA can require you to pass the Area Knowledge Test again."
  }
];