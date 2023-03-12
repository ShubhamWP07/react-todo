import React from "react";
import Card from "./Card";
import ButterChicken from "./C2.jpg"
import skwewrs from "./C3.jpg"
import friedfish from "./C4.jpg";
import pennepasta from "./C5.jpg";
import friedrice from "./C6.jpg";

let HotItem = () => {
  return(
    <>
      <div className="hotItem-card-section">
        {/* Card-1 */}
       <Card />

        {/* Card-2 */}
       <Card 
       cardimgurl = {ButterChicken} 
       cardpara = "#2"
       cardhead = "Butter Chicken"
       />
        {/* Card-3 */}
       <Card 
       cardimgurl = {skwewrs} 
       cardpara = "#3" 
       cardhead = "Chicken Skewers"
      />
        {/* Card-4 */}
       <Card 
       cardimgurl = {friedfish} 
       cardpara = "#4" 
       cardhead = "Fried Fish"
      />
        {/* Card-5 */}
       <Card 
       cardimgurl = {pennepasta} 
       cardpara = "#5" 
       cardhead = "Penne Pasta"
      />
        {/* Card-6 */}
       <Card 
       cardimgurl = {friedrice} 
       cardpara = "#4" 
       cardhead = "Fried Rice"
      />
      </div>
    </>
  )
}

export default HotItem;