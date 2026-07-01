import "./Sidebar.css";
import { NavLink } from "react-router-dom";

import {
  FiGrid,
  FiUsers,
  FiCalendar,
  FiTrendingUp,
  FiLock,
  FiLogOut,
  FiX,
} from "react-icons/fi";

function Sidebar({ isOpen, onClose }) {
  return (
    <>
      <div
        className={`sidebar-overlay ${isOpen ? "show" : ""}`}
        onClick={onClose}
      />

      <aside className={`sidebar ${isOpen ? "open" : "collapsed"}`}>
        <div>
          <div className="sidebar-top-row">
            <div className="sidebar-logo">
              Maharshi Sales CRM
            </div>

            <button
              className="mobile-close-btn"
              onClick={onClose}
              type="button"
              aria-label="Close menu"
            >
              <FiX />
            </button>
          </div>

        <div className="menu-section">
          <span className="menu-title">OVERVIEW</span>

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "menu-item active" : "menu-item"
            }
            onClick={onClose}
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
            onClick={onClose}
          >
            <FiUsers />
            <span>Leads</span>
          </NavLink>

          <NavLink
            to="/followups"
            className={({ isActive }) =>
              isActive ? "menu-item active" : "menu-item"
            }
            onClick={onClose}
          >
            <FiCalendar />
            <span>Follow-ups</span>
          </NavLink>

          <NavLink
            to="/sales-funnel"
            className={({ isActive }) =>
              isActive ? "menu-item active" : "menu-item"
            }
            onClick={onClose}
          >
            <FiTrendingUp />
            <span>Sales Funnel</span>
          </NavLink>
        </div>

        <div className="menu-section">
          <span className="menu-title">SETTINGS</span>

          <div className="menu-item" onClick={onClose}>
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

          <div className="logout-btn" onClick={onClose}>
            <FiLogOut />
            <span>Logout</span>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;