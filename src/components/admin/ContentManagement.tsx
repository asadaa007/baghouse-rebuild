import { useState } from 'react';

interface ContentSection {
  id: string;
  title: string;
  type: 'text' | 'textarea' | 'image' | 'hero' | 'cta';
  value: string;
  description: string;
  page: string;
}

const ContentManagement = () => {
  const [contentSections, setContentSections] = useState<ContentSection[]>([
    {
      id: 'hero-title',
      title: 'Hero Title',
      type: 'text',
      value: 'Professional Baghouse Solutions',
      description: 'Main title displayed on the hero section',
      page: 'Home'
    },
    {
      id: 'hero-subtitle',
      title: 'Hero Subtitle',
      type: 'text',
      value: 'Industrial dust collection and air filtration systems',
      description: 'Subtitle displayed below the hero title',
      page: 'Home'
    },
    {
      id: 'hero-description',
      title: 'Hero Description',
      type: 'textarea',
      value: 'Professional baghouse solutions and industrial services. We provide cutting-edge filtration systems that keep your workplace clean, safe, and compliant with environmental regulations.',
      description: 'Description text in the hero section',
      page: 'Home'
    },
    {
      id: 'services-title',
      title: 'Services Section Title',
      type: 'text',
      value: 'Our Services',
      description: 'Title for the services section',
      page: 'Home'
    },
    {
      id: 'services-description',
      title: 'Services Section Description',
      type: 'textarea',
      value: 'Comprehensive baghouse solutions to keep your industrial operations running efficiently and safely',
      description: 'Description for the services section',
      page: 'Home'
    },
    {
      id: 'cta-title',
      title: 'CTA Title',
      type: 'text',
      value: 'Ready to Optimize Your Industrial Filtration?',
      description: 'Call-to-action title',
      page: 'Home'
    },
    {
      id: 'cta-description',
      title: 'CTA Description',
      type: 'textarea',
      value: 'Get professional baghouse solutions that keep your operations running efficiently, safely, and in compliance with environmental regulations.',
      description: 'Call-to-action description',
      page: 'Home'
    },
    {
      id: 'about-title',
      title: 'About Page Title',
      type: 'text',
      value: 'About Us',
      description: 'Title for the about page',
      page: 'About'
    },
    {
      id: 'about-description',
      title: 'About Page Description',
      type: 'textarea',
      value: 'Learn more about Frost Emission and our commitment to excellence',
      description: 'Description for the about page',
      page: 'About'
    },
    {
      id: 'contact-email',
      title: 'Contact Email',
      type: 'text',
      value: 'frost@baghouse.net',
      description: 'Primary contact email address',
      page: 'Contact'
    },
    {
      id: 'contact-phone',
      title: 'Contact Phone',
      type: 'text',
      value: '1-905-934-1211',
      description: 'Primary contact phone number',
      page: 'Contact'
    },
    {
      id: 'company-address',
      title: 'Company Address',
      type: 'text',
      value: 'St. Catharines, Ontario, Canada',
      description: 'Company location/address',
      page: 'Contact'
    }
  ]);

  const [editingSection, setEditingSection] = useState<ContentSection | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    value: '',
    description: ''
  });

  const pages = ['Home', 'About', 'Services', 'Contact', 'Careers'];

  const handleEdit = (section: ContentSection) => {
    setEditingSection(section);
    setFormData({
      title: section.title,
      value: section.value,
      description: section.description
    });
    setShowForm(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingSection) {
      setContentSections(contentSections.map(section => 
        section.id === editingSection.id 
          ? { ...section, ...formData }
          : section
      ));
    }
    
    setShowForm(false);
    setEditingSection(null);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingSection(null);
  };

  const getPageSections = (page: string) => {
    return contentSections.filter(section => section.page === page);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Content Management</h1>
        <p className="mt-2 text-gray-600">
          Edit website content, titles, descriptions, and contact information
        </p>
      </div>

      {/* Content Sections by Page */}
      <div className="space-y-8">
        {pages.map(page => (
          <div key={page} className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">{page} Page Content</h2>
            </div>
            <div className="p-6">
              <div className="grid gap-4">
                {getPageSections(page).map((section) => (
                  <div key={section.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="text-sm font-medium text-gray-900 mb-1">
                          {section.title}
                        </h3>
                        <p className="text-xs text-gray-500 mb-2">
                          {section.description}
                        </p>
                        <div className="bg-gray-50 rounded p-3">
                          {section.type === 'textarea' ? (
                            <textarea
                              readOnly
                              rows={3}
                              value={section.value}
                              className="w-full bg-transparent border-none resize-none text-sm text-gray-700"
                            />
                          ) : (
                            <p className="text-sm text-gray-700">{section.value}</p>
                          )}
                        </div>
                      </div>
                      <button
                        onClick={() => handleEdit(section)}
                        className="ml-4 text-blue-600 hover:text-blue-900 transition-colors duration-200 text-sm font-medium"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Form Modal */}
      {showForm && editingSection && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Edit Content: {editingSection.title}
                </h3>
                <button
                  onClick={handleCancel}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Content Title
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Content Value
                  </label>
                  {editingSection.type === 'textarea' ? (
                    <textarea
                      required
                      rows={4}
                      value={formData.value}
                      onChange={(e) => setFormData({...formData, value: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter content..."
                    />
                  ) : (
                    <input
                      type="text"
                      required
                      value={formData.value}
                      onChange={(e) => setFormData({...formData, value: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter content..."
                    />
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <input
                    type="text"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 border border-transparent rounded-md text-sm font-medium text-white hover:bg-blue-700 transition-colors duration-200"
                  >
                    Update Content
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Quick Actions</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Export Content</h3>
              <p className="text-sm text-gray-600 mb-3">Download all content as JSON</p>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Export
              </button>
            </div>
            
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Import Content</h3>
              <p className="text-sm text-gray-600 mb-3">Upload content from JSON file</p>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Import
              </button>
            </div>
            
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Reset to Default</h3>
              <p className="text-sm text-gray-600 mb-3">Restore original content</p>
              <button className="text-red-600 hover:text-red-800 text-sm font-medium">
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentManagement;
