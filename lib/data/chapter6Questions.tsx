import { Scale, Car, Shield, Info, AlertCircle, BookOpen, MapPin, Navigation } from 'lucide-react';

export const chapter6NavigationQuestions = [
    {
        id: 1,
        category: "Operations",
        icon: <Navigation className="w-5 h-5" />,
        question: "What is a primary advantage of effective route planning for an SPSV driver?",
        options: [
            "It allows the driver to charge higher fares",
            "It reduces fuel costs and saves time",
            "It removes the need for vehicle insurance",
            "It allows the driver to ignore traffic signals"
        ],
        correct: 1,
        explanation: "Effective route planning saves time, promotes safety, reduces fuel costs, and improves customer satisfaction."
    },
    {
        id: 2,
        category: "Industry Knowledge",
        icon: <BookOpen className="w-5 h-5" />,
        question: "Effective destination management is a combination of which three elements?",
        options: [
            "Speed, fuel, and passenger type",
            "Experience/knowledge, communication tools, and digital technology",
            "Vehicle age, tyre pressure, and GPS model",
            "Radio stations, social media, and engine size"
        ],
        correct: 1,
        explanation: "Effective destination management combines experience and knowledge, everyday communication tools, and digital technology."
    },
    {
        id: 3,
        category: "Operations",
        icon: <Navigation className="w-5 h-5" />,
        question: "What should take priority if a GPS device suggests a route through a city centre that you know is closed for a parade?",
        options: [
            "The GPS instructions",
            "The passenger's silent preference",
            "The driver's own local knowledge and expertise",
            "The most direct line on a paper map"
        ],
        correct: 2,
        explanation: "A driver's local knowledge often takes priority over a device, as technology can be incorrect or unaware of temporary events like parades."
    },
    {
        id: 4,
        category: "Industry Knowledge",
        icon: <Info className="w-5 h-5" />,
        question: "How many satellites does a GPS device typically connect to at any one time to calculate an exact location?",
        options: [
            "Exactly one",
            "At least two",
            "At least three or four",
            "A minimum of ten"
        ],
        correct: 2,
        explanation: "A GPS device connects to at least three or four satellites to calculate an exact location."
    },
    {
        id: 5,
        category: "Operations",
        icon: <MapPin className="w-5 h-5" />,
        question: "What is a major benefit of using ride-hailing software for SPSV drivers?",
        options: [
            "It automatically pays the driver's taxes",
            "It reduces wasted time and increases business",
            "It makes the vehicle's engine run more efficiently",
            "It provides free music for the journey"
        ],
        correct: 1,
        explanation: "Ride-hailing software uses GPS maps to quickly connect drivers with passengers, reducing wasted time and increasing business."
    },
    {
        id: 6,
        category: "Operations",
        icon: <Navigation className="w-5 h-5" />,
        question: "When should a driver set the destination and review the route on their GPS app?",
        options: [
            "While driving at a steady speed",
            "Only when the passenger asks",
            "Before starting the journey",
            "At the first red light"
        ],
        correct: 2,
        explanation: "Drivers should open the GPS app, set the destination, and review the route before driving."
    },
    {
        id: 7,
        category: "Safety",
        icon: <Shield className="w-5 h-5" />,
        question: "Where is the best position for a phone or GPS device to ensure it does not block the driver's view?",
        options: [
            "In the passenger's lap",
            "Just below or beside the driver's eyeline",
            "Directly in the centre of the steering wheel",
            "On the floor in the footwell"
        ],
        correct: 1,
        explanation: "A device is best positioned just below or beside the eyeline so the driver can look at directions without turning their head from the road."
    },
    {
        id: 8,
        category: "Operations",
        icon: <BookOpen className="w-5 h-5" />,
        question: "Whose preference for a specific route should always be taken?",
        options: [
            "The GPS device's preference",
            "The dispatch operator's preference",
            "The customer's preference",
            "The driver's preference"
        ],
        correct: 2,
        explanation: "The manual states that the customer’s preference for a route should always be taken."
    },
    {
        id: 9,
        category: "Safety",
        icon: <Shield className="w-5 h-5" />,
        question: "What should a driver do if they are lost but need to use their GPS safely?",
        options: [
            "Keep driving and adjust settings quickly",
            "Be calm and confident, and keep the customer informed",
            "Ask the passenger to hold the phone while they drive",
            "Turn off the engine immediately in the middle of the road"
        ],
        correct: 1,
        explanation: "Drivers should remain calm and confident when navigating and keep the customer informed of what is happening."
    },
    {
        id: 10,
        category: "Operations",
        icon: <Navigation className="w-5 h-5" />,
        question: "What color are motorways (M roads) typically coded on standard paper maps?",
        options: [
            "Green",
            "Red",
            "Blue",
            "Yellow"
        ],
        correct: 2,
        explanation: "On traditional paper maps, motorways (M roads) are typically blue."
    },
    {
        id: 11,
        category: "Operations",
        icon: <Navigation className="w-5 h-5" />,
        question: "On a paper map, national primary roads are usually what color?",
        options: [
            "Blue",
            "Green",
            "Red",
            "White"
        ],
        correct: 1,
        explanation: "National primary roads (like the N1 or N7) are usually green."
    },
    {
        id: 12,
        category: "Operations",
        icon: <Navigation className="w-5 h-5" />,
        question: "What color coding is typically used for Regional roads on standard maps?",
        options: [
            "Blue",
            "Green",
            "Red",
            "Pink"
        ],
        correct: 2,
        explanation: "Regional roads (with an R-prefix) are usually marked in red."
    },
    {
        id: 13,
        category: "Operations",
        icon: <BookOpen className="w-5 h-5" />,
        question: "On a map index, a grid reference for a small street might be followed by what?",
        options: [
            "The street's zip code",
            "A number (e.g., A26)",
            "The name of the nearest pub",
            "A GPS coordinate"
        ],
        correct: 1,
        explanation: "Very small streets may be indicated by a number in the index, such as A26, following the grid reference."
    },
    {
        id: 14,
        category: "Operations",
        icon: <Scale className="w-5 h-5" />,
        question: "If a map scale is 1:450,000, what distance does 1 cm on the map represent in the real world?",
        options: [
            "450 metres",
            "1 kilometre",
            "4.5 kilometres",
            "45 kilometres"
        ],
        correct: 2,
        explanation: "At a scale of 1:450,000, 1 cm on the map equals 4.5 km in reality."
    },
    {
        id: 15,
        category: "Industry Knowledge",
        icon: <Info className="w-5 h-5" />,
        question: "What is the primary function of a map legend or key?",
        options: [
            "To show the price of the map",
            "To explain the meaning of symbols used on the map",
            "To provide the history of the area",
            "To list the driver's contact details"
        ],
        correct: 1,
        explanation: "The map legend or key explains the meaning of the symbols used on the map, such as buildings, roads, or landmarks."
    },
    {
        id: 16,
        category: "Safety",
        icon: <Shield className="w-5 h-5" />,
        question: "Why should a driver turn on voice instructions on their GPS?",
        options: [
            "To entertain the passenger",
            "To keep their eyes on the road instead of the screen",
            "Because audio uses less battery than visual",
            "To record the passenger's conversation"
        ],
        correct: 1,
        explanation: "Voice instructions allow a driver to keep their eyes on the road instead of looking at the screen."
    },
    {
        id: 17,
        category: "Operations",
        icon: <Navigation className="w-5 h-5" />,
        question: "When using a GPS, what should a driver check regarding the sound volume?",
        options: [
            "It must be set to the maximum level",
            "It should be loud enough to hear but not too loud for passenger comfort",
            "It should be turned off if there are passengers",
            "It must match the volume of the radio"
        ],
        correct: 1,
        explanation: "A driver should perform a quick sound check to ensure volume is audible for navigation but comfortable for passengers."
    },
    {
        id: 18,
        category: "Operations",
        icon: <Navigation className="w-5 h-5" />,
        question: "National secondary roads are typically represented on maps as:",
        options: [
            "Solid blue lines",
            "Solid red lines",
            "Green and white striped lines",
            "Dashed pink lines"
        ],
        correct: 2,
        explanation: "National secondary roads are usually shown as green and white striped lines."
    },
    {
        id: 19,
        category: "Operations",
        icon: <MapPin className="w-5 h-5" />,
        question: "Which of the following is an example of an 'everyday communication tool' for traffic updates?",
        options: [
            "A paper map index",
            "Radio stations giving regular traffic updates",
            "A vehicle's taximeter printer",
            "The driver display card"
        ],
        correct: 1,
        explanation: "National or local radio stations giving regular traffic updates are considered everyday communication tools."
    },
    {
        id: 20,
        category: "Safety",
        icon: <Shield className="w-5 h-5" />,
        question: "What is a recommended backup for a driver if their primary digital navigation fails?",
        options: [
            "Ask a pedestrian for directions",
            "Use a secondary GPS app or a paper map",
            "Stop working for the day immediately",
            "Follow the nearest bus"
        ],
        correct: 1,
        explanation: "Drivers should have a secondary GPS or even a paper map as a backup for emergencies."
    },
    {
        id: 21,
        category: "Industry Knowledge",
        icon: <BookOpen className="w-5 h-5" />,
        question: "How are cities and larger towns typically written on traditional paper maps?",
        options: [
            "In italicised font",
            "In bigger, bolder, or capital letters",
            "In red ink only",
            "With a specific numerical code"
        ],
        correct: 1,
        explanation: "Cities and larger towns are usually written in bigger or bolder letters, or in capital letters."
    },
    {
        id: 22,
        category: "Operations",
        icon: <Navigation className="w-5 h-5" />,
        question: "What is a potential disadvantage of relying too heavily on digital navigation technology?",
        options: [
            "It makes the vehicle use more fuel",
            "It disrupts concentration, even when used hands-free",
            "It requires a monthly fee to the NTA",
            "It only works during daylight hours"
        ],
        correct: 1,
        explanation: "The manual notes that using devices, even hands-free ones, can disrupt concentration and make it difficult to disconnect."
    },
    {
        id: 23,
        category: "Operations",
        icon: <Navigation className="w-5 h-5" />,
        question: "How can a driver help grow their navigation knowledge outside of using a device?",
        options: [
            "By memorizing the phone book",
            "By recording shortcuts and noting slow routes during specific times or weather",
            "By only driving in one specific neighborhood",
            "By ignoring all passenger route suggestions"
        ],
        correct: 1,
        explanation: "Recording shortcuts and noting time-sensitive or weather-sensitive destination delays helps grow a driver's professional knowledge."
    },
    {
        id: 24,
        category: "Industry Knowledge",
        icon: <BookOpen className="w-5 h-5" />,
        question: "A map grid reference system usually assigns:",
        options: [
            "Numbers to horizontal lines and letters to vertical lines",
            "Colors to horizontal lines and numbers to vertical lines",
            "Letters to horizontal lines and symbols to vertical lines",
            "Names to all grid lines"
        ],
        correct: 0,
        explanation: "Maps use a grid system where areas between horizontal lines have numbers and those between vertical lines have letters."
    },
    {
        id: 25,
        category: "Safety",
        icon: <Shield className="w-5 h-5" />,
        question: "What power equipment should a driver keep in their vehicle to ensure navigation devices stay active?",
        options: [
            "A spare alternator",
            "A car charger and a backup power bank",
            "A set of jumper cables",
            "A solar panel for the roof"
        ],
        correct: 1,
        explanation: "To keep navigation devices charged, drivers should have a car charger and a backup power bank."
    },
    {
        id: 26,
        category: "Operations",
        icon: <Navigation className="w-5 h-5" />,
        question: "Roads under construction are typically shown on maps with:",
        options: [
            "Solid green lines",
            "Dashed or dotted lines in grey, black, or red",
            "Bolder capital letters",
            "Pink or light brown shading"
        ],
        correct: 1,
        explanation: "Roads under construction can have dashed or dotted lines in grey, black, or red."
    },
    {
        id: 27,
        category: "Industry Knowledge",
        icon: <BookOpen className="w-5 h-5" />,
        question: "Pedestrian streets and footpaths are often represented by which colors on tourist maps?",
        options: [
            "Yellow or white",
            "Pink or light brown",
            "Solid blue",
            "Green and white striped"
        ],
        correct: 1,
        explanation: "Pedestrian areas can be pink or light brown on some tourist or city centre maps."
    },
    {
        id: 28,
        category: "Operations",
        icon: <Navigation className="w-5 h-5" />,
        question: "What is the first step in finding a specific location on a paper map?",
        options: [
            "Identify the grid square the location is likely to be in",
            "Look up the street in the index immediately",
            "Measure the distance with a ruler",
            "Check the map scale bar"
        ],
        correct: 0,
        explanation: "The first step listed is to identify the grid square your location is likely to be in."
    },
    {
        id: 29,
        category: "Operations",
        icon: <Navigation className="w-5 h-5" />,
        question: "Local roads are typically shown on standard paper maps in which colors?",
        options: [
            "Blue",
            "Red",
            "Yellow or white",
            "Green"
        ],
        correct: 2,
        explanation: "Local roads are shown in yellow or white."
    },
    {
        id: 30,
        category: "Industry Knowledge",
        icon: <Info className="w-5 h-5" />,
        question: "In the context of route planning, why is 'Christmas' or 'Back-to-school' important for a driver to note?",
        options: [
            "For tax reporting purposes",
            "To know when to take holidays",
            "To anticipate and plan for specific traffic events or delays",
            "To know when to charge higher rates"
        ],
        correct: 2,
        explanation: "Drivers should mark calendars for important dates like Christmas or back-to-school to plan for specific traffic situations."
    },
    {
        id: 31,
        category: "Operations",
        icon: <Navigation className="w-5 h-5" />,
        question: "What is a key benefit of paper maps when digital signals are weak?",
        options: [
            "They provide real-time traffic updates",
            "They are easier to read while driving",
            "They allow for offline route understanding and backup",
            "They automatically calculate the fastest route"
        ],
        correct: 2,
        explanation: "Paper maps are a good backup when internet or mobile service is unavailable and can help drivers understand the layout of an area manually."
    },
    {
        id: 32,
        category: "Safety",
        icon: <AlertCircle className="w-5 h-5" />,
        question: "What should a driver avoid doing while driving if they encounter technical issues with their GPS?",
        options: [
            "Talking to the passenger",
            "Using the device while the vehicle is in motion",
            "Keeping their eyes on the road",
            "Listening to audio instructions"
        ],
        correct: 1,
        explanation: "The manual explicitly states 'Do not use any devices while driving' and to inform the customer safely of technical issues."
    },
    {
        id: 33,
        category: "Operations",
        icon: <Navigation className="w-5 h-5" />,
        question: "What should a driver do if a passenger’s request for a destination is unclear?",
        options: [
            "Drive to the city centre and ask again",
            "Take a minute to talk through the request and ask for the exact address",
            "Follow the GPS instructions blindly",
            "Refuse the passenger immediately"
        ],
        correct: 1,
        explanation: "Drivers should politely check directions and take a minute to talk through unclear requests or ask for the exact address."
    },
    {
        id: 34,
        category: "Industry Knowledge",
        icon: <BookOpen className="w-5 h-5" />,
        question: "GPS technology works using signals from a network of satellites orbiting which body?",
        options: [
            "The Moon",
            "The Sun",
            "Earth",
            "Mars"
        ],
        correct: 2,
        explanation: "GPS works by using signals from a network of satellites orbiting Earth."
    },
    {
        id: 35,
        category: "Operations",
        icon: <Navigation className="w-5 h-5" />,
        question: "What can a scale bar on a map help a driver visualise?",
        options: [
            "The age of the map",
            "The weight of the vehicle",
            "Distances on the map compared to the real world",
            "The number of passengers allowed"
        ],
        correct: 2,
        explanation: "The scale bar helps visualize the relationship of distances on the map to real-world distances."
    },
    {
        id: 36,
        category: "Operations",
        icon: <MapPin className="w-5 h-5" />,
        question: "Which of the following landmarks should a professional SPSV driver get to know in their area?",
        options: [
            "Private residential driveways",
            "Hotels, hospitals, and stadiums",
            "Local supermarkets only",
            "The locations of all primary schools"
        ],
        correct: 1,
        explanation: "Drivers should know popular landmarks like hotels, airports, hospitals, stadiums, and stations."
    },
    {
        id: 37,
        category: "Safety",
        icon: <Shield className="w-5 h-5" />,
        question: "Why should a driver use a 'strong GPS attachment' or phone holder?",
        options: [
            "To make the device look more professional",
            "To ensure the device is held securely and does not present a danger",
            "To improve the satellite signal",
            "To prevent passengers from seeing the route"
        ],
        correct: 1,
        explanation: "A strong attachment ensures the device is held securely on the windshield, dash, or vent."
    },
    {
        id: 38,
        category: "Operations",
        icon: <Navigation className="w-5 h-5" />,
        question: "What is an advantage of 'smarter eco-driving' mentioned in the route planning section?",
        options: [
            "It allows for higher speed limits",
            "It supports the environment",
            "It increases the vehicle's resale value",
            "It makes the taximeter run slower"
        ],
        correct: 1,
        explanation: "Smarter eco-driving is an advantage of route planning that supports the environment."
    },
    {
        id: 39,
        category: "Safety",
        icon: <Shield className="w-5 h-5" />,
        question: "Effective route planning avoids heavy traffic, which helps promote what?",
        options: [
            "Driver fatigue",
            "Safety",
            "Higher fuel consumption",
            "Mechanical wear"
        ],
        correct: 1,
        explanation: "Avoiding traffic and delays through route planning promotes safety."
    },
    {
        id: 40,
        category: "Operations",
        icon: <Navigation className="w-5 h-5" />,
        question: "If a paper map grid reference for Wexford is E5, what does 'E' represent?",
        options: [
            "The horizontal number",
            "The vertical letter",
            "The map's scale factor",
            "The county code"
        ],
        correct: 1,
        explanation: "In a grid system, letters typically represent vertical lines."
    },
    {
        id: 41,
        category: "Operations",
        icon: <MapPin className="w-5 h-5" />,
        question: "Updates from which entity can offer real-time traffic information to drivers?",
        options: [
            "The Revenue Commissioners",
            "The dispatch operator and offices",
            "The National Driver Licence Service",
            "The NCT centre"
        ],
        correct: 1,
        explanation: "Updates from your dispatch operator and offices can offer real-time info and help with alternative routes."
    },
    {
        id: 42,
        category: "Industry Knowledge",
        icon: <BookOpen className="w-5 h-5" />,
        question: "Sat nav technology works by measuring travel distances through what process?",
        options: [
            "Counting wheel rotations",
            "Pinning location in real-time on interactive maps",
            "Estimating speed based on fuel usage",
            "Using the vehicle's Bluetooth connection"
        ],
        correct: 1,
        explanation: "GPS technology pins location in real-time, which helps measure travel distances."
    },
    {
        id: 43,
        category: "Safety",
        icon: <AlertCircle className="w-5 h-5" />,
        question: "Social media groups can be useful for navigation, but what safety rule must be followed?",
        options: [
            "Only check messages at red lights",
            "Ensure voice assist is set up and only check the phone when not driving",
            "Have the passenger read the messages aloud",
            "Limit checking to once every ten minutes"
        ],
        correct: 1,
        explanation: "When using social media for updates, ensure voice assist is used and check the phone only when not driving."
    },
    {
        id: 44,
        category: "Operations",
        icon: <Navigation className="w-5 h-5" />,
        question: "How can a driver use their local knowledge to benefit a passenger's fare?",
        options: [
            "By taking a scenic route",
            "By suggesting quicker or cheaper ways when appropriate",
            "By always taking the longest route to increase the meter",
            "By ignoring the passenger's requested route"
        ],
        correct: 1,
        explanation: "Drivers should use local knowledge to suggest quicker or cheaper ways when it is okay to do so."
    },
    {
        id: 45,
        category: "Safety",
        icon: <Shield className="w-5 h-5" />,
        question: "Preparation for a journey includes checking that tyres, brakes, and what other system is in good condition?",
        options: [
            "The audio speakers",
            "The navigation system",
            "The card payment printer",
            "The passenger door branding"
        ],
        correct: 1,
        explanation: "Vehicle service should include navigation systems along with tyres, brakes, and safety equipment."
    },
    {
        id: 46,
        category: "Industry Knowledge",
        icon: <Info className="w-5 h-5" />,
        question: "Technology and apps are described in the manual as being:",
        options: [
            "100% reliable at all times",
            "Not 100% reliable",
            "Better than a driver's expertise",
            "The only tool needed for navigation"
        ],
        correct: 1,
        explanation: "The manual explicitly states that 'Technology and apps are not 100% reliable'."
    },
    {
        id: 47,
        category: "Operations",
        icon: <Navigation className="w-5 h-5" />,
        question: "What is an advantage of being able to zoom in on interactive digital maps?",
        options: [
            "It increases the satellite signal",
            "It improves visibility and accessibility of the area",
            "It reduces data usage",
            "It makes the vehicle travel faster"
        ],
        correct: 1,
        explanation: "Drivers can zoom in or enlarge areas on the map for improved visibility and accessibility when safe."
    },
    {
        id: 48,
        category: "Industry Knowledge",
        icon: <BookOpen className="w-5 h-5" />,
        question: "AA Ireland, local authorities, and Gardaí may issue what type of alerts via their apps?",
        options: [
            "Fuel price updates",
            "Roadwork alerts or updates",
            "Driver licence renewal reminders",
            "NCT expiry notifications"
        ],
        correct: 1,
        explanation: "Local Gardaí, councils, and AA Ireland may issue roadwork alerts or updates via their websites or apps."
    },
    {
        id: 49,
        category: "Operations",
        icon: <Navigation className="w-5 h-5" />,
        question: "Mapping technology provides directions in what timeframe as the driver moves?",
        options: [
            "Every 5 minutes",
            "In real-time",
            "Only when the vehicle stops",
            "After the journey is completed"
        ],
        correct: 1,
        explanation: "GPS uses mapping software to provide directions in real-time as the vehicle moves."
    },
    {
        id: 50,
        category: "Operations",
        icon: <Navigation className="w-5 h-5" />,
        question: "A professional SPSV driver is expected to know their area:",
        options: [
            "As well as an average tourist",
            "Better than most road users",
            "Only with the help of a GPS",
            "Only within a 5km radius of their home"
        ],
        correct: 1,
        explanation: "The manual states professional drivers are expected to get to a destination quickly, knowing their area better than most road users."
    }
];