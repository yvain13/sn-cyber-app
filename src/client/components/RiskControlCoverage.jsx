import React, { useMemo } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export default function RiskControlCoverage({ riskControls }) {
  const chartData = useMemo(() => {
    const controlTypeCounts = {};
    
    riskControls.forEach(control => {
      const type = typeof control.control_type === 'object' ? 
        control.control_type.display_value : control.control_type;
      const key = type || 'None';
      controlTypeCounts[key] = (controlTypeCounts[key] || 0) + 1;
    });

    const colors = {
      'Preventive': '#28a745',
      'Detective': '#17a2b8', 
      'Corrective': '#ffc107',
      'None': '#6c757d'
    };

    return Object.entries(controlTypeCounts).map(([name, value]) => ({
      name,
      value,
      fill: colors[name] || '#8884d8',
      percentage: riskControls.length > 0 ? ((value / riskControls.length) * 100).toFixed(1) : 0
    }));
  }, [riskControls]);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="recharts-default-tooltip">
          <p>{`${data.name}: ${data.value} controls (${data.percentage}%)`}</p>
        </div>
      );
    }
    return null;
  };

  const CustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, value, percentage }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text 
        x={x} 
        y={y} 
        fill="white" 
        textAnchor={x > cx ? 'start' : 'end'} 
        dominantBaseline="central"
        fontSize={12}
        fontWeight="bold"
      >
        {`${percentage}%`}
      </text>
    );
  };

  return (
    <div className="widget-card">
      <h2 className="widget-title">Risk Control Coverage</h2>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={CustomLabel}
              outerRadius={100}
              innerRadius={40}
              fill="#8884d8"
              dataKey="value"
              style={{
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
              }}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              verticalAlign="bottom" 
              height={36}
              formatter={(value, entry) => (
                <span style={{ color: entry.color, fontWeight: '500' }}>
                  {value}
                </span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}