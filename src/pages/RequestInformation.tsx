import { Link } from 'react-router-dom';
import HeroSmall from '../components/sections/HeroSmall';
import WaveDivider from '../components/ui/WaveDivider';

const RequestInformation = () => {
  const handleCallClick = () => {
    window.location.href = 'tel:1-905-934-1211';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:frost@baghouse.net';
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSmall
        title="Request Information"
        subtitle="Get detailed information about our services. Fill out the form below and our team will provide you with comprehensive information about our baghouse solutions."
        showGradient={true}
        gradientColors="from-blue-900 via-blue-800 to-indigo-900"
      />

      {/* Wave Divider */}
      <WaveDivider color="text-blue-900" />

      {/* Main Content Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Information Request Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Information Request Form
                </h2>
                <p className="text-xl text-gray-600">
                  Tell us about your needs and we'll provide you with detailed information
                </p>
              </div>

              {/* Form Placeholder */}
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Form Coming Soon
                </h3>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  We're currently setting up our information request form. In the meantime, 
                  please contact us directly for any information you need about our services.
                </p>
                
                {/* Contact Options */}
                <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                  <button
                    onClick={handleCallClick}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>Call Us</span>
                  </button>
                  
                  <button
                    onClick={handleEmailClick}
                    className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-3 transform hover:-translate-y-1"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>Send Email</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Information Can We Provide?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our team can provide detailed information about all aspects of our baghouse services
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Service Cards */}
              <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition-all duration-300">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Baghouse Services</h3>
                <p className="text-gray-600 text-sm">
                  Field services, maintenance, and repair information
                </p>
              </div>

              <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition-all duration-300">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Sheet Metal & Ducting</h3>
                <p className="text-gray-600 text-sm">
                  Design, fabrication, and installation details
                </p>
              </div>

              <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition-all duration-300">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Consulting</h3>
                <p className="text-gray-600 text-sm">
                  System performance and modification guidance
                </p>
              </div>

              <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition-all duration-300">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Spare Parts</h3>
                <p className="text-gray-600 text-sm">
                  Parts availability and specifications
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to discuss your specific needs and get detailed information about our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={handleCallClick}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-3"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Call 1-905-934-1211</span>
              </button>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-3"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Visit Contact Page</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RequestInformation; 