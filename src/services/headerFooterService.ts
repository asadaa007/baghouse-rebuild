import { db } from '../firebase/config';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';

// Header/Navigation Data Interface
export interface HeaderData {
  logo: {
    url: string;
    altText: string;
  };
  phoneNumber: string;
  navItems: NavItem[];
  servicesMegaMenu: MegaMenuSection[];
  baghouseDropdown: DropdownItem[];
  contactDropdown: DropdownItem[];
  // Dynamic mega menus for other navigation items
  [key: string]: any; // Allow dynamic mega menu properties
}

export interface NavItem {
  name: string;
  path: string;
  hasDropdown: boolean;
  hasMegaMenu: boolean;
}

export interface MegaMenuSection {
  title: string;
  items: DropdownItem[];
}

export interface DropdownItem {
  name: string;
  path: string;
}

// Footer Data Interface
export interface FooterData {
  companyDescription: string;
  location: string;
  phoneNumber: string;
  mainLinks: FooterLink[];
  baghouseLinks: FooterLink[];
  serviceLinks: FooterLink[];
  copyright: string;
}

export interface FooterLink {
  name: string;
  href: string;
}

// Combined Header & Footer Data
export interface HeaderFooterData {
  header: HeaderData;
  footer: FooterData;
}

// Default Header Data
const defaultHeaderData: HeaderData = {
  logo: {
    url: "/logo.png",
    altText: "Frost Emission Logo"
  },
  phoneNumber: "1-905-934-1211",
  navItems: [
    { name: 'Home', path: '/', hasDropdown: false, hasMegaMenu: false },
    { name: 'Services', path: '/services', hasDropdown: false, hasMegaMenu: true },
    { name: 'Baghouse', path: '/baghouse', hasDropdown: true, hasMegaMenu: false },
    { name: 'Contact', path: '/contact', hasDropdown: true, hasMegaMenu: false },
    { name: 'Careers', path: '/careers', hasDropdown: false, hasMegaMenu: false },
  ],
  servicesMegaMenu: [
    {
      title: "Baghouse Field Services",
      items: [
        { name: "Baghouse Field Services", path: "/baghouse/field-services" },
        { name: "Filter Change-outs", path: "/services/filter-change-outs" },
        { name: "Mechanical Repairs", path: "/services/mechanical-repairs" },
        { name: "PM Inspections & Dye Testing", path: "/services/pm-inspections-dye-testing" },
        { name: "Baghouse Types Serviced", path: "/services/baghouse-types-serviced" },
        { name: "Photo Gallery", path: "/services/photo-gallery" }
      ]
    },
    {
      title: "Sheet Metal & Ducting",
      items: [
        { name: "Sheet Metal & Ducting", path: "/services/sheet-metal-ducting" },
        { name: "Design", path: "/services/design" },
        { name: "Fabrication", path: "/services/fabrication" },
        { name: "Installation & Replacement", path: "/services/installation-replacement" },
        { name: "Projects", path: "/services/projects" },
        { name: "Photo Gallery", path: "/services/photo-gallery" }
      ]
    },
    {
      title: "Consulting",
      items: [
        { name: "Consulting", path: "/services/consulting" },
        { name: "System Performance Review", path: "/services/system-performance-review" },
        { name: "Proposed Modifications", path: "/services/proposed-modifications" },
        { name: "Photo Gallery", path: "/services/photo-gallery" }
      ]
    },
    {
      title: "Spare Parts",
      items: [
        { name: "Spare Parts", path: "/services/spare-parts" },
        { name: "Bags & Cartridges", path: "/services/bags-cartridges" },
        { name: "Dye Powder", path: "/services/dye-powder" },
        { name: "Pulse Cleaning Components", path: "/services/pulse-cleaning-components" },
        { name: "Shaker Components", path: "/services/shaker-components" },
        { name: "Miscellaneous", path: "/services/miscellaneous" },
        { name: "Photo Gallery", path: "/services/photo-gallery" }
      ]
    }
  ],
  baghouseDropdown: [
    { name: "Baghouse FAQ", path: "/baghouse/faq" },
    { name: "What is a Baghouse?", path: "/baghouse/what-is-baghouse" },
    { name: "Baghouse Cleaning Methods", path: "/baghouse/cleaning-methods" }
  ],
  contactDropdown: [
    { name: "Contact Us", path: "/contact" },
    { name: "Request Information", path: "/contact/request-information" }
  ]
};

