import { useState, useEffect } from 'react';
import { getHomePageData, saveHomePageData, updateHeroSection, type HomePageData } from '../../services/homePageService';

const HomePageEdit = () => {
  const [homeData, setHomeData] = useState<HomePageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'hero' | 'services' | 'cta'>('hero');
  const [saving, setSaving] = useState(false);

  // Load data from Firebase on component mount
  useEffect(() => {
    const loadHomePageData = async () => {
      try {
        setLoading(true);
        const data = await getHomePageData();
        if (data) {
          setHomeData(data);
        } else {
          // If no data exists, use default data
          setHomeData({
            hero: {
              slides: [
                {
                  id: 1,
                  title: "Filter Change-outs",
                  subtitle: "Partial or Complete",
                  image: "https://baghouse.net/Images/top_page/slideshow/filter_replacement-envelope_style2.jpg",
                  description: "Professional filter replacement services for industrial baghouse systems"
                },
                {
                  id: 2,
                  title: "Ducting",
                  subtitle: "Supply build and install",
                  image: "https://baghouse.net/Images/top_page/slideshow/sheetmetal.jpg",
                  description: "Comprehensive maintenance solutions to keep your systems running efficiently"
                },
                {
                  id: 3,
                  title: "Spare Parts",
                  subtitle: "Pulsshaker reverse air",
                  image: "https://baghouse.net/Images/top_page/slideshow/spare_parts.jpg",
                  description: "Tailored baghouse solutions for your specific industrial requirements"
                },
                {
                  id: 4,
                  title: "Consulting",
                  subtitle: "Process review and design",
                  image: "https://baghouse.net/Images/top_page/slideshow/design_concept.jpg",
                  description: "Tailored baghouse solutions for your specific industrial requirements"
                }
              ],
              autoSlideInterval: 5000
            },
            services: {
              sectionTitle: "Our Services",
              sectionDescription: "Comprehensive baghouse solutions to keep your industrial operations running efficiently and safely",
              services: [
                {
                  id: 1,
                  title: "Baghouse Field Services",
                  subtitle: "Professional Field Services",
                  image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                  path: "/baghouse/field-services"
                },
                {
                  id: 2,
                  title: "Sheet Metal & Ducting",
                  subtitle: "Custom Fabrication",
                  image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                  path: "/services/sheet-metal-ducting"
                },
                {
                  id: 3,
                  title: "Consulting",
                  subtitle: "Expert Solutions",
                  image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                  path: "/services/consulting"
                },
                {
                  id: 4,
                  title: "Spare Parts",
                  subtitle: "Quality Components",
                  image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                  path: "/services/spare-parts"
                }
              ]
            },
            cta: {
              mainHeading: "Ready to Optimize Your",
              subHeading: "Industrial Filtration?",
              description: "Get professional baghouse solutions that keep your operations running efficiently, safely, and in compliance with environmental regulations.",
              primaryButtonText: "Get Free Quote",
              secondaryButtonText: "Call Now",
              phoneNumber: "1-905-934-1211"
            },
            footer: {
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
            }
          });
        }
      } catch (error) {
        console.error('Error loading home page data:', error);
        alert('Error loading home page data. Please refresh the page.');
      } finally {
        setLoading(false);
      }
    };

    loadHomePageData();
  }, []);

  const handleHeroSlideChange = (index: number, field: string, value: string) => {
    if (!homeData) return;
    
    const updatedSlides = [...homeData.hero.slides];
    updatedSlides[index] = { ...updatedSlides[index], [field]: value };
    setHomeData({
      ...homeData,
      hero: { ...homeData.hero, slides: updatedSlides }
    });
  };

  const handleServiceChange = (index: number, field: string, value: string) => {
    if (!homeData) return;
    
    const updatedServices = [...homeData.services.services];
    updatedServices[index] = { ...updatedServices[index], [field]: value };
    setHomeData({
      ...homeData,
      services: { ...homeData.services, services: updatedServices }
    });
  };

  const handleCTAChange = (field: string, value: string) => {
    if (!homeData) return;
    
    setHomeData({
      ...homeData,
      cta: { ...homeData.cta, [field]: value }
    });
  };

  const handleSave = async () => {
    if (!homeData) return;
    
    setSaving(true);
    try {
      await saveHomePageData(homeData);
      alert('Home page content saved successfully!');
    } catch (error) {
      console.error('Error saving home page data:', error);
      alert('Error saving home page content. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handleSaveHero = async () => {
    if (!homeData) return;
    
    setSaving(true);
    try {
      await updateHeroSection(homeData.hero);
      alert('Hero section saved successfully!');
    } catch (error) {
      console.error('Error saving hero section:', error);
      alert('Error saving hero section. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const addHeroSlide = () => {
    if (!homeData) return;
    
    const newSlide = {
      id: Date.now(),
      title: "New Slide",
      subtitle: "Subtitle",
      image: "",
      description: "Description"
    };
    setHomeData({
      ...homeData,
      hero: { ...homeData.hero, slides: [...homeData.hero.slides, newSlide] }
    });
  };

  const removeHeroSlide = (index: number) => {
    if (!homeData) return;
    
    const updatedSlides = homeData.hero.slides.filter((_, i) => i !== index);
    setHomeData({
      ...homeData,
      hero: { ...homeData.hero, slides: updatedSlides }
    });
  };

  const addService = () => {
    if (!homeData) return;
    
    const newService = {
      id: Date.now(),
      title: "New Service",
      subtitle: "Subtitle",
      image: "",
      path: "/services/new-service"
    };
    setHomeData({
      ...homeData,
      services: { ...homeData.services, services: [...homeData.services.services, newService] }
    });
  };

  const removeService = (index: number) => {
    if (!homeData) return;
    
    const updatedServices = homeData.services.services.filter((_, i) => i !== index);
    setHomeData({
      ...homeData,
      services: { ...homeData.services, services: updatedServices }
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
          <p className="text-gray-600">Loading home page data...</p>
        </div>
      </div>
    );
  }

  if (!homeData) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No home page data available.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Home Page Content Editor</h1>
          <p className="text-gray-600">Edit the content for your homepage sections</p>
        </div>
        <div className="flex space-x-3">
          {activeTab === 'hero' && (
            <button
              onClick={handleSaveHero}
              disabled={saving}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50"
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
                  Save Hero
                </>
              )}
            </button>
          )}

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
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'hero', name: 'Hero Section', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
            { id: 'services', name: 'Services Section', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
            { id: 'cta', name: 'Call to Action', icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as 'hero' | 'services' | 'cta')}
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
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">Hero Slides</h3>
              <button
                onClick={addHeroSlide}
                className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Add Slide
              </button>
            </div>

            <div className="space-y-6">
              {homeData.hero.slides.map((slide, index) => (
                <div key={slide.id} className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-md font-medium text-gray-900">Slide {index + 1}</h4>
                    <button
                      onClick={() => removeHeroSlide(index)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                      <input
                        type="text"
                        value={slide.title}
                        onChange={(e) => handleHeroSlideChange(index, 'title', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Subtitle</label>
                      <input
                        type="text"
                        value={slide.subtitle}
                        onChange={(e) => handleHeroSlideChange(index, 'subtitle', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                      <textarea
                        value={slide.description}
                        onChange={(e) => handleHeroSlideChange(index, 'description', e.target.value)}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                      <input
                        type="url"
                        value={slide.image}
                        onChange={(e) => handleHeroSlideChange(index, 'image', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Auto Slide Interval (ms)</label>
              <input
                type="number"
                value={homeData.hero.autoSlideInterval}
                onChange={(e) => setHomeData({
                  ...homeData,
                  hero: { ...homeData.hero, autoSlideInterval: parseInt(e.target.value) }
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        )}

        {activeTab === 'services' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">Services Section</h3>
              <button
                onClick={addService}
                className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Add Service
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Section Title</label>
                <input
                  type="text"
                  value={homeData.services.sectionTitle}
                  onChange={(e) => setHomeData({
                    ...homeData,
                    services: { ...homeData.services, sectionTitle: e.target.value }
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Section Description</label>
                <textarea
                  value={homeData.services.sectionDescription}
                  onChange={(e) => setHomeData({
                    ...homeData,
                    services: { ...homeData.services, sectionDescription: e.target.value }
                  })}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="space-y-6">
              {homeData.services.services.map((service, index) => (
                <div key={service.id} className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-md font-medium text-gray-900">Service {index + 1}</h4>
                    <button
                      onClick={() => removeService(index)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                      <input
                        type="text"
                        value={service.title}
                        onChange={(e) => handleServiceChange(index, 'title', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Subtitle</label>
                      <input
                        type="text"
                        value={service.subtitle}
                        onChange={(e) => handleServiceChange(index, 'subtitle', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                      <input
                        type="url"
                        value={service.image}
                        onChange={(e) => handleServiceChange(index, 'image', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Path</label>
                      <input
                        type="text"
                        value={service.path}
                        onChange={(e) => handleServiceChange(index, 'path', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'cta' && (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900">Call to Action Section</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Main Heading</label>
                <input
                  type="text"
                  value={homeData.cta.mainHeading}
                  onChange={(e) => handleCTAChange('mainHeading', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Sub Heading</label>
                <input
                  type="text"
                  value={homeData.cta.subHeading}
                  onChange={(e) => handleCTAChange('subHeading', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  value={homeData.cta.description}
                  onChange={(e) => handleCTAChange('description', e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Primary Button Text</label>
                <input
                  type="text"
                  value={homeData.cta.primaryButtonText}
                  onChange={(e) => handleCTAChange('primaryButtonText', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Secondary Button Text</label>
                <input
                  type="text"
                  value={homeData.cta.secondaryButtonText}
                  onChange={(e) => handleCTAChange('secondaryButtonText', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  value={homeData.cta.phoneNumber}
                  onChange={(e) => handleCTAChange('phoneNumber', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        )}


      </div>
    </div>
  );
};

export default HomePageEdit;
