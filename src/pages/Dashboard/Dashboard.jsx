import DashboardCards from "../../components/DashboardCards/DashboardCards";
import FilterBar from "../../components/FilterBar/FilterBar";
import LeadsTable from "../../components/LeadsTable/LeadsTable";

function Dashboard() {
  return (
    <>
      <DashboardCards />
      <FilterBar />
      <LeadsTable />
    </>
  );
}

export default Dashboard;