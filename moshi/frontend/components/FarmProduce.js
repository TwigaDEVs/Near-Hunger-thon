import React from "react";
import testImage from "../assets/fam.png";
function FarmProduce() {
  return (
    <div>
      <div className="sell">
        <button> Sell </button>
        <br />
        <br />
        <br />
        <div className="produce-card">
          <div className="w3-row-padding w3-stretch">
            <div className="card-body w3-margin w3-col l4 m3">
              <img src={testImage} />
              Test Farm Produce Design
            </div>
            <div className="card-body w3-margin w3-col l4 m3">
              <img src={testImage} />
              Test Farm Produce Design
            </div>
            <div className="card-body w3-margin w3-col l4 m3">
              <img src={testImage} />
              Test Farm Produce Design
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FarmProduce;
