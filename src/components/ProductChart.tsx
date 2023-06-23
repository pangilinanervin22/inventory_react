import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

interface ProductData {
  name: string;
  sales: number;
}

const ProductChart: React.FC = () => {
  // Sample data for the pie graph
  const data: ProductData[] = [
    { name: 'Product A', sales: 200 },
    { name: 'Product C', sales: 300 },
    { name: 'Product D', sales: 180 },
    { name: 'Product E', sales: 250 },
  ];

  const COLORS = ['#E8C3B8', '#C08878', '#9D7E22', '#5f483d' , '#FF8042'];


  // Custom label for each pie slice
  const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, payload }: any) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius);
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <>
        <text x={x} y={y} fill="black" fontSize="10px" fontFamily='trocchi' textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
          {`${payload.name}  (${payload.sales})`}
        </text>
      </>
    );
  };

  return (
    <ResponsiveContainer width="100%" height="100%" >
      <PieChart >
        <Pie
          data={data}
          dataKey="sales"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          labelLine={false}
          label={renderCustomLabel}
          stroke='none'
        >
          {data.map((entry, index) => (
            // <Cell key={`cell-${index}`} fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`} />
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default ProductChart;