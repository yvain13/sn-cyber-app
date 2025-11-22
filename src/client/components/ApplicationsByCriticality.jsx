import React, { useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function ApplicationsByCriticality({ applications }) {
  const chartData = useMemo(() => {
    const criticalityCounts = {};
    
    applications.forEach(app => {
      const criticality = typeof app.criticality === 'object' ? 
        app.criticality.display_value : app.criticality;
      const key = criticality || 'None';
      criticalityCounts[key] = (criticalityCounts[key] || 0) + 1;
    });

    const colors = {
      'Low': '#28a745',
      'Medium': '#ffc107', 
      'High': '#fd7e14',
      'Critical': '#dc3545',
      'None': '#6c757d'
    };

    return Object.entries(criticalityCounts).map(([name, value]) => ({
      name,
      value,
      fill: colors[name] || '#8884d8'
    }));
  }, [applications]);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="recharts-default-tooltip">
          <p>{`${label}: ${payload[0].value} applications`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="widget-card">
      <h2 className="widget-title">Applications by Criticality</h2>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="name" 
              stroke="#666"
              fontSize={12}
            />
            <YAxis stroke="#666" fontSize={12} />
            <Tooltip content={<CustomTooltip />} />
            <Bar 
              dataKey="value" 
              radius={[4, 4, 0, 0]}
              style={{
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
                transition: 'all 0.3s ease'
              }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}