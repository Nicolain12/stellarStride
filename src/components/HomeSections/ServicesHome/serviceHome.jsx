import React from "react";
import "./serviceHome.css"
import { ServiceHomeCards } from "./serivceHomeCards.jsx";

function ServiceHome() {

    return (
        <div className="serviceComponent">
            <div className="servicesHomeTitleDiv">
            <h1 className="serviceTitle">Service</h1>
            </div>
            <div className="servicesHomeMainDiv">
            <ServiceHomeCards/>
            </div>
        </div>
    )
}

export { ServiceHome }