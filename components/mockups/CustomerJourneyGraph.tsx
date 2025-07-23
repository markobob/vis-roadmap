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
}

const CustomerJourneyGraph: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  const nodes: Node[] = [
    { id: 'email-campaign', label: 'Email Campaign', type: 'touchpoint', value: 100 },
    { id: 'website-visit', label: 'Website Visit', type: 'action', value: 75 },
    { id: 'product-view', label: 'Product View', type: 'action', value: 60 },
    { id: 'add-to-cart', label: 'Add to Cart', type: 'action', value: 45 },
    { id: 'sms-reminder', label: 'SMS Reminder', type: 'touchpoint', value: 30 },
    { id: 'purchase', label: 'Purchase', type: 'outcome', value: 35 },
    { id: 'app-notification', label: 'App Notification', type: 'touchpoint', value: 25 },
    { id: 'loyalty-points', label: 'Loyalty Points', type: 'outcome', value: 20 },
    { id: 'review-request', label: 'Review Request', type: 'touchpoint', value: 15 },
    { id: 'customer-review', label: 'Customer Review', type: 'outcome', value: 12 }
  ];

  const links: Link[] = [
    { source: 'email-campaign', target: 'website-visit', value: 75, type: 'flow' },
    { source: 'website-visit', target: 'product-view', value: 60, type: 'flow' },
    { source: 'product-view', target: 'add-to-cart', value: 45, type: 'flow' },
    { source: 'add-to-cart', target: 'sms-reminder', value: 30, type: 'flow' },
    { source: 'sms-reminder', target: 'purchase', value: 35, type: 'conversion' },
    { source: 'purchase', target: 'app-notification', value: 25, type: 'flow' },
    { source: 'app-notification', target: 'loyalty-points', value: 20, type: 'conversion' },
    { source: 'purchase', target: 'review-request', value: 15, type: 'flow' },
    { source: 'review-request', target: 'customer-review', value: 12, type: 'conversion' }
  ];

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const width = 800;
    const height = 500;
    const margin = { top: 20, right: 20, bottom: 20, left: 20 };

    svg.attr('width', width).attr('height', height);

    const g = svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Create color scales
    const colorScale = d3.scaleOrdinal()
      .domain(['touchpoint', 'action', 'outcome'])
      .range(['#3B82F6', '#10B981', '#F59E0B']);

    // Create force simulation
    const simulation = d3.forceSimulation(nodes as any)
      .force('link', d3.forceLink(links).id((d: any) => d.id).distance(100))
      .force('charge', d3.forceManyBody().strength(-300))
      .force('center', d3.forceCenter((width - margin.left - margin.right) / 2, (height - margin.top - margin.bottom) / 2))
      .force('collision', d3.forceCollide().radius((d: any) => Math.sqrt(d.value) * 2 + 5));

    // Create gradient definitions
    const defs = svg.append('defs');
    
    const gradient = defs.append('linearGradient')
      .attr('id', 'linkGradient')
      .attr('gradientUnits', 'userSpaceOnUse');
    
    gradient.append('stop')
      .attr('offset', '0%')
      .attr('stop-color', '#3B82F6')
      .attr('stop-opacity', 0.8);
    
    gradient.append('stop')
      .attr('offset', '100%')
      .attr('stop-color', '#10B981')
      .attr('stop-opacity', 0.3);

    // Create links
    const link = g.append('g')
      .attr('class', 'links')
      .selectAll('line')
      .data(links)
      .enter().append('line')
      .attr('stroke', (d: Link) => d.type === 'conversion' ? '#F59E0B' : 'url(#linkGradient)')
      .attr('stroke-width', (d: Link) => Math.sqrt(d.value) / 2)
      .attr('stroke-opacity', 0.6)
      .attr('stroke-dasharray', (d: Link) => d.type === 'conversion' ? '5,5' : 'none');

    // Create nodes
    const node = g.append('g')
      .attr('class', 'nodes')
      .selectAll('circle')
      .data(nodes)
      .enter().append('circle')
      .attr('r', (d: Node) => Math.sqrt(d.value) * 2)
      .attr('fill', (d: Node) => colorScale(d.type) as string)
      .attr('stroke', '#fff')
      .attr('stroke-width', 2)
      .style('cursor', 'pointer')
      .call(d3.drag<SVGCircleElement, Node>()
        .on('start', (event, d) => {
          if (!event.active) simulation.alphaTarget(0.3).restart();
          d.fx = d.x;
          d.fy = d.y;
        })
        .on('drag', (event, d) => {
          d.fx = event.x;
          d.fy = event.y;
        })
        .on('end', (event, d) => {
          if (!event.active) simulation.alphaTarget(0);
          d.fx = null;
          d.fy = null;
        }));

    // Add labels
    const labels = g.append('g')
      .attr('class', 'labels')
      .selectAll('text')
      .data(nodes)
      .enter().append('text')
      .text((d: Node) => d.label)
      .attr('font-size', 11)
      .attr('font-family', 'Inter, sans-serif')
      .attr('font-weight', 500)
      .attr('fill', '#374151')
      .attr('text-anchor', 'middle')
      .attr('dy', -5)
      .style('pointer-events', 'none');

    // Add value labels
    const valueLabels = g.append('g')
      .attr('class', 'value-labels')
      .selectAll('text')
      .data(nodes)
      .enter().append('text')
      .text((d: Node) => `${d.value}%`)
      .attr('font-size', 9)
      .attr('font-family', 'JetBrains Mono, monospace')
      .attr('font-weight', 600)
      .attr('fill', '#6B7280')
      .attr('text-anchor', 'middle')
      .attr('dy', 15)
      .style('pointer-events', 'none');

    // Add hover effects
    node
      .on('mouseover', function(event, d) {
        d3.select(this)
          .transition()
          .duration(200)
          .attr('r', Math.sqrt(d.value) * 2.5)
          .attr('stroke-width', 3);
        
        // Highlight connected links
        link
          .attr('stroke-opacity', (l: Link) => 
            l.source === d.id || l.target === d.id ? 1 : 0.1
          );
      })
      .on('mouseout', function(event, d) {
        d3.select(this)
          .transition()
          .duration(200)
          .attr('r', Math.sqrt(d.value) * 2)
          .attr('stroke-width', 2);
        
        // Reset link opacity
        link.attr('stroke-opacity', 0.6);
      });

    // Update positions on simulation tick
    simulation.on('tick', () => {
      link
        .attr('x1', (d: any) => d.source.x)
        .attr('y1', (d: any) => d.source.y)
        .attr('x2', (d: any) => d.target.x)
        .attr('y2', (d: any) => d.target.y);

      node
        .attr('cx', (d: Node) => d.x!)
        .attr('cy', (d: Node) => d.y!);

      labels
        .attr('x', (d: Node) => d.x!)
        .attr('y', (d: Node) => d.y!);

      valueLabels
        .attr('x', (d: Node) => d.x!)
        .attr('y', (d: Node) => d.y!);
    });

    // Add legend
    const legend = g.append('g')
      .attr('class', 'legend')
      .attr('transform', `translate(${width - margin.right - 150}, ${margin.top})`);

    const legendData = [
      { type: 'touchpoint', label: 'Touchpoints', color: '#3B82F6' },
      { type: 'action', label: 'Actions', color: '#10B981' },
      { type: 'outcome', label: 'Outcomes', color: '#F59E0B' }
    ];

    const legendItems = legend.selectAll('.legend-item')
      .data(legendData)
      .enter().append('g')
      .attr('class', 'legend-item')
      .attr('transform', (d, i) => `translate(0, ${i * 25})`);

    legendItems.append('circle')
      .attr('r', 8)
      .attr('fill', d => d.color)
      .attr('stroke', '#fff')
      .attr('stroke-width', 1);

    legendItems.append('text')
      .attr('x', 15)
      .attr('y', 5)
      .text(d => d.label)
      .attr('font-size', 12)
      .attr('font-family', 'Inter, sans-serif')
      .attr('fill', '#374151');

    return () => {
      simulation.stop();
    };
  }, []);

  return (
    <div className="w-full bg-white rounded-lg border border-gray-200 p-4">
      <div className="mb-4">
        <h4 className="text-lg font-semibold text-gray-900 mb-2">Customer Journey Visualization</h4>
        <p className="text-sm text-gray-600">
          Interactive force-directed graph showing customer touchpoints, actions, and outcomes.
          Hover over nodes to explore connections. Drag to rearrange.
        </p>
      </div>
      <svg ref={svgRef} className="w-full border border-gray-100 rounded"></svg>
    </div>
  );
};

export default CustomerJourneyGraph;
