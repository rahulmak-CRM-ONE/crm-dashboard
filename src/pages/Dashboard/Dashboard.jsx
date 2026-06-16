import DashboardCards from "../../components/DashboardCards/DashboardCards";
import DashboardCharts from "../../components/DashboardCharts/DashboardCharts";
import RecentLeads from "../../components/RecentLeads/RecentLeads";

function Dashboard() {
  return (
    <>
      <DashboardCards />
      <DashboardCharts />
      <RecentLeads />
    </>
  );
}

export default Dashboard;