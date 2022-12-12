import React from "react";
import "./HireLand.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function HireLand({ wallet, contractId, lands }) {
  return (
    <div className="invest" style={{ fontWeight: 200 }}>
      <h2> Farm Available for Hire</h2>

      <div className="expla w3-auto" style={{marginLeft: "10%", marginRight: "10%"}}>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries,
        </p>
      </div>
      <div className="w3-auto" style={{marginLeft: "10%", marginRight: "10%"}}>
        <div className="w3-row-padding w3-stretch">
          {Object.values(lands).map((land, index) => {
            if (land.contract_type == "lease") {
              const newTo = {
                pathname: "/hire-land-view/" + land.id,
              };

              return (
                <div className="w3-col l4 m6">
                  <div className="w3-card">
                    <div className="card-header">
                      <img src={land.land_image} alt="rover" />
                    </div>
                    <div className="card-body">
                      <span className="tag tag-teal">{land.land_location}</span>
                      <h4>{land.land_owner}</h4>
                      <div className="des">
                        <p>{land.land_description}</p>
                      </div>
                      <div>
                        <p>{land.land_price}</p>
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
