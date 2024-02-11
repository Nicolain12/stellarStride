import React from "react";
import "./bannerHome.css"
import stellarShip from "../../../public/images/stellarShip.png"

function BannerHome (){

    return(
        <div className="bannerComponent">
            <div className="titleHomeDiv">
            <h1 className="bannerName">StellarStride</h1>
            <h2 className="bannerSlogan"> Growth Partner</h2>
            <button className="bannerButton">Start Now!</button>
            </div>
            <div className="bannerImageDiv">
            <img className="stellarShip" src={stellarShip}/>
            </div>
        </div>
    )
}

export {BannerHome}