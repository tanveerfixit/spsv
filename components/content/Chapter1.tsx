'use client';

import React from 'react';

export default function Chapter1({ section }: { section: string }) {
  return (
    <div className="max-w-3xl mx-auto pb-12">
      <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">CHAPTER 1: THE SPSV INDUSTRY</h1>
      
      {/* 1.1 ABOUT THE NTA */}
      {(section === '1-1-about-the-nta' || !section) && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800 dark:text-blue-400">1.1 ABOUT THE NATIONAL TRANSPORT AUTHORITY (NTA)</h2>
          
          <h3 className="text-xl font-medium mt-6 mb-2 text-gray-900 dark:text-gray-100">INTRODUCTION</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            The Manual contains the SPSV guidelines and regulations set out by the National Transport Authority (NTA). This Manual has been created to help you apply for and maintain SPSV licences.
          </p>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 mb-6">
            <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-1">NOTE</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              The SPSV licence referred to in this Manual, is the licence that allows a vehicle to be operated as an SPSV. It is different to the SPSV driver licence, which allows a person to drive an SPSV.
            </p>
          </div>

          <h3 className="text-xl font-medium mt-6 mb-2 text-gray-900 dark:text-gray-100">WHAT IS THE NTA?</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            Established by the Minister for Transport on 1 December 2009, the NTA is a statutory non-commercial body, operating under the control and guidance of the Department of Transport.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            The NTA includes the previous regulatory organisation, the Commission for Taxi Regulation, which became part of NTA in 2011.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            It is the licensing authority for Small Public Service Vehicles (SPSVs). Its functions include the development and maintenance of a regulatory framework for the control and operation of SPSVs and their drivers. It also includes associated services such as booking services (by app, telephone and walk-ins).
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            The NTA also has duties assigned under the Taxi Regulation Acts 2013 and 2016 and other relevant regulations.
          </p>

          <h3 className="text-xl font-medium mt-6 mb-4 text-gray-900 dark:text-gray-100">THE NTA OBJECTIVES</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">Here are the main objectives of the NTA.</p>
          <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700 dark:text-gray-300 mb-6">
            <li>Promote and support the provision of affordable high-quality services delivered by SPSVs and their drivers.</li>
            <li>Invest in activities that improve and support affordable high-quality SPSV services.</li>
            <li>Help increase the connection and placement of taxi services into the public transport system.</li>
            <li>Manage the development of a professional, safe, well-organised and customer-friendly service.</li>
            <li>Commit to the protection and respect of both SPSV operators and their customers.</li>
            <li>Encourage and support competition for SPSV services and standards including pricing, fares, and customer satisfaction.</li>
            <li>Help small public service vehicles become more available and affordable for people with disabilities, mobility, or sensory challenges.</li>
            <li>Improve the services offered by small public service vehicles, promote progress and innovation through support and investment.</li>
            <li>Strengthen and encourage development of high-quality affordable services that meet customer needs, including passengers with mobility or sensory impairments.</li>
            <li>Continue to develop and improve a licensing system that centres on the customer, along with regulations and standards for all SPSV licence holders and drivers.</li>
          </ul>

          <h3 className="text-xl font-medium mt-6 mb-4 text-gray-900 dark:text-gray-100">NTA RESPONSIBILITIES AND LEGAL POWERS</h3>
          
          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mt-4">REGULATION</h4>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            The NTA can and is allowed to create regulations and set standards related to the licensing, control and operation of SPSV drivers, vehicles, renters, dispatch operators, bookings and other services.
          </p>

          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mt-4">LICENSING</h4>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Licences are given only to SPSV drivers, vehicle operators and dispatch operators or other booking services who meet the expected quality standards. It is against the law to work in the SPSV industry without the correct licence or licences.
          </p>

          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mt-4">COMPLIANCE</h4>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            The NTA tracks and checks the industry to make sure the law is followed across Ireland. It investigates complaints from the public and, when it is necessary, NTA fines or prosecutes any breach of the law or SPSV legislation.
          </p>

          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mt-4">CUSTOMER AND INDUSTRY INFORMATION</h4>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            The NTA provides a set of information services to the public and to the industry. There is a complaints process and a commendation scheme for SPSV drivers who deliver high-quality service.
          </p>

          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mt-4">SKILLS DEVELOPMENT</h4>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            The NTA is responsible for making sure that SPSV operators meet high standards of knowledge and skill, so that customers can experience the best service possible.
          </p>

          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mt-4">POLICY DEVELOPMENT</h4>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            The NTA works to connect SPSV services with the public transport system, ensuring that enough services are available nationally and that these services are suitable and can be used by people with disabilities.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            We work closely with government departments, local councils, An Garda Síochána and other various groups to ensure that issues related to SPSV services are included in the development of national, regional and local policies.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            We are continuously working toward rules and regulations that are correct and fair for customers, SPSV operators and SPSV licence holders.
          </p>

          <h3 className="text-xl font-medium mt-6 mb-4 text-gray-900 dark:text-gray-100">ADVISORY COMMITTEE ON SMALL PUBLIC SERVICE VEHICLES</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            The Advisory Committee on Small Public Service Vehicles, also known as the Taxi Advisory Committee, is chosen by the Minister for Transport, Tourism and Sport.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            It gives correct guidance and advice on issues that are important to SPSVs and their companies. The Advisory Committee speaks for many different partners and interested groups across the country, including:
          </p>
          <ul className="list-disc list-outside ml-5 space-y-1 text-gray-700 dark:text-gray-300 mb-4">
            <li>SPSV operators and drivers</li>
            <li>Local authorities and councils</li>
            <li>An Garda Síochána</li>
            <li>Customers and consumers</li>
            <li>People with disabilities</li>
            <li>Businesses</li>
            <li>Older people</li>
            <li>Tourism sectors</li>
            <li>Competition interests</li>
            <li>Specialist experts</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            The NTA can submit key issues related to SPSVs to the Advisory Committee for advice and use the advice to help make decisions; however, the NTA can decide whether to take or act on the advice of the Advisory Committee.
          </p>

          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
            <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">FURTHER INFORMATION</h4>
            <p className="text-gray-700 dark:text-gray-300">
              For more information on the policies, processes and the Advisory committee on SPSV go to the NTA website: <a href="https://www.nationaltransport.ie" className="text-blue-600 dark:text-blue-400 hover:underline">www.nationaltransport.ie</a>.
            </p>
          </div>
        </div>
      )}

      {/* 1.2 THE IMPORTANCE OF THE SPSV INDUSTRY */}
      {(section === '1-2-the-importance-of-the-spsv-industry' || !section) && (
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800 dark:text-blue-400">1.2 THE IMPORTANCE OF THE SPSV INDUSTRY</h2>
          
          <h3 className="text-xl font-medium mt-6 mb-2 text-gray-900 dark:text-gray-100">SPSV CATEGORIES</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            SPSVs play an important part in the national public transport system. They are the only type of public transport service that provides a personalised service, door-to-door, 24 hours a day, 365 days a year.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4 font-medium">There are six categories of SPSVs:</p>
          <ul className="list-disc list-outside ml-5 space-y-1 text-gray-700 dark:text-gray-300 mb-6">
            <li>Taxis</li>
            <li>Wheelchair accessible taxis</li>
            <li>Limousines</li>
            <li>Hackneys</li>
            <li>Wheelchair accessible hackneys</li>
            <li>Local area hackneys</li>
          </ul>

          <h3 className="text-xl font-medium mt-6 mb-2 text-gray-900 dark:text-gray-100">INDUSTRY STANDARDS</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            The NTA’s main goal is to ensure delivery of excellent service by SPSV operators to the travelling public through a professional, regulated SPSV service, run by professional drivers, vehicle owners, dispatch operators and booking services.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-2">The NTA industry standards aim to:</p>
          <ul className="list-disc list-outside ml-5 space-y-1 text-gray-700 dark:text-gray-300 mb-6">
            <li>Increase the quality of service provided by the SPSV industry.</li>
            <li>Grow public confidence in the service.</li>
            <li>Improve and provide business opportunities for operators who meet and exceed high standards.</li>
          </ul>
        </div>
      )}

      {/* 1.3 LICENSING VEHICLES, DRIVERS AND DISPATCH OPERATORS */}
      {(section === '1-3-licensing-vehicles-drivers-and-dispatch-operators' || !section) && (
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800 dark:text-blue-400">1.3 LICENSING VEHICLES, DRIVERS AND DISPATCH OPERATORS</h2>
          
          <h3 className="text-xl font-medium mt-6 mb-2 text-gray-900 dark:text-gray-100">LICENSING AREAS</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">There are three main areas of licensing in the SPSV industry.</p>
          <ol className="list-decimal list-outside ml-5 space-y-2 text-gray-700 dark:text-gray-300 mb-6">
            <li>Driver licences are provided by An Garda Síochána with the support of NTA.</li>
            <li>Vehicle licences are provided and managed by NTA.</li>
            <li>Dispatch operator licences are provided and managed by NTA.</li>
          </ol>

          <h3 className="text-xl font-medium mt-6 mb-4 text-gray-900 dark:text-gray-100">SPSV DRIVER LICENCES</h3>
          
          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mt-4">STANDARD SPSV DRIVER LICENCES</h4>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            A person with a standard SPSV driver licence given by An Garda Síochána is licensed to drive any category of SPSV.
          </p>

          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mt-4">LOCAL AREA HACKNEY DRIVER LICENCES</h4>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            The holder of a local area hackney driver licence, which is a non-standard SPSV driver licence, is licensed to drive only local area hackneys.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            When driving a taxi, the driver is only licensed to pick up passengers in the county or counties where they have been given a licence.
          </p>
          
          <p className="text-gray-700 dark:text-gray-300 mb-2">An SPSV driver is allowed to:</p>
          <ul className="list-disc list-outside ml-5 space-y-1 text-gray-700 dark:text-gray-300 mb-6">
            <li>Drive their own licensed vehicle.</li>
            <li>Drive a licensed vehicle owned by another person.</li>
            <li>Be employed as a driver by another person.</li>
          </ul>

          <h3 className="text-xl font-medium mt-6 mb-4 text-gray-900 dark:text-gray-100">SPSV LICENCES</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            An SPSV driver may drive for hire or payment only in a licensed SPSV.
          </p>

          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mt-4">VEHICLE LICENCE CATEGORIES</h4>
          <p className="text-gray-700 dark:text-gray-300 mb-4">Each SPSV category has its own vehicle licence:</p>
          <ul className="list-disc list-outside ml-5 space-y-1 text-gray-700 dark:text-gray-300 mb-4">
            <li>Taxi licence</li>
            <li>Wheelchair accessible taxi licence</li>
            <li>Limousine licence</li>
            <li>Hackney licence</li>
            <li>Wheelchair accessible hackney licence</li>
            <li>Local area hackney licence</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            A vehicle may only be licensed in one category at any time.
          </p>

          <h3 className="text-xl font-medium mt-6 mb-4 text-gray-900 dark:text-gray-100">DISPATCH OPERATOR LICENCES</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            An SPSV dispatch operator is an individual or organisation that provides a booking service for SPSVs.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            The NTA believes that dispatch operators are very important in providing first-class service to the travelling public. Specifically, in improving the delivery of door-to-door services to people with disabilities.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Dispatch operators take and arrange passenger bookings for SPSVs or can be contacted directly by passengers who want to hire an SPSV themselves.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            The NTA gives dispatch operator licences to individuals or companies that meet a specific set of rules and standards.
          </p>
        </div>
      )}

      {/* 1.4 RULES AND REGULATIONS FOR SPSVS AND THEIR DRIVERS */}
      {(section === '1-4-rules-and-regulations-for-spsvs-and-their-drivers' || !section) && (
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800 dark:text-blue-400">1.4 RULES AND REGULATIONS FOR SPSVS AND THEIR DRIVERS</h2>
          
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Under the Taxi Regulation Acts 2013 and 2016, to reach and continue to build a high-quality SPSV service, NTA is authorised to create rules and make sure they are followed related to the licensing, control and operation of:
          </p>
          <ul className="list-disc list-outside ml-5 space-y-1 text-gray-700 dark:text-gray-300 mb-4">
            <li>SPSV drivers</li>
            <li>SPSVs</li>
            <li>SPSV dispatch operators</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            People working in the SPSV industry must also comply with a wider range of regulations that apply to them as road users and as business service providers. These regulations are enforced by different types of government and legal organisations.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            NTA’s dedicated compliance team works together with An Garda Síochána to monitor and enforce SPSV regulations. This can be done by each organisation independently or through joint operations.
          </p>

          <h3 className="text-xl font-medium mt-6 mb-4 text-gray-900 dark:text-gray-100">GOVERNING BODIES</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            NTA works closely with various governing bodies and, when necessary, shares information with them. We want to make sure that all SPSV operators work to the same high standards, providing high-quality services to the public.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-2">The list below is an example of some of the advising bodies:</p>
          <ul className="list-disc list-outside ml-5 space-y-1 text-gray-700 dark:text-gray-300 mb-6">
            <li>An Garda Síochána</li>
            <li>The Road Safety Authority (RSA)</li>
            <li>Local authorities</li>
            <li>National Standards Authority of Ireland Legal Metrology Service</li>
            <li>The Health Service Executive</li>
            <li>The Revenue Commissioners</li>
            <li>The Department of Social Protection</li>
            <li>The Department of Transport</li>
            <li>The Health & Safety Authority</li>
            <li>The Equality Authority</li>
            <li>The Office of the Ombudsman</li>
            <li>The Competition Authority</li>
            <li>The Office of the Data Protection Commissioner</li>
          </ul>

          <h3 className="text-xl font-medium mt-6 mb-4 text-gray-900 dark:text-gray-100">THE BENEFITS OF REGULATION</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            The NTA is responsible for setting standards that must be met by all operators in the SPSV industry. Regulation benefits both SPSV operators and their customers.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-md border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">EQUAL OPPORTUNITIES</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">Regulation ensures equal opportunity for everyone in the industry, so legally approved operators do not have to compete for business with people who have not met the relevant standards.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-md border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">HIGH-QUALITY SERVICE</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">Customers can expect high standards of vehicle comfort and safety and a high quality of customer service.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-md border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">POSITIVE REPUTATION</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">Regulation and high-quality bring positive attention to the SPSV industry, protect standards, and present a professional image to the travelling public.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-md border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">PROFIT GROWTH</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">Customers have greater confidence in the industry and choose to use its services because there is a set of clear standards and rules that are checked and followed.</p>
            </div>
          </div>
        </div>
      )}

      {/* 1.5 GETTING AN SPSV ON THE ROAD */}
      {(section === '1-5-getting-an-spsv-on-the-road' || !section) && (
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800 dark:text-blue-400">1.5 GETTING AN SPSV ON THE ROAD</h2>
          
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            You must follow the SPSV regulations, even if you drive your own vehicle, drive a vehicle owned by someone else, or work as an employee for another person or group.
          </p>

          <h3 className="text-xl font-medium mt-6 mb-4 text-gray-900 dark:text-gray-100">SPSV REGULATIONS</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">To drive an SPSV, you must have:</p>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300 mb-6">
            <li className="flex items-start gap-2">
              <span className="text-green-500 font-bold">✓</span>
              <span><strong>A valid SPSV driver licence</strong> in addition to your regular driving licence.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 font-bold">✓</span>
              <span><strong>A licensed SPSV vehicle.</strong> The vehicle must hold a valid and up-to-date licence to operate in one of the six categories of SPSV.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 font-bold">✓</span>
              <span><strong>A valid insurance certificate.</strong> The vehicle must be insured to operate as an SPSV.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 font-bold">✓</span>
              <span><strong>A valid roadworthiness certificate.</strong> The vehicle must have a current National Car Test (NCT) certificate.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 font-bold">✓</span>
              <span><strong>Tax clearance.</strong> You must be up to date in your tax affairs and maintain your tax clearance status throughout the period of your licence. Your tax clearance status will be checked online by NTA.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 font-bold">✓</span>
              <span><strong>A driver to vehicle link.</strong> At all times, you need to provide NTA with details of the SPSV vehicle you are driving. This information is available to the public. NTA keeps a record of every licensed SPSV and the driver who currently owns or is connected to it.</span>
            </li>
          </ul>

          <h3 className="text-xl font-medium mt-6 mb-4 text-gray-900 dark:text-gray-100">THE SPSV SKILLS DEVELOPMENT PROGRAMME</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Every successful business invests in ongoing training and skills development. The SPSV business operates in a constantly changing and challenging world. The industry relies heavily on personal skills, and it will only succeed if SPSV operators also invest in their own learning and development.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            The NTA’s Skills Development Programme for SPSV operators is designed to help you develop the set of everyday skills you need to work in the SPSV industry.
          </p>

          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mt-4">SPSV DRIVER ENTRY TEST</h4>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            If you are a new SPSV driver licence applicant, you must pass the SPSV Driver Entry Test, which has two modules:
          </p>
          <ul className="list-disc list-outside ml-5 space-y-1 text-gray-700 dark:text-gray-300 mb-4">
            <li>Industry Knowledge Module</li>
            <li>Area Knowledge Module (county-specific)</li>
          </ul>

          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mt-4">SAFEGUARDING AND DISABILITY AWARENESS</h4>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            Once you pass the SPSV Driver Entry Test, you must then complete the free, online eLearning modules:
          </p>
          <ul className="list-disc list-outside ml-5 space-y-1 text-gray-700 dark:text-gray-300 mb-4">
            <li>Safeguarding module</li>
            <li>Disability Awareness module</li>
          </ul>

          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mt-4">AREA KNOWLEDGE MODULE</h4>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            If you already hold an SPSV driver licence and you wish to stand or ply for hire in a county other than the one in which you were originally licensed, you will be required to pass the area knowledge module for the additional area. This is called an Area Knowledge Test.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            You may also be asked to sit and pass the Area Knowledge Test before your licence is renewed, if during the previous three years, NTA receives three or more complaints relating to your area knowledge.
          </p>
        </div>
      )}

      {/* 1.6 NATIONAL SPSV REGISTERS */}
      {(section === '1-6-national-spsv-registers' || !section) && (
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800 dark:text-blue-400">1.6 NATIONAL SPSV REGISTERS (LICENCE DATABASE)</h2>
          
          <h3 className="text-xl font-medium mt-6 mb-4 text-gray-900 dark:text-gray-100">NATIONAL REGISTER</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Under Section 18 of the Taxi Regulation Act 2013 and 2016, NTA must keep an official list of licences, known as the national register.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            NTA allows other agencies to access this register, where permitted, to ensure law enforcement and compliance. This register is not accessible to the wider public. The national register includes details on licence holders, vehicles and SPSV driver licences.
          </p>

          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mt-4">LICENCE HOLDER INFORMATION</h4>
          <p className="text-gray-700 dark:text-gray-300 mb-2">For licence holders, the register includes the following additional details:</p>
          <ul className="list-disc list-outside ml-5 space-y-1 text-gray-700 dark:text-gray-300 mb-4">
            <li>The name and address of the licence holder.</li>
            <li>The date on which the licence was given.</li>
            <li>Details of any licence suspension, including the length of time of the suspension, the reason for the suspension and details about all the removals of such suspensions.</li>
          </ul>

          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mt-4">VEHICLE LICENCE INFORMATION</h4>
          <p className="text-gray-700 dark:text-gray-300 mb-2">For vehicle licences, the register includes the following additional details:</p>
          <ul className="list-disc list-outside ml-5 space-y-1 text-gray-700 dark:text-gray-300 mb-4">
            <li>The vehicle licence number.</li>
            <li>The registration number of the licensed vehicle.</li>
            <li>The SPSV category the licence is for/applies to.</li>
            <li>Details of any changes of the vehicle connected with the licence.</li>
          </ul>

          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mt-4">SPSV DRIVER LICENCE INFORMATION</h4>
          <p className="text-gray-700 dark:text-gray-300 mb-2">For SPSV driver licences, the register includes the following additional details:</p>
          <ul className="list-disc list-outside ml-5 space-y-1 text-gray-700 dark:text-gray-300 mb-6">
            <li>The SPSV driver licence number.</li>
            <li>The SPSV driver licence photograph.</li>
            <li>The county or counties where the SPSV driver licence has been given.</li>
          </ul>

          <h3 className="text-xl font-medium mt-6 mb-4 text-gray-900 dark:text-gray-100">PUBLIC (ONLINE) REGISTER</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            By law, a small section of the licence record information above is available to the general public on NTA’s consumer-facing website, www.transportforireland.ie.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-2">NTA does not share or publish the following details on their website:</p>
          <ul className="list-disc list-outside ml-5 space-y-1 text-gray-700 dark:text-gray-300 mb-4">
            <li>Address details of licence holders.</li>
            <li>Details of suspensions or cancellations of licences.</li>
            <li>Certain personal details about the licence holder.</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            However, in line with Section 18 of the Taxi Regulation Acts 2013 and 2016, it must give details of any licence holder if there is a written request for a certificate of information. There is a fee for this type of request.
          </p>

          <p className="text-gray-700 dark:text-gray-300 mb-4">The information published on NTA’s consumer-facing website includes the following:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-md border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-sm">SPSV driver licence information:</h4>
              <ul className="list-disc list-outside ml-4 text-sm text-gray-700 dark:text-gray-300">
                <li>SPSV driver licence number</li>
                <li>The holder’s name</li>
                <li>Licensed areas of operation</li>
                <li>Licence expiry date</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-md border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-sm">Vehicle licence information:</h4>
              <ul className="list-disc list-outside ml-4 text-sm text-gray-700 dark:text-gray-300">
                <li>Vehicle licence number</li>
                <li>Licence type</li>
                <li>Vehicle registration number</li>
                <li>Licence expiry date</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-md border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-sm">Dispatch operator information:</h4>
              <ul className="list-disc list-outside ml-4 text-sm text-gray-700 dark:text-gray-300">
                <li>Dispatch operator licence number</li>
                <li>Company name</li>
                <li>Contact name</li>
                <li>Licence status</li>
                <li>Licence expiry date</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
            <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">FURTHER INFORMATION</h4>
            <p className="text-gray-700 dark:text-gray-300 mb-2">You can contact NTA in a few ways:</p>
            <ul className="list-disc list-outside ml-5 space-y-1 text-gray-700 dark:text-gray-300">
              <li>Phone: 0818 064 000 (SPSV Information Line).</li>
              <li>Email: taxis@nationaltransport.ie.</li>
              <li>Complete the Contact Us form on NTA’s industry website.</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
