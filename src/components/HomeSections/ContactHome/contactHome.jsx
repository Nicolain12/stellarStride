import React from "react";
import "./contactHome.css"
import rocketIMG from "../../../public/images/coethe.png"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function ContactHome() {

    return (
        <div className="contactComponent">
            <div className="contact-title">
                <h2 className="contactUsTitle">Contact Us</h2>
            </div>
            <div className="contactFormCenter">
                <div className="contactFormContent">
                    <div className="contactFormDiv">
                        <form action="" method="POST" className="contact-form">
                            <div className="message-div">
                                <input rows="4" cols="50" type="text" name="message" id="" className="input-message" placeholder="Message..." />
                                <select name="plan" className="input-plan" placeholder="Plan">
                                    <option value="">Select a plan</option>
                                    <option value="">Marketing</option>
                                    <option value="">E-Commerce</option>
                                    <option value="">Audiovisual</option>
                                    <option value="">Web App</option>
                                    <option value="">Total</option>
                                    <option value="">Customized</option>
                                </select>
                            </div>
                            <div className="contact-info-div">
                                <div className="contact-info-div-inputs">
                                    <input type="text" name="name" id="" className="input-name" placeholder="Name" />
                                    <input type="email" name="email" id="" className="input-email" placeholder="Email" />
                                    <input type="text" name="company" id="" className="input-company" placeholder="Company Name" />
                                </div>
                            </div>
                            <div className="contact-submit-button-div">
                                <button className="send-button">Send</button>
                            </div>
                        </form>
                        <div className="contactFormStellarApps">
                            <h1>StellarStride</h1>
                            <img src={rocketIMG} className="contactStellarImg" />
                            <div className="socialMediaContainer">
                                <FaFacebook className="contactSocialMedia" />
                                <FaInstagram className="contactSocialMedia" />
                                <FaLinkedin className="contactSocialMedia" />
                                <FaXTwitter className="contactSocialMedia" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export { ContactHome }