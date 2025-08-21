import { useState, useEffect } from 'react';
import { 
  getHeaderFooterData, 
  updateHeaderSection, 
  updateFooterSection,
  initializeHeaderFooterData,
  type HeaderData,
  type FooterData,
  type NavItem,
  type MegaMenuSection,
  type DropdownItem,
  type FooterLink
} from '../../services/headerFooterService';

const HeaderFooterManagement = () => {
  const [activeTab, setActiveTab] = useState<'header' | 'footer'>('header');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [headerData, setHeaderData] = useState<HeaderData | null>(null);
  const [footerData, setFooterData] = useState<FooterData | null>(null);

  // Load data on component mount
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      const data = await getHeaderFooterData();
      
      if (data) {
        setHeaderData(data.header);
        setFooterData(data.footer);
      } else {
        // Initialize with default data if none exists
        const success = await initializeHeaderFooterData();
        if (success) {
          const newData = await getHeaderFooterData();
          if (newData) {
            setHeaderData(newData.header);
            setFooterData(newData.footer);
          }
        }
      }
    } catch (error) {
      console.error('Error loading header/footer data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleHeaderSave = async () => {
    if (!headerData) return;
    
    try {
      setSaving(true);
      const success = await updateHeaderSection(headerData);
      if (success) {
        alert('Header settings saved successfully!');
      } else {
        alert('Error saving header settings. Please try again.');
      }
    } catch (error) {
      console.error('Error saving header data:', error);
      alert('Error saving header settings. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handleFooterSave = async () => {
    if (!footerData) return;
    
    try {
      setSaving(true);
      const success = await updateFooterSection(footerData);
      if (success) {
        alert('Footer settings saved successfully!');
      } else {
        alert('Error saving footer settings. Please try again.');
      }
    } catch (error) {
      console.error('Error saving footer data:', error);
      alert('Error saving footer settings. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  // Header management functions
  const updateHeaderField = (field: keyof HeaderData, value: any) => {
    if (!headerData) return;
    setHeaderData({ ...headerData, [field]: value });
  };

  const addNavItem = () => {
    if (!headerData) return;
    const newNavItem: NavItem = { name: '', path: '', hasDropdown: false, hasMegaMenu: false };
    const currentNavItems = headerData.navItems || [];
    setHeaderData({
      ...headerData,
      navItems: [...currentNavItems, newNavItem]
    });
  };

  const updateNavItem = (index: number, field: keyof NavItem, value: any) => {
    if (!headerData) return;
    const currentNavItems = headerData.navItems || [];
    const updatedNavItems = [...currentNavItems];
    updatedNavItems[index] = { ...updatedNavItems[index], [field]: value };
    setHeaderData({ ...headerData, navItems: updatedNavItems });
  };

  const removeNavItem = (index: number) => {
    if (!headerData) return;
    const currentNavItems = headerData.navItems || [];
    const updatedNavItems = currentNavItems.filter((_, i) => i !== index);
    setHeaderData({ ...headerData, navItems: updatedNavItems });
  };

  // const addMegaMenuSection = () => {
  //   if (!headerData) return;
  //   const newSection: MegaMenuSection = { title: '', items: [] };
  //   setHeaderData({
  //     ...headerData,
  //     servicesMegaMenu: [...headerData.servicesMegaMenu, newSection]
  //   });
  // };

  // const updateMegaMenuSection = (sectionIndex: number, field: keyof MegaMenuSection, value: any) => {
  //   if (!headerData) return;
  //   const updatedMegaMenu = [...headerData.servicesMegaMenu];
  //   updatedMegaMenu[sectionIndex] = { ...updatedMegaMenu[sectionIndex], [field]: value };
  //   setHeaderData({ ...headerData, servicesMegaMenu: updatedMegaMenu });
  // };

  // const addMegaMenuItem = (sectionIndex: number) => {
  //   if (!headerData) return;
  //   const newItem: DropdownItem = { name: '', path: '' };
  //   const updatedMegaMenu = [...headerData.servicesMegaMenu];
  //   updatedMegaMenu[sectionIndex].items.push(newItem);
  //   setHeaderData({ ...headerData, servicesMegaMenu: updatedMegaMenu });
  // };

  // const updateMegaMenuItem = (sectionIndex: number, itemIndex: number, field: keyof DropdownItem, value: string) => {
  //   if (!headerData) return;
  //   const updatedMegaMenu = [...headerData.servicesMegaMenu];
  //   updatedMegaMenu[sectionIndex].items[itemIndex] = { 
  //     ...updatedMegaMenu[sectionIndex].items[itemIndex], 
  //     [field]: value 
  //   };
  //   setHeaderData({ ...headerData, servicesMegaMenu: updatedMegaMenu });
  // };

  // const removeMegaMenuItem = (sectionIndex: number, itemIndex: number) => {
  //   if (!headerData) return;
  //   const updatedMegaMenu = [...headerData.servicesMegaMenu];
  //   updatedMegaMenu[sectionIndex].items = updatedMegaMenu[sectionIndex].items.filter((_, i) => i !== itemIndex);
  //   setHeaderData({ ...headerData, servicesMegaMenu: updatedMegaMenu });
  // };

  // const removeMegaMenuSection = (sectionIndex: number) => {
  //   if (!headerData) return;
  //   const updatedMegaMenu = headerData.servicesMegaMenu.filter((_, i) => i !== sectionIndex);
  //   setHeaderData({ ...headerData, servicesMegaMenu: updatedMegaMenu });
  // };

    // Dynamic dropdown management functions
  const addDropdownItem = (dropdownType: string) => {
    if (!headerData) return;
    const newItem: DropdownItem = { name: '', path: '' };

    // Handle dynamic dropdown types
    if (dropdownType === 'baghouseDropdown') {
      const currentDropdown = headerData.baghouseDropdown || [];
      setHeaderData({
        ...headerData,
        baghouseDropdown: [...currentDropdown, newItem]
      });
    } else if (dropdownType === 'contactDropdown') {
      const currentDropdown = headerData.contactDropdown || [];
      setHeaderData({
        ...headerData,
        contactDropdown: [...currentDropdown, newItem]
      });
    } else {
      // For any other dynamic dropdown, we need to add it to the headerData structure
      // This is a more flexible approach for future dropdowns
      const updatedHeaderData = { ...headerData };
      if (!updatedHeaderData[dropdownType as keyof HeaderData]) {
        (updatedHeaderData as any)[dropdownType] = [];
      }
      (updatedHeaderData as any)[dropdownType] = [...(updatedHeaderData as any)[dropdownType], newItem];
      setHeaderData(updatedHeaderData);
    }
  };

    const updateDropdownItem = (dropdownType: string, index: number, field: keyof DropdownItem, value: string) => {
    if (!headerData) return;

    if (dropdownType === 'baghouseDropdown') {
      const currentDropdown = headerData.baghouseDropdown || [];
      const updatedDropdown = [...currentDropdown];
      updatedDropdown[index] = { ...updatedDropdown[index], [field]: value };
      setHeaderData({ ...headerData, baghouseDropdown: updatedDropdown });
    } else if (dropdownType === 'contactDropdown') {
      const currentDropdown = headerData.contactDropdown || [];
      const updatedDropdown = [...currentDropdown];
      updatedDropdown[index] = { ...updatedDropdown[index], [field]: value };
      setHeaderData({ ...headerData, contactDropdown: updatedDropdown });
    } else {
      // Handle dynamic dropdown types
      const updatedHeaderData = { ...headerData };
      const currentDropdown = (updatedHeaderData as any)[dropdownType] || [];
      const updatedDropdown = [...currentDropdown];
      updatedDropdown[index] = { ...updatedDropdown[index], [field]: value };
      (updatedHeaderData as any)[dropdownType] = updatedDropdown;
      setHeaderData(updatedHeaderData);
    }
  };

    const removeDropdownItem = (dropdownType: string, index: number) => {
    if (!headerData) return;

    if (dropdownType === 'baghouseDropdown') {
      const currentDropdown = headerData.baghouseDropdown || [];
      const updatedDropdown = currentDropdown.filter((_, i) => i !== index);
      setHeaderData({ ...headerData, baghouseDropdown: updatedDropdown });
    } else if (dropdownType === 'contactDropdown') {
      const currentDropdown = headerData.contactDropdown || [];
      const updatedDropdown = currentDropdown.filter((_, i) => i !== index);
      setHeaderData({ ...headerData, contactDropdown: updatedDropdown });
    } else {
      // Handle dynamic dropdown types
      const updatedHeaderData = { ...headerData };
      const currentDropdown = (updatedHeaderData as any)[dropdownType] || [];
      const updatedDropdown = currentDropdown.filter((_: any, i: number) => i !== index);
      (updatedHeaderData as any)[dropdownType] = updatedDropdown;
      setHeaderData(updatedHeaderData);
    }
  };

  // // Get dropdown items for any navigation item
  // const getDropdownItems = (navItemName: string) => {
  //   if (!headerData) return [];
    
  //   // Map navigation item names to their dropdown data
  //   const dropdownMap: { [key: string]: DropdownItem[] } = {
  //     'Services': headerData.servicesMegaMenu.flatMap(section => section.items),
  //     'Baghouse': headerData.baghouseDropdown,
  //     'Contact': headerData.contactDropdown,
  //   };
    
  //   return dropdownMap[navItemName] || [];
  // };

  // Get dropdown type for a navigation item
  const getDropdownType = (navItemName: string) => {
    const dropdownTypeMap: { [key: string]: string } = {
      'Services': 'servicesMegaMenu',
      'Baghouse': 'baghouseDropdown',
      'Contact': 'contactDropdown',
    };
    
    return dropdownTypeMap[navItemName] || '';
  };

  // Get mega menu property name for a navigation item
  const getMegaMenuProperty = (navItemName: string) => {
    if (navItemName === 'Services') return 'servicesMegaMenu';
    return `${navItemName.toLowerCase()}MegaMenu`;
  };

  // Add mega menu section for a specific navigation item
  const addMegaMenuSectionForItem = (navItemName: string) => {
    if (!headerData) return;
    const megaMenuProperty = getMegaMenuProperty(navItemName);
    const newSection: MegaMenuSection = { title: '', items: [] };
    
    const updatedHeaderData = { ...headerData };
    if (!updatedHeaderData[megaMenuProperty]) {
      updatedHeaderData[megaMenuProperty] = [];
    }
    updatedHeaderData[megaMenuProperty] = [...updatedHeaderData[megaMenuProperty], newSection];
    setHeaderData(updatedHeaderData);
  };

  // // Initialize mega menu for a navigation item if it doesn't exist
  // const initializeMegaMenuForItem = (navItemName: string) => {
  //   if (!headerData) return;
  //   const megaMenuProperty = getMegaMenuProperty(navItemName);
    
  //   if (!headerData[megaMenuProperty]) {
  //     const updatedHeaderData = { ...headerData };
  //     updatedHeaderData[megaMenuProperty] = [];
  //     setHeaderData(updatedHeaderData);
  //   }
  // };

  // Handle radio button selection for navigation item type
  const handleNavItemTypeChange = (index: number, type: 'simple' | 'dropdown' | 'megaMenu') => {
    if (!headerData) return;
    
    const currentNavItems = headerData.navItems || [];
    const updatedNavItems = [...currentNavItems];
    
    // Reset all flags first
    updatedNavItems[index] = {
      ...updatedNavItems[index],
      hasDropdown: false,
      hasMegaMenu: false
    };
    
    // Set the appropriate flag based on selection
    if (type === 'dropdown') {
      updatedNavItems[index].hasDropdown = true;
    } else if (type === 'megaMenu') {
      updatedNavItems[index].hasMegaMenu = true;
      // Initialize mega menu if it doesn't exist
      const navItemName = updatedNavItems[index].name;
      const megaMenuProperty = getMegaMenuProperty(navItemName);
      if (!headerData[megaMenuProperty]) {
        const updatedHeaderData = { ...headerData };
        updatedHeaderData[megaMenuProperty] = [];
        updatedHeaderData.navItems = updatedNavItems;
        setHeaderData(updatedHeaderData);
        return;
      }
    }
    
    setHeaderData({
      ...headerData,
      navItems: updatedNavItems
    });
  };

  // Update mega menu section for a specific navigation item
  const updateMegaMenuSectionForItem = (navItemName: string, sectionIndex: number, field: keyof MegaMenuSection, value: any) => {
    if (!headerData) return;
    const megaMenuProperty = getMegaMenuProperty(navItemName);
    const updatedHeaderData = { ...headerData };
    const currentMegaMenu = (updatedHeaderData as any)[megaMenuProperty] || [];
    const updatedMegaMenu = [...currentMegaMenu];
    updatedMegaMenu[sectionIndex] = { ...updatedMegaMenu[sectionIndex], [field]: value };
    (updatedHeaderData as any)[megaMenuProperty] = updatedMegaMenu;
    setHeaderData(updatedHeaderData);
  };

  // Add mega menu item for a specific navigation item
  const addMegaMenuItemForItem = (navItemName: string, sectionIndex: number) => {
    if (!headerData) return;
    const megaMenuProperty = getMegaMenuProperty(navItemName);
    const newItem: DropdownItem = { name: '', path: '' };
    const updatedHeaderData = { ...headerData };
    const currentMegaMenu = (updatedHeaderData as any)[megaMenuProperty] || [];
    if (currentMegaMenu[sectionIndex]) {
      currentMegaMenu[sectionIndex].items = currentMegaMenu[sectionIndex].items || [];
      currentMegaMenu[sectionIndex].items.push(newItem);
      (updatedHeaderData as any)[megaMenuProperty] = currentMegaMenu;
      setHeaderData(updatedHeaderData);
    }
  };

  // Update mega menu item for a specific navigation item
  const updateMegaMenuItemForItem = (navItemName: string, sectionIndex: number, itemIndex: number, field: keyof DropdownItem, value: string) => {
    if (!headerData) return;
    const megaMenuProperty = getMegaMenuProperty(navItemName);
    const updatedHeaderData = { ...headerData };
    const currentMegaMenu = (updatedHeaderData as any)[megaMenuProperty] || [];
    if (currentMegaMenu[sectionIndex] && currentMegaMenu[sectionIndex].items) {
      currentMegaMenu[sectionIndex].items[itemIndex] = { 
        ...currentMegaMenu[sectionIndex].items[itemIndex], 
        [field]: value 
      };
      (updatedHeaderData as any)[megaMenuProperty] = currentMegaMenu;
      setHeaderData(updatedHeaderData);
    }
  };

  // Remove mega menu item for a specific navigation item
  const removeMegaMenuItemForItem = (navItemName: string, sectionIndex: number, itemIndex: number) => {
    if (!headerData) return;
    const megaMenuProperty = getMegaMenuProperty(navItemName);
    const updatedHeaderData = { ...headerData };
    const currentMegaMenu = (updatedHeaderData as any)[megaMenuProperty] || [];
    if (currentMegaMenu[sectionIndex] && currentMegaMenu[sectionIndex].items) {
      currentMegaMenu[sectionIndex].items = currentMegaMenu[sectionIndex].items.filter((_: any, i: number) => i !== itemIndex);
      (updatedHeaderData as any)[megaMenuProperty] = currentMegaMenu;
      setHeaderData(updatedHeaderData);
    }
  };

  // Remove mega menu section for a specific navigation item
  const removeMegaMenuSectionForItem = (navItemName: string, sectionIndex: number) => {
    if (!headerData) return;
    const megaMenuProperty = getMegaMenuProperty(navItemName);
    const updatedHeaderData = { ...headerData };
    const currentMegaMenu = (updatedHeaderData as any)[megaMenuProperty] || [];
    const updatedMegaMenu = currentMegaMenu.filter((_: any, i: number) => i !== sectionIndex);
    (updatedHeaderData as any)[megaMenuProperty] = updatedMegaMenu;
    setHeaderData(updatedHeaderData);
  };

  // Footer management functions
  const updateFooterField = (field: keyof FooterData, value: any) => {
    if (!footerData) return;
    setFooterData({ ...footerData, [field]: value });
  };

  const addFooterLink = (linkType: 'mainLinks' | 'baghouseLinks' | 'serviceLinks') => {
    if (!footerData) return;
    const newLink: FooterLink = { name: '', href: '' };
    setFooterData({
      ...footerData,
      [linkType]: [...footerData[linkType], newLink]
    });
  };

  const updateFooterLink = (linkType: 'mainLinks' | 'baghouseLinks' | 'serviceLinks', index: number, field: keyof FooterLink, value: string) => {
    if (!footerData) return;
    const updatedLinks = [...footerData[linkType]];
    updatedLinks[index] = { ...updatedLinks[index], [field]: value };
    setFooterData({ ...footerData, [linkType]: updatedLinks });
  };

  const removeFooterLink = (linkType: 'mainLinks' | 'baghouseLinks' | 'serviceLinks', index: number) => {
    if (!footerData) return;
    const updatedLinks = footerData[linkType].filter((_, i) => i !== index);
    setFooterData({ ...footerData, [linkType]: updatedLinks });
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <svg className="animate-spin h-8 w-8 text-blue-600 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p className="text-gray-500">Loading header & footer settings...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Header & Footer Management</h1>
        <p className="mt-2 text-gray-600">
          Manage your website's navigation menu and footer content.
        </p>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('header')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'header'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Header & Navigation
          </button>
          <button
            onClick={() => setActiveTab('footer')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'footer'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Footer Content
          </button>
        </nav>
      </div>

      {/* Header Tab */}
      {activeTab === 'header' && headerData && (
        <div className="space-y-8">
          {/* Basic Header Settings */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Basic Header Settings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Logo URL
                </label>
                <input
                  type="text"
                  value={headerData.logo?.url || ''}
                  onChange={(e) => updateHeaderField('logo', { ...headerData.logo, url: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="/logo.png"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Logo Alt Text
                </label>
                <input
                  type="text"
                  value={headerData.logo?.altText || ''}
                  onChange={(e) => updateHeaderField('logo', { ...headerData.logo, altText: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Frost Emission Logo"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  value={headerData.phoneNumber || ''}
                  onChange={(e) => updateHeaderField('phoneNumber', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="1-905-934-1211"
                />
              </div>
            </div>
          </div>

                     {/* Navigation Items */}
           <div className="bg-white border border-gray-200 rounded-lg p-6">
             <div className="flex justify-between items-center mb-4">
               <h3 className="text-lg font-medium text-gray-900">Navigation Items</h3>
               <button
                 onClick={addNavItem}
                 className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
               >
                 Add Navigation Item
               </button>
             </div>
             <div className="space-y-6">
               {headerData.navItems.map((item, index) => (
                 <div key={index} className="border border-gray-200 rounded-lg p-6">
                   {/* Basic Navigation Item Info */}
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                     <div>
                       <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                       <input
                         type="text"
                         value={item.name || ''}
                         onChange={(e) => updateNavItem(index, 'name', e.target.value)}
                         className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                       />
                     </div>
                     <div>
                       <label className="block text-sm font-medium text-gray-700 mb-1">Path</label>
                       <input
                         type="text"
                         value={item.path || ''}
                         onChange={(e) => updateNavItem(index, 'path', e.target.value)}
                         className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                       />
                     </div>
                     <div className="flex items-center justify-end">
                       <button
                         onClick={() => removeNavItem(index)}
                         className="px-3 py-1 text-red-600 hover:text-red-800 transition-colors"
                       >
                         Remove Item
                       </button>
                     </div>
                   </div>

                                       {/* Dropdown Type Selection */}
                    <div className="border-t border-gray-200 pt-4 mb-6">
                      <div className="flex items-center space-x-6">
                        <div className="flex items-center">
                          <input
                            type="radio"
                            name={`dropdownType-${index}`}
                            checked={!item.hasDropdown && !item.hasMegaMenu}
                            onChange={() => handleNavItemTypeChange(index, 'simple')}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                          />
                          <label className="ml-2 text-sm text-gray-700">Simple Link</label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="radio"
                            name={`dropdownType-${index}`}
                            checked={item.hasDropdown && !item.hasMegaMenu}
                            onChange={() => handleNavItemTypeChange(index, 'dropdown')}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                          />
                          <label className="ml-2 text-sm text-gray-700">Has Dropdown</label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="radio"
                            name={`dropdownType-${index}`}
                            checked={item.hasMegaMenu && !item.hasDropdown}
                            onChange={() => handleNavItemTypeChange(index, 'megaMenu')}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                          />
                          <label className="ml-2 text-sm text-gray-700">Has Mega Menu</label>
                        </div>
                      </div>
                    </div>

                    {/* Dropdown Items Management - Only show if hasDropdown is true */}
                    {item.hasDropdown && !item.hasMegaMenu && (
                      <div className="border-t border-gray-200 pt-4">
                        <div className="flex justify-between items-center mb-4">
                          <h4 className="text-md font-medium text-gray-900">{item.name} Dropdown Items</h4>
                          <button
                            onClick={() => addDropdownItem(getDropdownType(item.name))}
                            className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
                          >
                            Add Item
                          </button>
                        </div>
                        <div className="space-y-3">
                          {((headerData as any)[getDropdownType(item.name)] || []).map((dropdownItem: DropdownItem, itemIndex: number) => (
                            <div key={itemIndex} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                              <input
                                type="text"
                                value={dropdownItem.name || ''}
                                onChange={(e) => updateDropdownItem(getDropdownType(item.name), itemIndex, 'name', e.target.value)}
                                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                placeholder="Item Name"
                              />
                              <input
                                type="text"
                                value={dropdownItem.path || ''}
                                onChange={(e) => updateDropdownItem(getDropdownType(item.name), itemIndex, 'path', e.target.value)}
                                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                placeholder="/path"
                              />
                              <button
                                onClick={() => removeDropdownItem(getDropdownType(item.name), itemIndex)}
                                className="px-2 py-1 text-red-600 hover:text-red-800 transition-colors text-sm"
                              >
                                Remove
                              </button>
                            </div>
                          ))}
                          {(!(headerData as any)[getDropdownType(item.name)] || (headerData as any)[getDropdownType(item.name)].length === 0) && (
                            <div className="text-center py-4 text-gray-500 text-sm">
                              <p>No dropdown items yet. Click "Add Item" to get started.</p>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Mega Menu Management - Only show if hasMegaMenu is true */}
                    {item.hasMegaMenu && !item.hasDropdown && (
                      <div className="border-t border-gray-200 pt-4">
                        <div className="flex justify-between items-center mb-4">
                          <h4 className="text-md font-medium text-gray-900">{item.name} Mega Menu Sections</h4>
                          <button
                            onClick={() => addMegaMenuSectionForItem(item.name)}
                            className="px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors text-sm"
                          >
                            Add Section
                          </button>
                        </div>
                        <div className="space-y-4">
                          {((headerData as any)[getMegaMenuProperty(item.name)] || []).map((section: MegaMenuSection, sectionIndex: number) => (
                            <div key={sectionIndex} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                              <div className="flex justify-between items-center mb-3">
                                <input
                                  type="text"
                                  value={section.title || ''}
                                  onChange={(e) => updateMegaMenuSectionForItem(item.name, sectionIndex, 'title', e.target.value)}
                                  className="text-md font-medium px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  placeholder="Section Title"
                                />
                                <div className="flex space-x-2">
                                  <button
                                    onClick={() => addMegaMenuItemForItem(item.name, sectionIndex)}
                                    className="px-2 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
                                  >
                                    Add Item
                                  </button>
                                  <button
                                    onClick={() => removeMegaMenuSectionForItem(item.name, sectionIndex)}
                                    className="px-2 py-1 text-red-600 hover:text-red-800 transition-colors text-sm"
                                  >
                                    Remove Section
                                  </button>
                                </div>
                              </div>
                              <div className="space-y-2">
                                {(section.items || []).map((menuItem, itemIndex) => (
                                  <div key={itemIndex} className="flex items-center space-x-3">
                                    <input
                                      type="text"
                                      value={menuItem.name || ''}
                                      onChange={(e) => updateMegaMenuItemForItem(item.name, sectionIndex, itemIndex, 'name', e.target.value)}
                                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                      placeholder="Item Name"
                                    />
                                    <input
                                      type="text"
                                      value={menuItem.path || ''}
                                      onChange={(e) => updateMegaMenuItemForItem(item.name, sectionIndex, itemIndex, 'path', e.target.value)}
                                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                      placeholder="/path"
                                    />
                                    <button
                                      onClick={() => removeMegaMenuItemForItem(item.name, sectionIndex, itemIndex)}
                                      className="px-2 py-1 text-red-600 hover:text-red-800 transition-colors text-sm"
                                    >
                                      Remove
                                    </button>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                          {(!(headerData as any)[getMegaMenuProperty(item.name)] || (headerData as any)[getMegaMenuProperty(item.name)].length === 0) && (
                            <div className="text-center py-4 text-gray-500 text-sm">
                              <p>No mega menu sections yet. Click "Add Section" to get started.</p>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                 </div>
               ))}
             </div>
           </div>

                     

          {/* Save Button */}
          <div className="flex justify-end">
            <button
              onClick={handleHeaderSave}
              disabled={saving}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              {saving ? 'Saving...' : 'Save Header Settings'}
            </button>
          </div>
        </div>
      )}

      {/* Footer Tab */}
      {activeTab === 'footer' && footerData && (
        <div className="space-y-8">
          {/* Basic Footer Settings */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Basic Footer Settings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Description
                </label>
                <textarea
                  value={footerData.companyDescription || ''}
                  onChange={(e) => updateFooterField('companyDescription', e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Company description..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  value={footerData.location || ''}
                  onChange={(e) => updateFooterField('location', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="St. Catharines, Ontario, Canada"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  value={footerData.phoneNumber || ''}
                  onChange={(e) => updateFooterField('phoneNumber', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="1-905-934-1211"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Copyright Text
                </label>
                <input
                  type="text"
                  value={footerData.copyright || ''}
                  onChange={(e) => updateFooterField('copyright', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="© 2017 Frost Emission Performance Technologies Inc. All Rights Reserved."
                />
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {(['mainLinks', 'baghouseLinks', 'serviceLinks'] as const).map((linkType) => (
            <div key={linkType} className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-900">
                  {linkType === 'mainLinks' ? 'Main Links' : 
                   linkType === 'baghouseLinks' ? 'Baghouse Links' : 'Service Links'}
                </h3>
                <button
                  onClick={() => addFooterLink(linkType)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Add Link
                </button>
              </div>
              <div className="space-y-4">
                {footerData[linkType].map((link, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <input
                      type="text"
                      value={link.name || ''}
                      onChange={(e) => updateFooterLink(linkType, index, 'name', e.target.value)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Link Name"
                    />
                    <input
                      type="text"
                      value={link.href || ''}
                      onChange={(e) => updateFooterLink(linkType, index, 'href', e.target.value)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="/path"
                    />
                    <button
                      onClick={() => removeFooterLink(linkType, index)}
                      className="px-3 py-1 text-red-600 hover:text-red-800 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Save Button */}
          <div className="flex justify-end">
            <button
              onClick={handleFooterSave}
              disabled={saving}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              {saving ? 'Saving...' : 'Save Footer Settings'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderFooterManagement;
