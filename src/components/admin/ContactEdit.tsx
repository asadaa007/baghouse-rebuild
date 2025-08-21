import { useState, useEffect } from 'react';
import { getContactData, saveContactData, type ContactData } from '../../services/contactService';

const ContactEdit = () => {
  const [contactData, setContactData] = useState<ContactData | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'hero' | 'team' | 'info' | 'mission'>('hero');
  const [saving, setSaving] = useState(false);

  // Load data from Firebase on component mount
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
        alert('Error loading contact data. Please refresh the page.');
      } finally {
        setLoading(false);
      }
    };

    loadContactData();
  }, []);

  const handleHeroChange = (field: string, value: string | boolean) => {
    if (!contactData) return;
    
    setContactData({
      ...contactData,
      hero: { ...contactData.hero, [field]: value }
    });
  };

  const handleTeamMemberChange = (index: number, field: string, value: string) => {
    if (!contactData) return;
    
    const updatedMembers = [...contactData.team.teamMembers];
    updatedMembers[index] = { ...updatedMembers[index], [field]: value };
    setContactData({
      ...contactData,
      team: { ...contactData.team, teamMembers: updatedMembers }
    });
  };

  const handleInfoChange = (field: string, value: string) => {
    if (!contactData) return;
    
    setContactData({
      ...contactData,
      info: { ...contactData.info, [field]: value }
    });
  };

  const handleMissionChange = (field: string, value: string) => {
    if (!contactData) return;
    
    setContactData({
      ...contactData,
      mission: { ...contactData.mission, [field]: value }
    });
  };

  const handleSave = async () => {
    if (!contactData) return;
    
    setSaving(true);
    try {
      await saveContactData(contactData);
      alert('Contact page content saved successfully!');
    } catch (error) {
      console.error('Error saving contact data:', error);
      alert('Error saving contact page content. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const addTeamMember = () => {
    if (!contactData) return;
    
    const newMember = {
      id: Date.now(),
      name: "New Team Member",
      position: "Position",
      phone: "",
      cell: "",
      email: "",
      image: ""
    };
    setContactData({
      ...contactData,
      team: { 
        ...contactData.team, 
        teamMembers: [...contactData.team.teamMembers, newMember] 
      }
    });
  };

  const removeTeamMember = (index: number) => {
    if (!contactData) return;
    
    const updatedMembers = contactData.team.teamMembers.filter((_, i) => i !== index);
    setContactData({
      ...contactData,
      team: { ...contactData.team, teamMembers: updatedMembers }
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <svg className="animate-spin h-8 w-8 text-blue-600 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="text-gray-600">Loading contact data...</p>
        </div>
      </div>
    );
  }

  if (!contactData) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No contact data available.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Contact Page Content Editor</h1>
          <p className="text-gray-600">Edit the content for your contact page sections</p>
        </div>
        <button
          onClick={handleSave}
          disabled={saving}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
        >
          {saving ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Saving...
            </>
          ) : (
            <>
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
              </svg>
              Save All
            </>
          )}
        </button>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'hero', name: 'Hero Section', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
            { id: 'team', name: 'Team Members', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z' },
            { id: 'info', name: 'Contact Info', icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' },
            { id: 'mission', name: 'Mission & CTA', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as 'hero' | 'team' | 'info' | 'mission')}
              className={`py-2 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={tab.icon} />
              </svg>
              <span>{tab.name}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {activeTab === 'hero' && (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900">Hero Section</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input
                  type="text"
                  value={contactData.hero.title}
                  onChange={(e) => handleHeroChange('title', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subtitle</label>
                <textarea
                  value={contactData.hero.subtitle}
                  onChange={(e) => handleHeroChange('subtitle', e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Gradient Colors</label>
                <input
                  type="text"
                  value={contactData.hero.gradientColors}
                  onChange={(e) => handleHeroChange('gradientColors', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="from-blue-900 via-blue-800 to-indigo-900"
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="showGradient"
                  checked={contactData.hero.showGradient}
                  onChange={(e) => handleHeroChange('showGradient', e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="showGradient" className="ml-2 block text-sm text-gray-900">
                  Show Gradient Background
                </label>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'team' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">Team Members</h3>
              <button
                onClick={addTeamMember}
                className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Add Member
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Section Title</label>
                <input
                  type="text"
                  value={contactData.team.sectionTitle}
                  onChange={(e) => setContactData({
                    ...contactData,
                    team: { ...contactData.team, sectionTitle: e.target.value }
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Section Description</label>
                <textarea
                  value={contactData.team.sectionDescription}
                  onChange={(e) => setContactData({
                    ...contactData,
                    team: { ...contactData.team, sectionDescription: e.target.value }
                  })}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="space-y-6">
              {contactData.team.teamMembers.map((member, index) => (
                <div key={member.id} className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-md font-medium text-gray-900">Team Member {index + 1}</h4>
                    <button
                      onClick={() => removeTeamMember(index)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <input
                        type="text"
                        value={member.name}
                        onChange={(e) => handleTeamMemberChange(index, 'name', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
                      <input
                        type="text"
                        value={member.position}
                        onChange={(e) => handleTeamMemberChange(index, 'position', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <input
                        type="tel"
                        value={member.phone}
                        onChange={(e) => handleTeamMemberChange(index, 'phone', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Cell</label>
                      <input
                        type="tel"
                        value={member.cell}
                        onChange={(e) => handleTeamMemberChange(index, 'cell', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        value={member.email}
                        onChange={(e) => handleTeamMemberChange(index, 'email', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                      <input
                        type="url"
                        value={member.image}
                        onChange={(e) => handleTeamMemberChange(index, 'image', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'info' && (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900">Contact Information</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Main Phone</label>
                <input
                  type="tel"
                  value={contactData.info.mainPhone}
                  onChange={(e) => handleInfoChange('mainPhone', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Emergency Phone</label>
                <input
                  type="tel"
                  value={contactData.info.emergencyPhone}
                  onChange={(e) => handleInfoChange('emergencyPhone', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="text-md font-medium text-gray-900">Mailing Address</h4>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                    <input
                      type="text"
                      value={contactData.info.mailingAddress.title}
                      onChange={(e) => setContactData({
                        ...contactData,
                        info: {
                          ...contactData.info,
                          mailingAddress: { ...contactData.info.mailingAddress, title: e.target.value }
                        }
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Line 1</label>
                    <input
                      type="text"
                      value={contactData.info.mailingAddress.line1}
                      onChange={(e) => setContactData({
                        ...contactData,
                        info: {
                          ...contactData.info,
                          mailingAddress: { ...contactData.info.mailingAddress, line1: e.target.value }
                        }
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Line 2</label>
                    <input
                      type="text"
                      value={contactData.info.mailingAddress.line2}
                      onChange={(e) => setContactData({
                        ...contactData,
                        info: {
                          ...contactData.info,
                          mailingAddress: { ...contactData.info.mailingAddress, line2: e.target.value }
                        }
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-md font-medium text-gray-900">Shipping Address</h4>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                    <input
                      type="text"
                      value={contactData.info.shippingAddress.title}
                      onChange={(e) => setContactData({
                        ...contactData,
                        info: {
                          ...contactData.info,
                          shippingAddress: { ...contactData.info.shippingAddress, title: e.target.value }
                        }
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Line 1</label>
                    <input
                      type="text"
                      value={contactData.info.shippingAddress.line1}
                      onChange={(e) => setContactData({
                        ...contactData,
                        info: {
                          ...contactData.info,
                          shippingAddress: { ...contactData.info.shippingAddress, line1: e.target.value }
                        }
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Line 2</label>
                    <input
                      type="text"
                      value={contactData.info.shippingAddress.line2}
                      onChange={(e) => setContactData({
                        ...contactData,
                        info: {
                          ...contactData.info,
                          shippingAddress: { ...contactData.info.shippingAddress, line2: e.target.value }
                        }
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-md font-medium text-gray-900">Email Contacts</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">General</label>
                  <input
                    type="email"
                    value={contactData.info.emailContacts.general}
                    onChange={(e) => setContactData({
                      ...contactData,
                      info: {
                        ...contactData.info,
                        emailContacts: { ...contactData.info.emailContacts, general: e.target.value }
                      }
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Sales</label>
                  <input
                    type="email"
                    value={contactData.info.emailContacts.sales}
                    onChange={(e) => setContactData({
                      ...contactData,
                      info: {
                        ...contactData.info,
                        emailContacts: { ...contactData.info.emailContacts, sales: e.target.value }
                      }
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Support</label>
                  <input
                    type="email"
                    value={contactData.info.emailContacts.support}
                    onChange={(e) => setContactData({
                      ...contactData,
                      info: {
                        ...contactData.info,
                        emailContacts: { ...contactData.info.emailContacts, support: e.target.value }
                      }
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Accounting</label>
                  <input
                    type="email"
                    value={contactData.info.emailContacts.accounting}
                    onChange={(e) => setContactData({
                      ...contactData,
                      info: {
                        ...contactData.info,
                        emailContacts: { ...contactData.info.emailContacts, accounting: e.target.value }
                      }
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'mission' && (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900">Mission & CTA</h3>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mission Title</label>
                <input
                  type="text"
                  value={contactData.mission.title}
                  onChange={(e) => handleMissionChange('title', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mission Description</label>
                <textarea
                  value={contactData.mission.description}
                  onChange={(e) => handleMissionChange('description', e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
                             <div>
                 <label className="block text-sm font-medium text-gray-700 mb-1">Safety Meeting Title</label>
                 <input
                   type="text"
                   value={contactData.mission.safetyMeetingTitle}
                   onChange={(e) => handleMissionChange('safetyMeetingTitle', e.target.value)}
                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                 />
               </div>
               
               {/* Safety Meeting Images Section */}
               <div className="col-span-2">
                 <div className="flex items-center justify-between mb-4">
                   <h4 className="text-md font-medium text-gray-900">Safety Meeting Images</h4>
                   <button
                     onClick={() => {
                       const updatedImages = [...contactData.mission.safetyMeetingImages, ""];
                       setContactData({
                         ...contactData,
                         mission: { ...contactData.mission, safetyMeetingImages: updatedImages }
                       });
                     }}
                     className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                   >
                     <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                     </svg>
                     Add Image
                   </button>
                 </div>
                 
                 <div className="space-y-4">
                   {contactData.mission.safetyMeetingImages.map((imageUrl, index) => (
                     <div key={index} className="flex items-center space-x-3">
                       <div className="flex-1">
                         <label className="block text-sm font-medium text-gray-700 mb-1">
                           Safety Meeting Image {index + 1} URL
                         </label>
                         <input
                           type="url"
                           value={imageUrl}
                           onChange={(e) => {
                             const updatedImages = [...contactData.mission.safetyMeetingImages];
                             updatedImages[index] = e.target.value;
                             setContactData({
                               ...contactData,
                               mission: { ...contactData.mission, safetyMeetingImages: updatedImages }
                             });
                           }}
                           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                           placeholder="https://example.com/image.jpg"
                         />
                       </div>
                       <button
                         onClick={() => {
                           const updatedImages = contactData.mission.safetyMeetingImages.filter((_, i) => i !== index);
                           setContactData({
                             ...contactData,
                             mission: { ...contactData.mission, safetyMeetingImages: updatedImages }
                           });
                         }}
                         className="mt-6 text-red-600 hover:text-red-800"
                         title="Remove image"
                       >
                         <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                         </svg>
                       </button>
                     </div>
                   ))}
                 </div>
               </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-md font-medium text-gray-900">CTA Section</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">CTA Title</label>
                  <input
                    type="text"
                    value={contactData.cta.title}
                    onChange={(e) => setContactData({
                      ...contactData,
                      cta: { ...contactData.cta, title: e.target.value }
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">CTA Description</label>
                  <textarea
                    value={contactData.cta.description}
                    onChange={(e) => setContactData({
                      ...contactData,
                      cta: { ...contactData.cta, description: e.target.value }
                    })}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    value={contactData.cta.phoneNumber}
                    onChange={(e) => setContactData({
                      ...contactData,
                      cta: { ...contactData.cta, phoneNumber: e.target.value }
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    value={contactData.cta.email}
                    onChange={(e) => setContactData({
                      ...contactData,
                      cta: { ...contactData.cta, email: e.target.value }
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactEdit;
