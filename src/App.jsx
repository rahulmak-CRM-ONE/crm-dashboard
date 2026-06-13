import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";

import Dashboard from "./pages/Dashboard/Dashboard";
import Leads from "./pages/Leads/Leads";
import FollowUps from "./pages/FollowUps/FollowUps";
import SalesFunnel from "./pages/SalesFunnel/SalesFunnel";

import "./App.css";

function App() {
  return (
    <div className="app-layout">
      <Sidebar />

      <main className="main-content">
        <Header />

        <div className="page-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />

            <Route
              path="/dashboard"
              element={<Dashboard />}
            />

            <Route
              path="/leads"
              element={<Leads />}
            />

            <Route
              path="/followups"
              element={<FollowUps />}
            />

            <Route
              path="/sales-funnel"
              element={<SalesFunnel />}
            />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;