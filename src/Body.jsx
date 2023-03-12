import React from "react";
import HeroImg from "./Hero_img2.png"


let HeroSection = () => {
  return (
    <>
      {/* Hero_section */}
      <section className="Hero_main_con">
        <div className="hero_section">
          <div className="left_hero_section">
            <h3 className="header_h3">DISCOVER NEW TASTE IN EVERY BITE.</h3>
            <h1 className="hero_heading">
            Special tasty Burger.
            </h1>
            <p className="hero_paragraph">
            The best way to cook burgers in bugo the ultimate goal when cooking a bugo burger is a perfectly cooked burger that is juicy and packed with flavor.
            </p>
            <div className="hero_button_section">
              <button className="hero_btn1">Order Now</button>
              <button className="hero_btn2">Go to Menu</button>
            </div>
          </div>
          <div className="right_hero_section">
            <img src={HeroImg} alt="" className="hero_img" />
          </div>
        </div>
      
      </section>

    </>
  )
}



export default HeroSection;
