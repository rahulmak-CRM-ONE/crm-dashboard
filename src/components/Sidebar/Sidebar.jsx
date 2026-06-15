import "./Sidebar.css";
import { NavLink } from "react-router-dom";

import {
  FiGrid,
  FiUsers,
  FiCalendar,
  FiTrendingUp,
  FiLock,
  FiLogOut,
} from "react-icons/fi";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div>
        <div className="sidebar-logo">
          Maharshi Sales CRM
        </div>

        <div className="menu-section">
          <span className="menu-title">OVERVIEW</span>

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "menu-item active" : "menu-item"
            }
          >
            <FiGrid />
            <span>Dashboard</span>
          </NavLink>
        </div>

        <div className="menu-section">
          <span className="menu-title">SALES</span>

          <NavLink
            to="/leads"
            className={({ isActive }) =>
              isActive ? "menu-item active" : "menu-item"
            }
          >
            <FiUsers />
            <span>Leads</span>
          </NavLink>

          <NavLink
            to="/followups"
            className={({ isActive }) =>
              isActive ? "menu-item active" : "menu-item"
            }
          >
            <FiCalendar />
            <span>Follow-ups</span>
          </NavLink>

          <NavLink
            to="/sales-funnel"
            className={({ isActive }) =>
              isActive ? "menu-item active" : "menu-item"
            }
          >
            <FiTrendingUp />
            <span>Sales Funnel</span>
          </NavLink>
        </div>

        <div className="menu-section">
          <span className="menu-title">SETTINGS</span>

          <div className="menu-item">
            <FiLock />
            <span>Change Password</span>
          </div>
        </div>
      </div>

      <div className="sidebar-footer">
        <div className="user-card">
          <div className="user-avatar">M</div>

          <div>
            <div className="user-name">
              Maharshi
            </div>

            <div className="user-role">
              Admin
            </div>
          </div>
        </div>

        <div className="logout-btn">
          <FiLogOut />
          <span>Logout</span>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;