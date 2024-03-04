import React from "react";
import "./serviceHome.css"
import { ServiceHomeCards } from "./serivceHomeCards.jsx";
import { ServiceProyects } from "./serviceProyects";

function ServiceHome() {

    return (
        <div className="serviceComponent">
            <div className="servicesHomeTitleDiv">
            <h1 className="serviceTitle">Service</h1>
            </div>
            <div className="servicesHomeMainDiv">
            <ServiceHomeCards/>
            </div>
            <div className="proyectsHomeMainDiv">
            <ServiceProyects/>
            </div>
        </div>
    )
}

export { ServiceHome }