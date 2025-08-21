import { useState, useEffect } from 'react';
import { getServicesContentData, saveServicesContentData, type ServicesContentData, type ServiceCategory, type ServiceItem } from '../../../services/servicesContentService';

const SparePartsEdit = () => {
  const [activeTab, setActiveTab] = useState('hero');
  const [categoryData, setCategoryData] = useState<ServiceCategory>({
    name: "Spare Parts",
    hero: {
      title: "",
      subtitle: "",
      backgroundImage: ""
    },
    sectionTitle: "",
    sectionSubtitle: "",
    services: [],
    qualityAssurance: {
      title: "",
      subtitle: "",
      description: "",
      features: []
    },
    cta: {
      title: "",
      subtitle: "",
      buttonText: "",
      buttonLink: ""
    }
  });
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      const data = await getServicesContentData();
      if (data && data.spareParts) {
        setCategoryData(data.spareParts);
      }
    };
    loadData();
  }, []);

  const handleSave = async () => {
    setLoading(true);
    try {
      // Get the full services data
      const fullData = await getServicesContentData();
      if (fullData) {
        // Update only the spare parts category
        const updatedData: ServicesContentData = {
          ...fullData,
          spareParts: categoryData
        };
        const success = await saveServicesContentData(updatedData);
        if (success) {
          setSaved(true);
          setTimeout(() => setSaved(false), 3000);
        }
      }
    } catch (error) {
      console.error('Error saving data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleHeroChange = (field: keyof ServiceCategory['hero'], value: string) => {
    setCategoryData(prev => ({
      ...prev,
      hero: {
        ...prev.hero,
        [field]: value
      }
    }));
  };

  const handleServicesCategoryChange = (field: 'sectionTitle' | 'sectionSubtitle', value: string) => {
    setCategoryData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleServiceItemChange = (index: number, field: keyof ServiceItem, value: string) => {
    setCategoryData(prev => ({
      ...prev,
      services: prev.services.map((item, i) => 
        i === index ? { ...item, [field]: value } : item
      )
    }));
  };

  const addServiceItem = () => {
    const newService: ServiceItem = {
      title: '',
      description: '',
      image: '',
      icon: '',
      color: 'from-blue-500 to-blue-600',
      path: ''
    };
    setCategoryData(prev => ({
      ...prev,
      services: [...prev.services, newService]
    }));
  };

  const removeServiceItem = (index: number) => {
    setCategoryData(prev => ({
      ...prev,
      services: prev.services.filter((_, i) => i !== index)
    }));
  };

  const handleQualityAssuranceChange = (field: keyof NonNullable<ServiceCategory['qualityAssurance']>, value: string) => {
    setCategoryData(prev => ({
      ...prev,
      qualityAssurance: {
        ...prev.qualityAssurance!,
        [field]: value
      }
    }));
  };

  const handleFeatureChange = (index: number, value: string) => {
    setCategoryData(prev => ({
      ...prev,
      qualityAssurance: {
        ...prev.qualityAssurance!,
        features: prev.qualityAssurance!.features.map((feature, i) => 
          i === index ? value : feature
        )
      }
    }));
  };

  const addFeature = () => {
    setCategoryData(prev => ({
      ...prev,
      qualityAssurance: {
        ...prev.qualityAssurance!,
        features: [...prev.qualityAssurance!.features, '']
      }
    }));
  };

  const removeFeature = (index: number) => {
    setCategoryData(prev => ({
      ...prev,
      qualityAssurance: {
        ...prev.qualityAssurance!,
        features: prev.qualityAssurance!.features.filter((_, i) => i !== index)
      }
    }));
  };

  const handleCTAChange = (field: keyof NonNullable<ServiceCategory['cta']>, value: string) => {
    setCategoryData(prev => ({
      ...prev,
      cta: {
        ...prev.cta!,
        [field]: value
      }
    }));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Edit Spare Parts</h1>
            <p className="text-gray-600 mt-1">Manage content for the Spare Parts page</p>
          </div>
          <div className="flex items-center space-x-4">
            {saved && (
              <span className="text-green-600 text-sm font-medium">✓ Saved successfully</span>
            )}
            <button
              onClick={handleSave}
              disabled={loading}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              {loading ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border border-gray-200 rounded-lg">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8 px-6">
            {[
              { id: 'hero', name: 'Hero Section' },
              { id: 'services', name: 'Services' },
              { id: 'quality', name: 'Quality Assurance' },
              { id: 'cta', name: 'CTA Section' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
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

        <div className="p-6">
          {/* Hero Tab */}
          {activeTab === 'hero' && (
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900">Hero Section</h3>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    value={categoryData.hero.title}
                    onChange={(e) => handleHeroChange('title', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Hero Title"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subtitle
                  </label>
                  <textarea
                    value={categoryData.hero.subtitle}
                    onChange={(e) => handleHeroChange('subtitle', e.target.value)}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Hero Subtitle"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Background Image URL
                  </label>
                  <input
                    type="text"
                    value={categoryData.hero.backgroundImage}
                    onChange={(e) => handleHeroChange('backgroundImage', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Background Image URL"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Services Tab */}
          {activeTab === 'services' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">Services Section</h3>
                <button
                  onClick={addServiceItem}
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                >
                  Add Service Item
                </button>
              </div>
              
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Section Title
                  </label>
                  <input
                    type="text"
                    value={categoryData.sectionTitle}
                    onChange={(e) => handleServicesCategoryChange('sectionTitle', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Our Services"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Section Subtitle
                  </label>
                  <textarea
                    value={categoryData.sectionSubtitle}
                    onChange={(e) => handleServicesCategoryChange('sectionSubtitle', e.target.value)}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Comprehensive solutions for your needs"
                  />
                </div>
              </div>

              {/* Service Items */}
              <div className="space-y-4">
                <h4 className="text-md font-medium text-gray-900">Service Items</h4>
                {categoryData.services.map((item, index) => (
                  <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-4">
                      <h5 className="text-sm font-medium text-gray-900">Service Item {index + 1}</h5>
                      <button
                        onClick={() => removeServiceItem(index)}
                        className="px-3 py-1 text-red-600 hover:text-red-800 transition-colors text-sm"
                      >
                        Remove
                      </button>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Title
                        </label>
                        <input
                          type="text"
                          value={item.title}
                          onChange={(e) => handleServiceItemChange(index, 'title', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Service Title"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Icon
                        </label>
                        <input
                          type="text"
                          value={item.icon}
                          onChange={(e) => handleServiceItemChange(index, 'icon', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Icon name or URL"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Color
                        </label>
                        <input
                          type="text"
                          value={item.color}
                          onChange={(e) => handleServiceItemChange(index, 'color', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="blue, green, red, etc."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Path
                        </label>
                        <input
                          type="text"
                          value={item.path || ''}
                          onChange={(e) => handleServiceItemChange(index, 'path', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="/services/example"
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Description
                      </label>
                      <textarea
                        value={item.description}
                        onChange={(e) => handleServiceItemChange(index, 'description', e.target.value)}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Service description"
                      />
                    </div>
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Image URL
                      </label>
                      <input
                        type="text"
                        value={item.image}
                        onChange={(e) => handleServiceItemChange(index, 'image', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Image URL"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quality Assurance Tab */}
          {activeTab === 'quality' && categoryData.qualityAssurance && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">Quality Assurance Section</h3>
                <button
                  onClick={addFeature}
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                >
                  Add Feature
                </button>
              </div>
              
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    value={categoryData.qualityAssurance.title}
                    onChange={(e) => handleQualityAssuranceChange('title', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Quality Assurance"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subtitle
                  </label>
                  <input
                    type="text"
                    value={categoryData.qualityAssurance.subtitle}
                    onChange={(e) => handleQualityAssuranceChange('subtitle', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Commitment to excellence"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    value={categoryData.qualityAssurance.description}
                    onChange={(e) => handleQualityAssuranceChange('description', e.target.value)}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Quality assurance description"
                  />
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <h4 className="text-md font-medium text-gray-900">Features</h4>
                {categoryData.qualityAssurance.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <input
                      type="text"
                      value={feature}
                      onChange={(e) => handleFeatureChange(index, e.target.value)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Feature description"
                    />
                    <button
                      onClick={() => removeFeature(index)}
                      className="px-2 py-1 text-red-600 hover:text-red-800 transition-colors text-sm"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA Tab */}
          {activeTab === 'cta' && categoryData.cta && (
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900">CTA Section</h3>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    value={categoryData.cta.title}
                    onChange={(e) => handleCTAChange('title', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Ready to Get Started?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subtitle
                  </label>
                  <textarea
                    value={categoryData.cta.subtitle}
                    onChange={(e) => handleCTAChange('subtitle', e.target.value)}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Contact us today to discuss your needs..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Button Text
                  </label>
                  <input
                    type="text"
                    value={categoryData.cta.buttonText}
                    onChange={(e) => handleCTAChange('buttonText', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Get a Quote"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Button Link
                  </label>
                  <input
                    type="text"
                    value={categoryData.cta.buttonLink}
                    onChange={(e) => handleCTAChange('buttonLink', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="/contact"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SparePartsEdit;
