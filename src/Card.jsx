import React from "react";
import Daal from "./C1.jpg"


let Card = ({
  cardimgurl =  Daal,
  cardpara = "#1",
  cardhead = "Dal Makhani"
}) => {
  return(
    <>
      <div className="main_card_con">
        <div className="card_section">
          <img src={cardimgurl} alt="" className="card-img" />
          <p className="card-paragraph">{cardpara}</p>
          <h1 className="card_heading">{cardhead}</h1>
        </div>
      </div>
    </>
  )
}

export default Card;