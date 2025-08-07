import { Link } from 'react-router-dom';

const Footer = () => {
  const footerLinks = [
    { name: 'Home', href: '/' },
    { name: 'Baghouse Services', href: '/services' },
    { name: 'Sheet Metal & Ducting', href: '/services' },
    { name: 'Consulting', href: '/services' },
    { name: 'Spare Parts', href: '/services' },
    { name: 'BaghouseFAQ', href: '/baghouse' },
    { name: 'Contact', href: '/contact' },
    { name: 'Careers', href: '/careers' },
  ];

  const services = [
    'Baghouse Field Services',
    'Filter Change-outs',
    'Mechanical Repairs',
    'Sheet Metal & Ducting',
    'Consulting',
    'Spare Parts'
  ];

  const handleCallClick = () => {
    window.location.href = 'tel:1-905-934-1211';
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="bg-white rounded-lg p-4 mb-4 inline-block">
                <img 
                  src="/logo.png" 
                  alt="Frost Emission Logo" 
                  className="h-16 w-auto"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/240x64/2563eb/ffffff?text=FROST+EMISSION';
                  }}
                />
              </div>
              <p className="text-gray-300 leading-relaxed max-w-md">
                Professional baghouse solutions and industrial services. We provide cutting-edge filtration systems 
                that keep your workplace clean, safe, and compliant with environmental regulations.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Location</p>
                  <p className="font-medium">St. Catharines, Ontario, Canada</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Call us now</p>
                  <button 
                    onClick={handleCallClick}
                    className="font-bold text-lg text-green-400 hover:text-green-300 transition-colors duration-200"
                  >
                    1-905-934-1211
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <div className="space-y-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Our Services</h3>
            <div className="space-y-3">
              {services.map((service) => (
                <Link
                  key={service}
                  to="/services"
                  className="block text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform"
                >
                  {service}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              <p>© 2017 Frost Emission Performance Technologies Inc. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 