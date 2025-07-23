'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  icon?: string;
  title?: string;
  delay?: number;
}

export default function Card({ children, className = '', icon, title, delay = 0 }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className={`
        group relative p-6 rounded-2xl 
        bg-gray-50/50 dark:bg-gray-900/50 
        border border-gray-200/50 dark:border-gray-800/50
        hover:bg-gray-100/50 dark:hover:bg-gray-800/50
        transition-all duration-300
        backdrop-blur-sm
        ${className}
      `}
    >
      {(icon || title) && (
        <div className="flex items-center gap-3 mb-4">
          {icon && (
            <div className="text-2xl">{icon}</div>
          )}
          {title && (
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
              {title}
            </h3>
          )}
        </div>
      )}
      {children}
    </motion.div>
  );
}
