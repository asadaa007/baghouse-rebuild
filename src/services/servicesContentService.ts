import { db } from '../firebase/config';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';

export interface ServiceItem {
  title: string;
  description: string;
  image: string;
  icon: string;
  color: string;
  path?: string;
}

export interface ServiceCategory {
  name: string;
  hero: {
    title: string;
    subtitle: string;
    backgroundImage: string;
  };
  sectionTitle: string;
  sectionSubtitle: string;
  services: ServiceItem[];
  experience?: {
    title: string;
    subtitle: string;
    description: string;
    features: string[];
  };
  qualityAssurance?: {
    title: string;
    subtitle: string;
    description: string;
    features: string[];
  };
  cta?: {
    title: string;
    subtitle: string;
    buttonText: string;
    buttonLink: string;
  };
}

// New interface for sub-page content
export interface ServiceSubPage {
  id: string;
  title: string;
  path: string;
  hero: {
    title: string;
    subtitle: string;
    backgroundImage: string;
  };
  content: {
    sections: {
      title: string;
      content: string;
      image?: string;
    }[];
  };
  cta?: {
    title: string;
    subtitle: string;
    buttonText: string;
    buttonLink: string;
  };
}

export interface ServicesContentData {
  baghouseFieldServices: ServiceCategory;
  sheetMetalDucting: ServiceCategory;
  consulting: ServiceCategory;
  spareParts: ServiceCategory;
  // New field for sub-pages
  subPages: {
    [categoryId: string]: ServiceSubPage[];
  };
}

// Default sub-pages data structure
const defaultSubPages = {
  baghouseFieldServices: [
    {
      id: 'filter-change-outs',
      title: 'Filter Change-outs',
      path: '/services/filter-change-outs',
      hero: {
        title: 'Filter Change-outs',
        subtitle: 'Professional filter replacement services for optimal baghouse performance',
        backgroundImage: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
      },
      content: {
        sections: [
          {
            title: 'Professional Filter Replacement',
            content: 'Our experienced team provides comprehensive filter change-out services to ensure your baghouse operates at peak efficiency.',
            image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
          }
        ]
      },
      cta: {
        title: 'Ready for Filter Replacement?',
        subtitle: 'Contact us to schedule your filter change-out service',
        buttonText: 'Get Quote',
        buttonLink: '/contact'
      }
    },
    {
      id: 'mechanical-repairs',
      title: 'Mechanical Repairs',
      path: '/services/mechanical-repairs',
      hero: {
        title: 'Mechanical Repairs',
        subtitle: 'Expert repair services for all baghouse mechanical components',
        backgroundImage: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
      },
      content: {
        sections: [
          {
            title: 'Comprehensive Mechanical Services',
            content: 'We provide expert repair and maintenance services for all mechanical components of your baghouse system.',
            image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
          }
        ]
      },
      cta: {
        title: 'Need Mechanical Repairs?',
        subtitle: 'Our team is ready to help with your repair needs',
        buttonText: 'Contact Us',
        buttonLink: '/contact'
      }
    }
  ],
  sheetMetalDucting: [
    {
      id: 'design',
      title: 'Design',
      path: '/services/design',
      hero: {
        title: 'Sheet Metal & Ducting Design',
        subtitle: 'Custom design solutions for optimal airflow and efficiency',
        backgroundImage: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
      },
      content: {
        sections: [
          {
            title: 'Custom Design Solutions',
            content: 'Our engineering team creates custom sheet metal and ducting designs tailored to your specific requirements.',
            image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
          }
        ]
      },
      cta: {
        title: 'Start Your Design Project',
        subtitle: 'Let us design the perfect solution for your needs',
        buttonText: 'Get Started',
        buttonLink: '/contact'
      }
    }
  ],
  consulting: [
    {
      id: 'system-performance-review',
      title: 'System Performance Review',
      path: '/services/system-performance-review',
      hero: {
        title: 'System Performance Review',
        subtitle: 'Comprehensive analysis and optimization recommendations',
        backgroundImage: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
      },
      content: {
        sections: [
          {
            title: 'Performance Analysis',
            content: 'Our consulting team conducts thorough system performance reviews to identify optimization opportunities.',
            image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
          }
        ]
      },
      cta: {
        title: 'Review Your System',
        subtitle: 'Get expert insights on your system performance',
        buttonText: 'Schedule Review',
        buttonLink: '/contact'
      }
    }
  ],
  spareParts: [
    {
      id: 'bags-cartridges',
      title: 'Bags & Cartridges',
      path: '/services/bags-cartridges',
      hero: {
        title: 'Bags & Cartridges',
        subtitle: 'High-quality filter bags and cartridges for all applications',
        backgroundImage: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
      },
      content: {
        sections: [
          {
            title: 'Premium Filter Media',
            content: 'We offer a comprehensive selection of high-quality filter bags and cartridges for all industrial applications.',
            image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
          }
        ]
      },
      cta: {
        title: 'Find Your Filters',
        subtitle: 'Browse our selection of bags and cartridges',
        buttonText: 'Shop Now',
        buttonLink: '/contact'
      }
    }
  ]
};

