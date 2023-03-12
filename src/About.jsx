import React from "react";
import AboutImg from "./about-img.jpg"

function About () {
  return (
    <div className="About-main-con">
      <div className="about-section">
        <div className="left-baout-section">
          <img src={AboutImg} alt="" className="about-img"/>
        </div>
        <div className="right-about-section">
          <p className="about-tagline">WE ARE FOODIES</p>
          <h1 className="about-heading">All happiness depends on <br/> a leisurely breakfast.</h1>
          <p className="about-para">The best way to cook burgers in bugo the ultimate goal when cooking a bugo burger is a perfectly cooked burger that is juicy and packed with flavor.</p>
          <button className="about-btn">View more</button>
        </div>
      </div>
    </div>
  )
}  

 export default About