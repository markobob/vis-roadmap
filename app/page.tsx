'use client';

import { motion } from 'framer-motion';
import Header from '../components/layout/Header';
import Navigation from '../components/layout/Navigation';
import Mission from '../components/sections/Mission';
import CurrentState from '../components/sections/CurrentState';
import Vision from '../components/sections/Vision';
import Q3Roadmap from '../components/sections/Q3Roadmap';
import Q4Beyond from '../components/sections/Q4Beyond';
import SuperSuite from '../components/sections/SuperSuite';
import Outcomes from '../components/sections/Outcomes';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Header />
      <Navigation />
      
      <main className="max-w-6xl mx-auto px-6 py-12 space-y-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Mission />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <CurrentState />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Vision />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Q3Roadmap />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Q4Beyond />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <SuperSuite />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Outcomes />
        </motion.div>
      </main>
    </div>
  );
}
