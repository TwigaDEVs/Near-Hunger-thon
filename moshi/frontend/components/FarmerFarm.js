import React from 'react'
import './FarmerFarm.css'
import Footer from './Footer'
import PostFarm from './PostFarm'
import {useState,useEffect} from 'react'



function FarmerFarm({wallet,contractId,lands}) {
    const [openModal, setOpenModal] = useState(false);


  return (
    <div>
        <h2 className='farm'> My Farms</h2>
        <div className='farmInvite'>
            <button className='postFarm' onClick={() => setOpenModal(true)}>
                Post Farm to Invite Investors
            </button>
        </div><PostFarm open = {openModal} onclose={() => setOpenModal(false)} wallet={wallet} contractId={contractId}/>
        
        <div className='farms'>
            <div className='card'>
            {Object.values(lands).map((land, index) => {
                 
                 if (land.land_lister == wallet.accountId){

                    return (
                        <div key={index} className="card-body" style={mystyle}>
                            <div>
                                <div>
                                <img src={land.land_image} alt="BigCo Inc. logo"/>
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

export default FarmerFarm