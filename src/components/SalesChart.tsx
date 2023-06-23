import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, } from 'recharts';

const data = [
  { month: 'Nov', year: "2022", sales: 600 },
  { month: 'Dec', year: "2022", sales: 700 },
  { month: 'Jan', year: "2023", sales: 300 },
  { month: 'Feb', year: "2023", sales: 800 },
  { month: 'Mar', year: "2023", sales: 550 },
  { month: 'Apr', year: "2023", sales: 300 },
  { month: 'May', year: "2023", sales: 500 },
  { month: 'June', year: "2023", sales: 150 },
];

const SalesChart: React.FC = () => {
  return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={({ year, month }) => `${month} ${year}`} />
          <YAxis />
          <Tooltip />
          <Bar dataKey="sales" fill="#5f483d" label={{ position: 'top' }}>
            {data.map((entry, index) => (
              <text
                x={index * 100 + 25}
                y={280}
                textAnchor="middle"
                dominantBaseline="middle"
                key={`label-${index}`}
              >
                {`${entry.month}`}
              </text>
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
  );
};

export default SalesChart;