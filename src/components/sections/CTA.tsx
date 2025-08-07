import { Link } from 'react-router-dom';

const CTA = () => {
  const handleCallClick = () => {
    window.location.href = 'tel:1-905-934-1211';
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Abstract pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Optimize Your
            <span className="block text-blue-200">Industrial Filtration?</span>
          </h2>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto">
            Get professional baghouse solutions that keep your operations running efficiently, 
            safely, and in compliance with environmental regulations.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/contact"
              className="group bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 hover:scale-105 flex items-center space-x-3 min-w-[200px] justify-center"
            >
              <span>Get Free Quote</span>
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            
            <button
              onClick={handleCallClick}
              className="group border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 hover:scale-105 flex items-center space-x-3 min-w-[200px] justify-center"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call Now</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA; 