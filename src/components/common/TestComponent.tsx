import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'Product A', sales: 350 },
  { name: 'Product B', sales: 500 },
  { name: 'Product C', sales: 200 },
  { name: 'Product D', sales: 750 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const CustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, payload } : any) => {
  const RADIAN = Math.PI / 180;
  const radius = 25 + innerRadius + (outerRadius - innerRadius);
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="#8884d8" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${payload.name} (${payload.sales})`}
    </text>
  );
};

const TestComponent = () => {
  return (
    <PieChart width={400} height={300}>
      <Pie
        data={data}
        dataKey="sales"
        cx={200}
        cy={150}
        innerRadius={60}
        outerRadius={80}
        labelLine={false}
        label={CustomLabel}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend verticalAlign="bottom" height={36} />
    </PieChart>
  );
};

export default TestComponent;
