'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import JourneyVisualization from './JourneyVisualization';

export default function PythonNotebookMockup() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [typedCode, setTypedCode] = useState('');

  const fullCode = 'cj = bq.cust.journey(1234)';

  const journeyData = {
    customer_id: '1234',
    name: 'Sarah Johnson',
    segment: 'High Value Customer',
    journey: [
      { step: 1, touchpoint: 'Email Campaign', date: '2025-07-01', action: 'Opened promotional email', engagement: 'high' },
      { step: 2, touchpoint: 'Website Visit', date: '2025-07-02', action: 'Browsed summer collection', engagement: 'medium' },
      { step: 3, touchpoint: 'Mobile App', date: '2025-07-03', action: 'Added items to cart', engagement: 'high' },
      { step: 4, touchpoint: 'Push Notification', date: '2025-07-04', action: 'Received discount offer', engagement: 'high' },
      { step: 5, touchpoint: 'In-Store', date: '2025-07-05', action: 'Purchased with coupon', engagement: 'conversion' }
    ]
  };

  useEffect(() => {
    if (currentStep === 1) {
      setIsTyping(true);
      let index = 0;
      const typeInterval = setInterval(() => {
        if (index <= fullCode.length) {
          setTypedCode(fullCode.slice(0, index));
          index++;
        } else {
          setIsTyping(false);
          clearInterval(typeInterval);
          setTimeout(() => setCurrentStep(2), 1000);
        }
      }, 100);
      return () => clearInterval(typeInterval);
    }
  }, [currentStep]);

  const startDemo = () => {
    setCurrentStep(1);
    setTypedCode('');
  };

  const resetDemo = () => {
    setCurrentStep(0);
    setTypedCode('');
    setIsTyping(false);
  };

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl border border-gray-700">
      {/* Notebook Header */}
      <div className="bg-gray-800 px-4 py-3 flex items-center justify-between border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-gray-300 text-sm font-medium">customer_analysis.ipynb</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          <span className="text-green-400 text-xs">Connected</span>
        </div>
      </div>

      {/* Notebook Content */}
      <div className="p-6 space-y-4">
        {/* Cell 1: Import */}
        <div className="border border-gray-600 rounded-lg overflow-hidden">
          <div className="bg-gray-700 px-3 py-1 text-xs text-gray-300 flex items-center justify-between">
            <span>In [1]:</span>
            <span className="text-green-400">✓ Executed</span>
          </div>
          <div className="p-3 font-mono text-sm">
            <div className="text-blue-400">import</div>
            <div className="text-white ml-2">bq_analytics</div>
            <div className="text-gray-500 mt-2"># BigQuery Customer Analytics SDK</div>
          </div>
        </div>

        {/* Cell 2: Interactive Code */}
        <div className="border border-gray-600 rounded-lg overflow-hidden">
          <div className="bg-gray-700 px-3 py-1 text-xs text-gray-300 flex items-center justify-between">
            <span>In [2]:</span>
            {currentStep >= 2 && <span className="text-green-400">✓ Executed</span>}
            {currentStep === 1 && isTyping && <span className="text-yellow-400">● Running</span>}
          </div>
          <div className="p-3 font-mono text-sm min-h-[60px] flex items-center">
            {currentStep === 0 && (
              <button
                onClick={startDemo}
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Click to run analysis →
              </button>
            )}
            {currentStep >= 1 && (
              <div className="w-full">
                <span className="text-white">
                  {typedCode}
                  {isTyping && <span className="animate-pulse">|</span>}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Results */}
        {currentStep >= 2 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {/* Customer Info */}
            <div className="bg-blue-900/20 border border-blue-700 rounded-lg p-4">
              <h4 className="text-blue-300 font-semibold mb-3">Customer Profile</h4>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-gray-400">ID:</span>
                  <span className="text-white ml-2">{journeyData.customer_id}</span>
                </div>
                <div>
                  <span className="text-gray-400">Name:</span>
                  <span className="text-white ml-2">{journeyData.name}</span>
                </div>
                <div>
                  <span className="text-gray-400">Segment:</span>
                  <span className="text-green-400 ml-2">{journeyData.segment}</span>
                </div>
              </div>
            </div>

            {/* Journey Visualization */}
            <div className="bg-gray-800 border border-gray-600 rounded-lg p-4">
              <h4 className="text-white font-semibold mb-4">Customer Journey Touchpoints</h4>
              
              <div className="space-y-3">
                {journeyData.journey.map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="flex items-center space-x-4 p-3 bg-gray-700 rounded-lg"
                  >
                    <div className={`
                      w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold
                      ${step.engagement === 'conversion' ? 'bg-green-500 text-white' :
                        step.engagement === 'high' ? 'bg-blue-500 text-white' :
                        'bg-yellow-500 text-gray-900'}
                    `}>
                      {step.step}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-white font-medium">{step.touchpoint}</span>
                        <span className="text-gray-400 text-sm">{step.date}</span>
                      </div>
                      <div className="text-gray-300 text-sm mt-1">{step.action}</div>
                    </div>
                    
                    <div className={`
                      px-2 py-1 rounded text-xs font-medium
                      ${step.engagement === 'conversion' ? 'bg-green-500/20 text-green-300' :
                        step.engagement === 'high' ? 'bg-blue-500/20 text-blue-300' :
                        'bg-yellow-500/20 text-yellow-300'}
                    `}>
                      {step.engagement}
                    </div>
                  </motion.div>
                ))}
              </div>              {/* Journey Insights */}
              <div className="mt-6 p-4 bg-purple-900/20 border border-purple-700 rounded-lg">
                <h5 className="text-purple-300 font-semibold mb-2">AI Insights</h5>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li>• 🎯 High engagement customer with 80% touchpoint interaction rate</li>
                  <li>• 📱 Mobile-first preference detected (App + Push notifications)</li>
                  <li>• 🛍️ Responded well to discount incentives (conversion trigger)</li>
                  <li>• ⚡ Fast decision cycle: 5 days from awareness to purchase</li>
                </ul>
              </div>
            </div>

          </motion.div>
        )}
        
        {/* D3 Journey Visualization */}
        {currentStep >= 2 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            {/* New Cell - Journey Graph */}
            <div className="border border-gray-600 rounded-lg overflow-hidden">
              <div className="bg-gray-700 px-3 py-1 text-xs text-gray-300 flex items-center justify-between">
                <span>In [3]:</span>
                <span className="text-green-400">✓ Executed</span>
              </div>
              <div className="p-3 font-mono text-sm">
                <div className="text-gray-500"># Generate interactive journey visualization</div>
                <div className="text-white mt-1">
                  <span className="text-blue-400">cj</span>
                  <span className="text-white">.visualize_network()</span>
                </div>
              </div>
            </div>

            {/* Graph Output */}
            <div className="border border-gray-600 rounded-lg overflow-hidden bg-white">
              <div className="bg-gray-700 px-3 py-1 text-xs text-gray-300 flex items-center justify-between">
                <span>Out [3]:</span>
                <span className="text-blue-400">Interactive Graph</span>
              </div>              <div className="p-2">
                <JourneyVisualization />
              </div>
            </div>

            {/* Analysis insights based on graph */}
            <div className="bg-indigo-900/20 border border-indigo-700 rounded-lg p-4">
              <h5 className="text-indigo-300 font-semibold mb-3 flex items-center">
                <span className="mr-2">🔍</span>
                Network Analysis Insights
              </h5>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-medium text-indigo-200 mb-2">Flow Patterns:</div>
                  <ul className="space-y-1 text-gray-300">
                    <li>• Strongest path: Email → Website → Purchase</li>
                    <li>• SMS reminders create 15% conversion lift</li>
                    <li>• Mobile app engagement correlates with loyalty</li>
                  </ul>
                </div>
                <div>
                  <div className="font-medium text-indigo-200 mb-2">Optimization Points:</div>
                  <ul className="space-y-1 text-gray-300">
                    <li>• Add touchpoint between website and cart</li>
                    <li>• Increase SMS frequency for cart abandoners</li>
                    <li>• Implement post-purchase loyalty activation</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Output Cell - Journey Visualization */}
        {currentStep >= 4 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20"
          >
            <div className="flex items-center justify-between p-3 bg-blue-100 dark:bg-blue-900/30">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-mono text-blue-600 dark:text-blue-400">Out [4]:</span>
              </div>
            </div>            <div className="p-4">
              <JourneyVisualization />
            </div>
          </motion.div>
        )}

        {/* Additional Analysis Cell */}
        {currentStep >= 5 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="border-l-4 border-gray-300 dark:border-gray-600"
          >
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-mono text-gray-600 dark:text-gray-400">In [5]:</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-xs text-green-600 dark:text-green-400">Ready</span>
              </div>
            </div>
            <div className="p-4">
              <pre className="text-sm font-mono text-gray-800 dark:text-gray-200">
{`# Analyze conversion rates at each step
journey_data.conversion_funnel_analysis()`}
              </pre>
            </div>
          </motion.div>
        )}

        {/* Conversion Analysis Output */}
        {currentStep >= 6 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20"
          >
            <div className="flex items-center justify-between p-3 bg-blue-100 dark:bg-blue-900/30">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-mono text-blue-600 dark:text-blue-400">Out [5]:</span>
              </div>
            </div>
            <div className="p-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  📊 Journey Analysis Summary
                </h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="font-medium text-gray-700 dark:text-gray-300">Key Insights:</div>
                    <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-400">
                      <li>• 75% email-to-website conversion</li>
                      <li>• 60% website-to-product view rate</li>
                      <li>• SMS reminders boost purchase by 15%</li>
                      <li>• 80% purchase-to-review completion</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-medium text-gray-700 dark:text-gray-300">Recommendations:</div>
                    <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-400">
                      <li>• Optimize product page design</li>
                      <li>• Increase SMS reminder frequency</li>
                      <li>• Implement loyalty rewards earlier</li>
                      <li>• A/B test review request timing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

      </div>
    </div>
  );
}
