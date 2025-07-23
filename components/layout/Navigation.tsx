'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const navigationItems = [
  { id: 'mission', label: 'Mission', emoji: '🎯' },
  { id: 'current', label: 'Current State', emoji: '📊' },
  { id: 'vision', label: 'Vision', emoji: '🔮' },
  { id: 'q3', label: 'Q3 Roadmap', emoji: '🚀' },
  { id: 'q4', label: 'Q4 & Beyond', emoji: '🌟' },
  { id: 'suite', label: 'Super Suite', emoji: '⚡' },
  { id: 'outcomes', label: 'Outcomes', emoji: '✨' }
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('mission');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="sticky top-20 z-40 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-800/50"
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center space-x-8 overflow-x-auto">
          {navigationItems.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(item.id)}
              className={`
                flex items-center space-x-2 px-4 py-2 rounded-full whitespace-nowrap
                transition-all duration-300
                ${activeSection === item.id
                  ? 'bg-black dark:bg-white text-white dark:text-black'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800'
                }
              `}
            >
              <span className="text-sm">{item.emoji}</span>
              <span className="text-sm font-medium">{item.label}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
