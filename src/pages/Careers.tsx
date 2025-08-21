import { useState, useEffect } from 'react';
import HeroSmall from '../components/sections/HeroSmall';
import WaveDivider from '../components/ui/WaveDivider';
import { getCareersData, initializeCareersData, type CareersData } from '../services/careersService';
import { getJobPostings, type JobPosting } from '../services/careersManagementService';

const Careers = () => {
  const [careersData, setCareersData] = useState<CareersData | null>(null);
  const [jobPostings, setJobPostings] = useState<JobPosting[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState<JobPosting | null>(null);
  const [showJobModal, setShowJobModal] = useState(false);

  useEffect(() => {
    const loadCareersData = async () => {
              try {
          setLoading(true);
          
          const [data, jobs] = await Promise.all([
            getCareersData(),
            getJobPostings()
          ]);
          
          if (data) {
            setCareersData(data);
          } else {
                      // If no data exists, initialize with default data
            const success = await initializeCareersData();
            if (success) {
              // Fetch the newly created data
              const newData = await getCareersData();
              if (newData) {
                setCareersData(newData);
              } else {
                // Fallback to default data if still can't get it
              setCareersData({
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
              });
            }
          } else {
            // Fallback to default data if initialization fails
            setCareersData({
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
            });
          }
                  }
          
          setJobPostings(jobs);
      } catch (error) {
        console.error('Error loading careers data:', error);
        // Set default data even if there's an error
        setCareersData({
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
        });
        setJobPostings([]);
      } finally {
        setLoading(false);
      }
    };

    loadCareersData();
  }, []);

  const handleEmailClick = (email: string) => {
    window.location.href = `mailto:${email}`;
  };

  const handleCallClick = (phone: string) => {
    window.location.href = `tel:${phone}`;
  };

  const handleViewJobDetails = (job: JobPosting) => {
    setSelectedJob(job);
    setShowJobModal(true);
  };

  const handleCloseJobModal = () => {
    setShowJobModal(false);
    setSelectedJob(null);
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (showJobModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showJobModal]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <svg className="animate-spin h-8 w-8 text-blue-600 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="text-gray-600">Loading careers information...</p>
        </div>
      </div>
    );
  }

  if (!careersData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-gray-600">No careers information available.</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSmall
        title={careersData.hero.title}
        subtitle={careersData.hero.subtitle}
        showGradient={careersData.hero.showGradient}
        gradientColors={careersData.hero.gradientColors}
      />

      {/* Wave Divider */}
      <WaveDivider color="text-blue-900" />



      {/* Why Work With Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {careersData.whyWorkWithUs.sectionTitle}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {careersData.whyWorkWithUs.sectionDescription}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {careersData.whyWorkWithUs.benefits.map((benefit) => (
                <div key={benefit.id} className="text-center p-8 rounded-xl bg-gray-50 hover:bg-blue-50 transition-all duration-300">
                  <div className={`w-16 h-16 bg-${benefit.color}-600 rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {benefit.icon === 'briefcase' && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                      )}
                      {benefit.icon === 'lightning' && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      )}
                      {benefit.icon === 'users' && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      )}
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings Section */}
      {jobPostings.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Current Openings</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Explore our current job opportunities and find the perfect position for your career growth
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {jobPostings.map((job) => (
                  <div key={job.id} className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="relative h-48">
                      <img 
                        src={job.image} 
                        alt={job.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
                        <div className="flex items-center space-x-4 text-white/90 text-sm">
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {job.location}
                          </span>
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                            </svg>
                            {job.type}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <p className="text-gray-600 mb-4 line-clamp-3">{job.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {job.department && (
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                            {job.department}
                          </span>
                        )}
                        {job.experience && (
                          <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                            {job.experience}
                          </span>
                        )}
                        {job.salary && (
                          <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
                            {job.salary}
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          Posted: {new Date(job.createdAt).toLocaleDateString()}
                        </span>
                        <div className="flex space-x-2">
                          <button 
                            onClick={() => handleViewJobDetails(job)}
                            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                          >
                            View Details
                          </button>
                          <button 
                            onClick={() => handleEmailClick(careersData.cta.email)}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                          >
                            Apply Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {careersData.cta.title}
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              {careersData.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => handleEmailClick(careersData.cta.email)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-3"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Send Resume</span>
              </button>
              <button
                onClick={() => handleCallClick(careersData.cta.phoneNumber)}
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-3"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Call {careersData.cta.phoneNumber}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Job Details Modal */}
      {showJobModal && selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 overflow-hidden h-full w-full z-50">
          <div className="relative top-4 mx-auto p-0 w-11/12 md:w-4/5 lg:w-3/4 xl:w-2/3 shadow-2xl rounded-2xl bg-white max-h-[95vh] overflow-hidden">
            {/* Header */}
            <div className="relative h-48 bg-gradient-to-r from-blue-600 to-blue-800 rounded-t-2xl">
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              <div className="relative p-8 text-white">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-2">{selectedJob.title}</h2>
                    <div className="flex flex-wrap items-center gap-4 text-blue-100">
                      <span className="flex items-center bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                        <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {selectedJob.location}
                      </span>
                      <span className="flex items-center bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                        <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                        </svg>
                        {selectedJob.type}
                      </span>
                      {selectedJob.salary && (
                        <span className="flex items-center bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                          </svg>
                          {selectedJob.salary}
                        </span>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={handleCloseJobModal}
                    className="text-white hover:text-gray-200 transition-colors duration-200 p-2"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 max-h-[calc(95vh-12rem)] overflow-y-auto">
              <div className="space-y-8">
                {/* Job Description */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Job Description
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">{selectedJob.description}</p>
                </div>

                {/* Requirements */}
                {selectedJob.requirements && selectedJob.requirements.length > 0 && (
                  <div className="bg-red-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Requirements
                    </h3>
                    <ul className="space-y-3">
                      {selectedJob.requirements.map((requirement, index) => (
                        <li key={index} className="flex items-start">
                          <span className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
                          <span className="text-gray-700">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Benefits */}
                {selectedJob.benefits && selectedJob.benefits.length > 0 && (
                  <div className="bg-green-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Benefits
                    </h3>
                    <ul className="space-y-3">
                      {selectedJob.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <span className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Additional Details */}
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Additional Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {selectedJob.department && (
                      <div className="bg-white rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-1">Department</h4>
                        <p className="text-gray-600">{selectedJob.department}</p>
                      </div>
                    )}
                    {selectedJob.experience && (
                      <div className="bg-white rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-1">Experience Level</h4>
                        <p className="text-gray-600">{selectedJob.experience}</p>
                      </div>
                    )}
                    {selectedJob.applicationDeadline && (
                      <div className="bg-white rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-1">Application Deadline</h4>
                        <p className="text-gray-600">{new Date(selectedJob.applicationDeadline).toLocaleDateString()}</p>
                      </div>
                    )}
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-1">Posted Date</h4>
                      <p className="text-gray-600">{new Date(selectedJob.createdAt).toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 px-8 py-6 rounded-b-2xl border-t border-gray-200">
              <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="text-sm text-gray-600">
                  Ready to join our team? Apply now and take the next step in your career!
                </div>
                <div className="flex space-x-3">
                  <button
                    onClick={handleCloseJobModal}
                    className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200 font-medium"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => handleEmailClick(careersData.cta.email)}
                    className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Careers; 