import { useState, useEffect } from "react";
import "./AddLeadModal.css";

function AddLeadModal({
  isOpen,
  onClose,
  onAddLead,
  onUpdateLead,
  editingLead,
}) {
  const [formData, setFormData] = useState({
    customer: "",
    company: "",
    industry: "",
    phone: "",
    email: "",
    status: "New",
  });

  useEffect(() => {
    if (editingLead) {
      setFormData({
        customer: editingLead.customer || "",
        company: editingLead.company || "",
        industry: editingLead.industry || "",
        phone: editingLead.phone || "",
        email: editingLead.email || "",
        status: editingLead.status || "New",
      });
    } else {
      setFormData({
        customer: "",
        company: "",
        industry: "",
        phone: "",
        email: "",
        status: "New",
      });
    }
  }, [editingLead, isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 const handleSave = async () => {
  const leadData = {
    customer: formData.customer,
    company: formData.company,
    industry: formData.industry,
    status: formData.status,
    stage: editingLead?.stage || "Prospecting",
    value: editingLead?.value || "₹0",
    owner: editingLead?.owner || "Unassigned",
    source: editingLead?.source || "Manual Entry",
    phone: formData.phone,
    email: formData.email,
  };

  try {
    if (editingLead) {
      const success = await onUpdateLead({
        ...leadData,
        id: editingLead.id,
      });

      if (success) {
        onClose();
      }
      return;
    }

    const response = await fetch(
      "http://localhost:5000/api/leads",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(leadData),
      }
    );

    const data = await response.json();

    console.log("Lead Saved:", data);

    onAddLead({
      ...leadData,
      id: data.id,
    });

    setFormData({
      customer: "",
      company: "",
      industry: "",
      phone: "",
      email: "",
      status: "New",
    });

    onClose();
  } catch (error) {
    console.error("Error saving lead:", error);
  }
};

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>
          {editingLead
            ? "Edit Lead"
            : "Add New Lead"}
        </h2>

        <div className="form-group">
          <label>Customer Name</label>
          <input
            type="text"
            name="customer"
            value={formData.customer}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Company</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Industry</label>
          <input
            type="text"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Status</label>

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option>New</option>
            <option>Contacted</option>
            <option>Qualified</option>
          </select>
        </div>

        <div className="modal-actions">
          <button
            className="cancel-btn"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="save-btn"
            onClick={handleSave}
          >
            {editingLead
              ? "Update Lead"
              : "Save Lead"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddLeadModal;