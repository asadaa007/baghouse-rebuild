import { useState } from 'react';
import HeroSmall from '../components/sections/HeroSmall';
import WaveDivider from '../components/ui/WaveDivider';

const BaghouseFAQ = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const faqs = [
    {
      question: "What is a Magnehelic Gauge and how can I use it to help understand the performance of my dust collector?",
      answer: "A Magnehelic Gauge simply shows the difference between 2 pressures. In most dust collectors, the low-pressure side connects to the clean side, and the high-pressure side connects to the dirty side. If connected to the inlet and outlet ducts of the baghouse, the reading might be higher by approximately 1.5 inches. Most gauges read in 'inches of water' (abbreviated as 'wc or 'wg). As filter bags become coated, the pressure drop increases. Increased airflow (due to higher fan speed or additional ducts) can also increase the gauge reading. The ideal operation is a 'steady state' where airflow is maximized, filter media efficiency is at its peak, and dust cake isn't causing short-term plugging. The majority of dust collectors typically operate in the 2 to 6-inch range, with an ideal range of 2 to 4 inches. Each particular system will have its own specific range. Here are a few situations where we can use a Magnehelic to interpret a number of system conditions that could occur in a normally operating baghouse: Please note: Check the gauge operation and lines 1st.",
      hasTable: true,
      tableData: [
        {
          condition: "Low airflow at the pick-ups",
          gaugeReading: "Reading is beyond the usual operating range",
          possibleCondition: "Plugged filters; cleaning system not operating correctly; full hopper; severely leaking dust discharge valve; fan damper open beyond usual position"
        },
        {
          condition: "Low airflow at the pick-ups",
          gaugeReading: "Reading is lower than the usual operating range",
          possibleCondition: "Exhaust fan damper is partially closed; fan belts are damaged and loose; outlet duct of the fan is plugged; duct runs are plugged; pulse cleaning system is leaking air severely; outside air entering into the system between the clean side and outlet of the fan; fan inlet cone is damaged"
        },
        {
          condition: "Usual airflow at the pick-ups then flow drops off. Airflow returns to normal after the fan is shut off, bags cleaned then the fan is restarted again",
          gaugeReading: "Reading is normal then increases beyond the usual operating range. After cleaning the bags after the system shuts down, the reading returns to normal",
          possibleCondition: "This condition indicates an increase in airflow through the system. This is often damper related at the fan or in the main duct. It could also indicate a hole in the system before the dust collector. The excess airflow is keeping product on the filters and will not allow it to clean off until the fan is shut-down and the filters cleaned down."
        }
      ]
    },
    {
      question: "How long should my filter bags last?",
      answer: "This is a commonly asked question and not an easy one to answer. In most manufacturing processes in North America, the generalized life expectancy is 12 months. In Europe, based on conversations with manufacturers and end-users, 2 years is considered average. Specific examples include Asphalt Paving plant filters, which can last up to 7 seasons, and woodworking filters, which can last from 12 months to 3 years. There are 13 known and unknown factors that determine the life expectancy of filter bags:",
      hasTable: false,
      numberedList: [
        "Design, style, model and sizing of the baghouse, fan, ducting, hooding and other components.",
        "How often the system is used.",
        "Dust loading into the system.",
        "Dust Particle size and population.",
        "Physical condition of the baghouse.",
        "Physical location of the system.",
        "Process (gas stream) parameters (moisture, volatiles, corrosive elements).",
        "Maintenance of the system.",
        "Ducting/hood design.",
        "How often the bags are cleaned.",
        "How often the baghouse is emptied.",
        "Quality of the filter media and of the bag or cartridge construction.",
        "Selection of the media...and the list goes on."
      ],
      conclusion: "Each baghouse is unique. 2 identical baghouses on 2 identical processes may have different filter bag life results."
    },
    {
      question: "How do we maximize bag life?",
      answer: "Each baghouse is unique. 2 identical baghouses on 2 identical processes may have different filter bag life results. To maximize bag life:",
      hasTable: false,
      numberedList: [
        "Use a mid-range air to cloth ratio (5:1 on pulse jet systems; 3:1 on shaker systems for instance).",
        "Have a daily routine of visiting the system at least once per day and recording the Magnehelic or Photohelic reading.",
        "Keep the hopper empty. Do not let it fill up.",
        "Keep oil and water out of the system (housing leaks; condensation; process washing with the system running and no shut-offs on the pick-ups where washing is occurring; review leaking fire sprinklers).",
        {
          main: "Have a yearly audit from an experienced baghouse service company. We offer monthly, quarterly; semi-annually and yearly inspections depending upon:",
          subList: [
            "The corporate need",
            "# of systems", 
            "Dust product being collected",
            "Past experiences of the customer"
          ]
        },
        "Inspect/service the exhaust fan and dust handling drives at least once per quarter.",
        "Inspect the filter bag cleaning system once per quarter (minimum).",
        "Inspect the filters once per quarter."
      ],
      conclusion: "Perhaps the most important aspect of understanding bag life is that the filter bag is, in most instances, a retaining surface for a 'dust filtering cake'. Maintaining the dust cake at a steady state will help maintain the efficiency and life of the filter media."
    },
    {
      question: "Is there an advantage to using Frost to replace my filter bags?",
      answer: "Many industries use their own personnel to replace filter bags. We see this particularly in the food industry where product or colour changes require frequent contamination control in the baghouse. Generally, these systems are compact and can be serviced easily and quickly. We believe this makes total sense for the customer. More complicated systems (not necessarily large), requiring a fast turnaround time and a skilled crew, are where we can fit in for you. Customers generally agree that they need to keep focused on doing what they need to do manufacturing and process wise. Our speciality and focus is baghouse maintenance. In some instances, where it makes sense for both the customer and Frost, we will work hand-in-hand with their personnel to get the overhaul completed.",
      hasTable: false
    },
    {
      question: "What are my responsibilities in regards to my baghouse system performance?",
      answer: "The minimum requirement is that you must meet the commitments of your Environmental Compliance Approval (ECA -Ministry of the Environment) agreement where your baghouse air/gas stream to the atmosphere. To simplify this process, Due Diligence is the key phrase. Your responsibilities include:",
      hasTable: false,
      numberedList: [
        "Inspect your dust collector regularly (daily; monthly; quarterly; annually).",
        "Record the filter bag pressure drop readings daily where possible.",
        "Record all maintenance activities for the system in a central log-book.",
        {
          main: "Service parts on the dust collector before they completely fail:",
          subList: [
            "Leaking bags",
            "Worn fan belts", 
            "Hoppers filling up",
            "Filter bag cleaning systems",
            "Etc."
          ]
        },
        {
          main: "Hire an outside company to:",
          subList: [
            "Provide an inspection program",
            "Help you set-up your own in-house inspection program", 
            "Audit your program on a yearly basis"
          ]
        }
      ],
      conclusion: "Running a system to failure is not considered good practice with baghouses. There is a legal responsibility but it does not have to be complicated or expensive. For systems where venting back into the building is permissible, the same process applies. In the end, good dust collection at the process source, combined with lower than minimal system emissions, will be reflected by the quality of your Due Diligence Baghouse Program."
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSmall
        title="Baghouse FAQ"
        subtitle="Frequently Asked Questions about baghouse systems, maintenance, and performance optimization"
        showGradient={true}
        gradientColors="from-blue-900 via-blue-800 to-indigo-900"
      />

      {/* Wave Divider */}
      <WaveDivider color="text-blue-900" />

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Common Questions About Baghouse Systems
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get expert answers to the most frequently asked questions about baghouse operation, maintenance, and optimization.
              </p>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${
                    openAccordion === index ? 'ring-2 ring-blue-500 shadow-xl' : 'hover:shadow-xl'
                  }`}
                >
                  {/* Question Header */}
                  <button
                    onClick={() => toggleAccordion(index)}
                    className={`w-full px-8 py-8 text-left transition-all duration-300 flex items-center justify-between ${
                      openAccordion === index 
                        ? 'bg-blue-50 border-b border-blue-100' 
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-start space-x-6">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                        openAccordion === index ? 'bg-blue-600' : 'bg-gray-200'
                      }`}>
                        <span className={`font-bold text-sm ${
                          openAccordion === index ? 'text-white' : 'text-gray-600'
                        }`}>
                          Q
                        </span>
                      </div>
                      <h3 className={`text-xl font-semibold leading-relaxed ${
                        openAccordion === index ? 'text-blue-900' : 'text-gray-900'
                      }`}>
                        {faq.question}
                      </h3>
                    </div>
                    
                    {/* Arrow Icon */}
                    <div className={`ml-6 transition-transform duration-300 ${
                      openAccordion === index ? 'rotate-180' : ''
                    }`}>
                      <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {/* Answer Content */}
                  <div className={`overflow-hidden transition-all duration-300 ${
                    openAccordion === index ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-8 py-8 bg-gray-50">
                      <div className="flex items-start space-x-6">
                        <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
                          <span className="font-bold text-sm text-white">A</span>
                        </div>
                        <div className="flex-1">
                          <div className="text-gray-700 leading-relaxed space-y-4 text-lg">
                            {faq.answer.split('. ').map((sentence, sentenceIndex) => (
                              <p key={sentenceIndex} className="mb-4">
                                {sentenceIndex === 0 ? sentence : sentence + '.'}
                              </p>
                            ))}
                            
                            {/* Numbered List */}
                            {faq.numberedList && (
                              <div className="mt-6">
                                <ol className="list-decimal list-inside space-y-2 ml-4">
                                  {faq.numberedList.map((item, index) => (
                                    <li key={index} className="text-gray-700 leading-relaxed">
                                      {typeof item === 'string' ? (
                                        <span className="ml-2">{item}</span>
                                      ) : (
                                        <div className="ml-2">
                                          <span>{item.main}</span>
                                          <ul className="list-disc list-inside space-y-1 ml-6 mt-2">
                                            {item.subList.map((subItem, subIndex) => (
                                              <li key={subIndex} className="text-gray-600 text-base">
                                                {subItem}
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      )}
                                    </li>
                                  ))}
                                </ol>
                              </div>
                            )}
                            
                            {/* Conclusion */}
                            {faq.conclusion && (
                              <p className="mt-6 text-gray-700 leading-relaxed">
                                {faq.conclusion}
                              </p>
                            )}
                            
                            {/* Table for Magnehelic Gauge FAQ */}
                            {faq.hasTable && faq.tableData && (
                              <div className="mt-8">
                                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                  <table className="w-full">
                                    <thead className="bg-blue-600 text-white">
                                      <tr>
                                        <th className="px-6 py-4 text-left font-semibold">Condition</th>
                                        <th className="px-6 py-4 text-left font-semibold">Magnehelic Gauge</th>
                                        <th className="px-6 py-4 text-left font-semibold">Possible Condition</th>
                                      </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                      {faq.tableData.map((row, rowIndex) => (
                                        <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                                          <td className="px-6 py-4 text-sm font-medium text-gray-900">
                                            {row.condition}
                                          </td>
                                          <td className="px-6 py-4 text-sm text-gray-700">
                                            {row.gaugeReading}
                                          </td>
                                          <td className="px-6 py-4 text-sm text-gray-700">
                                            {row.possibleCondition}
                                          </td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Help Section */}
            <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Still Have Questions?
                </h3>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  Can't find the answer you're looking for? Our expert team is here to help with any baghouse-related questions.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a
                    href="tel:1-905-934-1211"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>Call 1-905-934-1211</span>
                  </a>
                  
                  <a
                    href="mailto:frost@baghouse.net"
                    className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-3 transform hover:-translate-y-1"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>Send Email</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Topics Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Related Topics
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore more information about baghouse systems and maintenance
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Related Topic Cards */}
              <div className="bg-gray-50 rounded-xl p-8 hover:bg-blue-50 transition-all duration-300 cursor-pointer group">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">What is a Baghouse?</h3>
                <p className="text-gray-600 mb-4">
                  Learn about the fundamentals of baghouse systems and how they work to control dust emissions.
                </p>
                <span className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-200">
                  Learn More →
                </span>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 hover:bg-blue-50 transition-all duration-300 cursor-pointer group">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Baghouse Cleaning Methods</h3>
                <p className="text-gray-600 mb-4">
                  Discover different cleaning methods and how to choose the right one for your application.
                </p>
                <span className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-200">
                  Learn More →
                </span>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 hover:bg-blue-50 transition-all duration-300 cursor-pointer group">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Maintenance Services</h3>
                <p className="text-gray-600 mb-4">
                  Explore our comprehensive maintenance services to keep your baghouse running efficiently.
                </p>
                <span className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-200">
                  Learn More →
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BaghouseFAQ; 