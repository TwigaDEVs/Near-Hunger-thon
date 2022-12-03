import React from 'react';
import Footer from './Footer';
import { useParams} from 'react-router-dom';
import {useState,useEffect} from 'react';

function PartnerLandDetails({wallet,contractId}) {
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
  return (
    <div>
                <h2> Land Details </h2>

        <div className='container'>
        <div className='w3-display-container'>

            <div className='w3-center w3-margin '>
            <div className='w3-card w3-round-xlarge'>
                <div className="w3-row">
                    <div class="w3-col m4 l5">
                    
                        <img src={land.land_image}  alt="lands to lease" />
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
                            <button className='w3-green w3-text-white'> Hire land </button>
                        </div>
                    </div>
                </div>
            </div>

            </div>

        </div>
        </div>
    <Footer />
    </div>
  )
}

export default PartnerLandDetails