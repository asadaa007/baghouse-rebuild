import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getHeaderData, type HeaderData } from '../../services/headerFooterService';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [headerData, setHeaderData] = useState<HeaderData | null>(null);
  const [, setLoading] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setOpenDropdown(null);
    }
  };

  const toggleDropdown = (itemName: string) => {
    setOpenDropdown(openDropdown === itemName ? null : itemName);
  };

  // Load header data
  useEffect(() => {
    const loadHeaderData = async () => {
      try {
        setLoading(true);
        const data = await getHeaderData();
        if (data) {
          setHeaderData(data);
        }
      } catch (error) {
        console.error('Error loading header data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadHeaderData();
  }, []);

  // Use dynamic navigation items from headerData, fallback to default if not loaded
  const navItems = headerData?.navItems || [
    { name: 'Home', path: '/', hasDropdown: false, hasMegaMenu: false },
    { name: 'Services', path: '/services', hasDropdown: false, hasMegaMenu: true },
    { name: 'Baghouse', path: '/baghouse', hasDropdown: true, hasMegaMenu: false },
    { name: 'Contact', path: '/contact', hasDropdown: true, hasMegaMenu: false },
    { name: 'Careers', path: '/careers', hasDropdown: false, hasMegaMenu: false },
  ];

  // Use dynamic services mega menu from headerData, fallback to default if not loaded
  const servicesMegaMenu = headerData?.servicesMegaMenu || [
    {
      title: "Baghouse Field Services",
      items: [
        { name: "Baghouse Field Services", path: "/baghouse/field-services" },
        { name: "Filter Change-outs", path: "/services/filter-change-outs" },
        { name: "Mechanical Repairs", path: "/services/mechanical-repairs" },
        { name: "PM Inspections & Dye Testing", path: "/services/pm-inspections-dye-testing" },
        { name: "Baghouse Types Serviced", path: "/services/baghouse-types-serviced" },
        { name: "Photo Gallery", path: "/services/photo-gallery" }
      ]
    },
    {
      title: "Sheet Metal & Ducting",
      items: [
        { name: "Sheet Metal & Ducting", path: "/services/sheet-metal-ducting" },
        { name: "Design", path: "/services/design" },
        { name: "Fabrication", path: "/services/fabrication" },
        { name: "Installation & Replacement", path: "/services/installation-replacement" },
        { name: "Projects", path: "/services/projects" },
        { name: "Photo Gallery", path: "/services/photo-gallery" }
      ]
    },
    {
      title: "Consulting",
      items: [
        { name: "Consulting", path: "/services/consulting" },
        { name: "System Performance Review", path: "/services/system-performance-review" },
        { name: "Proposed Modifications", path: "/services/proposed-modifications" },
        { name: "Photo Gallery", path: "/services/photo-gallery" }
      ]
    },
    {
      title: "Spare Parts",
      items: [
        { name: "Spare Parts", path: "/services/spare-parts" },
        { name: "Bags & Cartridges", path: "/services/bags-cartridges" },
        { name: "Dye Powder", path: "/services/dye-powder" },
        { name: "Pulse Cleaning Components", path: "/services/pulse-cleaning-components" },
        { name: "Shaker Components", path: "/services/shaker-components" },
        { name: "Miscellaneous", path: "/services/miscellaneous" },
        { name: "Photo Gallery", path: "/services/photo-gallery" }
      ]
    }
  ];

  // Use dynamic dropdown data from headerData, fallback to default if not loaded
  const baghouseDropdown = headerData?.baghouseDropdown || [
    { name: "Baghouse FAQ", path: "/baghouse/faq" },
    { name: "What is a Baghouse?", path: "/baghouse/what-is-baghouse" },
    { name: "Baghouse Cleaning Methods", path: "/baghouse/cleaning-methods" }
  ];

  const contactDropdown = headerData?.contactDropdown || [
    { name: "Contact Us", path: "/contact" },
    { name: "Request Information", path: "/contact/request-information" }
  ];

  const handleCallClick = () => {
    const phoneNumber = headerData?.phoneNumber || '1-905-934-1211';
    window.location.href = `tel:${phoneNumber}`;
  };

  const isActive = (path: string) => {
    return window.location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img 
                src={headerData?.logo?.url || "/logo.png"} 
                alt={headerData?.logo?.altText || "Frost Emission Logo"} 
                className="h-20 w-auto"
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/240x64/2563eb/ffffff?text=FROST+EMISSION';
                }}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  {(item.hasDropdown || item.hasMegaMenu) ? (
                    // Non-clickable dropdown/mega menu header
                    <div
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center hover:bg-blue-50 cursor-pointer ${
                        isActive(item.path) 
                          ? 'text-blue-600 bg-blue-50' 
                          : 'text-gray-700 hover:text-blue-600'
                      }`}
                    >
                      {item.name}
                      <svg className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  ) : (
                    // Clickable non-dropdown item
                    <Link
                      to={item.path}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center hover:bg-blue-50 ${
                        isActive(item.path) 
                          ? 'text-blue-600 bg-blue-50' 
                          : 'text-gray-700 hover:text-blue-600'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                  
                  {/* Dynamic Mega Menu */}
                  {item.hasMegaMenu && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-[800px] bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-100">
                      <div className="p-6">
                        <div className="grid grid-cols-4 gap-6">
                          {(headerData as any)?.[`${item.name.toLowerCase()}MegaMenu`]?.map((service: any, index: number) => (
                            <div key={index} className="space-y-3">
                              <h3 className="font-semibold text-gray-900 text-sm border-b border-gray-200 pb-2">
                                {service.title}
                              </h3>
                              <div className="space-y-2">
                                {service.items?.map((subItem: any, subIndex: number) => (
                                  <Link
                                    key={subIndex}
                                    to={subItem.path}
                                    className="block text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )) || servicesMegaMenu.map((service, index) => (
                            <div key={index} className="space-y-3">
                              <h3 className="font-semibold text-gray-900 text-sm border-b border-gray-200 pb-2">
                                {service.title}
                              </h3>
                              <div className="space-y-2">
                                {service.items.map((subItem, subIndex) => (
                                  <Link
                                    key={subIndex}
                                    to={subItem.path}
                                    className="block text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Dynamic Dropdown */}
                  {item.hasDropdown && !item.hasMegaMenu && (
                    <div className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-100">
                      <div className="py-2">
                        {(headerData as any)?.[`${item.name.toLowerCase()}Dropdown`]?.map((dropdownItem: any, index: number) => (
                          <Link
                            key={index}
                            to={dropdownItem.path}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                          >
                            {dropdownItem.name}
                          </Link>
                        )) || (item.name === 'Baghouse' ? baghouseDropdown : item.name === 'Contact' ? contactDropdown : []).map((dropdownItem, index) => (
                          <Link
                            key={index}
                            to={dropdownItem.path}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Call Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={handleCallClick}
              className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center"
              aria-label="Call us"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-3">
            <button
              onClick={handleCallClick}
              className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-full transition-all duration-200 shadow-lg"
              aria-label="Call us"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </button>
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 p-2 rounded-lg hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Full Height */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-20 bg-white z-40">
            <div className="h-full overflow-y-auto">
              <div className="px-4 py-6 space-y-2">
                {navItems.map((item) => (
                  <div key={item.name}>
                    <div
                      className={`flex items-center justify-between px-4 py-4 rounded-lg text-lg font-medium transition-colors duration-200 cursor-pointer ${
                        isActive(item.path)
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                      }`}
                      onClick={() => {
                        if (item.hasDropdown || item.hasMegaMenu) {
                          toggleDropdown(item.name);
                        } else {
                          setIsMenuOpen(false);
                        }
                      }}
                    >
                      <Link 
                        to={item.path} 
                        className="flex-1"
                        onClick={(e) => {
                          if (item.hasDropdown || item.hasMegaMenu) {
                            e.preventDefault();
                          }
                        }}
                      >
                        {item.name}
                      </Link>
                      {(item.hasDropdown || item.hasMegaMenu) && (
                        <svg 
                          className={`h-5 w-5 transition-transform duration-200 ${openDropdown === item.name ? 'rotate-180' : ''}`} 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </div>
                    
                    {/* Mobile Dynamic Mega Menu */}
                    {item.hasMegaMenu && openDropdown === item.name && (
                      <div className="ml-4 mt-2 space-y-4 bg-gray-50 rounded-lg p-4">
                        {(headerData as any)?.[`${item.name.toLowerCase()}MegaMenu`]?.map((service: any, index: number) => (
                          <div key={index} className="space-y-2">
                            <h4 className="font-semibold text-gray-900 text-base border-b border-gray-200 pb-1">
                              {service.title}
                            </h4>
                            <div className="space-y-1">
                              {service.items?.map((subItem: any, subIndex: number) => (
                                <Link
                                  key={subIndex}
                                  to={subItem.path}
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded-lg transition-colors duration-200"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )) || servicesMegaMenu.map((service, index) => (
                          <div key={index} className="space-y-2">
                            <h4 className="font-semibold text-gray-900 text-base border-b border-gray-200 pb-1">
                              {service.title}
                            </h4>
                            <div className="space-y-1">
                              {service.items.map((subItem, subIndex) => (
                                <Link
                                  key={subIndex}
                                  to={subItem.path}
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded-lg transition-colors duration-200"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Mobile Dynamic Dropdown */}
                    {item.hasDropdown && !item.hasMegaMenu && openDropdown === item.name && (
                      <div className="ml-4 mt-2 space-y-2 bg-gray-50 rounded-lg p-4">
                        {(headerData as any)?.[`${item.name.toLowerCase()}Dropdown`]?.map((dropdownItem: any, index: number) => (
                          <Link
                            key={index}
                            to={dropdownItem.path}
                            className="block px-4 py-3 text-base text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded-lg transition-colors duration-200"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        )) || (item.name === 'Baghouse' ? baghouseDropdown : item.name === 'Contact' ? contactDropdown : []).map((dropdownItem, index) => (
                          <Link
                            key={index}
                            to={dropdownItem.path}
                            className="block px-4 py-3 text-base text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded-lg transition-colors duration-200"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 