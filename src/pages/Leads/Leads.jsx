import { useState, useEffect } from "react";

import FilterBar from "../../components/FilterBar/FilterBar";
import LeadsTable from "../../components/LeadsTable/LeadsTable";
import AddLeadModal from "../../components/AddLeadModal/AddLeadModal";
import { updateLeadById } from "../../utils/leadUtils";
import { API } from "../../config";

function Leads() {
  const [showModal, setShowModal] = useState(false);

  const [editingLead, setEditingLead] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [leads, setLeads] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    let isMounted = true;

    setIsLoading(true);
    setErrorMessage("");

    fetch(`${API}/api/leads`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch leads");
        }

        return response.json();
      })
      .then((data) => {
        if (!isMounted) return;

        const normalizedLeads = Array.isArray(data)
          ? data
          : Array.isArray(data?.leads)
            ? data.leads
            : [];

        setLeads(normalizedLeads);
        setErrorMessage(
          normalizedLeads.length === 0 ? "No leads available right now." : ""
        );
      })
      .catch((error) => {
        if (!isMounted) return;

        console.error("Error fetching leads:", error);
        setLeads([]);
        setErrorMessage("Unable to load leads. Please try again later.");
      })
      .finally(() => {
        if (isMounted) {
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const handleAddLead = (newLead) => {
    setLeads((prevLeads) => [newLead, ...prevLeads]);
  };

  const handleUpdateLead = async (updatedLead) => {
    try {
      const response = await fetch(
        `${API}/api/leads/${updatedLead.id}`,
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

      setLeads((prevLeads) =>
        updateLeadById(prevLeads, updatedLead.id, updatedLead)
      );

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
      const response = await fetch(
        `${API}/api/leads/${leadId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete lead");
      }

      setLeads((prevLeads) =>
        prevLeads.filter((lead) => lead.id !== leadId)
      );
    } catch (error) {
      console.error("Error deleting lead:", error);
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

      {isLoading ? (
        <p style={{ color: "#64748b", marginTop: "12px" }}>
          Loading leads...
        </p>
      ) : errorMessage ? (
        <p
          style={{
            color: "#dc2626",
            marginTop: "12px",
            background: "#fef2f2",
            padding: "12px 16px",
            borderRadius: "8px",
          }}
        >
          {errorMessage}
        </p>
      ) : (
        <>
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
        </>
      )}

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