import React from "react";
import Navbar from "../navbar/navbar";
import "./header.scss";
import illutration from "../../assets/images/illutration.png";
import partner1 from "../../assets/images/partner1.png";
import partner2 from "../../assets/images/partner2.png";
import partner3 from "../../assets/images/partner3.png";
import partner4 from "../../assets/images/partner4.png";
import partner5 from "../../assets/images/partner5.png";
import partner6 from "../../assets/images/partner6.png";

const Header = () => {
  return (
    <header className="header-container">
      <Navbar />
      <div className="header-holder">
        <div className="info-holder">
            <h1>Navigating the digital landscape for success</h1>
            <p>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
            <button>Book a consultation</button>
        </div>
        <img className="illutration" src={illutration} alt="" />
      </div>
      <div className="header-holder partner">
        <img className="partner-logo" src={partner1} alt="" />
        <img className="partner-logo" src={partner2} alt="" />
        <img className="partner-logo" src={partner3} alt="" />
        <img className="partner-logo" src={partner4} alt="" />
        <img className="partner-logo" src={partner5} alt="" />
        <img className="partner-logo" src={partner6} alt="" />
      </div>
    </header>
  );
};

export default Header;
