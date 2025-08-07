import HeroSmall from '../components/sections/HeroSmall';
import WaveDivider from '../components/ui/WaveDivider';

const Careers = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:frost@baghouse.net';
  };

  const handleCallClick = () => {
    window.location.href = 'tel:1-905-934-1211';
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSmall
        title="Join Our Team"
        subtitle="Build your career with Frost Emission - The Baghouse Service Company. We're looking for talented professionals who are passionate about industrial solutions and committed to excellence in everything they do."
        showGradient={true}
        gradientColors="from-blue-900 via-blue-800 to-indigo-900"
      />

      {/* Wave Divider */}
      <WaveDivider color="text-blue-900" />

      {/* Current Openings Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Current Job Openings
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore opportunities to grow your career with our professional team
              </p>
            </div>

            {/* Job Listing */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Job Details */}
                <div className="p-8 lg:p-12">
                  <div className="mb-6">
                    <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-4 py-2 rounded-full mb-4">
                      Now Hiring
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      Sheet Metal Welder
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">
                      We are seeking a skilled Sheet Metal Welder to join our professional team. 
                      This position offers excellent opportunities for growth and advancement.
                    </p>
                  </div>

                  {/* Job Requirements */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Requirements:</h4>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Minimum 3 years of welding experience
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Experience with MIG, TIG, and ARC welding
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Ability to read and interpret blueprints
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Strong attention to detail and quality
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Valid driver's license and reliable transportation
                      </li>
                    </ul>
                  </div>

                  {/* Application Instructions */}
                  <div className="bg-blue-50 rounded-xl p-6 mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">How to Apply:</h4>
                    <p className="text-gray-700 mb-4">
                      Please send your resume and cover letter to our HR department.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button
                        onClick={handleEmailClick}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2"
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span>Email Resume</span>
                      </button>
                      <button
                        onClick={handleCallClick}
                        className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2"
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span>Call Us</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Job Image */}
                <div className="relative h-80 lg:h-full">
                  <img
                    src="https://images.unsplash.com/photo-1581092162384-8987c1d64718?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                    alt="Sheet Metal Welder at Work"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h4 className="text-xl font-bold mb-2">Professional Environment</h4>
                    <p className="text-blue-200">State-of-the-art equipment and safety standards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Work With Frost Emission?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join a company that values its employees and provides opportunities for growth
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 rounded-xl bg-gray-50 hover:bg-blue-50 transition-all duration-300">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Competitive Benefits</h3>
                <p className="text-gray-600">
                  Comprehensive health coverage, retirement plans, and paid time off
                </p>
              </div>

              <div className="text-center p-8 rounded-xl bg-gray-50 hover:bg-blue-50 transition-all duration-300">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Career Growth</h3>
                <p className="text-gray-600">
                  Continuous training and advancement opportunities within the company
                </p>
              </div>

              <div className="text-center p-8 rounded-xl bg-gray-50 hover:bg-blue-50 transition-all duration-300">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Great Team</h3>
                <p className="text-gray-600">
                  Work with experienced professionals in a supportive environment
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Join Our Team?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't see a position that fits? Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={handleEmailClick}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-3"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Send Resume</span>
              </button>
              <button
                onClick={handleCallClick}
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-3"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Call 1-905-934-1211</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Careers; 