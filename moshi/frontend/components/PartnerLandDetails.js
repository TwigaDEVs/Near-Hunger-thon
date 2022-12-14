import React from 'react';
import Footer from './Footer';
import { useParams} from 'react-router-dom';
import {useState,useEffect} from 'react';
import PartnerLand from './PartnerLand';

function PartnerLandDetails({wallet,contractId}) {
    let [partnerOpen, setPartnerOpen] = useState(false);
    const handlePartnerModal = () => {
        setPartnerOpen(true);
    }

    const closeModal = () => {
        setPartnerOpen(false);
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
  return (
    <div>
        <h2> Land Partnership Details </h2>
        <div>
            {partnerOpen && <PartnerLand onhandlePartnerModal={closeModal} land={land} wallet={wallet} contractId={contractId}/>}
        </div>
        <div className="w3-card ros">
            <div className='rosim'>
                <img src={land.land_image} alt="Alps" className='w3-image'/>
            </div>
            
            <div className="w3-container w3-center">
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

                { wallet.accountId == land.land_lister ?

                <div className='w3-padding'>
                    <button className='w3-green w3-text-white' onClick={handlePartnerModal}> Accept Partnership </button>
                </div>
                :
                <p className='prn'> You are the Owner</p>

                }

                <p className='w3-padding'>{land.land_lister}</p>
            </div>
        </div>


    <Footer />
    </div>
  )
}

export default PartnerLandDetails