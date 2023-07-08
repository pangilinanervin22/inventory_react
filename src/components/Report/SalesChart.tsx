import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, } from 'recharts';
import { getReportSales } from '../../api';
import { useQuery } from '@tanstack/react-query';

const defaultData = [
  { month: 'Apr', year: "2023", sales: 0 },
  { month: 'May', year: "2023", sales: 0 },
  { month: 'June', year: "2023", sales: 0 },
];

const SalesChart: React.FC = () => {
  const { data: fetchedData, isSuccess } = useQuery({ queryKey: ['totalSales'], queryFn: getReportSales });
  const data = isSuccess ? fetchedData : defaultData;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={({ year, month }) => `${month} ${year}`} />
        <YAxis />
        <Tooltip />
        <Bar dataKey="total_sales" fill="#5f483d" label={{ position: 'top' }}>
          {data.map((entry: { month: any; }, index: number) => (
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