const defaultServicesContentData: ServicesContentData = {
  baghouseFieldServices: {
    name: "Baghouse Field Services",
    hero: {
      title: "Baghouse Field Services",
      subtitle: "Professional field services for industrial dust collection systems. Our experienced team provides comprehensive maintenance, repairs, and optimization services to keep your baghouse operating at peak efficiency.",
      backgroundImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    sectionTitle: "Our Field Services",
    sectionSubtitle: "Comprehensive baghouse field services to keep your dust collection system running efficiently and reliably.",
    services: [
      {
        title: "Filter Change-outs",
        description: "Professional filter replacement services including removal of old filters, installation of new filters, and system testing to ensure optimal performance.",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
        color: "from-blue-500 to-blue-600",
        path: "/services/filter-change-outs"
      },
      {
        title: "Mechanical Repairs",
        description: "Expert repair services for all mechanical components including fans, motors, dampers, and other critical system parts.",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
        color: "from-green-500 to-green-600",
        path: "/services/mechanical-repairs"
      },
      {
        title: "PM Inspections & Dye Testing",
        description: "Preventive maintenance inspections and dye testing to identify potential issues before they become major problems.",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
        color: "from-purple-500 to-purple-600",
        path: "/services/pm-inspections-dye-testing"
      }
    ],
    experience: {
      title: "Why Choose Our Field Services?",
      subtitle: "Experience and Expertise",
      description: "With over 25 years of experience in baghouse field services, our team brings unmatched expertise to every project. We understand the unique challenges of industrial dust collection systems and provide solutions that work.",
      features: [
        "Certified technicians with extensive training",
        "24/7 emergency service availability",
        "Comprehensive safety protocols",
        "Advanced diagnostic equipment",
        "Proven track record of success"
      ]
    },
    cta: {
      title: "Ready to Get Started?",
      subtitle: "Contact us today to discuss your baghouse field service needs. Our experienced team is ready to help you maintain and optimize your dust collection systems.",
      buttonText: "Get a Quote",
      buttonLink: "/contact"
    }
  },
  sheetMetalDucting: {
    name: "Sheet Metal & Ducting",
    hero: {
      title: "Sheet Metal & Ducting",
      subtitle: "Custom sheet metal fabrication and ducting solutions for industrial applications. From design to installation, we provide comprehensive services to meet your specific requirements.",
      backgroundImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    sectionTitle: "Our Sheet Metal & Ducting Services",
    sectionSubtitle: "Complete solutions from design and fabrication to installation and maintenance.",
    services: [
      {
        title: "Design",
        description: "Custom design services for sheet metal and ducting systems, ensuring optimal airflow and efficiency for your specific application.",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
        color: "from-blue-500 to-cyan-500",
        path: "/services/design"
      },
      {
        title: "Fabrication",
        description: "Precision fabrication of sheet metal components and ducting systems using advanced equipment and quality materials.",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
        color: "from-orange-500 to-red-500",
        path: "/services/fabrication"
      },
      {
        title: "Installation & Replacement",
        description: "Professional installation and replacement services for sheet metal and ducting systems, ensuring proper fit and optimal performance.",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        icon: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10",
        color: "from-green-500 to-emerald-500",
        path: "/services/installation-replacement"
      }
    ],
    cta: {
      title: "Ready to Start Your Project?",
      subtitle: "Contact us today to discuss your sheet metal and ducting needs. Our team is ready to provide custom solutions for your application.",
      buttonText: "Get a Quote",
      buttonLink: "/contact"
    }
  },
  consulting: {
    name: "Consulting",
    hero: {
      title: "Consulting Services",
      subtitle: "Expert consulting services for industrial dust collection systems. Our experienced engineers provide comprehensive analysis, recommendations, and optimization strategies.",
      backgroundImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    sectionTitle: "Our Consulting Services",
    sectionSubtitle: "Expert analysis and recommendations to optimize your dust collection system performance.",
    services: [
      {
        title: "System Performance Review",
        description: "Comprehensive analysis of your dust collection system to identify performance issues and optimization opportunities.",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
        color: "from-blue-500 to-indigo-500",
        path: "/services/system-performance-review"
      },
      {
        title: "Proposed Modifications",
        description: "Detailed recommendations for system modifications to improve efficiency, reduce maintenance, and enhance performance.",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
        color: "from-purple-500 to-pink-500",
        path: "/services/proposed-modifications"
      }
    ],
    cta: {
      title: "Need Expert Advice?",
      subtitle: "Contact us today to discuss your consulting needs. Our experienced engineers are ready to help optimize your system.",
      buttonText: "Schedule Consultation",
      buttonLink: "/contact"
    }
  },
  spareParts: {
    name: "Spare Parts",
    hero: {
      title: "Spare Parts",
      subtitle: "High-quality spare parts and components for industrial dust collection systems. We partner with leading manufacturers to provide reliable parts that keep your system running efficiently.",
      backgroundImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    sectionTitle: "Our Spare Parts",
    sectionSubtitle: "Comprehensive selection of high-quality parts and components for all major baghouse systems.",
    services: [
      {
        title: "Bags & Cartridges",
        description: "High-quality filter bags and cartridges for all applications, including pulse jet, shaker, and reverse air systems.",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
        color: "from-blue-500 to-blue-600",
        path: "/services/bags-cartridges"
      },
      {
        title: "Pulse Cleaning Components",
        description: "Complete selection of pulse cleaning components including solenoids, diaphragms, and control systems.",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
        color: "from-yellow-500 to-orange-500",
        path: "/services/pulse-cleaning-components"
      },
      {
        title: "Shaker Components",
        description: "Reliable shaker components including motors, belts, and mechanical parts for shaker baghouse systems.",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
        color: "from-green-500 to-green-600",
        path: "/services/shaker-components"
      }
    ],
    qualityAssurance: {
      title: "Quality Assurance",
      subtitle: "Why Choose Our Spare Parts?",
      description: "We partner with leading manufacturers to provide high-quality spare parts that meet or exceed OEM specifications. Our parts are backed by comprehensive warranties and technical support.",
      features: [
        "OEM quality and specifications",
        "Comprehensive warranty coverage",
        "Fast shipping and delivery",
        "Technical support available",
        "Competitive pricing"
      ]
    },
    cta: {
      title: "Find Your Parts",
      subtitle: "Contact us today to find the right parts for your system. Our team can help you identify the correct components and ensure compatibility.",
      buttonText: "Get Quote",
      buttonLink: "/contact"
    }
  },
  subPages: defaultSubPages
};

export const getServicesContentData = async (): Promise<ServicesContentData | null> => {
  try {
    const docRef = doc(db, 'services', 'content');
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return docSnap.data() as ServicesContentData;
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error getting services content data:', error);
    return null;
  }
};

export const saveServicesContentData = async (data: ServicesContentData): Promise<boolean> => {
  try {
    const docRef = doc(db, 'services', 'content');
    await setDoc(docRef, data);
    return true;
  } catch (error) {
    console.error('Error saving services content data:', error);
    return false;
  }
};

export const updateServiceCategory = async (categoryKey: keyof ServicesContentData, categoryData: ServiceCategory): Promise<boolean> => {
  try {
    const docRef = doc(db, 'services', 'content');
    await updateDoc(docRef, {
      [categoryKey]: categoryData
    });
    return true;
  } catch (error) {
    console.error('Error updating service category:', error);
    return false;
  }
};

// New function to update sub-pages
export const updateServiceSubPages = async (categoryId: string, subPages: ServiceSubPage[]): Promise<boolean> => {
  try {
    const docRef = doc(db, 'services', 'content');
    await updateDoc(docRef, {
      [`subPages.${categoryId}`]: subPages
    });
    return true;
  } catch (error) {
    console.error('Error updating service sub-pages:', error);
    return false;
  }
};

// New function to get sub-pages for a specific category
export const getServiceSubPages = async (categoryId: string): Promise<ServiceSubPage[]> => {
  try {
    const data = await getServicesContentData();
    return data?.subPages?.[categoryId] || [];
  } catch (error) {
    console.error('Error getting service sub-pages:', error);
    return [];
  }
};

// New function to get a specific sub-page
export const getServiceSubPage = async (categoryId: string, subPageId: string): Promise<ServiceSubPage | null> => {
  try {
    const subPages = await getServiceSubPages(categoryId);
    return subPages.find(page => page.id === subPageId) || null;
  } catch (error) {
    console.error('Error getting service sub-page:', error);
    return null;
  }
};

export const initializeServicesContentData = async (): Promise<boolean> => {
  try {
    const docRef = doc(db, 'services', 'content');
    await setDoc(docRef, defaultServicesContentData);
    return true;
  } catch (error) {
    console.error('Error initializing services content data:', error);
    return false;
  }
};
