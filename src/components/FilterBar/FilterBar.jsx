import "./FilterBar.css";

function FilterBar({
  searchTerm,
  setSearchTerm,
  statusFilter,
  setStatusFilter,
}) {
  return (
    <div className="filter-container">
      <div className="filter-header">
        <h3>Filters</h3>
      </div>

      <div className="filter-row">
        <input
          type="text"
          placeholder="Search name, company, email..."
          className="filter-input"
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
        />

        <select
          className="filter-select"
          value={statusFilter}
          onChange={(e) =>
            setStatusFilter(e.target.value)
          }
        >
          <option value="All">All Status</option>
          <option value="New">New</option>
          <option value="Contacted">
            Contacted
          </option>
          <option value="Qualified">
            Qualified
          </option>
          <option value="Follow-up">
            Follow-up
          </option>
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