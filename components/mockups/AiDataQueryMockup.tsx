'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface DataPoint {
  week: string;
  value: number;
  previousYear: number;
  label: string;
  date: string;
  isAnomaly?: boolean;
  anomalyReason?: string;
}

interface QueryResult {
  question: string;
  data: DataPoint[];
  insight: string;
  chartType: 'timeseries' | 'bar' | 'pie';
  metadata: {
    timeRange: string;
    totalCount: number;
    trend: 'up' | 'down' | 'stable';
    trendPercentage: string;
  };
}

export default function AiDataQueryMockup() {
  const [currentStep, setCurrentStep] = useState(0);
  const [typedQuery, setTypedQuery] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<QueryResult | null>(null);
  const [showChart, setShowChart] = useState(false);

  const sampleQuery = 'show me club signups by week';
  
  const sampleResult: QueryResult = {
    question: 'Club signups by week',
    data: [
      { week: 'W1', value: 145, previousYear: 134, label: 'Feb 1-7', date: '2025-02-01' },
      { week: 'W2', value: 167, previousYear: 142, label: 'Feb 8-14', date: '2025-02-08' },
      { week: 'W3', value: 134, previousYear: 156, label: 'Feb 15-21', date: '2025-02-15' },
      { week: 'W4', value: 189, previousYear: 167, label: 'Feb 22-28', date: '2025-02-22' },
      { week: 'W5', value: 203, previousYear: 178, label: 'Mar 1-7', date: '2025-03-01' },
      { week: 'W6', value: 178, previousYear: 189, label: 'Mar 8-14', date: '2025-03-08' },
      { week: 'W7', value: 234, previousYear: 201, label: 'Mar 15-21', date: '2025-03-15' },
      { week: 'W8', value: 212, previousYear: 195, label: 'Mar 22-28', date: '2025-03-22' },
      { week: 'W9', value: 267, previousYear: 203, label: 'Mar 29-Apr 4', date: '2025-03-29' },
      { week: 'W10', value: 445, previousYear: 218, label: 'Apr 5-11', date: '2025-04-05', isAnomaly: true, anomalyReason: 'Spring loyalty campaign launch' },
      { week: 'W11', value: 278, previousYear: 225, label: 'Apr 12-18', date: '2025-04-12' },
      { week: 'W12', value: 312, previousYear: 241, label: 'Apr 19-25', date: '2025-04-19' }
    ],
    insight: "Club signups show strong YoY performance with 32% average growth. Week 10 shows a significant anomaly with 445 signups (104% above previous year), likely driven by the spring promotion campaign launch. Overall trend indicates successful customer acquisition strategy outperforming historical patterns.",
    chartType: 'timeseries',
    metadata: {
      timeRange: 'Feb 1 - Apr 25, 2025',
      totalCount: 2764,
      trend: 'up',
      trendPercentage: '+32% YoY'
    }
  };

  useEffect(() => {
    if (currentStep === 1) {
      // Simulate typing
      let charIndex = 0;
      const typeInterval = setInterval(() => {
        if (charIndex <= sampleQuery.length) {
          setTypedQuery(sampleQuery.slice(0, charIndex));
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => {
            setCurrentStep(2);
            setIsProcessing(true);
          }, 800);
        }
      }, 60);

      return () => clearInterval(typeInterval);
    }

    if (currentStep === 2) {
      // Simulate AI processing
      setTimeout(() => {
        setIsProcessing(false);
        setResult(sampleResult);
        setCurrentStep(3);
        setTimeout(() => setShowChart(true), 500);
      }, 2500);
    }
  }, [currentStep]);

  const startDemo = () => {
    setCurrentStep(1);
    setTypedQuery('');
    setResult(null);
    setIsProcessing(false);
    setShowChart(false);
  };

  const resetDemo = () => {
    setCurrentStep(0);
    setTypedQuery('');
    setResult(null);
    setIsProcessing(false);
    setShowChart(false);
  };

  const maxValue = result ? Math.max(...result.data.map(d => Math.max(d.value, d.previousYear))) : 0;

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden max-w-5xl">
      {/* Header */}
      <div className="border-b border-gray-200 dark:border-gray-700 p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">🤖</span>
            </div>
            <div>
              <h3 className="font-bold text-xl text-gray-900 dark:text-gray-100">AI Data Assistant</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Ask questions, get intelligent answers</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={startDemo}
              className="px-4 py-2 bg-purple-500 text-white rounded-lg text-sm font-medium hover:bg-purple-600 transition-colors"
            >
              Try Demo
            </motion.button>
            {currentStep > 0 && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={resetDemo}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg text-sm font-medium hover:bg-gray-600 transition-colors"
              >
                Reset
              </motion.button>
            )}
          </div>
        </div>

        {/* Query Input */}
        <div className="relative">
          <input
            type="text"
            value={typedQuery}
            readOnly
            placeholder="Ask a question about your data... (e.g., 'show me sales trends by month')"
            className="w-full px-4 py-3 pl-12 pr-4 text-lg border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <span className="text-gray-400 text-xl">💬</span>
          </div>
          {currentStep === 1 && (
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <div className="w-0.5 h-5 bg-purple-500 animate-pulse"></div>
            </div>
          )}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6">
        {/* Initial State */}
        {currentStep === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🧠</div>
            <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Ask your data anything
            </h4>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Natural language queries powered by AI. Get instant visualizations and insights from your data without writing code or building dashboards.
            </p>
            <button
              onClick={startDemo}
              className="px-6 py-3 bg-purple-500 text-white rounded-lg font-medium hover:bg-purple-600 transition-colors"
            >
              Start Demo
            </button>
          </div>
        )}

        {/* Processing State */}
        {isProcessing && (
          <div className="text-center py-16">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="text-6xl mb-4 inline-block"
            >
              🧠
            </motion.div>
            <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Analyzing your data...
            </h4>
            <div className="space-y-2 max-w-md mx-auto">
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                <span>Understanding your question</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse animation-delay-300"></div>
                <span>Querying data sources</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse animation-delay-600"></div>
                <span>Generating visualization</span>
              </div>
            </div>
          </div>
        )}

        {/* Results */}
        <AnimatePresence>
          {result && currentStep === 3 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Query Summary */}
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4">
                <div className="flex items-center space-x-3">
                  <span className="text-purple-600 dark:text-purple-400 text-xl">✨</span>
                  <div>
                    <h4 className="font-semibold text-purple-900 dark:text-purple-100">
                      {result.question}
                    </h4>
                    <p className="text-sm text-purple-700 dark:text-purple-300">
                      {result.metadata.timeRange} • {result.metadata.totalCount.toLocaleString()} total signups
                    </p>
                  </div>
                  <div className="ml-auto">
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                      result.metadata.trend === 'up' 
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300'
                        : 'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-300'
                    }`}>
                      {result.metadata.trend === 'up' ? '📈' : '📉'} {result.metadata.trendPercentage}
                    </div>
                  </div>
                </div>
              </div>

              {/* Chart */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h5 className="font-semibold text-gray-900 dark:text-gray-100">Weekly Club Signups - Time Series</h5>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
                      <span className="text-gray-600 dark:text-gray-400">2025</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                      <span className="text-gray-600 dark:text-gray-400">2024</span>
                    </div>
                  </div>
                </div>
                
                <AnimatePresence>
                  {showChart && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8 }}
                      className="space-y-6"
                    >
                      {/* Chart Area */}
                      <div className="relative h-80 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
                        {/* Y-axis labels */}
                        <div className="absolute left-0 top-0 bottom-0 w-12 flex flex-col justify-between text-xs text-gray-500 dark:text-gray-400 py-4">
                          <span>{maxValue}</span>
                          <span>{Math.round(maxValue * 0.75)}</span>
                          <span>{Math.round(maxValue * 0.5)}</span>
                          <span>{Math.round(maxValue * 0.25)}</span>
                          <span>0</span>
                        </div>
                        
                        {/* Grid lines */}
                        <div className="absolute left-12 right-4 top-4 bottom-12">
                          {[0, 0.25, 0.5, 0.75, 1].map((ratio, i) => (
                            <div
                              key={i}
                              className="absolute left-0 right-0 border-t border-gray-200 dark:border-gray-700"
                              style={{ bottom: `${ratio * 100}%` }}
                            />
                          ))}
                        </div>
                        
                        {/* Chart content */}
                        <div className="absolute left-12 right-4 top-4 bottom-12 flex items-end justify-between">
                          {result.data.map((point, index) => (
                            <motion.div
                              key={point.week}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1, duration: 0.4 }}
                              className="relative flex flex-col items-center space-y-1 h-full"
                              style={{ width: `${100 / result.data.length - 2}%` }}
                            >
                              {/* Anomaly indicator */}
                              {point.isAnomaly && (
                                <motion.div
                                  initial={{ opacity: 0, scale: 0 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: index * 0.1 + 0.5 }}
                                  className="absolute -top-8 bg-red-500 text-white text-xs px-2 py-1 rounded-full z-20"
                                >
                                  🚨 Anomaly
                                </motion.div>
                              )}
                              
                              <div className="relative w-full h-full flex items-end justify-center">
                                {/* Previous year bar (behind current year) */}
                                <motion.div
                                  initial={{ height: 0 }}
                                  animate={{ height: `${(point.previousYear / maxValue) * 100}%` }}
                                  transition={{ delay: index * 0.1 + 0.1, duration: 0.6 }}
                                  className="w-3/4 bg-gray-300 dark:bg-gray-600 rounded-t-md absolute bottom-0 left-1/2 transform -translate-x-1/2 opacity-60"
                                  style={{ minHeight: '4px' }}
                                >
                                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
                                    {point.previousYear}
                                  </div>
                                </motion.div>
                                
                                {/* Current year bar */}
                                <motion.div
                                  initial={{ height: 0 }}
                                  animate={{ height: `${(point.value / maxValue) * 100}%` }}
                                  transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
                                  className={`w-full rounded-t-md relative ${
                                    point.isAnomaly 
                                      ? 'bg-gradient-to-t from-red-400 to-red-600' 
                                      : 'bg-gradient-to-t from-blue-400 to-blue-600'
                                  }`}
                                  style={{ minHeight: '4px' }}
                                >
                                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap">
                                    {point.value}
                                  </div>
                                </motion.div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                        
                        {/* X-axis labels */}
                        <div className="absolute left-12 right-4 bottom-0 h-12 flex items-center justify-between">
                          {result.data.map((point) => (
                            <div key={point.week} className="text-xs text-gray-500 dark:text-gray-400 text-center">
                              <div className="font-medium">{point.week}</div>
                              <div className="text-xs opacity-75">{point.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Anomaly explanation */}
                      {result.data.some(d => d.isAnomaly) && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.2, duration: 0.4 }}
                          className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4"
                        >
                          <div className="flex items-center space-x-2">
                            <span className="text-red-500 text-lg">🚨</span>
                            <div>
                              <h6 className="font-medium text-red-800 dark:text-red-200">Anomaly Detected</h6>
                              <p className="text-sm text-red-700 dark:text-red-300">
                                Week 10: {result.data.find(d => d.isAnomaly)?.anomalyReason}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* AI Insight */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-200/50 dark:border-blue-800/50"
              >
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">💡</div>
                  <div>
                    <h5 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                      AI Insight
                    </h5>
                    <p className="text-blue-800 dark:text-blue-200 leading-relaxed">
                      {result.insight}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex space-x-3">
                  <button className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    📊 Export Chart
                  </button>
                  <button className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    📝 Save Analysis
                  </button>
                  <button className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    🔍 Drill Down
                  </button>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Generated in 2.3 seconds
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 dark:border-gray-700 p-4 bg-gray-50 dark:bg-gray-800">
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center space-x-4">
            <span>🧠 Natural Language</span>
            <span>📊 Smart Visualizations</span>
            <span>💡 AI Insights</span>
          </div>
          <div>
            Powered by BQ Intelligence Engine
          </div>
        </div>
      </div>
    </div>
  );
}