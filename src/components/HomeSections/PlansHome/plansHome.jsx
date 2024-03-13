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
                <div className="plansProductsSelect">
                    <h5 onClick={ () => {setProductsActive(false)}} className={!produtsActive ? "plansSelectActive" : "plansSelect"}>Plans</h5>
                    <h5 className="plansProductsDivider">/</h5>
                    <h5 onClick={ () => {setProductsActive(true)}} className={produtsActive ? "porductsSelectActive" : "productsSelect"}>Products</h5>
                </div>
            </div>
            <PlansHomeCards/>
        </div>
    )
}

export { PlansHome }