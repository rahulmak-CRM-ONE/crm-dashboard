import "./DashboardCards.css";

function DashboardCards() {
  const cards = [
    {
      title: "TOTAL LEADS",
      value: "229",
      subtext: "165 assigned",
    },
    {
      title: "UNASSIGNED",
      value: "64",
      subtext: "awaiting owner",
    },
    {
      title: "CONVERTED",
      value: "1",
      subtext: "closed-won",
    },
    {
      title: "ADDED THIS MONTH",
      value: "19",
      subtext: "new pipeline",
    },
  ];

  return (
    <div className="cards-grid">
      {cards.map((card, index) => (
        <div className="dashboard-card" key={index}>
          <div className="card-title">{card.title}</div>
          <div className="card-value">{card.value}</div>
          <div className="card-subtext">{card.subtext}</div>
        </div>
      ))}
    </div>
  );
}

export default DashboardCards;