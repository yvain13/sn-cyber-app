import React, { useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function SecurityIncidentsBySeverity({ incidents }) {
  const chartData = useMemo(() => {
    const severityCounts = {};
    
    incidents.forEach(incident => {
      const severity = typeof incident.severity === 'object' ? 
        incident.severity.display_value : incident.severity;
      const key = severity || 'None';
      severityCounts[key] = (severityCounts[key] || 0) + 1;
    });

    const colors = {
      'Low': '#28a745',
      'Medium': '#ffc107',
      'High': '#fd7e14', 
      'Critical': '#dc3545',
      'None': '#6c757d'
    };

    return Object.entries(severityCounts).map(([name, value]) => ({
      name,
      value,
      fill: colors[name] || '#8884d8'
    }));
  }, [incidents]);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="recharts-default-tooltip">
          <p>{`${label}: ${payload[0].value} incidents`}</p>
        </div>
      );
    }
    return null;
  };

  const CustomLabelList = (props) => {
    const { x, y, width, value } = props;
    if (value === 0) return null;
    
    return (
      <text 
        x={x + width / 2} 
        y={y - 5} 
        fill="#2c3e50" 
        textAnchor="middle" 
        fontSize={12}
        fontWeight="600"
      >
        {value}
      </text>
    );
  };

  return (
    <div className="widget-card">
      <h2 className="widget-title">Security Incidents by Severity</h2>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart 
            data={chartData} 
            margin={{ top: 30, right: 30, left: 20, bottom: 5 }}
          >
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
            >
              <CustomLabelList />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}