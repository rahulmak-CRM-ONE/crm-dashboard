import "./LeadsTable.css";
import { motion } from "framer-motion";

function LeadsTable({
leads,
onDeleteLead,
onEditLead,
}) {
return ( <div className="table-card"> <div className="table-header"> <h3>Leads</h3> </div>


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
        <motion.tr
          key={lead.id || index}
          initial={{
            opacity: 0,
            x: -20,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.3,
            delay: index * 0.05,
          }}
        >
          <td>{lead.customer}</td>
          <td>{lead.company}</td>
          <td>{lead.industry}</td>

          <td>
            <span className="status-badge">
              {lead.status}
            </span>
          </td>

          <td>{lead.stage}</td>
          <td>{lead.value}</td>
          <td>{lead.owner}</td>
          <td>{lead.source}</td>

          <td>
            <div className="action-buttons">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="edit-btn"
                onClick={() =>
                  onEditLead(lead)
                }
              >
                Edit
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="delete-btn"
                onClick={() =>
                  onDeleteLead(lead.id)
                }
              >
                Delete
              </motion.button>
            </div>
          </td>
        </motion.tr>
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
