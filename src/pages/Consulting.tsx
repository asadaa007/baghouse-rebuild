import { Link } from 'react-router-dom';
import ServicesHero from '../components/sections/ServicesHero';

const Consulting = () => {
  const services = [
    {
      title: "System Performance Review",
      description: "Comprehensive analysis of your dust collection system performance to identify optimization opportunities and efficiency improvements.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Proposed Modifications",
      description: "Expert recommendations for system modifications and upgrades to enhance performance, efficiency, and compliance.",
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
      title: "Photo Gallery",
      description: "View our consulting projects and system analysis work showcasing our expertise in dust collection optimization.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ServicesHero 
        title="Consulting"
        subtitle="Expert consulting services for dust collection system optimization, performance analysis, and strategic improvements"
        backgroundImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=400&fit=crop"
      />

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Our Consulting Services
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Professional consulting solutions to optimize your dust collection system performance and efficiency
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
                Why Choose Our Consulting Services?
              </h2>
              <p className="text-xl text-slate-600">
                Professional expertise in dust collection system analysis and optimization
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">System Performance Review</h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Our comprehensive system performance review includes detailed analysis of your dust collection system's efficiency, identifying areas for improvement and optimization opportunities. We assess airflow, pressure drops, filter performance, and overall system effectiveness.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Proposed Modifications</h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Based on our analysis, we provide detailed recommendations for system modifications and upgrades. Our proposals focus on improving efficiency, reducing operating costs, enhancing compliance, and extending equipment lifespan while maintaining optimal performance.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Expert Consultation</h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                With decades of experience in dust collection systems, our consulting team provides expert guidance on system design, optimization, and maintenance strategies. We work closely with your team to develop customized solutions that meet your specific operational needs and regulatory requirements.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Comprehensive Analysis</h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Our consulting approach includes thorough analysis of your entire dust collection system, from source capture to final filtration. We evaluate ductwork design, fan performance, filter selection, and control systems to provide a complete picture of your system's performance and potential improvements.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Implementation Support</h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Beyond recommendations, we provide ongoing support during implementation of proposed modifications. Our team can assist with project management, equipment selection, installation oversight, and performance validation to ensure your system achieves optimal results.
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
              Ready to Optimize Your System?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us today for a comprehensive consultation on your dust collection system. Our experts are ready to help you achieve optimal performance and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Get Consultation
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

export default Consulting; 