import { useState, useEffect } from 'react';
import HeroSmall from '../components/sections/HeroSmall';
import WaveDivider from '../components/ui/WaveDivider';
import { getContactData, type ContactData } from '../services/contactService';

const Contact = () => {
  const [contactData, setContactData] = useState<ContactData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadContactData = async () => {
      try {
        setLoading(true);
        const data = await getContactData();
        if (data) {
          setContactData(data);
        } else {
          // If no data exists, use default data
          setContactData({
            hero: {
              title: "Contact Us",
              subtitle: "Get in touch with our professional team. Ready to discuss your baghouse needs? Our experts are here to help you find the perfect solution.",
              showGradient: true,
              gradientColors: "from-blue-900 via-blue-800 to-indigo-900"
            },
            team: {
              sectionTitle: "Meet Our Team",
              sectionDescription: "Our experienced professionals are ready to assist you with all your baghouse needs",
              teamMembers: [
                {
                  id: 1,
                  name: "Robin Frost",
                  position: "President",
                  phone: "1-905-934-1211#1",
                  cell: "1-905-933-3432",
                  email: "frost@baghouse.net",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                },
                {
                  id: 2,
                  name: "Greg Cuthbert",
                  position: "Service & Maintenance Manager",
                  phone: "1-905-934-1211#2",
                  cell: "1-289-241-5297",
                  email: "greg@baghouse.net",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                },
                {
                  id: 3,
                  name: "Simon Frost",
                  position: "Mechanical & Sheet Metal Manager",
                  phone: "1-905-934-1211#3",
                  cell: "1-905-321-8079",
                  email: "simonf@baghouse.net",
                  image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                },
                {
                  id: 4,
                  name: "Bill Zadorozny",
                  position: "Accounting Manager",
                  phone: "1-905-934-1211",
                  cell: "",
                  email: "billz@baghouse.net",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                },
                {
                  id: 5,
                  name: "Ingrid Rampersaud-Frost",
                  position: "Sales Manager",
                  phone: "1-905-934-1211#4",
                  cell: "",
                  email: "ifrost@baghouse.net",
                  image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                }
              ]
            },
            info: {
              mainPhone: "1-905-934-1211",
              emergencyPhone: "1-289-241-5297",
              mailingAddress: {
                title: "Mailing Address:",
                line1: "12-111 Fourth Avenue, Suite 370",
                line2: "St. Catharines, ON. Canada L2S3P5"
              },
              shippingAddress: {
                title: "Shipping Address:",
                line1: "326 St. Paul Street West",
                line2: "St. Catharines, ON. L2S0B3"
              },
              emailContacts: {
                general: "frost@baghouse.net",
                sales: "ifrost@baghouse.net",
                support: "greg@baghouse.net",
                accounting: "billz@baghouse.net"
              }
            },
            mission: {
              title: "Environmental Responsibility",
              description: "To provide Methods and Technologies that will allow our customers to operate their Baghouse Dust Control systems with Environmental Responsibility and Consideration. It's all about having Total control over your Baghouse Systems.",
              safetyMeetingTitle: "Monthly Staff Safety Meeting",
              safetyMeetingImages: [
                "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              ]
            },
            cta: {
              title: "Ready to Get Started?",
              description: "Contact us today to discuss your baghouse needs and get a free consultation.",
              phoneNumber: "1-905-934-1211",
              email: "frost@baghouse.net"
            }
          });
        }
      } catch (error) {
        console.error('Error loading contact data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadContactData();
  }, []);

  const handleCallClick = (phone: string) => {
    window.location.href = `tel:${phone}`;
  };

  const handleEmailClick = (email: string) => {
    window.location.href = `mailto:${email}`;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <svg className="animate-spin h-8 w-8 text-blue-600 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="text-gray-600">Loading contact information...</p>
        </div>
      </div>
    );
  }

  if (!contactData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-gray-600">No contact information available.</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSmall
        title={contactData.hero.title}
        subtitle={contactData.hero.subtitle}
        showGradient={contactData.hero.showGradient}
        gradientColors={contactData.hero.gradientColors}
      />

      {/* Wave Divider */}
      <WaveDivider color="text-blue-900" />

      {/* Team Members Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {contactData.team.sectionTitle}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {contactData.team.sectionDescription}
              </p>
            </div>

            {/* Team Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {contactData.team.teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                                     {/* Member Image */}
                   <div className="relative h-80 overflow-hidden">
                     <img
                       src={member.image}
                       alt={member.name}
                       className="w-full h-full object-cover"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                   </div>

                  {/* Member Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-blue-600 font-semibold mb-4">{member.position}</p>
                    
                    {/* Contact Info */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <button
                          onClick={() => handleCallClick(member.phone)}
                          className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-sm"
                        >
                          {member.phone}
                        </button>
                      </div>

                      {member.cell && (
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <button
                            onClick={() => handleCallClick(member.cell)}
                            className="text-gray-700 hover:text-green-600 transition-colors duration-200 text-sm"
                          >
                            {member.cell}
                          </button>
                        </div>
                      )}

                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <button
                          onClick={() => handleEmailClick(member.email)}
                          className="text-gray-700 hover:text-purple-600 transition-colors duration-200 text-sm"
                        >
                          {member.email}
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

      {/* Company Information Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
                
                <div className="space-y-6">
                  {/* Main Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Main Office</h3>
                      <button
                        onClick={() => handleCallClick(contactData.info.mainPhone)}
                        className="text-blue-600 hover:text-blue-700 font-semibold text-lg transition-colors duration-200"
                      >
                        {contactData.info.mainPhone}
                      </button>
                    </div>
                  </div>

                  {/* Emergency Response */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">24 Hour Emergency Response</h3>
                      <button
                        onClick={() => handleCallClick(contactData.info.emergencyPhone)}
                        className="text-red-600 hover:text-red-700 font-semibold text-lg transition-colors duration-200"
                      >
                        {contactData.info.emergencyPhone}
                      </button>
                    </div>
                  </div>

                  {/* Addresses */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Addresses</h3>
                      <div className="space-y-2 text-gray-600">
                        <div>
                          <p className="font-medium">{contactData.info.mailingAddress.title}</p>
                          <p>{contactData.info.mailingAddress.line1}</p>
                          <p>{contactData.info.mailingAddress.line2}</p>
                        </div>
                        <div>
                          <p className="font-medium">{contactData.info.shippingAddress.title}</p>
                          <p>{contactData.info.shippingAddress.line1}</p>
                          <p>{contactData.info.shippingAddress.line2}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Email Contacts */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Contacts</h3>
                      <div className="space-y-1 text-gray-600">
                        <button
                          onClick={() => handleEmailClick(contactData.info.emailContacts.general)}
                          className="block text-purple-600 hover:text-purple-700 transition-colors duration-200"
                        >
                          General Information: {contactData.info.emailContacts.general}
                        </button>
                        <button
                          onClick={() => handleEmailClick(contactData.info.emailContacts.sales)}
                          className="block text-purple-600 hover:text-purple-700 transition-colors duration-200"
                        >
                          Sales: {contactData.info.emailContacts.sales}
                        </button>
                        <button
                          onClick={() => handleEmailClick(contactData.info.emailContacts.support)}
                          className="block text-purple-600 hover:text-purple-700 transition-colors duration-200"
                        >
                          Customer Support: {contactData.info.emailContacts.support}
                        </button>
                        <button
                          onClick={() => handleEmailClick(contactData.info.emailContacts.accounting)}
                          className="block text-purple-600 hover:text-purple-700 transition-colors duration-200"
                        >
                          Accounting: {contactData.info.emailContacts.accounting}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mission Statement */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Mission</h2>
                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 border border-green-200">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{contactData.mission.title}</h3>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {contactData.mission.description}
                      </p>
                    </div>
                  </div>
                </div>

                                 {/* Safety Meeting Images */}
                 <div className="mt-8">
                   <h3 className="text-xl font-bold text-gray-900 mb-4">{contactData.mission.safetyMeetingTitle}</h3>
                   {contactData.mission.safetyMeetingImages.length > 0 && (
                     <div className="grid grid-cols-2 gap-4">
                       {contactData.mission.safetyMeetingImages.map((imageUrl, index) => (
                         <img
                           key={index}
                           src={imageUrl}
                           alt={`Safety Meeting ${index + 1}`}
                           className="rounded-lg shadow-lg w-full h-48 object-cover"
                         />
                       ))}
                     </div>
                   )}
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {contactData.cta.title}
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              {contactData.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => handleCallClick(contactData.cta.phoneNumber)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-3"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Call {contactData.cta.phoneNumber}</span>
              </button>
              <button
                onClick={() => handleEmailClick(contactData.cta.email)}
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-3"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Send Email</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact; 