import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

export interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  description: string;
}

export interface FooterLink {
  name: string;
  href: string;
}

export interface FooterData {
  companyDescription: string;
  location: string;
  phoneNumber: string;
  mainLinks: FooterLink[];
  baghouseLinks: FooterLink[];
  serviceLinks: FooterLink[];
  copyright: string;
}

export interface HomePageData {
  hero: {
    slides: HeroSlide[];
    autoSlideInterval: number;
  };
  services: {
    sectionTitle: string;
    sectionDescription: string;
    services: Array<{
      id: number;
      title: string;
      subtitle: string;
      image: string;
      path: string;
    }>;
  };
  cta: {
    mainHeading: string;
    subHeading: string;
    description: string;
    primaryButtonText: string;
    secondaryButtonText: string;
    phoneNumber: string;
  };
  footer: FooterData;
}

const HOME_PAGE_DOC_ID = 'homepage';

// Get home page data from Firestore
export const getHomePageData = async (): Promise<HomePageData | null> => {
  try {
    const docRef = doc(db, 'pages', HOME_PAGE_DOC_ID);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return docSnap.data() as HomePageData;
    } else {
      console.log('No home page data found');
      return null;
    }
  } catch (error) {
    console.error('Error getting home page data:', error);
    throw error;
  }
};

// Save home page data to Firestore
export const saveHomePageData = async (data: HomePageData): Promise<void> => {
  try {
    const docRef = doc(db, 'pages', HOME_PAGE_DOC_ID);
    await setDoc(docRef, data);
    console.log('Home page data saved successfully');
  } catch (error) {
    console.error('Error saving home page data:', error);
    throw error;
  }
};

// Update only hero section
export const updateHeroSection = async (heroData: HomePageData['hero']): Promise<void> => {
  try {
    const docRef = doc(db, 'pages', HOME_PAGE_DOC_ID);
    await updateDoc(docRef, {
      hero: heroData
    });
    console.log('Hero section updated successfully');
  } catch (error) {
    console.error('Error updating hero section:', error);
    throw error;
  }
};

// Update only services section
export const updateServicesSection = async (servicesData: HomePageData['services']): Promise<void> => {
  try {
    const docRef = doc(db, 'pages', HOME_PAGE_DOC_ID);
    await updateDoc(docRef, {
      services: servicesData
    });
    console.log('Services section updated successfully');
  } catch (error) {
    console.error('Error updating services section:', error);
    throw error;
  }
};

// Update only CTA section
export const updateCTASection = async (ctaData: HomePageData['cta']): Promise<void> => {
  try {
    const docRef = doc(db, 'pages', HOME_PAGE_DOC_ID);
    await updateDoc(docRef, {
      cta: ctaData
    });
    console.log('CTA section updated successfully');
  } catch (error) {
    console.error('Error updating CTA section:', error);
    throw error;
  }
};

// Update only footer section
export const updateFooterSection = async (footerData: FooterData): Promise<void> => {
  try {
    const docRef = doc(db, 'pages', HOME_PAGE_DOC_ID);
    await updateDoc(docRef, {
      footer: footerData
    });
    console.log('Footer section updated successfully');
  } catch (error) {
    console.error('Error updating footer section:', error);
    throw error;
  }
};
