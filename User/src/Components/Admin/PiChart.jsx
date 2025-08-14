
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip, Legend, Text } from "recharts";

// Example order status data — replace with your real counts
const data = [
  { name: "Pending", value: 120 },
  { name: "Confirmed", value: 90 },
  { name: "Delivered", value: 200 },
  { name: "Cancelled", value: 40 },
  { name: "Returned", value: 25 },
];

// Status colors
const COLORS = ["#FFA500", "#00C49F", "#4CAF50", "#FF4C4C", "#8A2BE2"];

const RADIAN = Math.PI / 180;

// Custom percentage label
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? "start" : "end"} dominantBaseline="central" style={{ fontSize: "12px", fontFamily: "inter" }}>
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function OrderStatusChart({show}) {
    return (
      <PieChart width={show ? 530 : 700}  height={270}>
        <Pie data={data} cx="50%" cy="50%" labelLine={false} label={renderCustomizedLabel} outerRadius={100} dataKey="value">
          {data.map((entry, index) => (
            <Cell key={`cell-${entry.name}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(value, name) => [`${value} Orders`, name]} contentStyle={{ fontFamily: "inter", fontSize: "13px" }} />

        <Legend verticalAlign="bottom" align="center" iconSize={10} wrapperStyle={{  fontFamily: "inter", fontSize: "13px" }} />
      </PieChart>
    );
}
