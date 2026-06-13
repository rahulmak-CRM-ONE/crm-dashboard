import "./FilterBar.css";

function FilterBar() {
  return (
    <div className="filter-container">
      <div className="filter-header">
        <h3>Filters</h3>
      </div>

      <div className="filter-row">
        <input
          type="text"
          placeholder="Search name, company..."
          className="filter-input"
        />

        <select className="filter-select">
          <option>Status</option>
        </select>

        <select className="filter-select">
          <option>Industry</option>
        </select>

        <select className="filter-select">
          <option>Region</option>
        </select>

        <select className="filter-select">
          <option>Assignee</option>
        </select>

        <select className="filter-select">
          <option>Source</option>
        </select>
      </div>
    </div>
  );
}

export default FilterBar;