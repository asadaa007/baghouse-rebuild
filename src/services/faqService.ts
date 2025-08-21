import { db } from '../firebase/config';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';

export interface FAQItem {
  question: string;
  answer: string;
  hasTable?: boolean;
  tableData?: TableRow[];
  numberedList?: (string | ListItem)[];
  conclusion?: string;
}

export interface TableRow {
  condition: string;
  gaugeReading: string;
  possibleCondition: string;
}

export interface ListItem {
  main: string;
  subList: string[];
}

export interface FAQData {
  hero: {
    title: string;
    subtitle: string;
  };
  faqs: FAQItem[];
  additionalHelp: {
    title: string;
    subtitle: string;
    phoneNumber: string;
    email: string;
  };
  relatedTopics: {
    title: string;
    subtitle: string;
    topics: RelatedTopic[];
  };
}

export interface RelatedTopic {
  title: string;
  description: string;
  icon: string;
  link: string;
  color: string;
}

const defaultFAQData: FAQData = {
  hero: {
    title: "Baghouse FAQ",
    subtitle: "Frequently Asked Questions about baghouse systems, maintenance, and performance optimization"
  },
  faqs: [
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
  ],
  additionalHelp: {
    title: "Still Have Questions?",
    subtitle: "Can't find the answer you're looking for? Our expert team is here to help with any baghouse-related questions.",
    phoneNumber: "1-905-934-1211",
    email: "frost@baghouse.net"
  },
  relatedTopics: {
    title: "Related Topics",
    subtitle: "Explore more information about baghouse systems and maintenance",
    topics: [
      {
        title: "What is a Baghouse?",
        description: "Learn about the fundamentals of baghouse systems and how they work to control dust emissions.",
        icon: "lightbulb",
        link: "/baghouse/what-is-baghouse",
        color: "blue"
      },
      {
        title: "Baghouse Cleaning Methods",
        description: "Discover different cleaning methods and how to choose the right one for your application.",
        icon: "refresh",
        link: "/baghouse/cleaning-methods",
        color: "green"
      },
      {
        title: "Maintenance Services",
        description: "Explore our comprehensive maintenance services to keep your baghouse running efficiently.",
        icon: "settings",
        link: "/services",
        color: "purple"
      }
    ]
  }
};

export const getFAQData = async (): Promise<FAQData | null> => {
  try {
    const docRef = doc(db, 'content', 'faq');
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return docSnap.data() as FAQData;
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error getting FAQ data:', error);
    return null;
  }
};

export const saveFAQData = async (faqData: FAQData): Promise<boolean> => {
  try {
    const docRef = doc(db, 'content', 'faq');
    await setDoc(docRef, {
      ...faqData,
      lastUpdated: new Date().toISOString()
    });
    return true;
  } catch (error) {
    console.error('Error saving FAQ data:', error);
    return false;
  }
};

export const updateFAQSection = async (section: keyof FAQData, data: any): Promise<boolean> => {
  try {
    const docRef = doc(db, 'content', 'faq');
    await updateDoc(docRef, {
      [section]: data,
      lastUpdated: new Date().toISOString()
    });
    return true;
  } catch (error) {
    console.error('Error updating FAQ section:', error);
    return false;
  }
};

export const initializeFAQData = async (): Promise<boolean> => {
  try {
    const existingData = await getFAQData();
    if (!existingData) {
      return await saveFAQData(defaultFAQData);
    }
    return true;
  } catch (error) {
    console.error('Error initializing FAQ data:', error);
    return false;
  }
};
