import React, {useState} from 'react'
import FarmInputsModal from './FarmInputsModal';
import Footer from './Footer';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function FarmInputs({wallet, contractId,isSignedIn}) {

    const[inputs, setInputs] = useState([]);
    const [userProfile, setUserProfile] = useState([]);

    const viewProfile = () => {
      const profile = window.nearwallet.viewMethod({ method: "get_users", contractId }).then((result) => result[window.nearwallet.accountId]).then(data => data);
      return profile;
  }
  

    useEffect(() => {
		getInputs().then(setInputs);
    viewProfile().then((data) => (setUserProfile(data)));
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

      const signIn = () => {
        wallet.signIn();
      };

      
  return (
    <div>
        <div>
            <div className="w3-center">

              {isSignedIn? 
              <>
              { userProfile? <button className="w3-button w3-green w3-round" onClick={handleOpenFarmInputsModal}>Sell</button> :

                <button className="w3-button w3-green w3-round" > <Link to="/account" className="w3-bar-item w3-button"> Please Update Your Profile To Start Selling</Link> </button>


                }              
              </> :

                <button onClick={signIn} className="w3-button w3-green w3-round">
                Please Login to Start Selling
                </button> 
              
              }

                
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
        <div className="">
            <div className="w3-row-padding">
              {Object.values(inputs).map((input, index) => {
                        if (input.input_sold == false) {


                          const inputTo = {
                            pathname:"/farm-input/"+input.id,
                        }

                                return (
                                          <div key={index} className="w3-col l4 m6">
                                             <div className="w3-card sol">
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
                                                  <button className="w3-button w3-green">
                                                  <Link className="btn-h" to={inputTo} > view </Link>
                                                  </button>
                                                  </h5>
                                                  <small>{input.input_owner}</small>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          </div>
                                    );

                                  }
                  
                          })}
                  </div>
      </div>
        <Footer />
    </div>
  )
}

export default FarmInputs