import { doc, getDoc, updateDoc, collection, getDocs, addDoc, deleteDoc, query, where, orderBy } from 'firebase/firestore';
import { db } from '../firebase/config';

export interface JobPosting {
  id: string;
  title: string;
  description: string;
  requirements: string[];
  image: string;
  isActive: boolean;
  createdAt: string;
  location: string;
  type: string;
  salary?: string;
  department?: string;
  experience?: string;
  benefits?: string[];
  applicationDeadline?: string;
}

export interface JobApplication {
  id: string;
  jobId: string;
  jobTitle: string;
  applicantName: string;
  email: string;
  phone: string;
  resumeUrl: string;
  coverLetter?: string;
  experience: string;
  status: 'pending' | 'reviewed' | 'shortlisted' | 'rejected' | 'hired';
  appliedAt: string;
  reviewedAt?: string;
  notes?: string;
}

const JOB_POSTINGS_COLLECTION = 'jobPostings';
const JOB_APPLICATIONS_COLLECTION = 'jobApplications';

// Job Postings Management
export const getJobPostings = async (): Promise<JobPosting[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, JOB_POSTINGS_COLLECTION));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as JobPosting[];
  } catch (error) {
    console.error('Error fetching job postings:', error);
    return [];
  }
};

export const getActiveJobPostings = async (): Promise<JobPosting[]> => {
  try {
    const q = query(
      collection(db, JOB_POSTINGS_COLLECTION),
      where('isActive', '==', true),
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as JobPosting[];
  } catch (error) {
    console.error('Error fetching active job postings:', error);
    return [];
  }
};

export const getJobPosting = async (id: string): Promise<JobPosting | null> => {
  try {
    const docRef = doc(db, JOB_POSTINGS_COLLECTION, id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as JobPosting;
    }
    return null;
  } catch (error) {
    console.error('Error fetching job posting:', error);
    return null;
  }
};

export const createJobPosting = async (jobData: Omit<JobPosting, 'id' | 'createdAt'>): Promise<string | null> => {
  try {
    const docRef = await addDoc(collection(db, JOB_POSTINGS_COLLECTION), {
      ...jobData,
      createdAt: new Date().toISOString()
    });
    return docRef.id;
  } catch (error) {
    console.error('Error creating job posting:', error);
    return null;
  }
};

export const updateJobPosting = async (id: string, jobData: Partial<JobPosting>): Promise<boolean> => {
  try {
    const docRef = doc(db, JOB_POSTINGS_COLLECTION, id);
    await updateDoc(docRef, jobData);
    return true;
  } catch (error) {
    console.error('Error updating job posting:', error);
    return false;
  }
};

export const deleteJobPosting = async (id: string): Promise<boolean> => {
  try {
    const docRef = doc(db, JOB_POSTINGS_COLLECTION, id);
    await deleteDoc(docRef);
    return true;
  } catch (error) {
    console.error('Error deleting job posting:', error);
    return false;
  }
};



// Job Applications Management
export const getJobApplications = async (): Promise<JobApplication[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, JOB_APPLICATIONS_COLLECTION));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as JobApplication[];
  } catch (error) {
    console.error('Error fetching job applications:', error);
    return [];
  }
};

export const getJobApplicationsByJob = async (jobId: string): Promise<JobApplication[]> => {
  try {
    const q = query(
      collection(db, JOB_APPLICATIONS_COLLECTION),
      where('jobId', '==', jobId),
      orderBy('appliedAt', 'desc')
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as JobApplication[];
  } catch (error) {
    console.error('Error fetching job applications by job:', error);
    return [];
  }
};

export const getJobApplication = async (id: string): Promise<JobApplication | null> => {
  try {
    const docRef = doc(db, JOB_APPLICATIONS_COLLECTION, id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as JobApplication;
    }
    return null;
  } catch (error) {
    console.error('Error fetching job application:', error);
    return null;
  }
};

export const createJobApplication = async (applicationData: Omit<JobApplication, 'id' | 'appliedAt' | 'status'>): Promise<string | null> => {
  try {
    const docRef = await addDoc(collection(db, JOB_APPLICATIONS_COLLECTION), {
      ...applicationData,
      status: 'pending',
      appliedAt: new Date().toISOString()
    });
    return docRef.id;
  } catch (error) {
    console.error('Error creating job application:', error);
    return null;
  }
};

export const updateJobApplication = async (id: string, applicationData: Partial<JobApplication>): Promise<boolean> => {
  try {
    const docRef = doc(db, JOB_APPLICATIONS_COLLECTION, id);
    const updateData = {
      ...applicationData,
      ...(applicationData.status && { reviewedAt: new Date().toISOString() })
    };
    await updateDoc(docRef, updateData);
    return true;
  } catch (error) {
    console.error('Error updating job application:', error);
    return false;
  }
};

export const deleteJobApplication = async (id: string): Promise<boolean> => {
  try {
    const docRef = doc(db, JOB_APPLICATIONS_COLLECTION, id);
    await deleteDoc(docRef);
    return true;
  } catch (error) {
    console.error('Error deleting job application:', error);
    return false;
  }
};

// Statistics
export const getCareersStats = async () => {
  try {
    const [jobPostings, applications] = await Promise.all([
      getJobPostings(),
      getJobApplications()
    ]);

    const activeJobs = jobPostings.filter(job => job.isActive);
    const pendingApplications = applications.filter(app => app.status === 'pending');
    const totalApplications = applications.length;

    return {
      totalJobs: jobPostings.length,
      activeJobs: activeJobs.length,
      totalApplications,
      pendingApplications: pendingApplications.length
    };
  } catch (error) {
    console.error('Error fetching careers stats:', error);
    return {
      totalJobs: 0,
      activeJobs: 0,
      totalApplications: 0,
      pendingApplications: 0
    };
  }
};
