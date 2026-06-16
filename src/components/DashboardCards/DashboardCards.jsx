import "./DashboardCards.css";

function DashboardCards() {
  const leads =
    JSON.parse(localStorage.getItem("crm-leads")) || [];

  const totalLeads = leads.length;

  const newLeads = leads.filter(
    (lead) => lead.status === "New"
  ).length;

  const contactedLeads = leads.filter(
    (lead) => lead.status === "Contacted"
  ).length;

  const qualifiedLeads = leads.filter(
    (lead) => lead.status === "Qualified"
  ).length;

  const cards = [
    {
      title: "TOTAL LEADS",
      value: totalLeads,
      subtext: "all leads",
    },
    {
      title: "NEW LEADS",
      value: newLeads,
      subtext: "awaiting action",
    },
    {
      title: "CONTACTED",
      value: contactedLeads,
      subtext: "follow-up stage",
    },
    {
      title: "QUALIFIED",
      value: qualifiedLeads,
      subtext: "sales ready",
    },
  ];

  return (
    <div className="cards-grid">
      {cards.map((card, index) => (
        <div
          className="dashboard-card"
          key={index}
        >
          <div className="card-title">
            {card.title}
          </div>

          <div className="card-value">
            {card.value}
          </div>

          <div className="card-subtext">
            {card.subtext}
          </div>
        </div>
      ))}
    </div>
  );
}

export default DashboardCards;