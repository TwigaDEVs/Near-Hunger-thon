import React from 'react';
import Footer from './Footer';
import { useParams} from 'react-router-dom';
import {useState,useEffect} from 'react';
import ContactModal from './ContactModal';

const ResorceView = ({wallet,contractId}) => {

    const [resorce, setResource] = useState([]);
    const [openModalContact, setOpenModalContact] = useState(false);
    let [contOpen, setContactOpen] = useState(false);

    const handleContactModal = () => {
        setContactOpen(true);
    }

    const closeModal = () => {
        setContactOpen(false);
    }

    

    const params = useParams();
    console.log(params);



    useEffect(() => {
  
      getResource().then(setResource);
    //   newConnectBalance.nearConnect().then(setAccBalance);
    //   ;
  
    }
    , []);

    console.log(resorce)


    function getResource() {
        console.log(contractId)
        return wallet.viewMethod({ method: "get_resource", args: {id: params.id}, contractId });
    
      }

  return (
    <div>
        <h2> Equipment Details </h2>

                <div className='container'>
                <div className='w3-display-container'>

                    <div className='w3-center w3-margin '>
                        <p>ID: {resorce.id}</p>
                    <div className='w3-card w3-round-xlarge'>
                        <div className="w3-row-padding w3-stretch">
                            <div className="w3-col m4 l5">
                            
                                <img src={resorce.image_proof}  alt="lands to lease" className="w3-image" style={{width: "100%"}}/>
                            </div>
                            <div className="w3-col m8 l5">
                                
                                <p className='prn'> Requesting: {resorce.request_farmer}</p>
                                <div>
                                    {resorce.resource_description}
                                </div>
                                <p> {resorce.resource_type}</p>
                                                        
                                <p> {resorce.contract_type}</p>

                                { wallet.accountId == resorce.request_farmer?
                                <div>
                                    <p className='prn'> Your Posted Resource </p>
                                </div>
                                :
                                <div>
                                    <button className='w3-green w3-text-white' onClick={handleContactModal}> Provide Equipment </button>
                                </div>
                                }
                            </div>
                        </div>
                    </div>

                    <div>
                        {contOpen && <ContactModal  onHandleContactModal={closeModal} resorce={resorce} wallet={wallet} contractId={contractId}/>}
                    </div>

                    </div>

                </div>
                </div>
    <Footer />
    </div>
  )
}

export default ResorceView