'use client';

import { motion } from 'framer-motion';
import Card from '../ui/Card';

export default function CurrentState() {
  const achievements = [
    {
      icon: '🔄',
      title: 'Databricks Migration',
      description: 'In progress (complete start Q3); unlocking scale, flexibility and future innovation.',
      status: 'In Progress'
    },
    {
      icon: '📱',
      title: 'Power BI Apps',
      description: 'Adopted for better UX, governance, and dev-to-prod pipeline.',
      status: 'Complete'
    },
    {
      icon: '🤖',
      title: 'In-House Automation',
      description: 'Ownership in-house, with built-in data quality checks.',
      status: 'In Progress'
    },
    {
      icon: '📊',
      title: 'OKR Dashboard & Exec Digest',
      description: 'Setting the standard for targeted medium, joined insight.',
      status: 'In Progress'
    }
  ];

  return (
    <section id="current" className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center space-y-6"
      >
        <div className="inline-flex items-center space-x-3 px-4 py-2 bg-green-50 dark:bg-green-900/20 rounded-full">
          <span className="text-2xl">📈</span>
          <span className="text-sm font-medium text-green-700 dark:text-green-300">Where We Are Now</span>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
          From Foundation to Maturity
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {achievements.map((achievement, index) => (
          <Card key={index} delay={index * 0.1}>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{achievement.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    {achievement.title}
                  </h3>
                </div>
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                  className={`
                    px-3 py-1 rounded-full text-xs font-medium
                    ${achievement.status === 'Complete' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' :
                      achievement.status === 'Live' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' :
                      'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300'
                    }
                  `}
                >
                  {achievement.status}
                </motion.span>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {achievement.description}
              </p>
            </div>
          </Card>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="text-center p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 rounded-2xl border border-blue-200/50 dark:border-blue-800/50"
      >
        <p className="text-lg text-gray-700 dark:text-gray-300 font-medium">
          🏗️ <strong>Foundation built.</strong> Now we scale and innovate.
        </p>
      </motion.div>
    </section>
  );
}
