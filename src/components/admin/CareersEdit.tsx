import { useState, useEffect } from 'react';
import { getCareersData, saveCareersData, type CareersData } from '../../services/careersService';

const CareersEdit = () => {
  const [activeTab, setActiveTab] = useState('hero');
  const [careersData, setCareersData] = useState<CareersData>({
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
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const loadCareersData = async () => {
      const data = await getCareersData();
      if (data) {
        setCareersData(data);
      }
    };
    loadCareersData();
  }, []);

  const handleSave = async () => {
    setLoading(true);
    const success = await saveCareersData(careersData);
    setLoading(false);
    if (success) {
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    }
  };

  const handleHeroChange = (field: keyof CareersData['hero'], value: string | boolean) => {
    setCareersData(prev => ({
      ...prev,
      hero: {
        ...prev.hero,
        [field]: value
      }
    }));
  };



  const handleWhyWorkWithUsChange = (field: keyof CareersData['whyWorkWithUs'], value: string) => {
    setCareersData(prev => ({
      ...prev,
      whyWorkWithUs: {
        ...prev.whyWorkWithUs,
        [field]: value
      }
    }));
  };

  const handleBenefitChange = (id: number, field: string, value: string) => {
    setCareersData(prev => ({
      ...prev,
      whyWorkWithUs: {
        ...prev.whyWorkWithUs,
        benefits: prev.whyWorkWithUs.benefits.map(benefit =>
          benefit.id === id ? { ...benefit, [field]: value } : benefit
        )
      }
    }));
  };

  const handleCtaChange = (field: keyof CareersData['cta'], value: string) => {
    setCareersData(prev => ({
      ...prev,
      cta: {
        ...prev.cta,
        [field]: value
      }
    }));
  };



  const tabs = [
    { id: 'hero', name: 'Hero Section', icon: 'home' },
    { id: 'whyWorkWithUs', name: 'Why Work With Us', icon: 'users' },
    { id: 'cta', name: 'Call to Action', icon: 'phone' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Careers Page Editor</h1>
          <p className="text-gray-600">Manage the content for your careers page</p>
        </div>
        <button
          onClick={handleSave}
          disabled={loading}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
        >
          {loading ? (
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Save Changes
            </>
          )}
        </button>
      </div>

      {saved && (
        <div className="bg-green-50 border border-green-200 rounded-md p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-green-800">Changes saved successfully!</p>
            </div>
          </div>
        </div>
      )}

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="space-y-6">
        {activeTab === 'hero' && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Hero Title</label>
              <input
                type="text"
                value={careersData.hero.title}
                onChange={(e) => handleHeroChange('title', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Hero Subtitle</label>
              <textarea
                value={careersData.hero.subtitle}
                onChange={(e) => handleHeroChange('subtitle', e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={careersData.hero.showGradient}
                  onChange={(e) => handleHeroChange('showGradient', e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label className="ml-2 text-sm text-gray-700">Show Gradient Background</label>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Gradient Colors (Tailwind classes)</label>
              <input
                type="text"
                value={careersData.hero.gradientColors}
                onChange={(e) => handleHeroChange('gradientColors', e.target.value)}
                placeholder="from-blue-900 via-blue-800 to-indigo-900"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        )}



        {activeTab === 'whyWorkWithUs' && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Section Title</label>
              <input
                type="text"
                value={careersData.whyWorkWithUs.sectionTitle}
                onChange={(e) => handleWhyWorkWithUsChange('sectionTitle', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Section Description</label>
              <textarea
                value={careersData.whyWorkWithUs.sectionDescription}
                onChange={(e) => handleWhyWorkWithUsChange('sectionDescription', e.target.value)}
                rows={2}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="border-t pt-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Benefits</h3>
              <div className="space-y-4">
                {careersData.whyWorkWithUs.benefits.map((benefit) => (
                  <div key={benefit.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                        <input
                          type="text"
                          value={benefit.title}
                          onChange={(e) => handleBenefitChange(benefit.id, 'title', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Color</label>
                        <select
                          value={benefit.color}
                          onChange={(e) => handleBenefitChange(benefit.id, 'color', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="blue">Blue</option>
                          <option value="green">Green</option>
                          <option value="purple">Purple</option>
                          <option value="red">Red</option>
                          <option value="yellow">Yellow</option>
                        </select>
                      </div>
                    </div>
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                      <textarea
                        value={benefit.description}
                        onChange={(e) => handleBenefitChange(benefit.id, 'description', e.target.value)}
                        rows={2}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'cta' && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">CTA Title</label>
              <input
                type="text"
                value={careersData.cta.title}
                onChange={(e) => handleCtaChange('title', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">CTA Description</label>
              <textarea
                value={careersData.cta.description}
                onChange={(e) => handleCtaChange('description', e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Contact Email</label>
              <input
                type="email"
                value={careersData.cta.email}
                onChange={(e) => handleCtaChange('email', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Contact Phone Number</label>
              <input
                type="tel"
                value={careersData.cta.phoneNumber}
                onChange={(e) => handleCtaChange('phoneNumber', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CareersEdit;

