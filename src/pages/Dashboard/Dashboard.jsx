import DashboardCards from "../../components/DashboardCards/DashboardCards";
import DashboardCharts from "../../components/DashboardCharts/DashboardCharts";
import MonthlyTrendChart from "../../components/MonthlyTrendChart/MonthlyTrendChart";
import RecentLeads from "../../components/RecentLeads/RecentLeads";

function Dashboard() {
  return (
    <>
      <DashboardCards />
      <DashboardCharts />
      <MonthlyTrendChart />
      <RecentLeads />
    </>
  );
}

export default Dashboard;