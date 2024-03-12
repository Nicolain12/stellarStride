import React, { useState } from "react";
import { AnimatePresence, color, motion } from "framer-motion";
import { PopupPlans } from "./popupPlans";
import "./plansHomeCards.css";

function PlansHomeCards() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const openPopup = (plan) => {
    setSelectedPlan(plan);
  };

  const closePopup = () => {
    setSelectedPlan(null);
  };  

  const products = [{ name: "Development", description: "Web site creation with maintenance in time and marketing sistem includeing accounts management", service: "Web Development - Design ", price: 900 },
  { name: "Design", description: "Web site creation with maintenance in time and marketing sistem includeing accounts management", service: "Design", price: 900 }]
  
  const plans = [{ name: "Marketing", description: "Web site creation with maintenance in time and marketing sistem includeing accounts management", service: "Web Development - Data Analityc - Marketing - Business Management", startingPrice: 800, monthPrice: 650 },
    { name: "E-Commerce", description: "Web site creation with maintenance in time and marketing sistem includeing accounts management", service: "Web Development - Data Analityc - Marketing - Business Management", startingPrice: 800, monthPrice: 650 },
    { name: "AudioVisual", description: "Web site creation with maintenance in time and marketing sistem includeing accounts management", service: "Web Development - Data Analityc - Marketing - Business Management", startingPrice: 800, monthPrice: 650 },
    { name: "Web App", description: "Web site creation with maintenance in time and marketing sistem includeing accounts management", service: "Web Development - Data Analityc - Marketing - Business Management", startingPrice: 800, monthPrice: 650 },
    { name: "Total", description: "Web site creation with maintenance in time and marketing sistem includeing accounts management", service: "Web Development - Data Analityc - Marketing - Business Management", startingPrice: 800, monthPrice: 650 },
    { name: "Customized", description: "Web site creation with maintenance in time and marketing sistem includeing accounts management", service: "Web Development - Data Analityc - Marketing - Business Management", startingPrice: 800, monthPrice: 650 },]

    return (
      <>
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
                <motion.button   whileHover={{ backgroundColor: "black", transition: { duration: 0.3 } }} className="plansLinkMeet" onClick={() => openPopup(plan)}>
                  Learn More
                </motion.button>
              </div>
            </div>
          ))}
          <AnimatePresence>
          {selectedPlan &&
          <PopupPlans plan={selectedPlan} onClose={closePopup} />
          }
          </AnimatePresence> 
        </div>
        <div className="homePlansProducts">
        <div className="serviceHomeProyectsTitleDiv">
      <h1 className="serviceHomePoyectsTitle">Products</h1>
       </div>
      <div className="homePlansProductsContainer">
        {products.map((plan, index) => (
            <div className="homePlansProductsCard" key={index}>
              <div className="homePlansInfoDiv">
                <h2 className="plansHomeName">{plan.name}</h2>
                <h4 className="plansHomeServiceIncludes">Services Included: {plan.service}</h4>
              </div>
              <div className="homePlansInfMeetoDiv">
                <div className="homePlansInfoPriceDiv">
                  <div className="plansStartingPrice">
                    <h4 className="plansStartingPriceTitle">Starting Price</h4>
                    <h3 className="plansStartingPriceNumber">${plan.price}</h3>
                  </div>
                </div>
                <motion.button   whileHover={{ backgroundColor: "black", transition: { duration: 0.3 } }} className="plansLinkMeet" onClick={() => openPopup(plan)}>
                  Learn More
                </motion.button>
              </div>
            </div>
          ))}
        </div>
        </div>
        </>
      );
    }
    
    export { PlansHomeCards };
