import { Link } from 'react-router-dom';
import HeroSmall from '../components/sections/HeroSmall';
import WaveDivider from '../components/ui/WaveDivider';

const WhatIsBaghouse = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSmall
        title="What is a Baghouse?"
        subtitle="Discover how modern baghouse systems revolutionize industrial dust control and air quality management"
        showGradient={true}
        gradientColors="from-slate-900 via-blue-900 to-indigo-900"
      />

      {/* Wave Divider */}
      <WaveDivider color="text-blue-900" />

      {/* Definition Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200 rounded-2xl p-12 shadow-lg">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                      Air Pollution Control Equipment
                    </h2>
                    <p className="text-xl text-slate-700 leading-relaxed">
                      A Baghouse is a generic name for Air Pollution Control Equipment (APC). Baghouses are designed around the use of engineered fabric filter tubes, envelopes or cartridges in the dust capturing, separation of filtering process.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Concepts Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Understanding Baghouse Systems
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Modern baghouse technology combines engineering excellence with environmental responsibility
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Not Vacuum Cleaners */}
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    NOT Vacuum Cleaners
                  </h3>
                </div>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Baghouses are sophisticated industrial air pollution control systems engineered for specific dust-producing applications. They handle industrial dust and particulate matter with precision engineering.
                </p>
                <div className="bg-gradient-to-r from-slate-100 to-slate-200 rounded-xl p-4 mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Industrial baghouse system"
                    className="w-full h-48 object-cover rounded-lg"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/600x300/64748b/ffffff?text=Industrial+Baghouse+System';
                    }}
                  />
                </div>
                <div className="flex items-center text-sm text-slate-500">
                  <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Industrial-grade filtration technology
                </div>
              </div>

              {/* Filter Cake */}
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Filter Cake Technology
                  </h3>
                </div>
                <p className="text-slate-600 leading-relaxed mb-6">
                  "Filter cake" refers to the dust accumulation on filter bags that acts as a filtering element. This dust layer is crucial for optimal baghouse performance and efficiency.
                </p>
                <div className="bg-gradient-to-r from-green-100 to-emerald-200 rounded-xl p-4 mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Filter cake on felt bag surface"
                    className="w-full h-48 object-cover rounded-lg"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/600x300/10b981/ffffff?text=Filter+Cake+Technology';
                    }}
                  />
                </div>
                <Link 
                  to="/baghouse/baghouse-cleaning-methods"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
                >
                  Learn about cleaning methods
                  <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Elements Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2">
                <div className="bg-gradient-to-br from-slate-900 to-blue-900 text-white rounded-2xl p-8 md:p-12 shadow-2xl">
                  <div className="flex items-center mb-8">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mr-6">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold mb-2">
                        Design Elements
                      </h3>
                      <p className="text-blue-200">
                        Modern baghouse engineering principles
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-semibold mb-4 text-blue-100">
                        Compact Baghouse Systems
                      </h4>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Long bags providing large dust drop-out chambers</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>High cloth area with large dust-setting chambers</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Compact cartridges for large particle drop-out capabilities</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="pt-6 border-t border-white/20">
                      <p className="text-blue-100 mb-4">
                        Multiple approaches exist for fabric utilization in modern systems
                      </p>
                      <Link 
                        to="/baghouse/cleaning-methods"
                        className="inline-flex items-center bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 backdrop-blur-sm"
                      >
                        Explore Cleaning Methods
                        <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-100 to-blue-100 rounded-2xl p-6 shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Fabric filter bag inspection"
                  className="w-full h-64 object-cover rounded-xl mb-4"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/400x300/64748b/ffffff?text=Fabric+Filter+Bag';
                  }}
                />
                <div className="text-center">
                  <h4 className="font-semibold text-slate-900 mb-2">Fabric Filter Technology</h4>
                  <p className="text-sm text-slate-600">Advanced filter media for optimal performance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Flexibility */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    System Flexibility
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Size adaptability",
                    "Dusty atmosphere operation",
                    "Parts availability",
                    "Long service life",
                    "Filter media variety",
                    "Temperature resistance",
                    "Cost-effective maintenance"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center text-slate-600">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Guidelines */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Assessment Guidelines
                  </h3>
                </div>
                <div className="space-y-4">
                  {[
                    "Ventilation system component",
                    "Dust cake formation critical",
                    "Sufficient drop-out area",
                    "Filter media selection",
                    "Cleaning system efficiency",
                    "Regular maintenance schedule"
                  ].map((guideline, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-600 text-sm">{guideline}</span>
                    </div>
                  ))}
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
              Ready to optimize your system?
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Baghouse Solutions
            </h2>
            <p className="text-xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto">
              Our expert team provides comprehensive baghouse services to ensure your system operates at peak efficiency while maintaining compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="group bg-white text-slate-900 hover:bg-blue-50 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center space-x-3"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span>Get Expert Consultation</span>
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
    </main>
  );
};

export default WhatIsBaghouse; 