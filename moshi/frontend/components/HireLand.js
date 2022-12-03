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
        <div className="card">
          {Object.values(lands).map((land, index) => {
            if (land.contract_type == "lease") {


                      const newTo = {
                        pathname:"/hire-land-view/"+land.id,
                    }

                    return (
                        <div key={index} className="card-body">
                            <div>
                                <div>
                                <img src={land.land_image} alt="lands to lease"/>
                                </div>
                                <h5> {land.land_owner} </h5>
                                <div>
                                    {land.land_description}
                                </div>
                                <p>{land.land_price}</p>

                            </div>

                             <button className="hire-btn">
                             <Link className="btn-h" to={newTo} > Hire</Link>
                             </button>
    
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
