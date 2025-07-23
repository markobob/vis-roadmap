'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

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

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const sections = navigationItems.map(item => {
            const element = document.getElementById(item.id);
            if (!element) return null;
            
            const rect = element.getBoundingClientRect();
            const elementTop = rect.top;
            const elementHeight = rect.height;
            const elementCenter = elementTop + elementHeight / 2;
            
            return {
              id: item.id,
              element,
              top: elementTop,
              bottom: rect.bottom,
              center: elementCenter,
              isVisible: elementTop < window.innerHeight && rect.bottom > 0
            };
          }).filter(Boolean);

          // Find the section that's most prominently visible
          let activeId = '';
          let bestScore = -Infinity;

          sections.forEach(section => {
            if (!section || !section.isVisible) return;
            
            const viewportCenter = window.innerHeight / 2;
            const distanceFromCenter = Math.abs(section.center - viewportCenter);
            const score = -distanceFromCenter; // Closer to center = higher score
            
            if (score > bestScore) {
              bestScore = score;
              activeId = section.id;
            }
          });

          if (activeId && activeId !== activeSection) {
            setActiveSection(activeId);
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    setTimeout(handleScroll, 100); // Small delay to ensure sections are rendered

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  const scrollToSection = (sectionId: string) => {
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
                relative flex items-center space-x-2 px-4 py-2 rounded-full whitespace-nowrap
                transition-all duration-300 ease-out
                ${activeSection === item.id
                  ? 'bg-black dark:bg-white text-white dark:text-black shadow-lg scale-105'
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
