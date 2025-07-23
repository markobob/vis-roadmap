'use client';

import React from 'react';

const JourneyVisualization = () => {
  const nodes = [
    { id: 'start', label: 'Customer 1234', x: 50, y: 150, type: 'customer' },
    { id: 'email', label: 'Email Campaign', x: 200, y: 100, type: 'touchpoint' },
    { id: 'website', label: 'Website Visit', x: 350, y: 150, type: 'touchpoint' },
    { id: 'coupon', label: 'Coupon View', x: 500, y: 100, type: 'touchpoint' },
    { id: 'purchase', label: 'Purchase', x: 650, y: 150, type: 'conversion' }
  ];

  const edges = [
    { from: 'start', to: 'email' },
    { from: 'email', to: 'website' },
    { from: 'website', to: 'coupon' },
    { from: 'coupon', to: 'purchase' }
  ];

  return (
    <div className="w-full h-64 bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
      <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
        Customer Journey Visualization
      </div>
      <svg width="100%" height="200" viewBox="0 0 750 200">
        {/* Render edges */}
        {edges.map((edge, index) => {
          const fromNode = nodes.find(n => n.id === edge.from);
          const toNode = nodes.find(n => n.id === edge.to);
          if (!fromNode || !toNode) return null;
          
          return (
            <line
              key={index}
              x1={fromNode.x + 30}
              y1={fromNode.y}
              x2={toNode.x - 30}
              y2={toNode.y}
              stroke="#3b82f6"
              strokeWidth="2"
              markerEnd="url(#arrowhead)"
            />
          );
        })}
        
        {/* Render nodes */}
        {nodes.map((node) => (
          <g key={node.id}>
            <circle
              cx={node.x}
              cy={node.y}
              r="25"
              fill={
                node.type === 'customer' ? '#10b981' :
                node.type === 'conversion' ? '#f59e0b' :
                '#3b82f6'
              }
              className="drop-shadow-sm"
            />
            <text
              x={node.x}
              y={node.y + 40}
              textAnchor="middle"
              className="text-xs fill-gray-700 dark:fill-gray-300"
            >
              {node.label}
            </text>
          </g>
        ))}
        
        {/* Arrow marker */}
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
          >
            <polygon
              points="0 0, 10 3.5, 0 7"
              fill="#3b82f6"
            />
          </marker>
        </defs>
      </svg>
      
      <div className="mt-4 grid grid-cols-3 gap-4 text-xs">
        <div className="bg-white dark:bg-gray-700 p-2 rounded">
          <div className="font-medium">Touchpoints: 4</div>
          <div className="text-gray-500">Email → Website → Coupon → Purchase</div>
        </div>
        <div className="bg-white dark:bg-gray-700 p-2 rounded">
          <div className="font-medium">Conversion Rate: 85%</div>
          <div className="text-gray-500">Above average performance</div>
        </div>
        <div className="bg-white dark:bg-gray-700 p-2 rounded">
          <div className="font-medium">Journey Time: 3.2 days</div>
          <div className="text-gray-500">Typical for this segment</div>
        </div>
      </div>
    </div>
  );
};

export default JourneyVisualization;
