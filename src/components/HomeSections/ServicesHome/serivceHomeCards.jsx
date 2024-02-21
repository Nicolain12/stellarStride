import React from "react";
import { animate, motion } from "framer-motion";
import "./serviceHomeCards.css";
import { useState } from "react";
import useMediaQuery from "../../../hooks/useMediaQuery";

function ServiceHomeCards() {
    const [isHovered, setIsHovered] = useState(false);

    const isSmallScreen = useMediaQuery('(min-width: 960px)');

    const getMotionProps = (index) => ({
        x: isHovered === index ? (isSmallScreen ? 80 : 0) : 0,
        transition: { duration: 0.4 },
      });
   

    const serviceName = [
        { name: "Web Development", image: "/src/public/services/webDevImg.png" },
        { name: "Marketing", image: "/src/public/services/MarkImg.png" },
        { name: "Video Edition", image: "/src/public/services/vidImg.png" },
        { name: "Design", image: "/src/public/services/desImg.png" },
        { name: "Data Analityc", image: "/src/public/services/dataImgINV.png" },
        { name: "Business Management", image: "/src/public/services/bussImg.png" },
    ];

    const fadeAnimateVariants = {
        initial: {
            opacity: 0,
            y: 100
        },
        animate: (index) => {
            return {
                opacity: 1,
                y: 0,
                transition: {
                    delay: 0.10 * index
                }
            }
        }
    }

    return (
        <div className="homeServices">
            {serviceName.map((service, index) => (
                <motion.div
                    key={index}
                    className={`homeServicesInfoDiv`}
                    onHoverStart={() => setIsHovered(index)}
                    onHoverEnd={() => setIsHovered(null)} // Cambia el color de fondo cuando el mouse está sobre el div
                >
                    <motion.div animate={{ display: isHovered === index ? "block" : "none", opacity: isHovered === index ? 1 : 0, transition: { duration: 0.4 } }} className="homeServiceImageDiv">
                        <motion.img className="homeServiceImgIcon" initial={{ opacity: 0, display: "none" }} animate={{ display: isHovered === index ? (isSmallScreen ? "block" : "none") : "none", opacity: isHovered === index ? 1 : 0, transition: { duration: 0.4 } }} src={service.image} />
                    </motion.div>
                    <motion.div className="homeServiceInfoBtnDiv">
                        <motion.h2 className="serviceHomeName" animate={getMotionProps(index)}>
                            {service.name}
                        </motion.h2>
                        <motion.button animate={getMotionProps(index)} className="serviceHomeLearnMore">Learn More ...</motion.button>
                    </motion.div>
                </motion.div>
            ))}
        </div>
    );
};


export { ServiceHomeCards }

