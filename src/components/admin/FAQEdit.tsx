import { useState, useEffect } from 'react';
import { getFAQData, saveFAQData, initializeFAQData, type FAQData, type FAQItem, type TableRow, type ListItem, type RelatedTopic } from '../../services/faqService';

const FAQEdit = () => {
  const [activeTab, setActiveTab] = useState<'hero' | 'faqs' | 'additionalHelp' | 'relatedTopics'>('hero');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [faqData, setFAQData] = useState<FAQData | null>(null);

  // Load data on component mount
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      const data = await getFAQData();
      if (data) {
        setFAQData(data);
      } else {
        // Initialize with default data if none exists
        const success = await initializeFAQData();
        if (success) {
          const newData = await getFAQData();
          if (newData) {
            setFAQData(newData);
          }
        }
      }
    } catch (error) {
      console.error('Error loading FAQ data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!faqData) return;
    
    try {
      setSaving(true);
      const success = await saveFAQData(faqData);
      if (success) {
        alert('FAQ settings saved successfully!');
      } else {
        alert('Error saving FAQ settings. Please try again.');
      }
    } catch (error) {
      console.error('Error saving FAQ data:', error);
      alert('Error saving FAQ settings. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  // const updateFAQField = (field: keyof FAQData, value: any) => {
  //   if (!faqData) return;
  //   setFAQData({ ...faqData, [field]: value });
  // };

  const updateHeroField = (field: keyof FAQData['hero'], value: string) => {
    if (!faqData) return;
    setFAQData({
      ...faqData,
      hero: { ...faqData.hero, [field]: value }
    });
  };

  const updateAdditionalHelpField = (field: keyof FAQData['additionalHelp'], value: string) => {
    if (!faqData) return;
    setFAQData({
      ...faqData,
      additionalHelp: { ...faqData.additionalHelp, [field]: value }
    });
  };

  const updateRelatedTopicsField = (field: keyof FAQData['relatedTopics'], value: any) => {
    if (!faqData) return;
    setFAQData({
      ...faqData,
      relatedTopics: { ...faqData.relatedTopics, [field]: value }
    });
  };

  // FAQ management functions
  const addFAQ = () => {
    if (!faqData) return;
    const newFAQ: FAQItem = {
      question: '',
      answer: '',
      hasTable: false
    };
    setFAQData({
      ...faqData,
      faqs: [...faqData.faqs, newFAQ]
    });
  };

  const updateFAQ = (index: number, field: keyof FAQItem, value: any) => {
    if (!faqData) return;
    const updatedFAQs = [...faqData.faqs];
    updatedFAQs[index] = { ...updatedFAQs[index], [field]: value };
    setFAQData({ ...faqData, faqs: updatedFAQs });
  };

  const removeFAQ = (index: number) => {
    if (!faqData) return;
    const updatedFAQs = faqData.faqs.filter((_, i) => i !== index);
    setFAQData({ ...faqData, faqs: updatedFAQs });
  };

  // Table management functions
  const addTableRow = (faqIndex: number) => {
    if (!faqData) return;
    const newRow: TableRow = {
      condition: '',
      gaugeReading: '',
      possibleCondition: ''
    };
    const updatedFAQs = [...faqData.faqs];
    updatedFAQs[faqIndex].tableData = [...(updatedFAQs[faqIndex].tableData || []), newRow];
    setFAQData({ ...faqData, faqs: updatedFAQs });
  };

  const updateTableRow = (faqIndex: number, rowIndex: number, field: keyof TableRow, value: string) => {
    if (!faqData) return;
    const updatedFAQs = [...faqData.faqs];
    const updatedTableData = [...(updatedFAQs[faqIndex].tableData || [])];
    updatedTableData[rowIndex] = { ...updatedTableData[rowIndex], [field]: value };
    updatedFAQs[faqIndex].tableData = updatedTableData;
    setFAQData({ ...faqData, faqs: updatedFAQs });
  };

  const removeTableRow = (faqIndex: number, rowIndex: number) => {
    if (!faqData) return;
    const updatedFAQs = [...faqData.faqs];
    updatedFAQs[faqIndex].tableData = updatedFAQs[faqIndex].tableData?.filter((_, i) => i !== rowIndex);
    setFAQData({ ...faqData, faqs: updatedFAQs });
  };

  // Numbered list management functions
  const addNumberedListItem = (faqIndex: number) => {
    if (!faqData) return;
    const updatedFAQs = [...faqData.faqs];
    updatedFAQs[faqIndex].numberedList = [...(updatedFAQs[faqIndex].numberedList || []), ''];
    setFAQData({ ...faqData, faqs: updatedFAQs });
  };

  const updateNumberedListItem = (faqIndex: number, itemIndex: number, value: string | ListItem) => {
    if (!faqData) return;
    const updatedFAQs = [...faqData.faqs];
    const updatedList = [...(updatedFAQs[faqIndex].numberedList || [])];
    updatedList[itemIndex] = value;
    updatedFAQs[faqIndex].numberedList = updatedList;
    setFAQData({ ...faqData, faqs: updatedFAQs });
  };

  const removeNumberedListItem = (faqIndex: number, itemIndex: number) => {
    if (!faqData) return;
    const updatedFAQs = [...faqData.faqs];
    updatedFAQs[faqIndex].numberedList = updatedFAQs[faqIndex].numberedList?.filter((_, i) => i !== itemIndex);
    setFAQData({ ...faqData, faqs: updatedFAQs });
  };

  // Related topics management functions
  const addRelatedTopic = () => {
    if (!faqData) return;
    const newTopic: RelatedTopic = {
      title: '',
      description: '',
      icon: 'lightbulb',
      link: '',
      color: 'blue'
    };
    setFAQData({
      ...faqData,
      relatedTopics: {
        ...faqData.relatedTopics,
        topics: [...faqData.relatedTopics.topics, newTopic]
      }
    });
  };

  const updateRelatedTopic = (index: number, field: keyof RelatedTopic, value: string) => {
    if (!faqData) return;
    const updatedTopics = [...faqData.relatedTopics.topics];
    updatedTopics[index] = { ...updatedTopics[index], [field]: value };
    setFAQData({
      ...faqData,
      relatedTopics: { ...faqData.relatedTopics, topics: updatedTopics }
    });
  };

  const removeRelatedTopic = (index: number) => {
    if (!faqData) return;
    const updatedTopics = faqData.relatedTopics.topics.filter((_, i) => i !== index);
    setFAQData({
      ...faqData,
      relatedTopics: { ...faqData.relatedTopics, topics: updatedTopics }
    });
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
            <p className="text-gray-500">Loading FAQ settings...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!faqData) {
    return (
      <div className="space-y-6">
        <div className="text-center py-8">
          <p className="text-gray-500">No FAQ data found. Please try refreshing the page.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {(['hero', 'faqs', 'additionalHelp', 'relatedTopics'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab === 'hero' && 'Hero Section'}
              {tab === 'faqs' && 'FAQ Items'}
              {tab === 'additionalHelp' && 'Additional Help'}
              {tab === 'relatedTopics' && 'Related Topics'}
            </button>
          ))}
        </nav>
      </div>

      {/* Hero Tab */}
      {activeTab === 'hero' && (
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Hero Section</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  value={faqData.hero.title}
                  onChange={(e) => updateHeroField('title', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Baghouse FAQ"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subtitle
                </label>
                <textarea
                  value={faqData.hero.subtitle}
                  onChange={(e) => updateHeroField('subtitle', e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Frequently Asked Questions about baghouse systems..."
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FAQs Tab */}
      {activeTab === 'faqs' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium text-gray-900">FAQ Items</h3>
            <button
              onClick={addFAQ}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Add FAQ
            </button>
          </div>
          
          <div className="space-y-6">
            {faqData.faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-md font-medium text-gray-900">FAQ #{index + 1}</h4>
                  <button
                    onClick={() => removeFAQ(index)}
                    className="px-3 py-1 text-red-600 hover:text-red-800 transition-colors"
                  >
                    Remove
                  </button>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Question
                    </label>
                    <textarea
                      value={faq.question}
                      onChange={(e) => updateFAQ(index, 'question', e.target.value)}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter the question..."
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Answer
                    </label>
                    <textarea
                      value={faq.answer}
                      onChange={(e) => updateFAQ(index, 'answer', e.target.value)}
                      rows={6}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter the answer..."
                    />
                  </div>

                  <div className="flex items-center space-x-4">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={faq.hasTable || false}
                        onChange={(e) => updateFAQ(index, 'hasTable', e.target.checked)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-sm text-gray-700">Has Table</span>
                    </label>
                  </div>

                  {/* Table Data */}
                  {faq.hasTable && (
                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex justify-between items-center mb-4">
                        <h5 className="text-sm font-medium text-gray-900">Table Data</h5>
                        <button
                          onClick={() => addTableRow(index)}
                          className="px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors text-sm"
                        >
                          Add Row
                        </button>
                      </div>
                      <div className="space-y-3">
                        {faq.tableData?.map((row, rowIndex) => (
                          <div key={rowIndex} className="grid grid-cols-4 gap-3 p-3 bg-gray-50 rounded-lg">
                            <input
                              type="text"
                              value={row.condition}
                              onChange={(e) => updateTableRow(index, rowIndex, 'condition', e.target.value)}
                              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                              placeholder="Condition"
                            />
                            <input
                              type="text"
                              value={row.gaugeReading}
                              onChange={(e) => updateTableRow(index, rowIndex, 'gaugeReading', e.target.value)}
                              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                              placeholder="Gauge Reading"
                            />
                            <input
                              type="text"
                              value={row.possibleCondition}
                              onChange={(e) => updateTableRow(index, rowIndex, 'possibleCondition', e.target.value)}
                              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                              placeholder="Possible Condition"
                            />
                            <button
                              onClick={() => removeTableRow(index, rowIndex)}
                              className="px-2 py-1 text-red-600 hover:text-red-800 transition-colors text-sm"
                            >
                              Remove
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Numbered List */}
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <h5 className="text-sm font-medium text-gray-900">Numbered List</h5>
                      <button
                        onClick={() => addNumberedListItem(index)}
                        className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
                      >
                        Add Item
                      </button>
                    </div>
                    <div className="space-y-3">
                      {faq.numberedList?.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center space-x-3">
                          <span className="text-sm font-medium text-gray-500 w-6">{itemIndex + 1}.</span>
                          <input
                            type="text"
                            value={typeof item === 'string' ? item : item.main}
                            onChange={(e) => updateNumberedListItem(index, itemIndex, e.target.value)}
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                            placeholder="List item..."
                          />
                          <button
                            onClick={() => removeNumberedListItem(index, itemIndex)}
                            className="px-2 py-1 text-red-600 hover:text-red-800 transition-colors text-sm"
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Conclusion
                    </label>
                    <textarea
                      value={faq.conclusion || ''}
                      onChange={(e) => updateFAQ(index, 'conclusion', e.target.value)}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Optional conclusion..."
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Additional Help Tab */}
      {activeTab === 'additionalHelp' && (
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Additional Help Section</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  value={faqData.additionalHelp.title}
                  onChange={(e) => updateAdditionalHelpField('title', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Still Have Questions?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subtitle
                </label>
                <textarea
                  value={faqData.additionalHelp.subtitle}
                  onChange={(e) => updateAdditionalHelpField('subtitle', e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Can't find the answer you're looking for?..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  value={faqData.additionalHelp.phoneNumber}
                  onChange={(e) => updateAdditionalHelpField('phoneNumber', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="1-905-934-1211"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={faqData.additionalHelp.email}
                  onChange={(e) => updateAdditionalHelpField('email', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="frost@baghouse.net"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Related Topics Tab */}
      {activeTab === 'relatedTopics' && (
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Related Topics Section</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Section Title
                </label>
                <input
                  type="text"
                  value={faqData.relatedTopics.title}
                  onChange={(e) => updateRelatedTopicsField('title', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Related Topics"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Section Subtitle
                </label>
                <textarea
                  value={faqData.relatedTopics.subtitle}
                  onChange={(e) => updateRelatedTopicsField('subtitle', e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Explore more information about baghouse systems..."
                />
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium text-gray-900">Related Topics</h3>
            <button
              onClick={addRelatedTopic}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Add Topic
            </button>
          </div>
          
          <div className="space-y-4">
            {faqData.relatedTopics.topics.map((topic, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-md font-medium text-gray-900">Topic #{index + 1}</h4>
                  <button
                    onClick={() => removeRelatedTopic(index)}
                    className="px-3 py-1 text-red-600 hover:text-red-800 transition-colors"
                  >
                    Remove
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Title
                    </label>
                    <input
                      type="text"
                      value={topic.title}
                      onChange={(e) => updateRelatedTopic(index, 'title', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Topic title..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Icon
                    </label>
                    <input
                      type="text"
                      value={topic.icon}
                      onChange={(e) => updateRelatedTopic(index, 'icon', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="lightbulb"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Color
                    </label>
                    <select
                      value={topic.color}
                      onChange={(e) => updateRelatedTopic(index, 'color', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="blue">Blue</option>
                      <option value="green">Green</option>
                      <option value="purple">Purple</option>
                      <option value="red">Red</option>
                      <option value="yellow">Yellow</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Link
                    </label>
                    <input
                      type="text"
                      value={topic.link}
                      onChange={(e) => updateRelatedTopic(index, 'link', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="/baghouse/what-is-baghouse"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Description
                    </label>
                    <textarea
                      value={topic.description}
                      onChange={(e) => updateRelatedTopic(index, 'description', e.target.value)}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Topic description..."
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Save Button */}
      <div className="flex justify-end">
        <button
          onClick={handleSave}
          disabled={saving}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
        >
          {saving ? 'Saving...' : 'Save FAQ Settings'}
        </button>
      </div>
    </div>
  );
};

export default FAQEdit;
