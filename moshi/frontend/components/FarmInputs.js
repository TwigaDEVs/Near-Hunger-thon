import React, {useState} from 'react'
import FarmInputsModal from './FarmInputsModal';
import Footer from './Footer';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function FarmInputs({wallet, contractId}) {

    const[inputs, setInputs] = useState([]);

    useEffect(() => {
		getInputs().then(setInputs);
	}, []);

    let [farmInputsOpen, setFarmInputsOpen] = useState(false);
    const handleOpenFarmInputsModal = () => {
        setFarmInputsOpen(true);
    }

    const closeModal = () => {
        setFarmInputsOpen(false);
    }

    function getInputs() {
        return wallet.viewMethod({ method: "get_inputs", contractId });
      }

  return (
    <div>
        <div>
            <div className="w3-center">
                <button className="w3-button w3-green w3-round" onClick={handleOpenFarmInputsModal}>Sell</button>
            </div>
            <h2> Buy Farm Inputs</h2>
            <div>
                <div> 
                    <div>
                        {farmInputsOpen && <FarmInputsModal onHandleCloseModal={closeModal} wallet ={wallet} contractId = {contractId}/>}
                    </div>
                </div>
            </div>
        </div>
        <div className="containerhire">
      {Object.values(inputs).map((input, index) => {
            if (input.input_sold == false) {


                const inputTo = {
                    pathname:"/farm-input/"+input.id,
                }

                    return (
                              <div className="card">
                                <div className="card-header">
                                  <img src={input.input_image} alt="rover" />
                                </div>
                                <div className="card-body">
                                  <span className="tag tag-teal"></span>
                                  <h4>
                                  {input.input_name}
                                  </h4>
                                  <div className="des">
                                    <p>
                                    {input.input_description}
                                    </p>
                                  </div>
                                  <div>
                                    <p>{input.input_price}</p>
                                  </div>
                                  <div className="user">
                                    <div className="user-info">
                                      <h5>
                                      <button className="hire-btn">
                                        <Link className="btn-h" to={inputTo} > view </Link>
                                      </button>
                                      </h5>
                                      <small>{input.input_owner}</small>
                                    </div>
                                  </div>
                                </div>
                              </div>
                        );

                      }
     
                     })}
      </div>
        <Footer />
    </div>
  )
}

export default FarmInputs