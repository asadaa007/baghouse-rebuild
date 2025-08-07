const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Baghouse Field Services",
      subtitle: "Professional Field Services",
      image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: 2,
      title: "Sheet Metal & Ducting",
      subtitle: "Custom Fabrication",
      image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: 3,
      title: "Consulting",
      subtitle: "Expert Solutions",
      image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: 4,
      title: "Spare Parts",
      subtitle: "Quality Components",
      image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive baghouse solutions to keep your industrial operations running efficiently and safely
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 group-hover:via-black/60 transition-all duration-500"></div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <div className="transform group-hover:translate-y-0 translate-y-2 transition-transform duration-500">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-2xl">
                      {service.title}
                    </h3>
                    <p className="text-lg md:text-xl text-blue-200 font-medium drop-shadow-lg mb-6">
                      {service.subtitle}
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4">
                      Learn More
                    </button>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 