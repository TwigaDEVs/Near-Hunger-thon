import React from "react";
import "./HireLand.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function HireLand({ wallet, contractId, lands }) {
  return (
    <div className="invest" style={{ fontWeight: 200 }}>
      <h2> Farm Available for Hire</h2>

      <div className="expla">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries,
        </p>
      </div>

      <div className="w3-row-padding w3-stretch">
        <div className="w3-col l3 m4">
          {Object.values(lands).map((land, index) => {
            if (land.contract_type == "lease") {
              return (
                <div key={index} className="card-body">
                  <div>
                    <div>
                      <img src={land.land_image} alt="lands to lease" />
                    </div>
                    <h5> {land.land_owner} </h5>
                    <div className="land-description">
                      <p>{land.land_description}</p>
                    </div>
                    <p>{land.land_price}</p>
                  </div>

                  <Link className="w3-button w3-border w3-round"> Hire</Link>

                  <hr />
                </div>
              );
            }
          })}
        </div>
        <div className="w3-col l3 m4">
          {Object.values(lands).map((land, index) => {
            if (land.contract_type == "lease") {
              return (
                <div key={index} className="card-body">
                  <div>
                    <div>
                      <img src={land.land_image} alt="lands to lease" />
                    </div>
                    <h5> {land.land_owner} </h5>
                    <div>
                      <p>{land.land_description}</p>
                    </div>
                    <p>{land.land_price}</p>
                  </div>

                  <Link className="w3-button w3-border w3-round"> Hire</Link>

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

export default HireLand;
