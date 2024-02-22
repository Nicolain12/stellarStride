import React, { useState } from "react";
import { color, motion } from "framer-motion";
import { PopupPlans } from "./popupPlans";
import "./plansHomeCards.css";
import marketingPopup from "../../../public/images/popupPlans/marketingPopup.png"

function PlansHomeCards() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const openPopup = (plan) => {
    setSelectedPlan(plan);
  };

  const closePopup = () => {
    setSelectedPlan(null);
  };


  const plans = [
    {
      name: "Marketing",
      img: marketingPopup,
      description: "Digital marketing can profoundly benefit businesses by expanding their reach, increasing brand visibility, driving website traffic, generating leads, facilitating customer engagement, boosting sales, and fostering long-term customer relationships. Digital marketing can profoundly benefit businesses by expanding their reach, increasing brand visibility, driving website traffic, generating leads, facilitating customer engagement, boosting sales, and fostering long-term customer relationships.Digital marketing can profoundly benefit businesses by expanding their reach, increasing brand visibility, driving website traffic, generating leads, facilitating customer engagement, boosting sales, and fostering long-term customer relationships.",
      service: "Web Development - Data Analityc - Marketing - Business Management",
      startingPrice: 800,
      monthPrice: 650
    },
    {
      name: "E-Commerce",
      img: '',
      description: "Web site creation with maintenance in time and marketing sistem includeing accounts management",
      service: "Web Development - Data Analityc - Marketing - Business Management",
      startingPrice: 800,
      monthPrice: 650
    },
    {
      name: "AudioVisual",
      img: '',
      description: "Web site creation with maintenance in time and marketing sistem includeing accounts management",
      service: "Web Development - Data Analityc - Marketing - Business Management",
      startingPrice: 800,
      monthPrice: 650
    },
    {
      name: "Web App",
      img: '',
      description: "Web site creation with maintenance in time and marketing sistem includeing accounts management",
      service: "Web Development - Data Analityc - Marketing - Business Management",
      startingPrice: 800,
      monthPrice: 650
    },
    {
      name: "Total",
      img: '',
      description: "Web site creation with maintenance in time and marketing sistem includeing accounts management",
      service: "Web Development - Data Analityc - Marketing - Business Management",
      startingPrice: 800,
      monthPrice: 650
    },
    {
      name: "Customized",
      img: '',
      description: "Web site creation with maintenance in time and marketing sistem includeing accounts management",
      service: "Web Development - Data Analityc - Marketing - Business Management",
      startingPrice: 800,
      monthPrice: 650
    },]

  return (
    <div className="homePlansDiv">
      {plans.map((plan, index) => (
        <div className="homePlans" key={index}>
          <div className="homePlansInfoDiv">
            <h2 className="plansHomeName">{plan.name}</h2>
            <h4 className="plansHomeServiceIncludes">Services Included: {plan.service}</h4>
          </div>
          <div className="homePlansInfMeetoDiv">
            <div className="homePlansInfoPriceDiv">
              <div className="plansStartingPrice">
                <h4 className="plansStartingPriceTitle">Starting Price</h4>
                <h3 className="plansStartingPriceNumber">${plan.startingPrice}</h3>
              </div>
              <div className="plansMonthPrice">
                <h4 className="plansStartingPriceTitle">Month Price</h4>
                <h3 className="plansStartingPriceNumber">${plan.monthPrice}</h3>
              </div>
            </div>
            <motion.button whileHover={{ backgroundColor: "black", transition: { duration: 0.3 } }} className="plansLinkMeet" onClick={() => openPopup(plan)}>
              Learn More
            </motion.button>
          </div>
        </div>
      ))}
      {selectedPlan && <PopupPlans plan={selectedPlan} onClose={closePopup} />}
    </div>
  );
}

export { PlansHomeCards };
