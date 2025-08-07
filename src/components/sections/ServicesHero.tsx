import { Link } from 'react-router-dom';

interface ServicesHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  showButtons?: boolean;
}

const ServicesHero = ({ 
  title, 
  subtitle = "Professional solutions for your industrial needs",
  backgroundImage = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=400&fit=crop",
  showButtons = true 
}: ServicesHeroProps) => {
  return (
    <section className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {title}
        </h1>
        
        {subtitle && (
          <p className="text-lg md:text-xl text-slate-200 mb-6 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        
        {showButtons && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Get a Quote
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a 
              href="tel:1-905-934-1211"
              className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all duration-200 backdrop-blur-sm border border-white/20"
            >
              Call Now
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesHero; 