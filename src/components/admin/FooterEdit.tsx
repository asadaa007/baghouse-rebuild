import { useState, useEffect } from 'react';
import { getHomePageData, updateFooterSection, type FooterData } from '../../services/homePageService';

const FooterEdit = () => {
  const [footerData, setFooterData] = useState<FooterData | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Load footer data from Firebase
  useEffect(() => {
    const loadFooterData = async () => {
      try {
        setLoading(true);
        const data = await getHomePageData();
        if (data && data.footer) {
          setFooterData(data.footer);
        } else {
          // Default footer data if none exists
          setFooterData({
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
          });
        }
      } catch (error) {
        console.error('Error loading footer data:', error);
        alert('Error loading footer data. Please refresh the page.');
      } finally {
        setLoading(false);
      }
    };

    loadFooterData();
  }, []);

  const handleSave = async () => {
    if (!footerData) return;
    setSaving(true);
    try {
      await updateFooterSection(footerData);
      alert('Footer content saved successfully!');
    } catch (error) {
      console.error('Error saving footer data:', error);
      alert('Error saving footer content. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handleLinkChange = (section: 'mainLinks' | 'baghouseLinks' | 'serviceLinks', index: number, field: 'name' | 'href', value: string) => {
    if (!footerData) return;
    const updatedLinks = [...footerData[section]];
    updatedLinks[index] = { ...updatedLinks[index], [field]: value };
    setFooterData({
      ...footerData,
      [section]: updatedLinks
    });
  };

  const addLink = (section: 'mainLinks' | 'baghouseLinks' | 'serviceLinks') => {
    if (!footerData) return;
    const newLink = { name: 'New Link', href: '/' };
    setFooterData({
      ...footerData,
      [section]: [...footerData[section], newLink]
    });
  };

  const removeLink = (section: 'mainLinks' | 'baghouseLinks' | 'serviceLinks', index: number) => {
    if (!footerData) return;
    const updatedLinks = footerData[section].filter((_, i) => i !== index);
    setFooterData({
      ...footerData,
      [section]: updatedLinks
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
          <p className="text-gray-600">Loading footer data...</p>
        </div>
      </div>
    );
  }

  if (!footerData) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No footer data available.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Footer Content Editor</h1>
          <p className="text-gray-600">Edit the content for your website footer</p>
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
              Save Footer
            </>
          )}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Company Information */}
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Company Information</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company Description</label>
                <textarea
                  value={footerData.companyDescription}
                  onChange={(e) => setFooterData({ ...footerData, companyDescription: e.target.value })}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <input
                  type="text"
                  value={footerData.location}
                  onChange={(e) => setFooterData({ ...footerData, location: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  value={footerData.phoneNumber}
                  onChange={(e) => setFooterData({ ...footerData, phoneNumber: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Copyright Text</label>
                <input
                  type="text"
                  value={footerData.copyright}
                  onChange={(e) => setFooterData({ ...footerData, copyright: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Links Sections */}
        <div className="space-y-6">
          {/* Main Links */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">Quick Links</h3>
              <button
                onClick={() => addLink('mainLinks')}
                className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Add Link
              </button>
            </div>
            
            <div className="space-y-3">
              {footerData.mainLinks.map((link, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <input
                    type="text"
                    value={link.name}
                    onChange={(e) => handleLinkChange('mainLinks', index, 'name', e.target.value)}
                    placeholder="Link Name"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    value={link.href}
                    onChange={(e) => handleLinkChange('mainLinks', index, 'href', e.target.value)}
                    placeholder="Link URL"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    onClick={() => removeLink('mainLinks', index)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Baghouse Links */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">Baghouse Links</h3>
              <button
                onClick={() => addLink('baghouseLinks')}
                className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Add Link
              </button>
            </div>
            
            <div className="space-y-3">
              {footerData.baghouseLinks.map((link, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <input
                    type="text"
                    value={link.name}
                    onChange={(e) => handleLinkChange('baghouseLinks', index, 'name', e.target.value)}
                    placeholder="Link Name"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    value={link.href}
                    onChange={(e) => handleLinkChange('baghouseLinks', index, 'href', e.target.value)}
                    placeholder="Link URL"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    onClick={() => removeLink('baghouseLinks', index)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Service Links */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">Service Links</h3>
              <button
                onClick={() => addLink('serviceLinks')}
                className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Add Link
              </button>
            </div>
            
            <div className="space-y-3">
              {footerData.serviceLinks.map((link, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <input
                    type="text"
                    value={link.name}
                    onChange={(e) => handleLinkChange('serviceLinks', index, 'name', e.target.value)}
                    placeholder="Link Name"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    value={link.href}
                    onChange={(e) => handleLinkChange('serviceLinks', index, 'href', e.target.value)}
                    placeholder="Link URL"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    onClick={() => removeLink('serviceLinks', index)}
                    className="text-red-600 hover:text-red-800"
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
      </div>
    </div>
  );
};

export default FooterEdit;
