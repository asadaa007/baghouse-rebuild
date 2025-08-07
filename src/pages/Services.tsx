import { Link } from 'react-router-dom';
import ServicesHero from '../components/sections/ServicesHero';

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <ServicesHero 
        title="Our Services"
        subtitle="Comprehensive industrial solutions for dust collection and air filtration systems"
        backgroundImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=400&fit=crop"
      />
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Choose Your Service
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Professional solutions tailored to your specific industrial needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link 
            to="/baghouse/field-services"
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop"
                alt="Baghouse Field Services"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                Baghouse Field Services
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Professional field services for all types of baghouse systems
              </p>
            </div>
          </Link>
          
          <Link 
            to="/services/sheet-metal-ducting"
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop"
                alt="Sheet Metal & Ducting"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                Sheet Metal & Ducting
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Design, fabrication, and installation of dust collection systems
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services; 