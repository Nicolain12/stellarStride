import React from "react";
import "./plansHome.css"

function PlansHome() {

    return (
        <div className="plansComponent">
            <h1 className="plansTitle">Plans</h1>
            <div className="servicesHomeMainDiv">
                {/* MARKETING */}
                <div className="homePlans">
                    <div className="homePlansInfoDiv">
                        <h2 className="plansHomeName">Marketing</h2>
                        <h3 className="plansHomeDescription">Web site creation with maintenance  in time and marketing sistem includeing accounts management</h3>
                        <h4 className="plansHomeServiceIncludes">Services Included: Web Development - Data Analityc - Marketing - Business Management</h4>
                    </div>
                    <div className="homePlansInfMeetoDiv">
                        <div className="homePlansInfoPriceDiv">
                            <div className="plansStartingPrice">
                                <h4 className="plansStartingPriceTitle">Starting Price</h4>
                                <h3 className="plansStartingPriceNumber">$800</h3>
                            </div>
                            <div className="plansMonthPrice">
                                <h4 className="plansStartingPriceTitle">Month Price</h4>
                                <h3 className="plansStartingPriceNumber">$650</h3>
                            </div>
                        </div>
                        <a className="plansLinkMeet"> Schedule A Meet </a>
                    </div>
                </div>


            </div>
        </div>
    )
}

export { PlansHome }