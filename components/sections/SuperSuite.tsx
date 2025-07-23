'use client';

import { motion } from 'framer-motion';
import Card from '../ui/Card';

export default function SuperSuite() {
  const ecosystemTools = [
    {
      name: 'Power BI Apps',
      description: 'Interactive dashboards and analytics',
      icon: '📊',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Exec Digest',
      description: 'Executive-level insights and summaries',
      icon: '📰',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Campaign Dashboard',
      description: 'Campaign performance and optimization',
      icon: '🎯',
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Customer Journey Explorer',
      description: 'API-driven journey analysis',
      icon: '🗺️',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Embedded DS Models',
      description: 'Machine learning insights integration',
      icon: '🤖',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section id="suite" className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center space-y-6"
      >
        <div className="inline-flex items-center space-x-3 px-4 py-2 bg-amber-50 dark:bg-amber-900/20 rounded-full">
          <span className="text-2xl">⚡</span>
          <span className="text-sm font-medium text-amber-700 dark:text-amber-300">Bringing It All Together</span>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
          The Super Reporting Suite:<br />
          Unified, Composable, Powerful
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full mb-6">
            <div className="w-28 h-28 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center">
              <span className="text-4xl">🌟</span>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            One Ecosystem → Many Tools
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            "Not a dozen dashboards. One ecosystem. Modular. Composable. Made for action."
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {ecosystemTools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card delay={0}>
                <div className="text-center space-y-4">
                  <div className={`
                    w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${tool.color}
                    flex items-center justify-center text-white text-2xl
                    group-hover:scale-110 transition-transform duration-300
                  `}>
                    {tool.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {tool.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {tool.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-6"
      >
        <Card delay={0}>
          <div className="text-center space-y-2">
            <div className="text-3xl">🔗</div>
            <h4 className="font-semibold text-gray-900 dark:text-gray-100">Connected</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Seamless data flow between all tools
            </p>
          </div>
        </Card>
        
        <Card delay={0.1}>
          <div className="text-center space-y-2">
            <div className="text-3xl">🎛️</div>
            <h4 className="font-semibold text-gray-900 dark:text-gray-100">Modular</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Use what you need, when you need it
            </p>
          </div>
        </Card>
        
        <Card delay={0.2}>
          <div className="text-center space-y-2">
            <div className="text-3xl">🚀</div>
            <h4 className="font-semibold text-gray-900 dark:text-gray-100">Action-Ready</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              From insight to action in seconds
            </p>
          </div>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 text-white p-8 rounded-2xl text-center"
      >
        <div className="space-y-4">
          <div className="text-4xl">⚡</div>
          <h4 className="text-2xl font-bold">The Power of Integration</h4>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            When every tool speaks the same language, magic happens. 
            Data flows, insights emerge, and decisions become effortless.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
