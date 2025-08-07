import { Link } from 'react-router-dom';
import HeroSmall from '../components/sections/HeroSmall';
import WaveDivider from '../components/ui/WaveDivider';

const BaghouseCleaningMethods = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSmall
        title="Baghouse Cleaning Methods"
        subtitle="Professional cleaning solutions for optimal baghouse performance and efficiency"
        showGradient={true}
        gradientColors="from-blue-900 via-blue-800 to-indigo-900"
      />

      {/* Wave Divider */}
      <WaveDivider color="text-blue-900" />

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Professional Baghouse Cleaning Solutions
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto">
                Baghouses come in 4 main design classifications based on 'How the bags are cleaned' in other words, how the dust cake accumulation is removed and 'managed'.
              </p>
            </div>

            {/* Cleaning Methods Table */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden mb-16">
              <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-6">
                <h3 className="text-2xl font-bold">Baghouse Cleaning Methods Comparison</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">Styles</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">Method</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">Airflow</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">A/C Ratio</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-blue-50">
                      <td className="px-6 py-4 text-sm font-semibold text-blue-900">Pulse Jet System</td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        Uses high-pressure air directed down into the clean side of a filter bag in order to remove the dust cake from the surface of the media.
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        This cleaning system can operate with airflow still going through the bag to the exhaust fan (on line cleaning).
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">Generally, from 4-6 to 1.</td>
                    </tr>
                    <tr className="hover:bg-green-50">
                      <td className="px-6 py-4 text-sm font-semibold text-green-900">Shaker Style System</td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        Physically shakes the bags in order to mechanically release the dust cake.
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        The style of cleaning method requires the bag 'module' or compartment to be isolated from the gas stream to the exhaust fan (off-line cleaning).
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">Generally, from 2-4 to 1.</td>
                    </tr>
                    <tr className="hover:bg-purple-50">
                      <td className="px-6 py-4 text-sm font-semibold text-purple-900">Reverse Air System</td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        Physically collapses the bags in order to mechanically 'shear' the dust cake from the bag surface.
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        This style of cleaning method requires the bag 'module' or compartment to be isolated from the gas stream to the exhaust fan (off-line cleaning).
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">Generally, from 1-3 to 1.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Combinations and Variations Section */}
            <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-8 border border-slate-200 mb-16">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Combinations and Variations</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-lg">•</span>
                  <span><strong>Shaker with Reverse air assist:</strong> (off-line cleaning)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-lg">•</span>
                  <span><strong>Traveling manifold reverse air:</strong> (on-line cleaning)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-lg">•</span>
                  <span><strong>Plenum pulse:</strong> usually off-line</span>
                </li>
              </ul>
            </div>

            {/* Images Section */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <svg className="w-24 h-24 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div className="p-4 text-center">
                  <p className="text-sm font-semibold text-gray-900">Pulse Jet Top Removable</p>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                <div className="h-64 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                  <svg className="w-24 h-24 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <div className="p-4 text-center">
                  <p className="text-sm font-semibold text-gray-900">Shaker Style Systems</p>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                <div className="h-64 bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                  <svg className="w-24 h-24 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div className="p-4 text-center">
                  <p className="text-sm font-semibold text-gray-900">Reverse Air Systems: Simon Day</p>
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-8 border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                Why Choose Our Cleaning Methods?
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">Improved Efficiency</h4>
                  <p className="text-slate-600 text-sm">Maintain optimal airflow and collection efficiency</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">Cost Savings</h4>
                  <p className="text-slate-600 text-sm">Reduce energy consumption and maintenance costs</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">Extended Life</h4>
                  <p className="text-slate-600 text-sm">Prolong the lifespan of your filter bags</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Optimize Your Baghouse Performance?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact our experts today to discuss the best cleaning method for your specific application
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get a Quote
            </Link>
            <button
              onClick={() => window.location.href = 'tel:1-905-934-1211'}
              className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BaghouseCleaningMethods; 