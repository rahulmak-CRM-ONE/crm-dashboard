import { useState, useEffect } from "react";

import FilterBar from "../../components/FilterBar/FilterBar";
import LeadsTable from "../../components/LeadsTable/LeadsTable";
import AddLeadModal from "../../components/AddLeadModal/AddLeadModal";

const defaultLeads = [
  
];

function Leads() {
  const [showModal, setShowModal] = useState(false);

  const [editingLead, setEditingLead] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);

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

  const handleUpdateLead = (updatedLead) => {
    const updatedLeads = [...leads];

    updatedLeads[editingIndex] = updatedLead;

    setLeads(updatedLeads);

    setEditingLead(null);
    setEditingIndex(null);
    setShowModal(false);
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

  const handleEditLead = (index) => {
    setEditingLead(leads[index]);
    setEditingIndex(index);
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
            setEditingIndex(null);
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
          setEditingIndex(null);
        }}
        onAddLead={handleAddLead}
        onUpdateLead={handleUpdateLead}
        editingLead={editingLead}
        editingIndex={editingIndex}
      />
    </>
  );
}

export default Leads;