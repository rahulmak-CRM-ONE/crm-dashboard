import "./Header.css";
import { FiSearch, FiBell } from "react-icons/fi";

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <h1>Dashboard</h1>
      </div>

      <div className="header-right">
        <div className="search-box">
          <FiSearch />
          <input
            type="text"
            placeholder="Search leads, companies..."
          />
        </div>

        <button className="notification-btn">
          <FiBell />
        </button>

        <div className="user-profile">
          <div className="avatar">M</div>

          <div className="user-info">
            <span className="user-name">Maharshi</span>
            <span className="user-role">Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;