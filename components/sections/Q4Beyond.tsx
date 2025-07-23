'use client';

import { motion } from 'framer-motion';
import Card from '../ui/Card';

export default function Q4Beyond() {
  const q4Items = [
    {
      icon: '🧠',
      title: 'Data Science in Reporting',
      description: 'Model outputs (churn, HRHV, eligibility) embedded into dashboards.',
      details: [
        'Performance tracking layered into reporting',
        'Use case: Segment shift, risk monitoring, next-best-action'
      ],
      timeline: 'Q4'
    },
    {
      icon: '🧱',
      title: 'Python API for Analysts',
      description: 'e.g., bq.cust.journey(1234)',
      details: [
        'Purpose: Lower barrier to advanced insight',
        'Outcome: Reusability, speed, analyst empowerment'
      ],
      timeline: 'Q4'
    },
    {
      icon: '🗞️',
      title: 'Multi-Format Reporting',
      description: 'Power BI for slicing/dicing. NYT-style exec summaries for narrative + impact.',
      details: [
        '"Medium meets user" → smarter consumption, better action'
      ],
      timeline: 'Q1 2026'
    },
    {
      icon: '🌐',
      title: 'Data Interface Evolution',
      description: '"One-stop shop" for all customer data views.',
      details: [
        'Composable metrics, embedded commentary, smart search',
        'Vision: Ask a question → get an answer (not just a chart)'
      ],
      timeline: 'Q1 2026'
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
          <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">Expanding Horizons</span>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
          Building the Future:<br />
          Q4 and Strategic Investments
        </h2>
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
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300"
                    >
                      {item.timeline}
                    </motion.span>
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
                </div>
              </Card>
            </div>
          </motion.div>
        ))}
      </div>

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
