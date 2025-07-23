'use client';

import { motion } from 'framer-motion';
import Card from '../ui/Card';

export default function Outcomes() {
  const outcomes = [
    {
      icon: '📈',
      title: 'CRM optimises campaign design mid-flight',
      description: 'Real-time adjustments based on performance data',
      impact: 'Increase campaign ROI by 40%'
    },
    {
      icon: '🔍',
      title: 'Insight team explores drivers of segment growth',
      description: 'Deep-dive analytics with intuitive interfaces',
      impact: 'Reduce analysis time by 70%'
    },
    {
      icon: '🧰',
      title: 'Analysts build repeatable code without pipelines',
      description: 'Self-service analytics with powerful APIs',
      impact: 'Enable 10x faster insight generation'
    },
    {
      icon: '🎯',
      title: 'Execs scan KPIs and act — without filtering through reports',
      description: 'Direct access to actionable insights',
      impact: 'Accelerate decision-making by 80%'
    }
  ];

  return (
    <section id="outcomes" className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center space-y-6"
      >
        <div className="inline-flex items-center space-x-3 px-4 py-2 bg-emerald-50 dark:bg-emerald-900/20 rounded-full">
          <span className="text-2xl">✨</span>
          <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">What This Enables</span>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
          What Becomes Possible
        </h2>
        
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          From reactive reporting → to proactive decision support
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {outcomes.map((outcome, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card delay={0}>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{outcome.icon}</div>
                  <div className="space-y-3 flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 leading-tight">
                      {outcome.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {outcome.description}
                    </p>
                  </div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-900/20 dark:to-blue-900/20 p-4 rounded-xl border border-emerald-200/50 dark:border-emerald-800/50"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
                      Impact: {outcome.impact}
                    </span>
                  </div>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Transformation Timeline
          </h3>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-400 to-blue-400 rounded-full"></div>
          
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              viewport={{ once: true }}
              className="flex justify-start"
            >
              <div className="w-5/12 pr-8 text-right">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="text-sm font-medium text-emerald-600 dark:text-emerald-400 mb-2">Today</div>
                  <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">Reactive Reporting</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">Manual processes, delayed insights</div>
                </div>
              </div>
              <div className="w-2/12 flex justify-center">
                <div className="w-4 h-4 bg-emerald-400 rounded-full border-4 border-white dark:border-gray-900"></div>
              </div>
              <div className="w-5/12"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
              className="flex justify-end"
            >
              <div className="w-5/12"></div>
              <div className="w-2/12 flex justify-center">
                <div className="w-4 h-4 bg-blue-400 rounded-full border-4 border-white dark:border-gray-900"></div>
              </div>
              <div className="w-5/12 pl-8">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">Future</div>
                  <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">Proactive Decision Support</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">Real-time insights, automated actions</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 text-white p-12 rounded-2xl text-center"
      >
        <div className="space-y-6">
          <div className="text-5xl">🚀</div>
          <h4 className="text-3xl font-bold">Ready for Launch</h4>
          <p className="text-xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            The future of data visualisation isn't just about better charts—it's about 
            empowering every decision maker with the right insight at the right moment. 
            <strong className="block mt-4">Let's build it together.</strong>
          </p>
        </div>
      </motion.div>
    </section>
  );
}
