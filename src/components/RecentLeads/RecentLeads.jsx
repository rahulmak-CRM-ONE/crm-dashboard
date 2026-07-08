import "./RecentLeads.css";

function RecentLeads() {
  const leads =
    JSON.parse(localStorage.getItem("crm-leads")) || [];

  const recentLeads = [...leads].slice(0, 5);

  return (
    <div className="recent-leads-card">
      <div className="recent-header">
        <h3>Recent Leads</h3>
      </div>

      {recentLeads.length === 0 ? (
        <p>No leads available</p>
      ) : (
        <table className="recent-table">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Company</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {recentLeads.map((lead, index) => (
              <tr key={index}>
                <td>{lead.customer}</td>
                <td>{lead.company}</td>
                <td>
                  <span
                    className={`status-badge ${lead.status.toLowerCase()}`}
                  >
                    {lead.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default RecentLeads;