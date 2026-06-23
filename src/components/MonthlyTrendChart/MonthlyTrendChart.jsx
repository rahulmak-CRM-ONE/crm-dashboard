import "./MonthlyTrendChart.css";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

function MonthlyTrendChart() {
  const leads =
    JSON.parse(localStorage.getItem("crm-leads")) || [];

  const monthlyData = {};

  leads.forEach((lead) => {
    if (!lead.createdAt) return;

    const date = new Date(lead.createdAt);

    const month =
      date.toLocaleString("default", {
        month: "short",
      });

    monthlyData[month] =
      (monthlyData[month] || 0) + 1;
  });

  const chartData = Object.keys(monthlyData).map(
    (month) => ({
      month,
      leads: monthlyData[month],
    })
  );

  return (
    <div className="trend-card">
      <h3>Monthly Lead Trend</h3>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="leads"
            stroke="#2563eb"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default MonthlyTrendChart;