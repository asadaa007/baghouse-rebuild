import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

// Type definitions for contact page data
export interface TeamMember {
  id: number;
  name: string;
  position: string;
  phone: string;
  cell: string;
  email: string;
  image: string;
}

export interface Address {
  title: string;
  line1: string;
  line2: string;
}

export interface EmailContacts {
  general: string;
  sales: string;
  support: string;
  accounting: string;
}

export interface ContactInfo {
  mainPhone: string;
  emergencyPhone: string;
  mailingAddress: Address;
  shippingAddress: Address;
  emailContacts: EmailContacts;
}

export interface ContactData {
  hero: {
    title: string;
    subtitle: string;
    showGradient: boolean;
    gradientColors: string;
  };
  team: {
    sectionTitle: string;
    sectionDescription: string;
    teamMembers: TeamMember[];
  };
  info: ContactInfo;
  mission: {
    title: string;
    description: string;
    safetyMeetingTitle: string;
    safetyMeetingImages: string[];
  };
  cta: {
    title: string;
    description: string;
    phoneNumber: string;
    email: string;
  };
}

// Firebase operations
export const getContactData = async (): Promise<ContactData | null> => {
  try {
    const docRef = doc(db, 'pages', 'contact');
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return docSnap.data() as ContactData;
    } else {
      console.log('No contact data found in database');
      return null;
    }
  } catch (error) {
    console.error('Error getting contact data:', error);
    throw error;
  }
};

export const saveContactData = async (data: ContactData): Promise<void> => {
  try {
    const docRef = doc(db, 'pages', 'contact');
    await setDoc(docRef, data);
    console.log('Contact data saved successfully');
  } catch (error) {
    console.error('Error saving contact data:', error);
    throw error;
  }
};

export const updateContactSection = async (section: keyof ContactData, data: any): Promise<void> => {
  try {
    const docRef = doc(db, 'pages', 'contact');
    await updateDoc(docRef, {
      [section]: data
    });
    console.log(`${section} section updated successfully`);
  } catch (error) {
    console.error(`Error updating ${section} section:`, error);
    throw error;
  }
};

export const updateHeroSection = async (heroData: ContactData['hero']): Promise<void> => {
  await updateContactSection('hero', heroData);
};

export const updateTeamSection = async (teamData: ContactData['team']): Promise<void> => {
  await updateContactSection('team', teamData);
};

export const updateInfoSection = async (infoData: ContactData['info']): Promise<void> => {
  await updateContactSection('info', infoData);
};

export const updateMissionSection = async (missionData: ContactData['mission']): Promise<void> => {
  await updateContactSection('mission', missionData);
};

export const updateCTASection = async (ctaData: ContactData['cta']): Promise<void> => {
  await updateContactSection('cta', ctaData);
};
