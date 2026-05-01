import { Scale, Info, BookOpen, Car, AlertCircle, Shield } from 'lucide-react';

export const chapter4ExamQuestions = [
    {
        id: 1,
        category: "Licensing",
        icon: <Scale className="w-5 h-5" />,
    question: "How many vehicles can be associated with a single SPSV licence at any one time?",
        options: [
            "Two vehicles",
            "One vehicle",
            "Up to three vehicles",
            "Unlimited vehicles if owned by the same company"
        ],
        correct: 1,
        explanation: "According to the licensing rules, only one vehicle can be associated with a licence at any time."
    },
    {
        id: 2,
        category: "Licensing",
        icon: <Scale className="w-5 h-5" />,
    question: "Can an SPSV vehicle be licensed in more than one category simultaneously?",
        options: [
            "Yes, if it meets all standards",
            "Only for taxi and limousine categories",
            "No, a vehicle can only be licensed in one category at a time",
            "Yes, but only for wheelchair accessible categories"
        ],
        correct: 2,
        explanation: "The regulations state that a vehicle can only be licensed in one SPSV category at a time."
    },
    {
        id: 3,
        category: "Licensing",
        icon: <Info className="w-5 h-5" />,
    question: "What is the consequence if a company holding an SPSV licence is sold or taken over?",
        options: [
            "The licence is transferred to the new owner",
            "The licence remains valid for 6 months",
            "The licence is automatically revoked",
            "The licence must be renewed within 30 days"
        ],
        correct: 2,
        explanation: "If the company holding the licence is sold or taken over, the licence is automatically revoked."
    },
    {
        id: 4,
        category: "Licensing",
        icon: <Scale className="w-5 h-5" />,
    question: "Is it permitted to sell an SPSV vehicle licence?",
        options: [
            "Yes, with NTA approval",
            "Only if the vehicle is sold with it",
            "No, a vehicle licence cannot be sold",
            "Only for taxi licences"
        ],
        correct: 2,
        explanation: "A vehicle licence cannot be sold; change of ownership is only possible upon the death of the holder."
    },
    {
        id: 5,
        category: "Industry Knowledge",
        icon: <BookOpen className="w-5 h-5" />,
    question: "How many steps are involved in the application process for an SPSV licence?",
        options: [
            "Three steps",
            "Four steps",
            "Five steps",
            "Six steps"
        ],
        correct: 2,
        explanation: "The manual outlines five specific steps to apply for and obtain an SPSV licence."
    },
    {
        id: 6,
        category: "Vehicle Standards",
        icon: <Car className="w-5 h-5" />,
    question: "What is the maximum age of an NCT certificate for an Initial Suitability Inspection?",
        options: [
            "30 days",
            "60 days",
            "90 days",
            "180 days"
        ],
        correct: 2,
        explanation: "The NCT certificate must be issued no more than 90 days before the Initial Suitability Inspection."
    },
    {
        id: 7,
        category: "Licensing",
        icon: <Info className="w-5 h-5" />,
    question: "Which immigration status prohibits a person from holding an SPSV vehicle licence?",
        options: [
            "Stamp 4",
            "Stamp 1",
            "Immigration Stamp 2 (student visa)",
            "EU Citizenship"
        ],
        correct: 2,
        explanation: "Holders of an Immigration Stamp 2 (student visa) are not permitted to hold an SPSV vehicle licence or work as a taxi driver."
    },
    {
        id: 8,
        category: "Industry Knowledge",
        icon: <BookOpen className="w-5 h-5" />,
    question: "What is the name of the form used to apply for a new vehicle licence?",
        options: [
            "Form S15N",
            "Form VL1",
            "Form SPSV1",
            "Form TX1"
        ],
        correct: 1,
        explanation: "To apply for a new vehicle licence, applicants must complete Form VL1."
    },
    {
        id: 9,
        category: "Licensing",
        icon: <Scale className="w-5 h-5" />,
    question: "What document must be included with an application for a wheelchair accessible vehicle licence?",
        options: [
            "A copy of the Technical Assessor's Full Report",
            "An extra insurance certificate",
            "A letter from a medical doctor",
            "A specialized NCT certificate"
        ],
        correct: 0,
        explanation: "Applicants for a wheelchair accessible vehicle licence must include a copy of the Technical Assessor's Full Report."
    },
    {
        id: 10,
        category: "Licensing",
        icon: <Info className="w-5 h-5" />,
    question: "By signing the VL1 form, what does a non-Irish citizen confirm?",
        options: [
            "They have lived in Ireland for 5 years",
            "They have permission to be in the State and be self-employed",
            "They have a valid Irish driving licence",
            "They have no criminal record in their home country"
        ],
        correct: 1,
        explanation: "Signing the form confirms permission to be in the State and operate a business or be self-employed."
    },
    {
        id: 11,
        category: "Operations",
        icon: <Info className="w-5 h-5" />,
    question: "What is the typical processing time for a complete SPSV application by the NTA?",
        options: [
            "1 to 2 working days",
            "5 to 10 working days",
            "14 to 21 working days",
            "30 working days"
        ],
        correct: 1,
        explanation: "If all information is received, the NTA typically processes the application within 5 to 10 working days."
    },
    {
        id: 12,
        category: "Licensing",
        icon: <Info className="w-5 h-5" />,
    question: "How long is a Conditional Offer letter valid for?",
        options: [
            "30 days",
            "60 days",
            "90 days",
            "120 days"
        ],
        correct: 2,
        explanation: "The Conditional Offer letter is valid for 90 days from the date of approval."
    },
    {
        id: 13,
        category: "Licensing",
        icon: <AlertCircle className="w-5 h-5" />,
    question: "Is a Conditional Offer letter considered a valid licence to operate an SPSV?",
        options: [
            "Yes, for 90 days",
            "Only while waiting for an inspection",
            "No, it is not a licence to operate the vehicle",
            "Only if the vehicle is already branded"
        ],
        correct: 2,
        explanation: "The Conditional Offer is not a licence to operate the vehicle as an SPSV."
    },
    {
        id: 14,
        category: "Safety",
        icon: <Shield className="w-5 h-5" />,
    question: "What is the minimum capacity for a fire extinguisher carried in an SPSV?",
        options: [
            "1 Kg of dry powder",
            "2 Kg of dry powder or equivalent",
            "5 Kg of foam",
            "Any size as long as it is EN3 compliant"
        ],
        correct: 1,
        explanation: "All SPSVs must carry a fire extinguisher with at least 2 Kg of dry powder or equivalent meeting EN3 standards."
    },
    {
        id: 15,
        category: "Safety",
        icon: <Shield className="w-5 h-5" />,
    question: "Which standard must an SPSV first-aid kit meet?",
        options: [
            "ISO 9001",
            "EN471",
            "DIN13164",
            "ECE Regulation 27"
        ],
        correct: 2,
        explanation: "The first-aid kit must meet the DIN13164 standard or be recommended by the Health & Safety Authority."
    },
    {
        id: 16,
        category: "Safety",
        icon: <Shield className="w-5 h-5" />,
    question: "What standard must the high-visibility reflective safety vest in an SPSV meet?",
        options: [
            "DIN13164",
            "EN471",
            "EN3",
            "ECE Regulation 27"
        ],
        correct: 1,
        explanation: "The high-visibility reflective safety vest must meet EN471 standards."
    },
    {
        id: 17,
        category: "Safety",
        icon: <Shield className="w-5 h-5" />,
    question: "What equipment must be carried to communicate with passengers who have difficulty speaking or understanding?",
        options: [
            "A digital translator",
            "A sign language chart",
            "A pen and paper",
            "A pre-recorded audio guide"
        ],
        correct: 2,
        explanation: "A pen and paper must be carried to communicate with passengers who have difficulty understanding or speaking."
    },
    {
        id: 18,
        category: "Regulations",
        icon: <AlertCircle className="w-5 h-5" />,
    question: "Are electronic advertising signs allowed on the outside of an SPSV?",
        options: [
            "Yes, if they are below a certain brightness",
            "Only for taxis",
            "No, unless NTA approves them in writing",
            "Yes, but only on the roof"
        ],
        correct: 2,
        explanation: "Electronic advertising signs visible from outside are prohibited unless approved in writing by the NTA."
    },
    {
        id: 19,
        category: "Vehicle Standards",
        icon: <Car className="w-5 h-5" />,
    question: "Where is the best place to install a taximeter in a vehicle?",
        options: [
            "In the glove compartment",
            "On the driver's side door",
            "The middle or central area above the dashboard",
            "Under the driver's seat"
        ],
        correct: 2,
        explanation: "The best place to install the taximeter is in the middle or central area above the dashboard."
    },
    {
        id: 20,
        category: "Vehicle Standards",
        icon: <Car className="w-5 h-5" />,
    question: "Which authority is responsible for verifying and sealing taximeters?",
        options: [
            "The NTA",
            "An Garda Síochána",
            "The Legal Metrology Service",
            "The Road Safety Authority"
        ],
        correct: 2,
        explanation: "The Legal Metrology Service is responsible for checking and sealing taximeters to ensure they meet legal requirements."
    },
    {
        id: 21,
        category: "Operations",
        icon: <Car className="w-5 h-5" />,
    question: "What information must be included in the branding on taxi front doors?",
        options: [
            "The driver's name",
            "The vehicle's licence number",
            "The dispatch operator's logo",
            "The fare structure"
        ],
        correct: 1,
        explanation: "Taxi branding must include the vehicle's licence number."
    },
    {
        id: 22,
        category: "Industry Knowledge",
        icon: <BookOpen className="w-5 h-5" />,
    question: "What words are required on a regulation taxi roof sign?",
        options: [
            "FOR HIRE or BUSY",
            "TAXI or TACSAÍ",
            "CAB or CAR",
            "Any word approved by the driver"
        ],
        correct: 1,
        explanation: "The roof sign must show the word ‘TAXI’ or ‘TACSAÍ’."
    },
    {
        id: 23,
        category: "Operations",
        icon: <Info className="w-5 h-5" />,
    question: "Under what condition may a taxi roof sign be placed length-ways?",
        options: [
            "When the taxi is not for hire",
            "For journeys likely to exceed 30 kilometres",
            "When the vehicle is parked at a rank",
            "Only for vintage taxis"
        ],
        correct: 1,
        explanation: "To conserve fuel, the roof sign may be placed length-ways for journeys likely to exceed 30 kilometres."
    },
    {
        id: 24,
        category: "Operations",
        icon: <Car className="w-5 h-5" />,
    question: "When must a taxi's roof sign light be switched ON?",
        options: [
            "At all times while driving",
            "Only during hours of darkness",
            "When the taxi is available for hire",
            "When the taxi is hired"
        ],
        correct: 2,
        explanation: "The light must be on when the taxi is available for hire and off when it is hired."
    },
    {
        id: 25,
        category: "Regulations",
        icon: <AlertCircle className="w-5 h-5" />,
    question: "When must a taxi roof sign be removed from the vehicle?",
        options: [
            "Every time the driver goes home",
            "When the vehicle is parked in a public place and not working as a taxi",
            "Only when the vehicle is being sold",
            "Only during a car wash"
        ],
        correct: 1,
        explanation: "The roof sign must be taken off when the vehicle is not working as a taxi and is parked in a public place."
    },
    {
        id: 26,
        category: "Industry Knowledge",
        icon: <BookOpen className="w-5 h-5" />,
    question: "What does the abbreviation VRC stand for in the context of vehicle documents?",
        options: [
            "Vehicle Roadworthiness Certificate",
            "Valid Revenue Clearance",
            "Vehicle Registration Certificate",
            "Vehicle Repair Confirmation"
        ],
        correct: 2,
        explanation: "VRC stands for Vehicle Registration Certificate, also known as the logbook."
    },
    {
        id: 27,
        category: "Licensing",
        icon: <Scale className="w-5 h-5" />,
    question: "If a vehicle is leased, the letter from the owner must state the right to use it for at least how long?",
        options: [
            "6 months",
            "12 months",
            "24 months",
            "The duration of the driver's licence"
        ],
        correct: 1,
        explanation: "The letter must state that the applicant has the right to use the vehicle for at least 12 months."
    },
    {
        id: 28,
        category: "Operations",
        icon: <Info className="w-5 h-5" />,
    question: "Who is permitted to make a booking for an Initial Suitability Inspection?",
        options: [
            "Any licensed SPSV driver",
            "Only the person applying for the licence",
            "A representative from a dispatch company",
            "The vehicle owner's insurance broker"
        ],
        correct: 1,
        explanation: "Only the person applying for the licence can make the booking for the Initial Suitability Inspection."
    },
    {
        id: 29,
        category: "Operations",
        icon: <Info className="w-5 h-5" />,
    question: "Up to how many days before an appointment can you cancel or reschedule without charge?",
        options: [
            "One working day",
            "Two working days",
            "Three working days",
            "Seven working days"
        ],
        correct: 1,
        explanation: "Rescheduling or cancellation without charge is allowed up to two working days before the appointment."
    },
    {
        id: 30,
        category: "Regulations",
        icon: <AlertCircle className="w-5 h-5" />,
    question: "What happens if a vehicle is not presented for inspection at the appointed time?",
        options: [
            "A small late fee is charged",
            "The fee is carried over to the next appointment",
            "The entire fee is lost and no refund is given",
            "A warning is issued by the NTA"
        ],
        correct: 2,
        explanation: "Failure to present the vehicle for inspection at the appointed time results in the loss of the entire fee."
    },
    {
        id: 31,
        category: "Vehicle Standards",
        icon: <Car className="w-5 h-5" />,
    question: "In what condition is a vehicle expected to be for its inspection?",
        options: [
            "Freshly painted",
            "Good and clean condition, inside and out",
            "Empty of all fuel",
            "Fitted with new tyres"
        ],
        correct: 1,
        explanation: "The vehicle is expected to be in good and clean condition, inside and out, when presented for inspection."
    },
    {
        id: 32,
        category: "Operations",
        icon: <Info className="w-5 h-5" />,
    question: "Where are the tamper-proof licence discs placed on a vehicle?",
        options: [
            "On the dashboard and rear bumper",
            "On the front and back windows",
            "On the driver and passenger doors",
            "On the roof sign"
        ],
        correct: 1,
        explanation: "The Licensing Inspector places tamper-proof licence discs on the front and back windows of the vehicle."
    },
    {
        id: 33,
        category: "Licensing",
        icon: <Scale className="w-5 h-5" />,
    question: "What is the standard validity period for an SPSV vehicle licence for vehicles under 10 years old?",
        options: [
            "6 months",
            "12 months",
            "24 months",
            "3 years"
        ],
        correct: 1,
        explanation: "A vehicle licence is usually valid for 12 months, unless the vehicle is over 10 years old."
    },
    {
        id: 34,
        category: "Licensing",
        icon: <Scale className="w-5 h-5" />,
    question: "How long is a licence valid for if the vehicle is more than 10 years old?",
        options: [
            "3 months",
            "6 months",
            "12 months",
            "It cannot be licensed"
        ],
        correct: 1,
        explanation: "If a vehicle is more than 10 years old, the licence is valid for only six months at a time."
    },
    {
        id: 35,
        category: "Regulations",
        icon: <AlertCircle className="w-5 h-5" />,
    question: "What is the maximum fine for using a vehicle as an SPSV without an active licence?",
        options: [
            "€500",
            "€1,500",
            "€5,000",
            "€10,000"
        ],
        correct: 2,
        explanation: "The maximum fine for using a vehicle as an SPSV without an active licence is €5,000."
    },
    {
        id: 36,
        category: "Licensing",
        icon: <Scale className="w-5 h-5" />,
    question: "How early can a licence holder apply to renew their vehicle licence?",
        options: [
            "30 days before expiry",
            "60 days before expiry",
            "90 days before expiry",
            "At any time"
        ],
        correct: 1,
        explanation: "You can renew your licence up to 60 days before it expires."
    },
    {
        id: 37,
        category: "Licensing",
        icon: <Info className="w-5 h-5" />,
    question: "Does renewing a licence early shorten the validity period of the old licence?",
        options: [
            "Yes, it resets immediately",
            "No, the new licence starts the day after the old one ends",
            "Yes, by 15 days",
            "Only if the vehicle is over 10 years old"
        ],
        correct: 1,
        explanation: "Renewing early does not shorten your licence time; the new licence starts the day after the old one ends."
    },
    {
        id: 38,
        category: "Licensing",
        icon: <Info className="w-5 h-5" />,
    question: "What does the abbreviation CCSN stand for in NTA correspondence?",
        options: [
            "Certified Customer Security Number",
            "Confidential Customer Service Number",
            "Commercial Car Safety Notice",
            "Company Clearance Serial Number"
        ],
        correct: 1,
        explanation: "CCSN stands for Confidential Customer Service Number, which is included on all SPSV correspondence."
    },
    {
        id: 39,
        category: "Regulations",
        icon: <AlertCircle className="w-5 h-5" />,
    question: "Are licence holders permitted to remove tamper-proof licence discs themselves?",
        options: [
            "Yes, when the licence expires",
            "No, they should not be removed by the holder",
            "Only if they are replacing the windscreen themselves",
            "Yes, to clean the windows"
        ],
        correct: 1,
        explanation: "Holders should not try to remove tamper-proof discs themselves; the NTA typically handles this."
    },
    {
        id: 40,
        category: "Licensing",
        icon: <Scale className="w-5 h-5" />,
    question: "After how many months of expiry can a vehicle licence no longer be replaced?",
        options: [
            "6 months",
            "12 months",
            "24 months",
            "36 months"
        ],
        correct: 2,
        explanation: "Vehicle licences that have been expired for more than 24 months cannot be replaced."
    },
    {
        id: 41,
        category: "Operations",
        icon: <Info className="w-5 h-5" />,
    question: "What must you do with old tamper-proof discs when changing the vehicle on your licence?",
        options: [
            "Destroy them immediately",
            "Mail them back to Revenue",
            "Remove and bring them to the inspection of the new vehicle",
            "Leave them on the old vehicle"
        ],
        correct: 2,
        explanation: "You must remove the old discs and bring them to the Initial Suitability Inspection of your new vehicle."
    },
    {
        id: 42,
        category: "Licensing",
        icon: <Scale className="w-5 h-5" />,
    question: "What is the maximum renewal limit for a local area hackney licence?",
        options: [
            "1 year",
            "3 years from first issue",
            "5 years",
            "Indefinitely"
        ],
        correct: 1,
        explanation: "A local area hackney licence can only be renewed for up to three years from the date it was first issued."
    },
    {
        id: 43,
        category: "Licensing",
        icon: <Info className="w-5 h-5" />,
    question: "Which form is used to nominate a person to take over a licence after a holder's death?",
        options: [
            "Form VL1",
            "Form S15N",
            "Form D1",
            "Form T1"
        ],
        correct: 1,
        explanation: "Form S15N is used to nominate a person to take over an SPSV licence."
    },
    {
        id: 44,
        category: "Licensing",
        icon: <Info className="w-5 h-5" />,
    question: "Within what timeframe must a nominee apply to take over a licence after a holder's death?",
        options: [
            "3 months",
            "6 months",
            "9 months",
            "12 months"
        ],
        correct: 2,
        explanation: "The nominee must apply to take over the licence within 9 months of the licence holder's death."
    },
    {
        id: 45,
        category: "Licensing",
        icon: <Scale className="w-5 h-5" />,
    question: "What happens to a vehicle licence when it is surrendered?",
        options: [
            "It is placed on hold for 12 months",
            "It is permanently cancelled and cannot be used again",
            "It can be transferred to another driver for a fee",
            "It is suspended until the driver pays a fine"
        ],
        correct: 1,
        explanation: "When you surrender a vehicle licence, it is permanently cancelled and cannot be used again."
    },
    {
        id: 46,
        category: "Vehicle Standards",
        icon: <Car className="w-5 h-5" />,
    question: "What must be included with a limousine licence application for a modified vehicle?",
        options: [
            "A copy of the Technical Assessor's Full Report",
            "A copy of the Technical Assessor's Basic Report",
            "Photos of the modified seats",
            "A letter from the vehicle manufacturer"
        ],
        correct: 1,
        explanation: "Modified limousines require a copy of the Technical Assessor's Basic Report."
    },
    {
        id: 47,
        category: "Operations",
        icon: <Info className="w-5 h-5" />,
    question: "Does the NTA accept original documents for licensing applications?",
        options: [
            "Yes, they must be originals",
            "No, only photocopies are accepted",
            "Originals are only accepted if sent by registered post",
            "Only the VL1 form must be original"
        ],
        correct: 1,
        explanation: "The manual advises not to send original documents; photocopies are accepted."
    },
    {
        id: 48,
        category: "Operations",
        icon: <Car className="w-5 h-5" />,
    question: "If a wheelchair accessible taxi driver is working in a different county than the vehicle owner, what might be required?",
        options: [
            "A new vehicle licence",
            "A different roof sign for each driver",
            "An extra insurance premium",
            "Written permission from the local council"
        ],
        correct: 1,
        explanation: "If drivers are licensed for different counties, each driver may need a different roof sign showing the correct county sticker."
    },
    {
        id: 49,
        category: "Safety",
        icon: <Shield className="w-5 h-5" />,
    question: "Which safety item is required to have a standard shown on its label?",
        options: [
            "The handheld torch",
            "The first-aid kit",
            "The high-visibility reflective safety vest (EN471)",
            "The pen and paper"
        ],
        correct: 2,
        explanation: "The high-visibility safety vest must show the EN471 standard on its label."
    },
    {
        id: 50,
        category: "Regulations",
        icon: <AlertCircle className="w-5 h-5" />,
    question: "Is information about a taxi driver's union allowed on the roof sign?",
        options: [
            "Yes, on the back of the sign",
            "No other details can be shown on the roof sign",
            "Only if it is approved by the NTA",
            "Only on the side panels"
        ],
        correct: 1,
        explanation: "No other details, including union or group info, are allowed on any part of the SPSV, including the roof sign."
    }
];