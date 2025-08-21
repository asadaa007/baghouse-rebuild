import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getServicesContentData, saveServicesContentData, initializeServicesContentData, type ServicesContentData, type ServiceCategory, type ServiceItem, type ServiceSubPage } from '../../services/servicesContentService';

const ServicesContentManagement = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'baghouseFieldServices' | 'sheetMetalDucting' | 'consulting' | 'spareParts' | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [servicesData, setServicesData] = useState<ServicesContentData | null>(null);
  const [subPages, setSubPages] = useState<{ [key: string]: ServiceSubPage[] }>({
    baghouseFieldServices: [],
    sheetMetalDucting: [],
    consulting: [],
    spareParts: []
  });

  // Load data on component mount
  useEffect(() => {
    loadData();
  }, []);

  // Load sub-pages when data changes
  useEffect(() => {
    if (servicesData) {
      loadAllSubPages();
    }
  }, [servicesData]);

  const loadData = async () => {
    try {
      setLoading(true);
      const data = await getServicesContentData();
      if (data) {
        setServicesData(data);
      } else {
        // Initialize with default data if none exists
        const success = await initializeServicesContentData();
        if (success) {
          const newData = await getServicesContentData();
          if (newData) {
            setServicesData(newData);
          }
        }
      }
    } catch (error) {
      console.error('Error loading services content data:', error);
    } finally {
      setLoading(false);
    }
  };

  const navigateToEditPage = (categoryKey: string) => {
    const routes = {
      baghouseFieldServices: '/react-admin/services/baghouse-field-services',
      sheetMetalDucting: '/react-admin/services/sheet-metal-ducting',
      consulting: '/react-admin/services/consulting',
      spareParts: '/react-admin/services/spare-parts'
    };
    navigate(routes[categoryKey as keyof typeof routes]);
  };

  const loadAllSubPages = async () => {
    // Set static sub-pages instead of loading from database
    const staticSubPages = {
      baghouseFieldServices: [
        { id: 'filter-change-outs', title: 'Filter Change-outs Page', path: '/services/filter-change-outs', hero: { title: '', subtitle: '', backgroundImage: '' }, content: { sections: [] }, cta: { title: '', subtitle: '', buttonText: '', buttonLink: '' } },
        { id: 'mechanical-repairs', title: 'Mechanical Repairs Page', path: '/services/mechanical-repairs', hero: { title: '', subtitle: '', backgroundImage: '' }, content: { sections: [] }, cta: { title: '', subtitle: '', buttonText: '', buttonLink: '' } },
        { id: 'pm-inspections', title: 'PM Inspections & Dye Testing Page', path: '/services/pm-inspections', hero: { title: '', subtitle: '', backgroundImage: '' }, content: { sections: [] }, cta: { title: '', subtitle: '', buttonText: '', buttonLink: '' } },
        { id: 'baghouse-types', title: 'Baghouse Types Serviced Page', path: '/services/baghouse-types', hero: { title: '', subtitle: '', backgroundImage: '' }, content: { sections: [] }, cta: { title: '', subtitle: '', buttonText: '', buttonLink: '' } },
        { id: 'photo-gallery-bfs', title: 'Photo Gallery Page', path: '/services/photo-gallery-bfs', hero: { title: '', subtitle: '', backgroundImage: '' }, content: { sections: [] }, cta: { title: '', subtitle: '', buttonText: '', buttonLink: '' } }
      ],
      sheetMetalDucting: [
        { id: 'design', title: 'Design Page', path: '/services/design', hero: { title: '', subtitle: '', backgroundImage: '' }, content: { sections: [] }, cta: { title: '', subtitle: '', buttonText: '', buttonLink: '' } },
        { id: 'fabrication', title: 'Fabrication Page', path: '/services/fabrication', hero: { title: '', subtitle: '', backgroundImage: '' }, content: { sections: [] }, cta: { title: '', subtitle: '', buttonText: '', buttonLink: '' } },
        { id: 'installation', title: 'Installation & Replacement Page', path: '/services/installation', hero: { title: '', subtitle: '', backgroundImage: '' }, content: { sections: [] }, cta: { title: '', subtitle: '', buttonText: '', buttonLink: '' } },
        { id: 'projects', title: 'Projects Page', path: '/services/projects', hero: { title: '', subtitle: '', backgroundImage: '' }, content: { sections: [] }, cta: { title: '', subtitle: '', buttonText: '', buttonLink: '' } },
        { id: 'photo-gallery-smd', title: 'Photo Gallery Page', path: '/services/photo-gallery-smd', hero: { title: '', subtitle: '', backgroundImage: '' }, content: { sections: [] }, cta: { title: '', subtitle: '', buttonText: '', buttonLink: '' } }
      ],
      consulting: [
        { id: 'system-performance', title: 'System Performance Review Page', path: '/services/system-performance', hero: { title: '', subtitle: '', backgroundImage: '' }, content: { sections: [] }, cta: { title: '', subtitle: '', buttonText: '', buttonLink: '' } },
        { id: 'proposed-modifications', title: 'Proposed Modifications Page', path: '/services/proposed-modifications', hero: { title: '', subtitle: '', backgroundImage: '' }, content: { sections: [] }, cta: { title: '', subtitle: '', buttonText: '', buttonLink: '' } },
        { id: 'photo-gallery-consulting', title: 'Photo Gallery Page', path: '/services/photo-gallery-consulting', hero: { title: '', subtitle: '', backgroundImage: '' }, content: { sections: [] }, cta: { title: '', subtitle: '', buttonText: '', buttonLink: '' } }
      ],
      spareParts: [
        { id: 'bags-cartridges', title: 'Bags & Cartridges Page', path: '/services/bags-cartridges', hero: { title: '', subtitle: '', backgroundImage: '' }, content: { sections: [] }, cta: { title: '', subtitle: '', buttonText: '', buttonLink: '' } },
        { id: 'dye-powder', title: 'Dye Powder Page', path: '/services/dye-powder', hero: { title: '', subtitle: '', backgroundImage: '' }, content: { sections: [] }, cta: { title: '', subtitle: '', buttonText: '', buttonLink: '' } },
        { id: 'pulse-cleaning', title: 'Pulse Cleaning Page', path: '/services/pulse-cleaning', hero: { title: '', subtitle: '', backgroundImage: '' }, content: { sections: [] }, cta: { title: '', subtitle: '', buttonText: '', buttonLink: '' } },
        { id: 'components', title: 'Components Page', path: '/services/components', hero: { title: '', subtitle: '', backgroundImage: '' }, content: { sections: [] }, cta: { title: '', subtitle: '', buttonText: '', buttonLink: '' } },
        { id: 'shaker-components', title: 'Shaker Components Page', path: '/services/shaker-components', hero: { title: '', subtitle: '', backgroundImage: '' }, content: { sections: [] }, cta: { title: '', subtitle: '', buttonText: '', buttonLink: '' } },
        { id: 'miscellaneous', title: 'Miscellaneous Page', path: '/services/miscellaneous', hero: { title: '', subtitle: '', backgroundImage: '' }, content: { sections: [] }, cta: { title: '', subtitle: '', buttonText: '', buttonLink: '' } },
        { id: 'photo-gallery-spare', title: 'Photo Gallery Page', path: '/services/photo-gallery-spare', hero: { title: '', subtitle: '', backgroundImage: '' }, content: { sections: [] }, cta: { title: '', subtitle: '', buttonText: '', buttonLink: '' } }
      ]
    };
    
    setSubPages(staticSubPages);
  };

  const handleSave = async () => {
    if (!servicesData) return;
    
    try {
      setSaving(true);
      
      // Save main services data only
      const success = await saveServicesContentData(servicesData);
      
      if (success) {
        alert('Services content saved successfully!');
      } else {
        alert('Error saving services content. Please try again.');
      }
    } catch (error) {
      console.error('Error saving services content data:', error);
      alert('Error saving services content. Please try again.');
    } finally {
      setSaving(false);
    }
  };



  // Category management functions (existing)
  const updateServiceCategoryField = (categoryKey: keyof Omit<ServicesContentData, 'subPages'>, field: keyof ServiceCategory, value: any) => {
    if (!servicesData) return;
    setServicesData({
      ...servicesData,
      [categoryKey]: {
        ...servicesData[categoryKey],
        [field]: value
      }
    });
  };

  const updateHeroField = (categoryKey: keyof Omit<ServicesContentData, 'subPages'>, field: keyof ServiceCategory['hero'], value: string) => {
    if (!servicesData) return;
    setServicesData({
      ...servicesData,
      [categoryKey]: {
        ...servicesData[categoryKey],
        hero: {
          ...servicesData[categoryKey].hero,
          [field]: value
        }
      }
    });
  };

  const updateExperienceField = (categoryKey: keyof Omit<ServicesContentData, 'subPages'>, field: keyof NonNullable<ServiceCategory['experience']>, value: any) => {
    if (!servicesData) return;
    const currentCategory = servicesData[categoryKey];
    const currentExperience = currentCategory.experience || {
      title: '',
      subtitle: '',
      description: '',
      features: []
    };

    setServicesData({
      ...servicesData,
      [categoryKey]: {
        ...currentCategory,
        experience: {
          ...currentExperience,
          [field]: value
        }
      }
    });
  };

  const updateQualityAssuranceField = (categoryKey: keyof Omit<ServicesContentData, 'subPages'>, field: keyof NonNullable<ServiceCategory['qualityAssurance']>, value: any) => {
    if (!servicesData) return;
    const currentCategory = servicesData[categoryKey];
    const currentQualityAssurance = currentCategory.qualityAssurance || {
      title: '',
      subtitle: '',
      description: '',
      features: []
    };

    setServicesData({
      ...servicesData,
      [categoryKey]: {
        ...currentCategory,
        qualityAssurance: {
          ...currentQualityAssurance,
          [field]: value
        }
      }
    });
  };

  const updateCTAField = (categoryKey: keyof Omit<ServicesContentData, 'subPages'>, field: keyof NonNullable<ServiceCategory['cta']>, value: string) => {
    if (!servicesData) return;
    const currentCategory = servicesData[categoryKey];
    const currentCTA = currentCategory.cta || {
      title: '',
      subtitle: '',
      buttonText: '',
      buttonLink: ''
    };

    setServicesData({
      ...servicesData,
      [categoryKey]: {
        ...currentCategory,
        cta: {
          ...currentCTA,
          [field]: value
        }
      }
    });
  };

  // Service Item management functions (existing)
  const addServiceItem = (categoryKey: keyof Omit<ServicesContentData, 'subPages'>) => {
    if (!servicesData) return;
    const newService: ServiceItem = {
      title: '',
      description: '',
      image: '',
      icon: '',
      color: 'from-blue-500 to-blue-600',
      path: ''
    };
    const updatedCategory = { ...servicesData[categoryKey] };
    updatedCategory.services = [...(updatedCategory.services || []), newService];
    setServicesData({ ...servicesData, [categoryKey]: updatedCategory });
  };

  const updateServiceItem = (categoryKey: keyof Omit<ServicesContentData, 'subPages'>, itemIndex: number, field: keyof ServiceItem, value: string) => {
    if (!servicesData) return;
    const updatedCategory = { ...servicesData[categoryKey] };
    const updatedServices = [...(updatedCategory.services || [])];
    updatedServices[itemIndex] = { ...updatedServices[itemIndex], [field]: value };
    updatedCategory.services = updatedServices;
    setServicesData({ ...servicesData, [categoryKey]: updatedCategory });
  };

  const removeServiceItem = (categoryKey: keyof Omit<ServicesContentData, 'subPages'>, itemIndex: number) => {
    if (!servicesData) return;
    const updatedCategory = { ...servicesData[categoryKey] };
    updatedCategory.services = updatedCategory.services?.filter((_, i) => i !== itemIndex);
    setServicesData({ ...servicesData, [categoryKey]: updatedCategory });
  };

  // Feature management functions (existing)
  const addFeature = (categoryKey: keyof Omit<ServicesContentData, 'subPages'>, section: 'experience' | 'qualityAssurance') => {
    if (!servicesData) return;
    const updatedCategory = { ...servicesData[categoryKey] };
    if (section === 'experience') {
      updatedCategory.experience = {
        ...(updatedCategory.experience || { title: '', subtitle: '', description: '', features: [] }),
        features: [...(updatedCategory.experience?.features || []), '']
      };
    } else if (section === 'qualityAssurance') {
      updatedCategory.qualityAssurance = {
        ...(updatedCategory.qualityAssurance || { title: '', subtitle: '', description: '', features: [] }),
        features: [...(updatedCategory.qualityAssurance?.features || []), '']
      };
    }
    setServicesData({ ...servicesData, [categoryKey]: updatedCategory });
  };

  const updateFeature = (categoryKey: keyof Omit<ServicesContentData, 'subPages'>, section: 'experience' | 'qualityAssurance', featureIndex: number, value: string) => {
    if (!servicesData) return;
    const updatedCategory = { ...servicesData[categoryKey] };
    if (section === 'experience' && updatedCategory.experience) {
      const updatedFeatures = [...(updatedCategory.experience.features || [])];
      updatedFeatures[featureIndex] = value;
      updatedCategory.experience.features = updatedFeatures;
    } else if (section === 'qualityAssurance' && updatedCategory.qualityAssurance) {
      const updatedFeatures = [...(updatedCategory.qualityAssurance.features || [])];
      updatedFeatures[featureIndex] = value;
      updatedCategory.qualityAssurance.features = updatedFeatures;
    }
    setServicesData({ ...servicesData, [categoryKey]: updatedCategory });
  };

  const removeFeature = (categoryKey: keyof Omit<ServicesContentData, 'subPages'>, section: 'experience' | 'qualityAssurance', featureIndex: number) => {
    if (!servicesData) return;
    const updatedCategory = { ...servicesData[categoryKey] };
    if (section === 'experience' && updatedCategory.experience) {
      updatedCategory.experience.features = updatedCategory.experience.features?.filter((_, i) => i !== featureIndex);
    } else if (section === 'qualityAssurance' && updatedCategory.qualityAssurance) {
      updatedCategory.qualityAssurance.features = updatedCategory.qualityAssurance.features?.filter((_, i) => i !== featureIndex);
    }
    setServicesData({ ...servicesData, [categoryKey]: updatedCategory });
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <svg className="animate-spin h-8 w-8 text-blue-600 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p className="text-gray-500">Loading services content...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!servicesData) {
    return (
      <div className="space-y-6">
        <div className="text-center py-8">
          <p className="text-gray-500">No services content data found. Please try refreshing the page.</p>
        </div>
      </div>
    );
  }

  const categories = ['baghouseFieldServices', 'sheetMetalDucting', 'consulting', 'spareParts'] as const;

  return (
    <div className="space-y-6">
      {/* Main Heading */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Services Content Management</h1>
        <p className="text-gray-600">Manage content for all service categories and their related pages</p>
        <div className="border-b border-gray-200 mt-4"></div>
      </div>

             {/* Column-based Layout */}
       <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
         {categories.map((categoryKey) => {
           const category = servicesData[categoryKey];
           const categorySubPages = subPages[categoryKey] || [];
           
           return (
             <div key={categoryKey} className="bg-white border border-gray-200 rounded-lg p-6">
               {/* Column Title */}
               <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                 {category.hero.title || category.name}
               </h3>
              {/* Main Category Card */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 mb-6">
                <h5 className="text-sm font-medium text-gray-900 mb-1">
                  {category.name} Page
                </h5>
                <p className="text-xs text-gray-600 mb-2">
                  {category.hero.subtitle.substring(0, 60)}
                </p>
                <button
                  onClick={() => navigateToEditPage(categoryKey)}
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Edit
                </button>
              </div>

              {/* Sub-Pages List */}
              <div className="space-y-3">
                <h4 className="text-md font-medium text-gray-900 border-b border-gray-200 pb-2">
                  Related Pages
                </h4>
                {categorySubPages.map((subPage, index) => (
                  <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                    <h5 className="text-sm font-medium text-gray-900 mb-1">
                      {subPage.title || `Page ${index + 1}`}
                    </h5>
                    <p className="text-xs text-gray-600 mb-2">
                      {subPage.hero.subtitle.substring(0, 60)}
                    </p>
                    <button
                      onClick={() => setActiveTab(activeTab === categoryKey ? null : categoryKey)}
                      className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Edit
                    </button>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Sub-Page Editing Interface */}
      {activeTab && servicesData[activeTab] && (
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Editing: {servicesData[activeTab].name}
            </h2>
            <button
              onClick={() => setActiveTab(null)}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Category Management UI */}
          <div className="space-y-6">
            {/* Hero Tab */}
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Hero Section - {servicesData[activeTab].name}</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Title
                    </label>
                    <input
                      type="text"
                      value={servicesData[activeTab].hero.title}
                      onChange={(e) => updateHeroField(activeTab, 'title', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Hero Title"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subtitle
                    </label>
                    <textarea
                      value={servicesData[activeTab].hero.subtitle}
                      onChange={(e) => updateHeroField(activeTab, 'subtitle', e.target.value)}
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
                      value={servicesData[activeTab].hero.backgroundImage}
                      onChange={(e) => updateHeroField(activeTab, 'backgroundImage', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>
                </div>
              </div>

              {/* Main Services Section */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Main Services Section - {servicesData[activeTab].name}</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Section Title
                    </label>
                    <input
                      type="text"
                      value={servicesData[activeTab].sectionTitle}
                      onChange={(e) => updateServiceCategoryField(activeTab, 'sectionTitle', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Our Services"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Section Subtitle
                    </label>
                    <textarea
                      value={servicesData[activeTab].sectionSubtitle}
                      onChange={(e) => updateServiceCategoryField(activeTab, 'sectionSubtitle', e.target.value)}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Comprehensive solutions..."
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center mt-8 mb-4">
                  <h4 className="text-md font-medium text-gray-900">Service Items</h4>
                  <button
                    onClick={() => addServiceItem(activeTab)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Add Service Item
                  </button>
                </div>
                
                <div className="space-y-6">
                  {servicesData[activeTab].services?.map((item, index) => (
                    <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-4">
                        <h5 className="text-sm font-medium text-gray-900">Service Item #{index + 1}</h5>
                        <button
                          onClick={() => removeServiceItem(activeTab, index)}
                          className="px-3 py-1 text-red-600 hover:text-red-800 transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Title
                          </label>
                          <input
                            type="text"
                            value={item.title}
                            onChange={(e) => updateServiceItem(activeTab, index, 'title', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Service Title"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Image URL
                          </label>
                          <input
                            type="text"
                            value={item.image}
                            onChange={(e) => updateServiceItem(activeTab, index, 'image', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="https://example.com/service.jpg"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Icon SVG Path (d attribute)
                          </label>
                          <input
                            type="text"
                            value={item.icon}
                            onChange={(e) => updateServiceItem(activeTab, index, 'icon', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="M4 16l4.586-4.586a2 2 0 012.828 0L16 16..."
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Color (Tailwind gradient classes)
                          </label>
                          <input
                            type="text"
                            value={item.color}
                            onChange={(e) => updateServiceItem(activeTab, index, 'color', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="from-blue-500 to-cyan-500"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Description
                          </label>
                          <textarea
                            value={item.description}
                            onChange={(e) => updateServiceItem(activeTab, index, 'description', e.target.value)}
                            rows={3}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Service description..."
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Link Path (e.g., /services/filter-change-outs)
                          </label>
                          <input
                            type="text"
                            value={item.path || ''}
                            onChange={(e) => updateServiceItem(activeTab, index, 'path', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="/services/filter-change-outs"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conditional Sections (Experience / Quality Assurance) */}
              {activeTab === 'baghouseFieldServices' && servicesData[activeTab].experience && (
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Experience Section</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Title
                      </label>
                      <input
                        type="text"
                        value={servicesData[activeTab].experience.title}
                        onChange={(e) => updateExperienceField(activeTab, 'title', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Why Choose Our Field Services?"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subtitle
                      </label>
                      <input
                        type="text"
                        value={servicesData[activeTab].experience.subtitle}
                        onChange={(e) => updateExperienceField(activeTab, 'subtitle', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Experience and Expertise"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Description
                      </label>
                      <textarea
                        value={servicesData[activeTab].experience.description}
                        onChange={(e) => updateExperienceField(activeTab, 'description', e.target.value)}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="With over 25 years of experience..."
                      />
                    </div>
                    <div className="flex justify-between items-center mt-4 mb-2">
                      <h4 className="text-md font-medium text-gray-900">Features</h4>
                      <button
                        onClick={() => addFeature(activeTab, 'experience')}
                        className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
                      >
                        Add Feature
                      </button>
                    </div>
                    <div className="space-y-2">
                      {servicesData[activeTab].experience.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <input
                            type="text"
                            value={feature}
                            onChange={(e) => updateFeature(activeTab, 'experience', index, e.target.value)}
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                            placeholder="Feature description"
                          />
                          <button
                            onClick={() => removeFeature(activeTab, 'experience', index)}
                            className="px-2 py-1 text-red-600 hover:text-red-800 transition-colors text-sm"
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'spareParts' && servicesData[activeTab].qualityAssurance && (
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Quality Assurance Section</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Title
                      </label>
                      <input
                        type="text"
                        value={servicesData[activeTab].qualityAssurance.title}
                        onChange={(e) => updateQualityAssuranceField(activeTab, 'title', e.target.value)}
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
                        value={servicesData[activeTab].qualityAssurance.subtitle}
                        onChange={(e) => updateQualityAssuranceField(activeTab, 'subtitle', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Why Choose Our Spare Parts?"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Description
                      </label>
                      <textarea
                        value={servicesData[activeTab].qualityAssurance.description}
                        onChange={(e) => updateQualityAssuranceField(activeTab, 'description', e.target.value)}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="We partner with leading manufacturers..."
                      />
                    </div>
                    <div className="flex justify-between items-center mt-4 mb-2">
                      <h4 className="text-md font-medium text-gray-900">Features</h4>
                      <button
                        onClick={() => addFeature(activeTab, 'qualityAssurance')}
                        className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
                      >
                        Add Feature
                      </button>
                    </div>
                    <div className="space-y-2">
                      {servicesData[activeTab].qualityAssurance.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <input
                            type="text"
                            value={feature}
                            onChange={(e) => updateFeature(activeTab, 'qualityAssurance', index, e.target.value)}
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Feature description"
                          />
                          <button
                            onClick={() => removeFeature(activeTab, 'qualityAssurance', index)}
                            className="px-2 py-1 text-red-600 hover:text-red-800 transition-colors text-sm"
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* CTA Section */}
              {servicesData[activeTab].cta && (
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">CTA Section</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Title
                      </label>
                      <input
                        type="text"
                        value={servicesData[activeTab].cta.title}
                        onChange={(e) => updateCTAField(activeTab, 'title', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Ready to Get Started?"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subtitle
                      </label>
                      <textarea
                        value={servicesData[activeTab].cta.subtitle}
                        onChange={(e) => updateCTAField(activeTab, 'subtitle', e.target.value)}
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
                        value={servicesData[activeTab].cta.buttonText}
                        onChange={(e) => updateCTAField(activeTab, 'buttonText', e.target.value)}
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
                        value={servicesData[activeTab].cta.buttonLink}
                        onChange={(e) => updateCTAField(activeTab, 'buttonLink', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="/contact"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Save Button */}
            <div className="flex justify-end">
              <button
                onClick={handleSave}
                disabled={saving}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                {saving ? 'Saving...' : 'Save Services Content'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesContentManagement;
