import React from "react";
import "./serviceHome.css"
import webDevImg from '../../../public/services/webDevImg.png'
import bussImg from '../../../public/services/bussImg.png'
import dataImg from '../../../public/services/dataImg.png'
import desImg from '../../../public/services/desImg.png'
import MarkImg from '../../../public/services/MarkImg.png'
import vidImg from '../../../public/services/vidImg.png'

function ServiceHome() {

    return (
        <div className="serviceComponent">
            <h1>Service</h1>
            <div className="servicesHomeMainDiv">
                {/* WEB DEV */}
                <div className="homeServices">
                    <div className="homeServicesIconDiv">
                        <img className="serviceHomeImg" src={webDevImg} alt="" />
                    </div>
                    <div className="homeServicesInfoDiv">
                        <h2 className="serviceHomeName">Web Development</h2>
                        <button className="serviceHomeLearnMore">Learn More ...</button>
                    </div>
                </div>
                {/* MARKETING */}
                <div className="homeServices">
                    <div className="homeServicesIconDiv">
                        <img className="serviceHomeImg" src={MarkImg} alt="" />
                    </div>
                    <div className="homeServicesInfoDiv">
                        <h2 className="serviceHomeName">Marketing</h2>
                        <button className="serviceHomeLearnMore">Learn More ...</button>
                    </div>
                </div>
                {/* VIDEO/PHOTO */}
                <div className="homeServices">
                    <div className="homeServicesIconDiv">
                        <img className="serviceHomeImg" src={vidImg} alt="" />
                    </div>
                    <div className="homeServicesInfoDiv">
                        <h2 className="serviceHomeName">Video Edition</h2>
                        <button className="serviceHomeLearnMore">Learn More ...</button>
                    </div>
                </div>
                {/* DESIGN */}
                <div className="homeServices">
                    <div className="homeServicesIconDiv">
                        <img className="serviceHomeImg" src={desImg} alt="" />
                    </div>
                    <div className="homeServicesInfoDiv">
                        <h2 className="serviceHomeName">Design</h2>
                        <button className="serviceHomeLearnMore">Learn More ...</button>
                    </div>
                </div>
                {/* DATA ANALITYC */}
                <div className="homeServices">
                    <div className="homeServicesIconDiv">
                        <img className="serviceHomeImg" src={dataImg} alt="" />
                    </div>
                    <div className="homeServicesInfoDiv">
                        <h2 className="serviceHomeName">Data Analityc</h2>
                        <button className="serviceHomeLearnMore">Learn More ...</button>
                    </div>
                </div>
                {/* BUSSINES MANAGEMENT */}
                <div className="homeServices">
                    <div className="homeServicesIconDiv">
                        <img className="serviceHomeImg" src={bussImg} alt="" />
                    </div>
                    <div className="homeServicesInfoDiv">
                        <h2 className="serviceHomeName">Bussines Management</h2>
                        <button className="serviceHomeLearnMore">Learn More ...</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export { ServiceHome }