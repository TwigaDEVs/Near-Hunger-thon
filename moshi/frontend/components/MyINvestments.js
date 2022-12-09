import React from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'

function MyINvestments({lands,wallet}) {
  return (
    <div>

      <div>
        <h2> My Investments </h2>
      </div>
      
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
                                            <Link className="btn-h" to={newTo} > View </Link>
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
  )
}

export default MyINvestments