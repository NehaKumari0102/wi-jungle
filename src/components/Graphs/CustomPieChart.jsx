import { useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import { PieChart, Pie, Tooltip, Legend, Cell, ResponsiveContainer } from "recharts";

const CustomPieChart = ({ data }) => {
  const [chartData, setChartData] = useState([]);
  const is600px = useMediaQuery("(min-width: 600px)")
  const is500px = useMediaQuery("(min-width: 500px)")
  const colors = [
    "#ff3838",
    "#fa8c25",
    "#faec25",
    "#82ca9d",
    "#a4de6c",
    "#d0ed57",
    "#ffc658",
  ];

  useEffect(() => {
    processChartData();
  }, []);

  const processChartData = () => {
    const alertCounts = {};

    data.forEach((item) => {
      const { alert } = item;
      if (alert) {
        const { category } = alert;
        if (category) {
          alertCounts[category] = alertCounts[category]
            ? alertCounts[category] + 1
            : 1;
        }
      }
    });

    const formattedData = Object.keys(alertCounts).map((category, index) => ({
      name: category,
      value: alertCounts[category],
      color: colors[index % colors.length],
    }));

    setChartData(formattedData);
  };

  return (
    <div className="bg-[#1a1a1f] rounded-lg p-4">
      <h1 className="text-center text-2xl font-semibold my-2">Alert</h1>
      <ResponsiveContainer width="100%" height={is600px ? 350 : 250}>
        <PieChart >
          <Pie
            dataKey="value"
            data={chartData}
            cx="50%"
            cy="50%"
            outerRadius={is600px ? 100 : is500px ? 70 : 60}
            label
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>

      </ResponsiveContainer>
    </div>
  );
};

export default CustomPieChart;