// Default Footer Data
const defaultFooterData: FooterData = {
  companyDescription: "Professional baghouse solutions and industrial services. We provide cutting-edge filtration systems that keep your workplace clean, safe, and compliant with environmental regulations.",
  location: "St. Catharines, Ontario, Canada",
  phoneNumber: "1-905-934-1211",
  mainLinks: [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
    { name: 'Careers', href: '/careers' },
  ],
  baghouseLinks: [
    { name: 'Baghouse FAQ', href: '/baghouse/faq' },
    { name: 'What is a Baghouse?', href: '/baghouse/what-is-baghouse' },
    { name: 'Baghouse Cleaning Methods', href: '/baghouse/cleaning-methods' },
    { name: 'Baghouse Field Services', href: '/baghouse/field-services' },
  ],
  serviceLinks: [
    { name: 'Sheet Metal & Ducting', href: '/services/sheet-metal-ducting' },
    { name: 'Consulting', href: '/services/consulting' },
    { name: 'Spare Parts', href: '/services/spare-parts' },
  ],
  copyright: "© 2017 Frost Emission Performance Technologies Inc. All Rights Reserved."
};

// Get Header & Footer Data
export const getHeaderFooterData = async (): Promise<HeaderFooterData | null> => {
  try {
    const docRef = doc(db, 'website', 'headerFooter');
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return docSnap.data() as HeaderFooterData;
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error getting header/footer data:', error);
    return null;
  }
};

// Save Header & Footer Data
export const saveHeaderFooterData = async (data: HeaderFooterData): Promise<boolean> => {
  try {
    const docRef = doc(db, 'website', 'headerFooter');
    await setDoc(docRef, data);
    return true;
  } catch (error) {
    console.error('Error saving header/footer data:', error);
    return false;
  }
};

// Update Header Section
export const updateHeaderSection = async (headerData: HeaderData): Promise<boolean> => {
  try {
    const docRef = doc(db, 'website', 'headerFooter');
    await updateDoc(docRef, {
      header: headerData
    });
    return true;
  } catch (error) {
    console.error('Error updating header section:', error);
    return false;
  }
};

// Update Footer Section
export const updateFooterSection = async (footerData: FooterData): Promise<boolean> => {
  try {
    const docRef = doc(db, 'website', 'headerFooter');
    await updateDoc(docRef, {
      footer: footerData
    });
    return true;
  } catch (error) {
    console.error('Error updating footer section:', error);
    return false;
  }
};

// Initialize Header & Footer Data
export const initializeHeaderFooterData = async (): Promise<boolean> => {
  try {
    const existingData = await getHeaderFooterData();
    if (!existingData) {
      const defaultData: HeaderFooterData = {
        header: defaultHeaderData,
        footer: defaultFooterData
      };
      return await saveHeaderFooterData(defaultData);
    }
    return true;
  } catch (error) {
    console.error('Error initializing header/footer data:', error);
    return false;
  }
};

// Get Header Data Only
export const getHeaderData = async (): Promise<HeaderData | null> => {
  try {
    const data = await getHeaderFooterData();
    return data?.header || null;
  } catch (error) {
    console.error('Error getting header data:', error);
    return null;
  }
};

// Get Footer Data Only
export const getFooterData = async (): Promise<FooterData | null> => {
  try {
    const data = await getHeaderFooterData();
    return data?.footer || null;
  } catch (error) {
    console.error('Error getting footer data:', error);
    return null;
  }
};
