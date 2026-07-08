import "./DashboardCards.css";
import { motion } from "framer-motion";

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

return ( <div className="cards-grid">
{cards.map((card, index) => (
<motion.div
key={index}
className="dashboard-card"
initial={{
opacity: 0,
y: 40,
}}
animate={{
opacity: 1,
y: 0,
}}
transition={{
duration: 0.5,
delay: index * 0.15,
}}
whileHover={{
y: -8,
scale: 1.03,
}}
> <div className="card-title">
{card.title} </div>

      <div className="card-value">
        {card.value}
      </div>

      <div className="card-subtext">
        {card.subtext}
      </div>
    </motion.div>
  ))}
</div>


);
}

export default DashboardCards;
