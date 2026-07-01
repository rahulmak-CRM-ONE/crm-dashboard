import "./DashboardCharts.css";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";

function DashboardCharts() {
  const leads =
    JSON.parse(localStorage.getItem("crm-leads")) || [];

  const newLeads = leads.filter(
    (lead) => lead.status === "New"
  ).length;

  const contactedLeads = leads.filter(
    (lead) => lead.status === "Contacted"
  ).length;

  const qualifiedLeads = leads.filter(
    (lead) => lead.status === "Qualified"
  ).length;

  const statusData = [
    {
      name: "New",
      value: newLeads,
    },
    {
      name: "Contacted",
      value: contactedLeads,
    },
    {
      name: "Qualified",
      value: qualifiedLeads,
    },
  ];

  const sourceData = [
    {
      name: "Website",
      value: leads.filter(
        (lead) => lead.source === "Website"
      ).length,
    },
    {
      name: "Referral",
      value: leads.filter(
        (lead) => lead.source === "Referral"
      ).length,
    },
    {
      name: "LinkedIn",
      value: leads.filter(
        (lead) => lead.source === "LinkedIn"
      ).length,
    },
    {
      name: "Manual",
      value: leads.filter(
        (lead) => lead.source === "Manual Entry"
      ).length,
    },
  ];

  const COLORS = [
    "#2563eb",
    "#10b981",
    "#f59e0b",
    "#ef4444",
  ];

  return (
    <div className="dashboard-charts">
      <div className="chart-card">
        <h3>Lead Status Overview</h3>

        <ResponsiveContainer
          width="100%"
          height={300}
        >
          <BarChart data={statusData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />

            <Bar
              dataKey="value"
              fill="#2563eb"
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-card">
        <h3>Lead Sources</h3>

        <ResponsiveContainer
          width="100%"
          height={300}
        >
          <PieChart>
            <Pie
              data={sourceData}
              dataKey="value"
              nameKey="name"
              outerRadius={100}
              label
            >
              {sourceData.map(
                (entry, index) => (
                  <Cell
                    key={index}
                    fill={
                      COLORS[
                        index % COLORS.length
                      ]
                    }
                  />
                )
              )}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default DashboardCharts;