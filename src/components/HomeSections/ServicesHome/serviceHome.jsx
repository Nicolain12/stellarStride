import React from "react";
import "./serviceHome.css"
import { ServiceHomeCards } from "./serivceHomeCards.jsx";

function ServiceHome() {

    return (
        <div className="serviceComponent">
            <h1 className="serviceTitle">Service</h1>
            <div className="servicesHomeMainDiv">
            <ServiceHomeCards/>
            </div>
        </div>
    )
}

export { ServiceHome }