import React from "react";
import "./popupPlans.css";

const PopupPlans = ({ plan, onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>{plan.name}</h2>
        <p>{plan.description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export {PopupPlans};