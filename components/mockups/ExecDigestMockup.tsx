'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ExecDigestMockup() {
  const [activeChart, setActiveChart] = useState('revenue');

  const chartData = {
    revenue: {
      title: 'Q3 Revenue Performance',
      value: '+23.4%',
      trend: 'up',
      data: [65, 72, 68, 85, 92, 88, 94]
    },
    engagement: {
      title: 'Customer Engagement',
      value: '+31.2%',
      trend: 'up', 
      data: [45, 52, 58, 61, 67, 72, 78]
    },
    conversion: {
      title: 'Campaign Conversion',
      value: '+18.7%',
      trend: 'up',
      data: [12, 15, 18, 16, 22, 25, 28]
    }
  };

  const currentChart = chartData[activeChart as keyof typeof chartData];

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden max-w-4xl">
      {/* Header */}
      <div className="border-b border-gray-200 dark:border-gray-700 p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-black dark:bg-white rounded text-white dark:text-black flex items-center justify-center font-bold text-sm">
              BQ
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">Executive Digest</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Weekly Customer Intelligence Report</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm font-medium text-gray-900 dark:text-gray-100">July 23, 2025</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Week 30 Report</div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="p-6 space-y-6">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 leading-tight mb-4">
            Customer Engagement Surges as New Campaign Strategy Delivers Record Results
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Data-driven personalization initiatives have driven a 31% increase in customer engagement, 
            while targeted campaign optimizations have boosted conversion rates across all segments.
          </p>
        </motion.div>

        {/* Key Metrics Interactive */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6"
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Key Performance Indicators</h3>
          
          {/* Chart Selector */}
          <div className="flex space-x-2 mb-6">
            {Object.entries(chartData).map(([key, data]) => (
              <button
                key={key}
                onClick={() => setActiveChart(key)}
                className={`
                  px-4 py-2 rounded-lg text-sm font-medium transition-all
                  ${activeChart === key 
                    ? 'bg-blue-500 text-white shadow-md' 
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                  }
                `}
              >
                {data.title}
              </button>
            ))}
          </div>

          {/* Interactive Chart */}
          <motion.div
            key={activeChart}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="bg-white dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-600"
          >
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100">{currentChart.title}</h4>
              <div className="flex items-center space-x-2">
                <span className={`
                  text-2xl font-bold
                  ${currentChart.trend === 'up' ? 'text-green-500' : 'text-red-500'}
                `}>
                  {currentChart.value}
                </span>
                <div className={`
                  w-6 h-6 rounded-full flex items-center justify-center
                  ${currentChart.trend === 'up' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}
                `}>
                  {currentChart.trend === 'up' ? '↗' : '↘'}
                </div>
              </div>
            </div>
            
            {/* Simple Chart Visualization */}
            <div className="h-32 flex items-end space-x-2">
              {currentChart.data.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ height: 0 }}
                  animate={{ height: `${(value / Math.max(...currentChart.data)) * 100}%` }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`
                    flex-1 rounded-t-lg
                    ${activeChart === 'revenue' ? 'bg-blue-500' :
                      activeChart === 'engagement' ? 'bg-green-500' : 'bg-purple-500'}
                  `}
                  title={`Week ${index + 1}: ${value}%`}
                />
              ))}
            </div>
            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-2">
              <span>7 weeks ago</span>
              <span>This week</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Article Body */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="prose prose-lg dark:prose-invert max-w-none"
        >
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            <strong className="font-semibold">The numbers tell a compelling story.</strong> Over the past quarter, 
            our customer engagement initiatives have not only met but exceeded all projected targets. The implementation 
            of real-time personalization engines and AI-driven content recommendations has transformed how customers 
            interact with our digital touchpoints.
          </p>

          {/* Inline Interactive Element */}
          <div className="my-6 p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded-r-lg">
            <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">Interactive Insight</h4>
            <p className="text-blue-800 dark:text-blue-200 text-sm">
              Customer journeys that include personalized recommendations show a 
              <strong className="font-bold"> 2.3x higher conversion rate</strong> compared to standard paths.
              <button className="ml-2 text-blue-600 dark:text-blue-400 underline hover:no-underline">
                View detailed analysis →
              </button>
            </p>
          </div>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Perhaps most remarkably, the data reveals a significant shift in customer behavior patterns. 
            Mobile engagement has increased by 45%, while cross-channel consistency has improved customer 
            satisfaction scores by 28%. These improvements are directly attributable to our unified data 
            platform and real-time decisioning capabilities.
          </p>
        </motion.div>

        {/* Key Takeaways */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gray-900 dark:bg-gray-800 text-white rounded-lg p-6"
        >
          <h3 className="text-xl font-semibold mb-4">Strategic Implications</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-medium">Immediate Actions</h4>
                  <p className="text-sm text-gray-300">Scale successful personalization models to remaining customer segments</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-medium">Investment Priorities</h4>
                  <p className="text-sm text-gray-300">Expand real-time analytics infrastructure to support growth</p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-medium">Risk Mitigation</h4>
                  <p className="text-sm text-gray-300">Monitor customer fatigue signals in high-engagement segments</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-medium">Future Opportunities</h4>
                  <p className="text-sm text-gray-300">Explore predictive modeling for proactive customer interventions</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700"
        >
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm transition-colors">
            Download Full Report
          </button>
          <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm transition-colors">
            Schedule Deep Dive
          </button>
          <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm transition-colors">
            Share Insights
          </button>
        </motion.div>
      </div>
    </div>
  );
}
