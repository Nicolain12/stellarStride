import React from "react";
import "./plansHome.css"
import "./plansHomeCards.jsx"
import { PlansHomeCards } from "./plansHomeCards.jsx";

function PlansHome() {

    return (

        <div className="plansComponent">
            <div className="plansHomeTitleDiv">
                <h1 className="plansTitle">Plans</h1>
            </div>
            <PlansHomeCards/>
        </div>
    )
}

export { PlansHome }