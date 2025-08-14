import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine, Area } from "recharts";
const data = [
  {
    name: "01 OCT",
    uv: 700,
    pv: 1300,
  },
  {
    name: "02 COT",
    uv: 600,
    pv: 900,
  },
  {
    name: "03 OCT",
    uv: 700,
    pv: 1500,
  },
  {
    name: "04 OCT",
    uv: 750,
    pv: 1300,
  },
  {
    name: "05 OCT",
    uv: 650,
    pv: 1000,
  },
  {
    name: "06 OCT",
    uv: 500,
    pv: 1200,
  },
  {
    name: "07 OCT",
    uv: 400,
    pv: 1000,
  },
  {
    name: "08 OCT",
    uv: 750,
    pv: 1100,
  },
  {
    name: "09 OCT",
    uv: 1300,
    pv: 1000,
  },
];

const LineGraph = ({show}) => {
  return (
    <div className="completed">
    
      <div className="chart-container">
        <LineChart
          width={show ? 530 : 700}
          height={280}
          data={data}
          margin={{
            top: 20,
            right: 5,
            bottom: 5,
            left: -20,
          }}
          padding={{
            left: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />

          <XAxis
            dataKey="name"
            strokeWidth={0}
            style={{
              fontSize: "11px",
              fontFamily: "inter",
            }}
            padding={{ left: 30, right: 0 }}
          />

          <YAxis
            strokeDasharray="3 3"
            type="number"
            strokeWidth={0}
            style={{
              fontSize: "11px",
              fontFamily: "inter",
            }}
          />

          <Tooltip style={{}} cursor={{ stroke: "#8042ff" }} />

          <Line activeDot={{ r: 5 }} type="monotone" fill="url(#colorUv)" strokeLinecap="round" strokeWidth={3} dot={false} dataKey="pv" stroke="#8042ff" />
          <Line activeDot={{ r: 5 }} type="monotone" dataKey="uv" strokeWidth={3} strokeLinecap="round" dot={false} stroke="#00b879" />
        </LineChart>
      </div>
    </div>
  );
};

export default LineGraph;
