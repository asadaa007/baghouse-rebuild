import { useState } from 'react';

interface ServiceContent {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  status: 'active' | 'inactive';
  features: string[];
  lastUpdated: string;
}

const ServicesContentManagement = () => {
  const [services] = useState<ServiceContent[]>([
    {
      id: '1',
      title: 'Baghouse Field Services',
      description: 'Professional field services for industrial baghouse systems',
      image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Field Services',
      status: 'active',
      features: ['Installation', 'Maintenance', 'Repair', 'Inspection'],
      lastUpdated: '2024-01-15'
    },
    {
      id: '2',
      title: 'Sheet Metal & Ducting',
      description: 'Custom fabrication and installation of sheet metal ducting systems',
      image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Fabrication',
      status: 'active',
      features: ['Custom Design', 'Fabrication', 'Installation', 'Quality Control'],
      lastUpdated: '2024-01-12'
    },
    {
      id: '3',
      title: 'Consulting Services',
      description: 'Expert consulting for industrial filtration and air quality solutions',
      image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Consulting',
      status: 'active',
      features: ['Process Review', 'System Design', 'Compliance', 'Optimization'],
      lastUpdated: '2024-01-10'
    },
    {
      id: '4',
      title: 'Spare Parts',
      description: 'High-quality spare parts for baghouse systems and components',
      image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Parts',
      status: 'active',
      features: ['Filters', 'Motors', 'Controls', 'Hardware'],
      lastUpdated: '2024-01-08'
    }
  ]);

  const getStatusColor = (status: string) => {
    return status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800';
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Field Services': 'bg-blue-100 text-blue-800',
      'Fabrication': 'bg-purple-100 text-purple-800',
      'Parts': 'bg-green-100 text-green-800',
      'Consulting': 'bg-orange-100 text-orange-800',
      'Cleaning': 'bg-red-100 text-red-800',
      'Education': 'bg-indigo-100 text-indigo-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const handleEdit = (serviceId: string) => {
    console.log('Edit service:', serviceId);
    // TODO: Implement edit functionality
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Services Content Management</h1>
          <p className="text-gray-600">Manage content for your service offerings and descriptions</p>
        </div>
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Add New Service
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.id} className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/400x300/2563eb/ffffff?text=Service+Image';
                }}
              />
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(service.category)}`}>
                    {service.category}
                  </span>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(service.status)}`}>
                    {service.status}
                  </span>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{service.description}</p>
              
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Key Features:</h4>
                <div className="space-y-1">
                  {service.features.slice(0, 2).map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <svg className="w-3 h-3 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                  {service.features.length > 2 && (
                    <div className="text-xs text-gray-500">
                      +{service.features.length - 2} more features
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  Updated: {new Date(service.lastUpdated).toLocaleDateString()}
                </div>
                <button
                  onClick={() => handleEdit(service.id)}
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

export default ServicesContentManagement;
