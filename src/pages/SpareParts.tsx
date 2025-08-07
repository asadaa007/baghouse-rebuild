import { Link } from 'react-router-dom';
import ServicesHero from '../components/sections/ServicesHero';

const SpareParts = () => {
  const sparePartsCategories = [
    {
      title: "Bags & Cartridges",
      description: "High-quality filter bags and cartridges for all types of baghouse systems.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      color: "from-blue-500 to-cyan-500",
      path: "/services/bags-cartridges"
    },
    {
      title: "Dye Powder",
      description: "Specialized dye powder for leak detection and system integrity testing.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: "from-purple-500 to-pink-500",
      path: "/services/dye-powder"
    },
    {
      title: "Pulse Cleaning Components",
      description: "Complete range of pulse cleaning components for optimal system performance.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "from-green-500 to-emerald-500",
      path: "/services/pulse-cleaning-components"
    },
    {
      title: "Shaker Components",
      description: "Reliable shaker components for mechanical cleaning systems.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      color: "from-orange-500 to-red-500",
      path: "/services/shaker-components"
    },
    {
      title: "Miscellaneous",
      description: "Various spare parts and components for baghouse maintenance and repair.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      color: "from-indigo-500 to-purple-500",
      path: "/services/miscellaneous"
    },
    {
      title: "Photo Gallery",
      description: "Browse our extensive collection of spare parts and components.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      color: "from-teal-500 to-cyan-500",
      path: "/services/photo-gallery"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ServicesHero 
        title="Spare Parts"
        subtitle="High-quality spare parts and components for all baghouse systems and applications"
        backgroundImage="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=400&fit=crop"
      />

      {/* Spare Parts Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Quality Spare Parts
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Comprehensive range of spare parts and components to keep your baghouse systems running efficiently
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sparePartsCategories.map((category, index) => (
                <Link
                  key={index}
                  to={category.path}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
                >
                  {/* Image Header */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => {
                        e.currentTarget.src = `https://via.placeholder.com/400x300/64748b/ffffff?text=${category.title.replace(/\s+/g, '+')}`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                    <div className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                      {category.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                      {category.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-4 line-clamp-3">
                      {category.description}
                    </p>
                    <div className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200 text-sm">
                      View products
                      <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
              <div className="text-center mb-12">
                <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Quality Guaranteed
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Premium Spare Parts
                </h2>
                <p className="text-xl text-slate-600">
                  Trusted components for reliable baghouse performance
                </p>
              </div>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      We offer a comprehensive range of high-quality spare parts for all types of baghouse systems, ensuring optimal performance and extended equipment life.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      All our spare parts meet or exceed OEM specifications and are backed by our quality assurance program and technical support.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Fast delivery and competitive pricing on all spare parts, with expert technical assistance to help you select the right components for your specific application.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
              Need spare parts?
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Quality Parts & Expert Support
            </h2>
            <p className="text-xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto">
              Get the right spare parts for your baghouse system with our comprehensive inventory and technical expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="group bg-white text-slate-900 hover:bg-blue-50 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center space-x-3"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span>Request Quote</span>
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              
              <a
                href="tel:1-905-934-1211"
                className="group border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center space-x-3"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Call 1-905-934-1211</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpareParts; 