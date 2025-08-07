import { Link } from 'react-router-dom';
import ServicesHero from '../components/sections/ServicesHero';

const SheetMetalDucting = () => {
  const services = [
    {
      title: "Design",
      description: "Custom CAD design and engineering for dust collection systems, ensuring optimal performance and efficiency.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Fabrication",
      description: "Professional metal fabrication including cutting, rolling, bending, welding, and finishing of fittings and capture hoods.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Installation & Replacement",
      description: "Complete installation and replacement services for new systems and reworking of existing dust collection systems.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      color: "from-green-500 to-green-600"
    },
    {
      title: "Projects",
      description: "Comprehensive project management for industrial dust collection systems across various industries.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Photo Gallery",
      description: "View our completed projects and installations showcasing our expertise in sheet metal and ducting solutions.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      color: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ServicesHero 
        title="Sheet Metal & Ducting"
        subtitle="Professional design, fabrication, and installation of dust collection systems with custom solutions and fast turnaround times"
        backgroundImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=400&fit=crop"
      />

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Our Services
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Comprehensive sheet metal and ducting solutions for industrial dust collection systems
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
                  {/* Image Header */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => {
                        e.currentTarget.src = `https://via.placeholder.com/400x300/64748b/ffffff?text=${service.title.replace(/\s+/g, '+')}`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                    <div className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                      {service.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-4 line-clamp-3">
                      {service.description}
                    </p>
                    <Link 
                      to="/contact"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200 text-sm"
                    >
                      Learn more
                      <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Why Choose Our Sheet Metal & Ducting Services?
              </h2>
              <p className="text-xl text-slate-600">
                Professional expertise in dust collection systems with a focus on quality and customer satisfaction
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Custom Fabrication & Fast Turnaround</h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                We are involved in dust collection systems and fabricate cutting, rolling, bending, welding, and finishing fittings and capture hoods. Our focus is on custom fabrication and fast turnaround times to meet your project deadlines.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">New Installations & System Rework</h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                We handle both new installations and the reworking of existing systems. Our experienced team can assess your current setup and provide solutions to improve efficiency and performance.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Solid Supply Chain</h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                We maintain a solid supply chain for products across various industries. This ensures we can source the right materials and components for your specific project requirements.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">User-Friendly End Products</h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                We believe in making end products (hooding or work-stations) user-friendly to prevent damage or removal. Our designs prioritize safety, accessibility, and ease of maintenance.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Customer Partnership</h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                We believe in partnering with customers for successful projects and are willing to listen to your needs. Our collaborative approach ensures that the final solution meets your exact specifications and expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us today for a consultation on your sheet metal and ducting needs. Our team is ready to help you achieve optimal dust collection system performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Get Started
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a 
                href="tel:1-905-934-1211"
                className="inline-flex items-center px-8 py-4 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-xl transition-all duration-200 backdrop-blur-sm border border-blue-400/30"
              >
                Call Now
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SheetMetalDucting; 