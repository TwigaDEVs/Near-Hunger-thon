import React from "react";
import "./FarmerFarm.css";
import Footer from "./Footer";
import PostFarm from "./PostFarm";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function FarmerFarm({ wallet, contractId, lands }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <h2 className="farm"> My Farms</h2>
      <div className="farmInvite">
        <button className="postFarm" onClick={() => setOpenModal(true)}>
          Post Farm to Invite Investors
        </button>
      </div>
      <PostFarm
        open={openModal}
        onclose={() => setOpenModal(false)}
        wallet={wallet}
        contractId={contractId}
      />

      <div className="containerhire">
      {Object.values(lands).map((land, index) => {
            if (land.land_lister == wallet.accountId) {


                      const newTo = {
                        pathname:"/hire-land-view/"+land.id,
                    }

                    return (
                              <div className="card">
                                <div className="card-header">
                                  <img src={land.land_image} alt="rover" />
                                </div>
                                <div className="card-body">
                                  <span className="tag tag-teal">{land.land_location}</span>
                                  <h4>
                                  {land.land_owner}
                                  </h4>
                                  <div className="des">
                                    <p>
                                      {land.land_description}
                                    </p>
                                  </div>
                                  <div>
                                    <p>{land.land_price}</p>
                                  </div>
                                  <div className="user">
                                    <div className="user-info">
                                      <h5>
                                        <button className="hire-btn">
                                            <Link className="btn-h" to={newTo} > Hire</Link>
                                        </button>
                                      </h5>
                                      <small>{land.land_lister}</small>
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
  );
}

export default FarmerFarm;
