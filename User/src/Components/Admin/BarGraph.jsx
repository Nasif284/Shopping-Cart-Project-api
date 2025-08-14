import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// Example data — replace with your real user data
const data = [
  { name: "Mon", users: 120 },
  { name: "Tue", users: 150 },
  { name: "Wed", users: 80 },
  { name: "Thu", users: 200 },
  { name: "Fri", users: 170 },
  { name: "Sat", users: 140 },
  { name: "Sun", users: 100 },
];

// Tooltip style
const tooltipStyles = {
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  padding: "10px",
  borderRadius: "5px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  color: "#333",
  fontSize: "14px",
  fontFamily: "inter",
};

// Custom tooltip
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip" style={tooltipStyles}>
        <p className="label">{label}</p>
        <p className="intro">{`Users: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const Performance = ({ show }) => {
  return (
    <div className="performance">
      <ResponsiveContainer width={show ? 530 : 700} height={280}>
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 5,
            bottom: 5,
            left: 0,
          }}
        >
          <defs>
            <linearGradient id="userBar" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#c0a1ff" />
              <stop offset="100%" stopColor="#9967ff" />
            </linearGradient>
          </defs>

          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            style={{
              fontSize: "11px",
              fontFamily: "inter",
            }}
          />
          <YAxis
            style={{
              fontSize: "11px",
              fontFamily: "inter",
            }}
          />

          <Tooltip content={<CustomTooltip />} />

          <Bar dataKey="users" barSize={30} fill="url(#userBar)" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Performance;
