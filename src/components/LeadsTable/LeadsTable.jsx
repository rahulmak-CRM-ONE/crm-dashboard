import "./LeadsTable.css";

function LeadsTable() {
  const leads = [
    {
      customer: "Ram Sharma",
      company: "Nirisha Ventures",
      industry: "Lubricants",
      status: "New",
      stage: "Prospecting",
      value: "₹0",
      owner: "Parth",
      source: "Website",
    },
    {
      customer: "Vijay Patel",
      company: "Shree Industries",
      industry: "Manufacturing",
      status: "Contacted",
      stage: "Qualified",
      value: "₹25,000",
      owner: "Maharshi",
      source: "Referral",
    },
    {
      customer: "Amit Singh",
      company: "ABC Traders",
      industry: "Retail",
      status: "Follow-up",
      stage: "Proposal",
      value: "₹75,000",
      owner: "Unassigned",
      source: "LinkedIn",
    },
  ];

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
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        Showing 1–3 of 3 leads
      </div>
    </div>
  );
}

export default LeadsTable;