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
        'Flagship dashboard for core customer insights',
        'Purpose: Clarity on "what\'s happening" and "for whom"'
      ],
      priority: 'High',
      timeline: 'Jul - Sep 2025',
      beneficiaries: ['CRM Teams', 'Loyalty Teams', 'Insight Teams', 'CX Teams'],
      outcome: 'Flagship core insights from high-level segments to individual customer stories'
    },
    {
      icon: '📊',
      title: 'Campaign Dashboard',
      description: 'One place for all campaign types + engagement data.',
      details: [
        'Purpose: Optimise channel mix and campaign design',
        'Decision support: "What works where, and for whom?"'
      ],
      priority: 'High',
      timeline: 'Aug - Oct 2025',
      beneficiaries: ['CRM Team', 'Loyalty Team'],
      outcome: 'Campaign teams can see what works across all channels in one place'
    },
    {
      icon: '⚙️',
      title: 'TP Connect Rebuild',
      description: 'Re-platform as Canvas App + Databricks backend.',
      details: [
        'Faster, more robust, scalable and greater dev efficiency.'
      ],
      priority: 'High',
      timeline: 'Sep - Nov 2025',
      beneficiaries: ['TSPs', 'TradePoint Management'],
      outcome: 'Less bugs, rapid delivery, future-proofed for growth'
    },
    {
      icon: '🤖',
      title: 'Automation Maturity',
      description: 'Fully in-house, robust quality checks.',
      details: [
        'Reliable foundation for reporting, analytics and process.'
      ],
      priority: 'Medium',
      timeline: 'Jul - Dec 2025',
      beneficiaries: ['All Teams'],
      outcome: 'Teams can trust the data without second-guessing its freshness or accuracy'
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
          <span className="text-sm font-medium text-orange-700 dark:text-orange-300">Jul - Dec 2025</span>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
          H2 Kick-Off:<br />
          Big Leaps in Q3 2025
        </h2>
        
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Foundation-building phase: Core dashboards, automation maturity, and platform rebuilds
        </p>
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

              {/* Timeline, Beneficiaries, and Outcomes */}
              <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700 space-y-3">
                {/* <div className="flex items-center space-x-2">
                  <span className="text-sm">📅</span>
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{item.timeline}</span>
                </div> */}
                
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm">👥</span>
                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Who this helps:</span>
                  </div>
                  <div className="flex flex-wrap gap-1 ml-6">
                    {item.beneficiaries.map((beneficiary, bIndex) => (
                      <span
                        key={bIndex}
                        className="px-2 py-1 text-xs bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300 rounded-md"
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
              </div>
            </div>
          </Card>
        ))}
      </div>

     
    </section>
  );
}
