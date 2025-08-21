import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

export interface CareersData {
  hero: {
    title: string;
    subtitle: string;
    showGradient: boolean;
    gradientColors: string;
  };
  whyWorkWithUs: {
    sectionTitle: string;
    sectionDescription: string;
    benefits: Array<{
      id: number;
      title: string;
      description: string;
      icon: string;
      color: string;
    }>;
  };
  cta: {
    title: string;
    description: string;
    email: string;
    phoneNumber: string;
  };
}

const COLLECTION_NAME = 'careers';

export const getCareersData = async (): Promise<CareersData | null> => {
  try {
    const docRef = doc(db, COLLECTION_NAME, 'content');
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return docSnap.data() as CareersData;
    }
    return null;
  } catch (error) {
    console.error('Error fetching careers data:', error);
    return null;
  }
};

export const saveCareersData = async (data: CareersData): Promise<boolean> => {
  try {
    const docRef = doc(db, COLLECTION_NAME, 'content');
    await setDoc(docRef, data);
    return true;
  } catch (error) {
    console.error('Error saving careers data:', error);
    return false;
  }
};

export const updateCareersData = async (data: Partial<CareersData>): Promise<boolean> => {
  try {
    const docRef = doc(db, COLLECTION_NAME, 'content');
    await updateDoc(docRef, data);
    return true;
  } catch (error) {
    console.error('Error updating careers data:', error);
    return false;
  }
};

export const initializeCareersData = async (): Promise<boolean> => {
  try {
    const defaultData: CareersData = {
      hero: {
        title: "Join Our Team",
        subtitle: "Build your career with Frost Emission - The Baghouse Service Company. We're looking for talented professionals who are passionate about industrial solutions and committed to excellence in everything they do.",
        showGradient: true,
        gradientColors: "from-blue-900 via-blue-800 to-indigo-900"
      },
      whyWorkWithUs: {
        sectionTitle: "Why Work With Frost Emission?",
        sectionDescription: "Join a company that values its employees and provides opportunities for growth",
        benefits: [
          {
            id: 1,
            title: "Competitive Benefits",
            description: "Comprehensive health coverage, retirement plans, and paid time off",
            icon: "briefcase",
            color: "blue"
          },
          {
            id: 2,
            title: "Career Growth",
            description: "Continuous training and advancement opportunities within the company",
            icon: "lightning",
            color: "green"
          },
          {
            id: 3,
            title: "Great Team",
            description: "Work with experienced professionals in a supportive environment",
            icon: "users",
            color: "purple"
          }
        ]
      },
      cta: {
        title: "Ready to Join Our Team?",
        description: "Don't see a position that fits? Send us your resume and we'll keep you in mind for future opportunities.",
        email: "frost@baghouse.net",
        phoneNumber: "1-905-934-1211"
      }
    };

    const docRef = doc(db, COLLECTION_NAME, 'content');
    await setDoc(docRef, defaultData);
    return true;
  } catch (error) {
    console.error('Error initializing careers data:', error);
    return false;
  }
};

