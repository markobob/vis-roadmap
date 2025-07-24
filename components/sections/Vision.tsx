'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Card from '../ui/Card';
import PythonNotebookMockup from '../mockups/PythonNotebookMockup';
import ExecDigestMockup from '../mockups/ExecDigestMockup';
import DataDiscoveryMockup from '../mockups/DataDiscoveryMockup';

export default function Vision() {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);

  const visionScenarios = [
    {
      icon: '📊',
      scenario: 'CRM teams track comprehensive campaign outcomes in near real time, across types and segments.  Anyone gets answers to their customer related questions in a few clicks.',
      demoKey: null
    },
    {
      icon: '⚡',
      scenario: 'Every user, regardless of role, finds what they need — fast.',
      demoKey: 'discovery'
    },
    {
      icon: '📰',
      scenario: 'Execs get monthly digests that read like interactive articles, not analyst tools.',
      demoKey: 'digest'
    },
    {
      icon: '👨‍💻',
      scenario: 'Analyst force multiplier with Customer data API.',
      demoKey: 'notebook'
    }
  ];

  const principles = [
    {
      title: 'Composable',
      description: 'Reusable insight building blocks.',
      icon: '🧩'
    },
    {
      title: 'Flexible',
      description: 'Tailored to role and need.',
      icon: '🔄'
    },
    {
      title: 'Scalable',
      description: 'Works for 1 campaign or 1000 - single customer or entire segment.',
      icon: '📈'
    },
    {
      title: 'Trustworthy',
      description: 'Governance + quality built in.',
      icon: '🛡️'
    }
  ];

  return (
    <section id="vision" className="space-y-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center space-y-6"
      >
        <div className="inline-flex items-center space-x-3 px-4 py-2 bg-purple-50 dark:bg-purple-900/20 rounded-full">
          <span className="text-2xl">🔮</span>
          <span className="text-sm font-medium text-purple-700 dark:text-purple-300">Where We&apos;re Going</span>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
          The Future: Composable,<br />
          User-Centric, Insight-Rich
        </h2>
      </motion.div>

      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-8">
            &quot;Imagine a world &hellip;&quot;
          </h3>
        </motion.div>        <div className="grid md:grid-cols-2 gap-6">
          {visionScenarios.map((scenario, index) => (
            <Card key={index} delay={index * 0.15}>
              <div className="flex items-start space-x-4">
                <div className="text-3xl">{scenario.icon}</div>
                <div className="flex-1">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    {scenario.scenario}
                  </p>
                  {scenario.demoKey && (
                    <button
                      onClick={() => setActiveDemo(activeDemo === scenario.demoKey ? null : scenario.demoKey)}
                      className={`
                        px-4 py-2 rounded-lg text-sm font-medium transition-all
                        ${activeDemo === scenario.demoKey 
                          ? 'bg-red-500 text-white hover:bg-red-600' 
                          : 'bg-blue-500 text-white hover:bg-blue-600'
                        }
                      `}
                    >
                      {activeDemo === scenario.demoKey ? 'Hide Demo' : 'See Live Demo'}
                    </button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Interactive Demos */}
        {activeDemo === 'notebook' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-8"
          >
            <div className="text-center mb-6">
              <h4 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Live Demo: Python Analytics in Action
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Watch how analysts can instantly access customer journey data with a single command
              </p>
            </div>
            <PythonNotebookMockup />
          </motion.div>
        )}

        {activeDemo === 'digest' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-8"
          >
            <div className="text-center mb-6">
              <h4 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Live Demo: Executive Digest Experience
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Experience how executives consume insights through interactive, article-style reports
              </p>
            </div>
            <ExecDigestMockup />
          </motion.div>
        )}

        {activeDemo === 'discovery' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-8"
          >
            <div className="text-center mb-6">
              <h4 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Live Demo: One-Stop Data Discovery
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                See how team members can instantly find the right data, reports, and insights for their needs
              </p>
            </div>
            <DataDiscoveryMockup />
          </motion.div>
        )}
      </div>

      <div className="space-y-8">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-semibold text-center text-gray-800 dark:text-gray-200"
        >
          Guiding Principles
        </motion.h3>

        <div className="grid md:grid-cols-4 gap-6">
          {principles.map((principle, index) => (
            <Card key={index} delay={index * 0.1 + 0.4}>
              <div className="text-center space-y-4">
                <div className="text-4xl mx-auto">{principle.icon}</div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {principle.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {principle.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-2xl text-center"
      >
        <p className="text-xl md:text-2xl font-medium">
          ✨ Building the foundation for intelligent, accessible data experiences
        </p>
      </motion.div>
    </section>
  );
}
