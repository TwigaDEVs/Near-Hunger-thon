import React from 'react'
import Footer from './Footer'
import { Link } from "react-router-dom";

function Partner({wallet,contractId,lands}) {
  return (
    <div className='invest'>
      <h2> Farm Available for Patnering</h2>

      <div className='expla' style={{marginLeft: "10%", marginRight: "10%"}}>
        <p>
        The following farms are looking for potential investors. Choose a farm to invest and become a partner with a farmer.
        </p>
      </div>

      <div className="w3-row-padding w3-stretch" style={{marginLeft: "10%", marginRight: "10%"}}>
      {Object.values(lands).map((land, index) => {
            if (land.contract_type == "partner") {


                      const newTo = {
                        pathname:"/partner-land-view/"+land.id,
                    }

                    return (
                            <div key={index} className="w3-col l4">
                              <div  className="w3-card sol">
                                <div className="card-header">
                                  <img src={land.land_image} alt="rover" />
                                </div>
                                <div className="card-body">
                                  <span className="tag tag-teal">{land.land_location}</span>
                                  <h4>
                                  {land.land_owner}
                                  </h4>
                                  <p>
                                    {land.land_description}
                                  </p>
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
                              </div>
                        );

                      }
     
                     })}
      </div>
      <Footer />
    </div>
  )
}

export default Partner