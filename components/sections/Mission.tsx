'use client';

import { motion } from 'framer-motion';
import Card from '../ui/Card';

export default function Mission() {
  const missionPoints = [
    "Build a connected, intelligent data ecosystem for the Customer team and beyond.",
    "Give every user the right insight, at the right time, in the right format.",
    "From single journeys to segments, from analysts to execs — powering better decisions and force multipliers at every level."
  ];

  return (
    <section id="mission" className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center space-y-6"
      >
        <div className="inline-flex items-center space-x-3 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full">
          <span className="text-2xl">🎯</span>
          <span className="text-sm font-medium text-blue-700 dark:text-blue-300">The Why</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-gray-100 dark:via-gray-300 dark:to-gray-100 bg-clip-text text-transparent leading-tight">
          Our Mission
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
          Turning Data into Customer-Centric Action
        </p>
      </motion.div>

      <div className="grid md:grid-cols-1 gap-6 max-w-4xl mx-auto">
        {missionPoints.map((point, index) => (
          <Card key={index} delay={index * 0.2}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start space-x-4"
            >
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {point}
              </p>
            </motion.div>
          </Card>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <div className="inline-flex items-center space-x-2 text-gray-500 dark:text-gray-400">
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-gray-300 dark:to-gray-600"></div>
          <span className="text-sm font-medium">Our Foundation</span>
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-gray-300 dark:to-gray-600"></div>
        </div>
      </motion.div>
    </section>
  );
}
