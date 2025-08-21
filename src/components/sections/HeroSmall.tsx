import React from 'react';

interface HeroSmallProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  showGradient?: boolean;
  gradientColors?: string;
}

const HeroSmall: React.FC<HeroSmallProps> = ({
  title,
  subtitle,
  backgroundImage,
  showGradient = false,
  gradientColors = "from-slate-900 via-blue-900 to-indigo-900"
}) => {
  return (
    <section className="relative pt-20">
      <div className={`relative h-64 md:h-80 overflow-hidden ${
        showGradient 
          ? `bg-gradient-to-br ${gradientColors}` 
          : 'bg-slate-900'
      }`}>
        {/* Background Image */}
        {backgroundImage && (
          <>
            <img
              src={backgroundImage}
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-20"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
          </>
        )}

        {/* Gradient Overlay for gradient backgrounds */}
        {showGradient && !backgroundImage && (
          <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/10 to-transparent"></div>
        )}

        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-4 flex justify-center">
            <div className="max-w-4xl">
              <div className="text-center">
                {/* Title */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-2xl mb-4">
                  {title}
                </h1>

                {/* Subtitle */}
                {subtitle && (
                  <p className="text-xl md:text-2xl text-blue-100 drop-shadow-lg max-w-3xl mx-auto leading-relaxed">
                    {subtitle}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSmall; 