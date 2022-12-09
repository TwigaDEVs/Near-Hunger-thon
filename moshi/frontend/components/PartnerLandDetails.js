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
        <div class="w3-card ros">
            <div className='rosim'>
                <img src={land.land_image} alt="Alps" className='w3-image'/>
            </div>
            
            <div class="w3-container w3-center">
                <h4 className='w3-text-green'> {land.land_owner} </h4>
                <p> {land.land_description}</p>
                <div>
                {land.land_size}
                </div>
                <div className='w3-padding'>
                    <p className='w3-text-orange'>
                     <small className='w3-text-green w3-text-bold'>ksh: </small>{land.land_price}
                    </p>
                </div>

                <div className='w3-padding'>
                    <button className='w3-green w3-text-white'> Accept Partnership </button>
                </div>

                <p className='w3-padding'>{land.land_lister}</p>
            </div>
        </div>


    <Footer />
    </div>
  )
}

export default PartnerLandDetails