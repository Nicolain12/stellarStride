import React from "react";
import "./popupPlans.css";
import { IoIosClose } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";

const PopupPlans = ({ plan, onClose }) => {
  return (
    <motion.div       initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }} className="popup">
      <motion.div      initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }} className="popup-content">
        <div className="popupCloseDiv">
          <IoIosClose className="popupCloseBtn" onClick={onClose} />
        </div>
        <div className="popupDescriptionDiv">
        <h2 className="popupPlanName">{plan.name}</h2>
        <p className="popupPlanDescription">{plan.description}</p>
        </div>
        <div className="popupMeetDiv">
        <button className="popupMeetBtn" >Close</button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export { PopupPlans };