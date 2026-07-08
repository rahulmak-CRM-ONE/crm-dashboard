export function updateLeadById(leads, leadId, updatedLead) {
  return leads.map((lead) =>
    lead.id === leadId ? { ...lead, ...updatedLead } : lead
  );
}
