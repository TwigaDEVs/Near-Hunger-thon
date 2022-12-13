import React from "react";
import "./HireLand.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import {nearConnectB} from './NearAccount';

function HireLand({ wallet, contractId, lands }) {
  return (
    <div className="invest" style={{ fontWeight: 200 }}>
      <h2> Farm Available for Hire</h2>

      <div className="expla" >
        <p>
          The following farms are available for lease/Hire.
        </p>
        <p className="w3-text-brown">Contact the farmer before deciding to hire the farm for more information</p>
      </div>
      <div className="w3-auto" style={{marginLeft: "10%", marginRight: "10%"}}>
        <div className="w3-row-padding w3-stretch">
          {Object.values(lands).map((land, index) => {
            if (land.contract_type == "lease") {
              const newTo = {
                pathname: "/hire-land-view/" + land.id,
              };

              return (
                <div key={index} className="w3-col l4 m6">
                  <div className="w3-card sol">
                    <div className="card-header">
                      <img src={land.land_image} alt="rover" />
                    </div>
                    <div className="card-body">
                      <p>{land.land_location}</p>
                      <h4>{land.land_owner}</h4>
                      <div className="des">
                        <p>{land.land_description}</p>
                      </div>
                      <div>
                        <p className="w3-text-orange w3-large pri">Ksh: {land.land_price}</p>
                        
                      </div>
                      
                      <div className="user">
                        <div className="user-info">
                          <h5>
                            <button className="hire-btn">
                              <Link className="btn-h" to={newTo}>
                                {" "}
                                Hire
                              </Link>
                            </button>
                          </h5>
                          <small>{land.land_lister}</small>
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
  );
}

export default HireLand;
