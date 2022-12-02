import React, { useState } from "react";
import testImage from "../assets/fam.png";
import SellModal from "./SellModal";
function FarmProduce() {

  const [sellModalOpen, setSellModalOpen] = useState(false);
  const handleOpenModal = () => {
    setSellModalOpen(true);
  }
  const handleCloseModal = () => {
    setSellModalOpen(false);
  }
  return (
    <div>
      {sellModalOpen && <SellModal handleCloseModal={handleCloseModal} />}
      <div className="w3-auto">
      <br />
      <br />
        <div className="w3-center">
          <button onClick={handleOpenModal} className="w3-button w3-green"> Sell </button>
        </div>
        <br />
        <br />
        <br />
        <div className="">
          <div className="w3-row-padding w3-stretch">
            <div className="card-body w3-margin w3-col l3 m4">
              <img src={testImage} />
              Test Farm Produce Design
            </div>
            <div className="card-body w3-margin w3-col l3 m4">
              <img src={testImage} />
              Test Farm Produce Design
            </div>
            <div className="card-body w3-margin w3-col l3 m4">
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
