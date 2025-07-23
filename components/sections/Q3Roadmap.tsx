'use client';

import { motion } from 'framer-motion';
import Card from '../ui/Card';

export default function Q3Roadmap() {
  const q3Items = [
    {
      icon: '🧩',
      title: 'Customer Dashboard – Phase 2',
      description: 'Targeted views for CRM, Loyalty, Insight, and CX.',
      details: [
        'Drill from segment-level to customer journeys',
        'Purpose: Clarity on "what\'s happening" and "for whom"'
      ],
      priority: 'High'
    },
    {
      icon: '📊',
      title: 'Campaign Dashboard',
      description: 'One place for all campaign types + engagement data.',
      details: [
        'Purpose: Optimise channel mix and campaign design',
        'Decision support: "What works where, and for whom?"'
      ],
      priority: 'High'
    },
    {
      icon: '⚙️',
      title: 'TP Connect Rebuild',
      description: 'Re-platform as Canvas App + Databricks backend.',
      details: [
        'Faster, more robust, scalable campaign ops'
      ],
      priority: 'Medium'
    },
    {
      icon: '🤖',
      title: 'Automation Maturity',
      description: 'Fully in-house, robust quality checks.',
      details: [
        'Reliable foundation for live reporting and decision support'
      ],
      priority: 'High'
    }
  ];

  return (
    <section id="q3" className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center space-y-6"
      >
        <div className="inline-flex items-center space-x-3 px-4 py-2 bg-orange-50 dark:bg-orange-900/20 rounded-full">
          <span className="text-2xl">🚀</span>
          <span className="text-sm font-medium text-orange-700 dark:text-orange-300">Q3 Focus Areas</span>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
          H2 Kick-Off:<br />
          Big Leaps in Q3
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {q3Items.map((item, index) => (
          <Card key={index} delay={index * 0.15}>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{item.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    {item.title}
                  </h3>
                </div>
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                  className={`
                    px-3 py-1 rounded-full text-xs font-medium
                    ${item.priority === 'High' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300' :
                      'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300'
                    }
                  `}
                >
                  {item.priority}
                </motion.span>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {item.description}
              </p>

              <div className="space-y-2">
                {item.details.map((detail, detailIndex) => (
                  <motion.div
                    key={detailIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + detailIndex * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-2"
                  >
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {detail}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/10 dark:to-red-900/10 p-8 rounded-2xl border border-orange-200/50 dark:border-orange-800/50"
      >
        <div className="text-center space-y-4">
          <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            Q3 Success Metrics
          </h4>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <div className="font-medium text-orange-600 dark:text-orange-400">Delivery</div>
              <div className="text-gray-600 dark:text-gray-400">4 major initiatives completed</div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <div className="font-medium text-orange-600 dark:text-orange-400">Impact</div>
              <div className="text-gray-600 dark:text-gray-400">50% faster insight generation</div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <div className="font-medium text-orange-600 dark:text-orange-400">Adoption</div>
              <div className="text-gray-600 dark:text-gray-400">90% team engagement</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
