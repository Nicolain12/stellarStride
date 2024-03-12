import React, { useState } from "react";
import "./plansHome.css"
import "./plansHomeCards.jsx"
import { PlansHomeCards } from "./plansHomeCards.jsx";

function PlansHome() {

    const [produtsActive,setProductsActive] = useState(false)

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