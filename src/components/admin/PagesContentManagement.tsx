import { useState } from 'react';
import HomePageEdit from './HomePageEdit';
import FooterEdit from './FooterEdit';

interface PageContent {
  id: string;
  title: string;
  description: string;
  type: 'hero' | 'section' | 'footer' | 'header';
  page: string;
  lastUpdated: string;
  status: 'published' | 'draft';
}

const PagesContentManagement = () => {
  const [editingPage, setEditingPage] = useState<string | null>(null);
  const [pages] = useState<PageContent[]>([
    {
      id: '1',
      title: 'Homepage Hero Section',
      description: 'Main hero section with headline, subheadline, and call-to-action',
      type: 'hero',
      page: 'Home',
      lastUpdated: '2024-01-15',
      status: 'published'
    },
    {
      id: '2',
      title: 'About Us Content',
      description: 'Company history, mission, and team information',
      type: 'section',
      page: 'About',
      lastUpdated: '2024-01-10',
      status: 'published'
    },
    {
      id: '3',
      title: 'Services Overview',
      description: 'Main services section with descriptions and features',
      type: 'section',
      page: 'Services',
      lastUpdated: '2024-01-12',
      status: 'published'
    },
    {
      id: '4',
      title: 'Contact Information',
      description: 'Contact details, address, and contact form',
      type: 'section',
      page: 'Contact',
      lastUpdated: '2024-01-08',
      status: 'published'
    },
    {
      id: '5',
      title: 'Footer Content',
      description: 'Footer links, social media, and company information',
      type: 'footer',
      page: 'Global',
      lastUpdated: '2024-01-05',
      status: 'published'
    },
    {
      id: '6',
      title: 'Careers Page Content',
      description: 'Job listings, company culture, and application process',
      type: 'section',
      page: 'Careers',
      lastUpdated: '2024-01-03',
      status: 'draft'
    }
  ]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'hero':
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      case 'section':
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        );
      case 'footer':
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
          </svg>
        );
      case 'header':
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        );
      default:
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
    }
  };

  const handleEdit = (pageId: string) => {
    setEditingPage(pageId);
  };

  const handleBack = () => {
    setEditingPage(null);
  };

  // If editing a specific page, show the editor
  if (editingPage === '1') { // Homepage Hero Section
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={handleBack}
              className="inline-flex items-center px-3 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Pages
            </button>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Home Page Editor</h1>
              <p className="text-gray-600">Edit the content for your homepage</p>
            </div>
          </div>
        </div>
        <HomePageEdit />
      </div>
    );
  }

  if (editingPage === '5') { // Footer Content
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={handleBack}
              className="inline-flex items-center px-3 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Pages
            </button>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Footer Content Editor</h1>
              <p className="text-gray-600">Edit the content for your website footer</p>
            </div>
          </div>
        </div>
        <FooterEdit />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Pages Content Management</h1>
          <p className="text-gray-600">Manage content for different pages of your website</p>
        </div>
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Add New Page
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pages.map((page) => (
          <div key={page.id} className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                    {getTypeIcon(page.type)}
                  </div>
                  <div className="ml-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(page.status)}">
                      {page.status}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">{page.page}</p>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{page.title}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{page.description}</p>
              
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  Updated: {new Date(page.lastUpdated).toLocaleDateString()}
                </div>
                <button
                  onClick={() => handleEdit(page.id)}
                  className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  Edit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PagesContentManagement;
