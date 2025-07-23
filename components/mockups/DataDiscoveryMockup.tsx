'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'report' | 'article' | 'dashboard' | 'dataset';
  category: string;
  tags: string[];
  lastUpdated: string;
  format?: string;
  preview?: string;
}

interface SearchSuggestion {
  text: string;
  category: string;
}

export default function DataDiscoveryMockup() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [, setSelectedResult] = useState<SearchResult | null>(null);
  const [currentStep, setCurrentStep] = useState(0);

  const searchSuggestions: SearchSuggestion[] = [
    { text: 'customer retention metrics', category: 'Popular' },
    { text: 'campaign performance Q3', category: 'Recent' },
    { text: 'churn prediction model', category: 'Popular' },
    { text: 'segment growth analysis', category: 'Trending' },
    { text: 'customer journey funnel', category: 'Recent' }
  ];

  const sampleResults: SearchResult[] = [
    {
      id: '1',
      title: 'Customer Retention Deep Dive',
      description: 'Comprehensive analysis of retention rates across segments with actionable insights',
      type: 'article',
      category: 'Customer Analytics',
      tags: ['retention', 'segments', 'insights'],
      lastUpdated: '2 hours ago',
      format: 'Interactive Article',
      preview: 'Our Q3 retention rate increased 23% driven by...'
    },
    {
      id: '2',
      title: 'Retention Metrics Dashboard',
      description: 'Real-time retention KPIs with drill-down capabilities by segment and channel',
      type: 'dashboard',
      category: 'Customer Analytics',
      tags: ['retention', 'kpis', 'real-time'],
      lastUpdated: '15 minutes ago',
      format: 'Power BI Report',
      preview: 'Interactive charts showing retention trends...'
    },
    {
      id: '3',
      title: 'Retention Model Dataset',
      description: 'Raw data and calculated metrics for customer retention analysis',
      type: 'dataset',
      category: 'Data Sources',
      tags: ['retention', 'raw-data', 'metrics'],
      lastUpdated: '1 hour ago',
      format: 'Python API',
      preview: 'df = bq.retention.metrics(segment="all")'
    }
  ];

  const demoQueries = [
    'customer retention',
    'customer retention metrics'
  ];

  useEffect(() => {
    if (currentStep === 1) {
      // Simulate typing
      const queryIndex = 0;
      let charIndex = 0;
      const currentQuery = demoQueries[queryIndex];
      
      const typeInterval = setInterval(() => {
        if (charIndex <= currentQuery.length) {
          setSearchQuery(currentQuery.slice(0, charIndex));
          charIndex++;
        } else {
          setShowSuggestions(true);
          clearInterval(typeInterval);
          setTimeout(() => {
            setCurrentStep(2);
            setShowSuggestions(false);
            setIsSearching(true);
          }, 1500);
        }
      }, 80);

      return () => clearInterval(typeInterval);
    }

    if (currentStep === 2) {
      // Simulate search
      setTimeout(() => {
        setIsSearching(false);
        setSearchResults(sampleResults);
        setCurrentStep(3);
      }, 1200);
    }
  }, [currentStep]);

  const startDemo = () => {
    setCurrentStep(1);
    setSearchQuery('');
    setSearchResults([]);
    setSelectedResult(null);
    setShowSuggestions(false);
    setIsSearching(false);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'article': return '📰';
      case 'dashboard': return '📊';
      case 'report': return '📋';
      case 'dataset': return '💾';
      default: return '📄';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'article': return 'bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300';
      case 'dashboard': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300';
      case 'report': return 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300';
      case 'dataset': return 'bg-orange-100 text-orange-700 dark:bg-orange-900/20 dark:text-orange-300';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-900/20 dark:text-gray-300';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden max-w-6xl">
      {/* Header */}
      <div className="border-b border-gray-200 dark:border-gray-700 p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">🔍</span>
            </div>
            <div>
              <h3 className="font-bold text-xl text-gray-900 dark:text-gray-100">Data Discovery Hub</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">One place for all your data needs</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={startDemo}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors"
            >
              Try Demo
            </motion.button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for metrics, reports, insights, or datasets..."
              className="w-full px-4 py-3 pl-12 pr-16 text-lg border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              readOnly={currentStep > 0}
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <span className="text-gray-400 text-xl">🔍</span>
            </div>
            {isSearching && (
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <div className="animate-spin w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full"></div>
              </div>
            )}
          </div>

          {/* Search Suggestions */}
          <AnimatePresence>
            {showSuggestions && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg z-10"
              >
                <div className="p-4">
                  <div className="space-y-2">
                    {searchSuggestions.map((suggestion, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-center space-x-3 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg cursor-pointer"
                      >
                        <span className="text-gray-400">🔍</span>
                        <span className="text-gray-900 dark:text-gray-100">{suggestion.text}</span>
                        <span className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300 rounded-full">
                          {suggestion.category}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Results Area */}
      <div className="p-6">
        {currentStep === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🎯</div>
            <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Find exactly what you need
            </h4>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Search across reports, articles, dashboards, and datasets. Get guided to the right format for your needs.
            </p>
            <button
              onClick={startDemo}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
            >
              Start Demo
            </button>
          </div>
        )}

        {isSearching && (
          <div className="text-center py-12">
            <div className="animate-pulse text-4xl mb-4">🔄</div>
            <p className="text-gray-600 dark:text-gray-400">Searching across all data sources...</p>
          </div>
        )}

        {searchResults.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Found {searchResults.length} results for &quot;{searchQuery}&quot;
              </h4>
              <div className="flex space-x-2">
                <button className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                  All
                </button>
                <button className="px-3 py-1 text-sm text-gray-500 dark:text-gray-400 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                  Articles
                </button>
                <button className="px-3 py-1 text-sm text-gray-500 dark:text-gray-400 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                  Dashboards
                </button>
              </div>
            </div>

            <div className="grid gap-4">
              {searchResults.map((result, index) => (
                <motion.div
                  key={result.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 hover:shadow-lg transition-all cursor-pointer group"
                  onClick={() => setSelectedResult(result)}
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{getTypeIcon(result.type)}</div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h5 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                          {result.title}
                        </h5>
                        <span className={`px-2 py-1 text-xs rounded-full ${getTypeColor(result.type)}`}>
                          {result.format}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-3">{result.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {result.category} • Updated {result.lastUpdated}
                          </span>
                          <div className="flex space-x-1">
                            {result.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg text-sm font-medium"
                        >
                          Open →
                        </motion.div>
                      </div>
                      {result.preview && (
                        <div className="mt-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                            Preview: {result.preview}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 dark:border-gray-700 p-4 bg-gray-50 dark:bg-gray-800">
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center space-x-4">
            <span>🔍 Smart Search</span>
            <span>📊 Multi-Format Results</span>
            <span>🎯 Contextual Guidance</span>
          </div>
          <div>
            Powered by BQ Data Intelligence
          </div>
        </div>
      </div>
    </div>
  );
}