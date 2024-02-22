import React, { useState, useEffect } from "react";
import "./popupPlans.css";

const PopupPlans = ({ plan, onClose }) => {
  console.log(plan.img)
  const schedule = 'Schedule A Meet >>>'
  return (
    <div className="popup">
      <div className="popup-content">
        <div className="top-popup-div">
          <h2 className="popup-title">{plan.name}</h2>
          <button className="popup-close-button" onClick={onClose}>x</button>
        </div>
        <div className="middle-popup-div">
          <img className="popup-img" src={plan.img} alt="" />
          <p className="popup-description">{plan.description}</p>
        </div>
        <div className="bottom-popup-div">
          <p className="popup-schedule-button">{schedule}</p>
        </div>
      </div>
    </div>
  );
};

export { PopupPlans };