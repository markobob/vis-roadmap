'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Card from '../ui/Card';
import DataDiscoveryMockup from '../mockups/DataDiscoveryMockup';
import AiDataQueryMockup from '../mockups/AiDataQueryMockup';

export default function Q4Beyond() {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);

  const q4Items = [
    {
      icon: '🧠',
      title: 'Data Science in Reporting',
      description: 'Model outputs (churn, HRHV, incremental) embedded into dashboards.',
      details: [
        'Model performance tracking',
        'Use case: Segments, risk monitoring, next-best-action'
      ],
      timeline: 'Oct - Dec 2025',
      beneficiaries: ['Analytics', 'CRM Team', 'Loyalty Team', 'Insight Team'],
      outcome: 'Model insights become part of everyday reporting, not special projects'
    },
    {
      icon: '🧱',
      title: 'Python API for Analysts',
      description: 'e.g., bq.cust.journey(1234)',
      details: [
        'Purpose: Lower barrier to advanced insight, control, force multiplier, single source truth',
        'Outcome: Reusability, speed, analyst empowerment'
      ],
      timeline: 'Nov 2025 - Jan 2026',
      beneficiaries: ['Analysts', 'Devs', 'Internal Customers'],
      outcome: 'Analysts can build sophisticated insight without advanced coding skills or waiting for devs, save time and align on a single source of truth',
    },
    {
      icon: '🗞️',
      title: 'Multi-Format Reporting',
      description: 'Power BI for slicing/dicing. NYT-style exec articles for narrative + impact.',
      details: [
        '"Medium meets user" → smarter consumption, better action'
      ],
      timeline: 'Jan - Mar 2026',
      beneficiaries: ['Executives', 'Senior Leadership', 'All Stakeholders'],
      outcome: 'Executives can consume more digestable insights like articles, not data tables'
    },
    {
      icon: '🌐',
      title: 'Data Interface Evolution',
      description: '"One-stop shop" for all customer data views.',
      details: [
        'Composable metrics, embedded commentary, smart search',
        'Vision: Ask a question → get an answer (not just a chart)'
      ],
      timeline: 'Feb - Apr 2026',
      beneficiaries: ['All Teams', 'Business Users', 'Analysts'],
      outcome: 'Anyone can ask a business question and get a complete answer, not just charts',
      demoKey: 'discovery'
    },
    {
      icon: '🤖',
      title: 'AI as Interface',
      description: 'Natural language queries with intelligent visualizations and anomaly detection.',
      details: [
        'Ask questions in plain English, get smart charts automatically',
        'AI-generated context',
      ],
      timeline: 'Mar - May 2026',
      beneficiaries: ['All Teams', 'Business Users', 'Non-Technical Users'],
      outcome: 'Anyone can explore data like talking to a data analyst, without knowing SQL digging through dashboards',
      demoKey: 'ai-query'
    }
  ];

  return (
    <section id="q4" className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center space-y-6"
      >
        <div className="inline-flex items-center space-x-3 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-full">
          <span className="text-2xl">🌟</span>
          <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">Oct 2025 - Apr 2026</span>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
          Building the Future:<br />
          Q4 2025 & Beyond
        </h2>
        
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Innovation phase: Advanced analytics, intelligent interfaces, and data science integration
        </p>
      </motion.div>

      <div className="space-y-8">
        {q4Items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
          >
            <div className="w-full md:w-2/3">
              <Card delay={0}>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl">{item.icon}</span>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                        {item.title}
                      </h3>
                    </div>
                    {/* <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300"
                    >
                      {item.timeline}
                    </motion.span> */}
                  </div>
                  
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="space-y-2">
                    {item.details.map((detail, detailIndex) => (
                      <motion.div
                        key={detailIndex}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: detailIndex * 0.1 + 0.4 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-2"
                      >
                        <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-600 dark:text-gray-400">
                          {detail}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Beneficiaries and Outcomes */}
                  <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700 space-y-3">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm">👥</span>
                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Who this helps:</span>
                      </div>
                      <div className="flex flex-wrap gap-1 ml-6">
                        {item.beneficiaries.map((beneficiary, bIndex) => (
                          <span
                            key={bIndex}
                            className="px-2 py-1 text-xs bg-indigo-50 text-indigo-700 dark:bg-indigo-900/20 dark:text-indigo-300 rounded-md"
                          >
                            {beneficiary}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-start space-x-2">
                      <span className="text-sm">🎯</span>
                      <div className="space-y-1">
                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Expected outcome:</span>
                        <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">{item.outcome}</p>
                      </div>
                    </div>

                    {/* Demo Button */}
                    {item.demoKey && (
                      <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setActiveDemo(activeDemo === item.demoKey ? null : item.demoKey)}
                          className="w-full px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-lg text-sm font-medium hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors flex items-center justify-center space-x-2"
                        >
                          <span>👁️</span>
                          <span>{activeDemo === item.demoKey ? 'Hide Demo' : 'See Demo'}</span>
                        </motion.button>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Demo Display */}
      <AnimatePresence>
        {activeDemo === 'ai-query' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                AI-Powered Data Interface Demo
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Ask questions in natural language, get intelligent time series with YoY comparison and anomaly detection
              </p>
            </div>
            <div className="flex justify-center">
              <AiDataQueryMockup />
            </div>
          </motion.div>
        )}
        {activeDemo === 'discovery' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                Data Discovery Hub Demo
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Experience the one-stop shop for all your data needs
              </p>
            </div>
            <div className="flex justify-center">
              <DataDiscoveryMockup />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-2xl"
      >
        <div className="text-center space-y-4">
          <h4 className="text-2xl font-bold">Strategic Vision Timeline</h4>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="space-y-2">
              <div className="font-semibold text-indigo-200">Q4 2025</div>
              <div className="text-sm">Data Science Integration & Python API</div>
            </div>
            <div className="space-y-2">
              <div className="font-semibold text-purple-200">Q1 2026</div>
              <div className="text-sm">Multi-Format Reporting & Interface Evolution</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
