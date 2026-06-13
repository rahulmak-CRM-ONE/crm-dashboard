import "./Sidebar.css";

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

          <div className="menu-item active">
            <FiGrid />
            <span>Dashboard</span>
          </div>
        </div>

        <div className="menu-section">
          <span className="menu-title">SALES</span>

          <div className="menu-item">
            <FiUsers />
            <span>Leads</span>
          </div>

          <div className="menu-item">
            <FiCalendar />
            <span>Follow-ups</span>
          </div>

          <div className="menu-item">
            <FiTrendingUp />
            <span>Sales Funnel</span>
          </div>
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