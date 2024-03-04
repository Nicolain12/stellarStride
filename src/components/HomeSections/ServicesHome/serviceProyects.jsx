import React from "react";
import { animate, motion } from "framer-motion";
import "./serviceProyects.css";
import { AliensCanvas } from "./alien";

function ServiceProyects() {


    const proyectName = [
        { name: "Digital Turism", image: "/src/public/proyects/LogoDigitalTurism.png" },
        { name: "PureWheel", image: "/src/public/proyects/PureWheelLogo23.png" },
        { name: "GainsGear", image: "/src/public/proyects/gainsGearLogo.png" },
        { name: "StellarStride", image: "/src/public/proyects/stellarStrideLogo.png"},
        { name: "ClothingArg", image: "/src/public/proyects/ClothingArgLogo.png" },    
        { name: "PardoHnos", image: "/src/public/proyects/PardoHnosLogo.png" },
    ];


    return (
    <div className="serviceProyectsContainer">
      <div className="serviceHomeProyectsTitleDiv">
      <h1 className="serviceHomePoyectsTitle">Some Proyects us</h1>
    </div>
        <div className="homeProyects">
          {proyectName.map((proyect, index) => (
            <motion.div               
            style={{
              position: "relative",
              overflow: "hidden",
            }}
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 5px gray",
            }}
            className="homeProyectsDiv">
            <motion.img className="homeProyectsImg" src={proyect.image}/>
            <h1 className="homeProyectsName">{proyect.name}</h1>
            </motion.div>
          ))}
        </div>
        <div className="proyectAlienDiv3d">
            <AliensCanvas />
        </div>
        </div>
      );
};


export { ServiceProyects }
