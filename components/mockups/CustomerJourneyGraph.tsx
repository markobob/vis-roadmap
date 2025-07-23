'use client';

import React, { useEffect, useRef } from 'react';

const CustomerJourneyGraph: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    // For now, create a simple static visualization
    // We'll add D3 integration later once we resolve the module issues
    const svg = svgRef.current;
    svg.innerHTML = '';
    
    // Set dimensions
    const width = 600;
    const height = 400;
    svg.setAttribute('width', width.toString());
    svg.setAttribute('height', height.toString());
    svg.setAttribute('viewBox', `0 0 ${width} ${height}`);

    // Create simple nodes and connections
    const nodes = [
      { id: 'email', x: 100, y: 100, label: 'Email Campaign', color: '#3B82F6' },
      { id: 'website', x: 300, y: 80, label: 'Website Visit', color: '#10B981' },
      { id: 'app', x: 500, y: 120, label: 'Mobile App', color: '#8B5CF6' },
      { id: 'purchase', x: 300, y: 250, label: 'Purchase', color: '#F59E0B' },
      { id: 'loyalty', x: 100, y: 300, label: 'Loyalty Program', color: '#EF4444' }
    ];

    const links = [
      { source: 'email', target: 'website' },
      { source: 'website', target: 'app' },
      { source: 'app', target: 'purchase' },
      { source: 'purchase', target: 'loyalty' }
    ];

    // Draw links
    links.forEach(link => {
      const sourceNode = nodes.find(n => n.id === link.source);
      const targetNode = nodes.find(n => n.id === link.target);
      if (sourceNode && targetNode) {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', sourceNode.x.toString());
        line.setAttribute('y1', sourceNode.y.toString());
        line.setAttribute('x2', targetNode.x.toString());
        line.setAttribute('y2', targetNode.y.toString());
        line.setAttribute('stroke', '#6B7280');
        line.setAttribute('stroke-width', '2');
        line.setAttribute('opacity', '0.6');
        svg.appendChild(line);
      }
    });

    // Draw nodes
    nodes.forEach(node => {
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', node.x.toString());
      circle.setAttribute('cy', node.y.toString());
      circle.setAttribute('r', '20');
      circle.setAttribute('fill', node.color);
      circle.setAttribute('opacity', '0.8');
      circle.style.cursor = 'pointer';
      
      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text.setAttribute('x', node.x.toString());
      text.setAttribute('y', (node.y + 35).toString());
      text.setAttribute('text-anchor', 'middle');
      text.setAttribute('font-size', '12');
      text.setAttribute('fill', '#374151');
      text.textContent = node.label;
      
      svg.appendChild(circle);
      svg.appendChild(text);
    });

  }, []);

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          Customer Journey Visualization
        </h4>
        <p className="text-sm text-gray-600">
          Interactive graph showing customer touchpoints and conversion flow.
        </p>
      </div>
      <svg ref={svgRef} className="w-full border border-gray-100 rounded bg-white"></svg>
    </div>
  );
};

export default CustomerJourneyGraph;
