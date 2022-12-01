import React from 'react'
import Footer from './Footer'

function Partner({wallet,contractId,lands}) {
  return (
    <div className='invest'>
      <h2> Farm Available for Patnering</h2>

      <div className='expla'>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
        </p>
      </div>

      <div className='hirecard'>
            <div className='card'>

            {Object.values(lands).map((land, index) => {
                 
                 if (land.contract_type == "partner"){

                    return (
                        <div key={index} className="card-body" style={mystyle}>
                            <div>
                                <div>
                                <img src={land.land_image} alt="lands for partanering"/>
                                </div>
                                <h5> {land.land_owner} </h5>
                                <div>
                                    {land.land_description}
                                </div>
                                <p>{land.land_price}</p>
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
  )
}

export default Partner