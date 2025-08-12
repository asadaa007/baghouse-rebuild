import { useState, useEffect } from 'react';
import { getHomePageData } from '../../services/homePageService';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [heroData, setHeroData] = useState<{
    slides: Array<{
      id: number;
      title: string;
      subtitle: string;
      image: string;
      description: string;
    }>;
    autoSlideInterval: number;
  } | null>(null);
  const [loading, setLoading] = useState(true);

  // Load hero data from Firebase
  useEffect(() => {
    const loadHeroData = async () => {
      try {
        const data = await getHomePageData();
        if (data) {
          setHeroData(data.hero);
        } else {
          // Fallback to default data if no Firebase data
          setHeroData({
            slides: [
              {
                id: 1,
                title: "Filter Change-outs",
                subtitle: "Partial or Complete",
                image: "https://baghouse.net/Images/top_page/slideshow/filter_replacement-envelope_style2.jpg",
                description: "Professional filter replacement services for industrial baghouse systems"
              },
              {
                id: 2,
                title: "Ducting",
                subtitle: "Supply build and install",
                image: "https://baghouse.net/Images/top_page/slideshow/sheetmetal.jpg",
                description: "Comprehensive maintenance solutions to keep your systems running efficiently"
              },
              {
                id: 3,
                title: "Spare Parts",
                subtitle: "Pulsshaker reverse air",
                image: "https://baghouse.net/Images/top_page/slideshow/spare_parts.jpg",
                description: "Tailored baghouse solutions for your specific industrial requirements"
              },
              {
                id: 4,
                title: "Consulting",
                subtitle: "Process review and design",
                image: "https://baghouse.net/Images/top_page/slideshow/design_concept.jpg",
                description: "Tailored baghouse solutions for your specific industrial requirements"
              }
            ],
            autoSlideInterval: 5000
          });
        }
      } catch (error) {
        console.error('Error loading hero data:', error);
        // Fallback to default data on error
        setHeroData({
          slides: [
            {
              id: 1,
              title: "Filter Change-outs",
              subtitle: "Partial or Complete",
              image: "https://baghouse.net/Images/top_page/slideshow/filter_replacement-envelope_style2.jpg",
              description: "Professional filter replacement services for industrial baghouse systems"
            },
            {
              id: 2,
              title: "Ducting",
              subtitle: "Supply build and install",
              image: "https://baghouse.net/Images/top_page/slideshow/sheetmetal.jpg",
              description: "Comprehensive maintenance solutions to keep your systems running efficiently"
            },
            {
              id: 3,
              title: "Spare Parts",
              subtitle: "Pulsshaker reverse air",
              image: "https://baghouse.net/Images/top_page/slideshow/spare_parts.jpg",
              description: "Tailored baghouse solutions for your specific industrial requirements"
            },
            {
              id: 4,
              title: "Consulting",
              subtitle: "Process review and design",
              image: "https://baghouse.net/Images/top_page/slideshow/design_concept.jpg",
              description: "Tailored baghouse solutions for your specific industrial requirements"
            }
          ],
          autoSlideInterval: 5000
        });
      } finally {
        setLoading(false);
      }
    };

    loadHeroData();
  }, []);

  // Auto-slide effect - must be called before any conditional returns
  useEffect(() => {
    if (!heroData || !heroData.slides || heroData.slides.length === 0) {
      return;
    }

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroData.slides.length);
    }, heroData.autoSlideInterval);
    
    return () => clearInterval(timer);
  }, [heroData]);

  // Don't render until data is loaded
  if (loading || !heroData) {
    return (
      <section id="home" className="relative pt-20">
        <div className="relative h-screen overflow-hidden bg-gray-100 flex items-center justify-center">
          <div className="text-center">
            <svg className="animate-spin h-8 w-8 text-blue-600 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p className="text-gray-600">Loading...</p>
          </div>
        </div>
      </section>
    );
  }

  const slides = heroData.slides;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="home" className="relative pt-20">
      <div className="relative h-screen overflow-hidden">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="relative h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
              
              {/* Content Overlay */}
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-4">
                  <div className="max-w-4xl">
                    <div className="space-y-6">
                      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-2xl">
                        {slide.title}
                      </h1>
                      <p className="text-2xl md:text-3xl font-medium text-blue-200 drop-shadow-lg">
                        {slide.subtitle}
                      </p>
                      <p className="text-lg md:text-xl text-gray-200 max-w-2xl drop-shadow-lg leading-relaxed">
                        {slide.description}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                          Get Free Quote
                        </button>
                        <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:-translate-y-1">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Desktop Navigation Arrows */}
        <div className="hidden md:block">
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl backdrop-blur-sm"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl backdrop-blur-sm"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation - Bottom with arrows and dots */}
        <div className="md:hidden absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex items-center space-x-4">
            {/* Previous Arrow */}
            <button
              onClick={prevSlide}
              className="bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full transition-all duration-200 shadow-lg"
              aria-label="Previous slide"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex space-x-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide 
                      ? 'bg-white scale-125 shadow-lg' 
                      : 'bg-white/50 hover:bg-white/75 hover:scale-110'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Arrow */}
            <button
              onClick={nextSlide}
              className="bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full transition-all duration-200 shadow-lg"
              aria-label="Next slide"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop Dots Indicator */}
        <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-200 ${
                  index === currentSlide 
                    ? 'bg-white scale-125 shadow-lg' 
                    : 'bg-white/50 hover:bg-white/75 hover:scale-110'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 