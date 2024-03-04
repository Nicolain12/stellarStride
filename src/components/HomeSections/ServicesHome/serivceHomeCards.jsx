import React from "react";
import { animate, motion } from "framer-motion";
import "./serviceHomeCards.css";
import { useState } from "react";
import useMediaQuery from "../../../hooks/useMediaQuery";


function ServiceHomeCards() {


    const serviceName = [
        { name: "Web Development", image: "/src/public/services/outer-banks-web-development-hosting.jpg" },
        { name: "Marketing", image: "/src/public/services/luke-chesser-JKUTrJ4vK00-unsplash.jpg" },
        { name: "Design", image: "/src/public/services/howard-bouchevereau-MU3SIgq5Gpw-unsplash.jpg" },
    ];


    return (
        <div className="homeServices">
          {serviceName.map((service, index) => (
            <motion.div
              key={index}
              className={`homeServicesInfoDiv`}
              initial={{ filter: "grayscale(100%)" }}
              whileHover={{ filter: "grayscale(0%)" }}
              style={{
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                className="backgroundContainer"
                style={{
                  backgroundImage: `url('${service.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                  height: "100%",
                }}
              ></div>
              <motion.div className="homeServiceInfoBtnDiv" style={{ position: "absolute", top:0, left: 0, right: 0, bottom: 0,  }}>
                <div className="homeServiceInfoBtnContainer"> 
                  <motion.h2 className="serviceHomeName">{service.name}</motion.h2>
                  <motion.h2 className="serviceHomeLearnMoreTxt" whileHover={{ textDecoration: 'underline' }}>Learn More &gt;&gt;</motion.h2>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      );
};


export { ServiceHomeCards }

