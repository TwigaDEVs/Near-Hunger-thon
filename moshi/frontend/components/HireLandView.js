import React from 'react';
import Footer from './Footer';
import { useParams} from 'react-router-dom';
import {useState,useEffect} from 'react';
import Hire from './Hire';
import axios, * as others from 'axios';



function HireLandView({wallet,contractId}) {


    let [HireOpen, setHireOpen] = useState(false);
    const handleHireModal = () => {
        setHireOpen(true);
    }

    const closeModal = () => {
        setHireOpen(false);
    }

    const params = useParams();
    console.log(params);


    const [land, setLand] = useState([]);
    

  
    useEffect(() => {
  
      getLand().then(setLand);
  
    }
    , []);

  
      
   console.log(land)
  
    function getLand() {
      console.log(contractId)
      return wallet.viewMethod({ method: "get_land", args: {id: params.id}, contractId });
  
    }


    const near = "1000000000000000000000000";

  return (
    <>
    <div>

        <h2> Land Details </h2>

        <div className='container'>
        <div className='w3-display-container'>

            <div className='w3-center w3-margin '>
            <div className='w3-card w3-round-xlarge'>
                <div className="w3-row">
                    <div class="w3-col m4 l5">
                    
                        <img src={land.land_image}  alt="lands to lease" className="w3-image" style={{width: "100%"}}/>
                    </div>
                    <div className="w3-col m8 l5">
                        
                        <p> {land.land_owner}</p>
                        <div>
                            {land.land_description}
                        </div>
                        <p> Hire Price: Ksh {land.land_price}</p>

                        <p> {land.land_size}</p>

                        <div>
                            {land.land_lister}
                        </div>

                        <div>
                            <button className='w3-green w3-text-white' onClick={handleHireModal}> Hire land </button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                {HireOpen && <Hire onHandleHireModal={closeModal} land={land} wallet={wallet} contractId={contractId}/>}
            </div>

            </div>

        </div>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default HireLandView