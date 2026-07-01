import { useState, useEffect } from "react";

import FilterBar from "../../components/FilterBar/FilterBar";
import LeadsTable from "../../components/LeadsTable/LeadsTable";
import AddLeadModal from "../../components/AddLeadModal/AddLeadModal";
import { updateLeadById } from "../../utils/leadUtils";

function Leads() {
  const [showModal, setShowModal] = useState(false);

  const [editingLead, setEditingLead] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/leads")
      .then((response) => response.json())
      .then((data) => {
        setLeads(data);
      })
      .catch((error) => {
        console.error("Error fetching leads:", error);
      });
  }, []);

  const handleAddLead = (newLead) => {
    setLeads((prevLeads) => [newLead, ...prevLeads]);
  };

  const handleUpdateLead = async (updatedLead) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/leads/${updatedLead.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedLead),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update lead");
      }

      setLeads((prevLeads) => updateLeadById(prevLeads, updatedLead.id, updatedLead));
      setEditingLead(null);
      setShowModal(false);
      return true;
    } catch (error) {
      console.error("Error updating lead:", error);
      return false;
    }
  };

  const handleDeleteLead = async (leadId) => {
  try {
    await fetch(
      `http://localhost:5000/api/leads/${leadId}`,
      {
        method: "DELETE",
      }
    );

    setLeads((prevLeads) =>
      prevLeads.filter(
        (lead) => lead.id !== leadId
      )
    );
  } catch (error) {
    console.error(error);
  }
};

  const handleEditLead = (lead) => {
    setEditingLead(lead);
    setShowModal(true);
  };

  const filteredLeads = leads.filter((lead) => {
    const search = searchTerm.toLowerCase();

    const matchesSearch =
      lead.customer?.toLowerCase().includes(search) ||
      lead.company?.toLowerCase().includes(search) ||
      lead.email?.toLowerCase().includes(search);

    const matchesStatus =
      statusFilter === "All" ||
      lead.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h2>Leads Management</h2>

        <button
          onClick={() => {
            setEditingLead(null);
            setShowModal(true);
          }}
          style={{
            background: "#2563eb",
            color: "#fff",
            border: "none",
            padding: "12px 18px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          + Add Lead
        </button>
      </div>

      <FilterBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />

      <LeadsTable
        leads={filteredLeads}
        onDeleteLead={handleDeleteLead}
        onEditLead={handleEditLead}
      />

      <AddLeadModal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
          setEditingLead(null);
        }}
        onAddLead={handleAddLead}
        onUpdateLead={handleUpdateLead}
        editingLead={editingLead}
      />
    </>
  );
}

export default Leads;