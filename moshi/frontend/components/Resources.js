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
      <h2>Farmers who need Resources</h2>
      <div className="expla">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries,
        </p>
      </div>
      <div className="right">
        <input
          className="input"
          style={{ backgroundColor: "inherit" }}
          placeholder="search"
        />
        <br />
      </div>
      <div className="reso">

          <div className='card'>

                    {Object.values(resources).map((resource, index) => {
                        
                        if (resource.request_farmer == wallet.accountId){

                            return (
                                <div key={index} className="card-body">
                                    <div>
                                        <div>
                                        <img src={resource.image_proof} alt="lands to lease"/>
                                        </div>
                                        <h5 className="r-header"> {resource.resource_name} </h5>
                                        <div>
                                            {resource.resource_description}
                                        </div>
                                        <p>{resource.contract_type}</p>
                                    </div>

                                    <div className="resource-btn">
                                      <button>
                                        Provide Resource
                                      </button>
                                    </div>

                                    <hr />
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
