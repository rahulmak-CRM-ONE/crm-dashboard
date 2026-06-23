import "./LeadsTable.css";

function LeadsTable({
  leads,
  onDeleteLead,
  onEditLead,
}) {
  return (
    <div className="table-card">
      <div className="table-header">
        <h3>Leads</h3>
      </div>

      <table className="crm-table">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Company</th>
            <th>Industry</th>
            <th>Status</th>
            <th>Offer Stage</th>
            <th>Value</th>
            <th>Owner</th>
            <th>Source</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {leads.map((lead, index) => (
            <tr key={index}>
              <td>{lead.customer}</td>
              <td>{lead.company}</td>
              <td>{lead.industry}</td>
              <td>{lead.status}</td>
              <td>{lead.stage}</td>
              <td>{lead.value}</td>
              <td>{lead.owner}</td>
              <td>{lead.source}</td>

              <td>
                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                  }}
                >
                  <button
                    onClick={() => onEditLead(index)}
                    style={{
                      background: "#2563eb",
                      color: "#fff",
                      border: "none",
                      padding: "6px 10px",
                      borderRadius: "6px",
                      cursor: "pointer",
                    }}
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => onDeleteLead(lead.id)}
                    style={{
                      background: "#ef4444",
                      color: "#fff",
                      border: "none",
                      padding: "6px 10px",
                      borderRadius: "6px",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        Showing {leads.length} lead(s)
      </div>
    </div>
  );
}

export default LeadsTable;