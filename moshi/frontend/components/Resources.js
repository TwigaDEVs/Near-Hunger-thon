import React from "react";
import "./Resource.css";
import testImage from "../assets/fam.png";
import {useState,useEffect} from 'react'
import Footer from "./Footer";

function Resources({wallet,contractId,lands}) {

  const [resources, setProfileResources] = useState([]);

  
  useEffect(() => {

    getResources().then(setProfileResources);

  }
  , []);

    
 console.log(resources)

  function getResources() {
    console.log(contractId)
    return wallet.viewMethod({ method: "get_resources", contractId });

  }

  return (
    <div>
      <div className="w3-container w3-center">

        <div className="w3-row-margin">
        <h2>Provide Farm  Tools and Equipment To Farmers</h2>
        
        </div>
        
        <div className="" >
          <p>
              The following farmers are looking for potential investors  who will provide the Farm  Tools and Equipment.
          </p>
     
        </div>

      </div>
      <div className="w3-auto" style={{marginLeft: "10%", marginRight: "10%"}}>
          <div className="w3-row-padding w3-stretch w3-center">
          {Object.values(resources).map((resource, index) => {
                        
                        if (resource.request_farmer == wallet.accountId){

                            return (
                              <div key={index} className="card w3-center sol">
                                <div className="card-header">
                                  <img src={resource.image_proof} alt="rover" />
                                </div>
                                <div className="card-body">
                                  <h4>
                                  {resource.resource_name}
                                  </h4>
                                  <p className="w3-padding">
                                  {resource.resource_description}
                                  </p>
                                  <p> {resource.resource_type}</p>
                                  <div>
                                    <p>{resource.contract_type}</p>
                                  </div>
                                  <div className="user">
                                    <div className="user-info">
                                      <h5>
                                      <div className="resource-btn">
                                      <button>
                                        Provide
                                      </button>
                                    </div>
                                      </h5>
                                      <small>{resource.request_farmer}</small>
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
  );
}

export default Resources;
