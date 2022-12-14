import React from 'react';
import Footer from './Footer';
import { useState,useEffect } from 'react';
import ViewInvestorDetails from './ViewInvestorDetails';


function FarmerInvestors({wallet,contractId}) {


  let [viewOpen, setViewOpen] = useState(false);
  const handleViewModal = () => {
    setViewOpen(true);
  }

  const closeModal = () => {
    setViewOpen(false);
  }


  const [agrees, setAgreements] = useState([]);
  // Get blockchian state once on component load
  useEffect(() => {
    getAgreements().then(setAgreements);
    }
  , []);

  function getAgreements(){
    return wallet.viewMethod({ method: 'get_agreements', contractId })
    }

  


  
    console.log(agrees);



  return (
    <div>

        <h2 className='farm'> My Investors</h2>

        <div className='inveslist'>

          <div className='farms'>
          {Object.values(agrees).map((agree, index) => {
            if ((agree.party_one == wallet.accountId) && (agree.contra_type == "lease" || agree.contra_type == "partner")) {
//               const newTo = {
//                 pathname: "/hire-land-view/" + land.id,
//               };
// // 
              return (
          <div key={index} className="w3-card-4">

                <header className="w3-container w3-light-grey">
                  <h3>{agree.party_two}</h3>
                </header>

                <div className="w3-container w3-center">
                  <p>Farm</p>
                  <hr/>
                  <img src="img_avatar3.png" alt="Avatar" className="w3-left w3-circle"/>
                  <p>President/CEO at Mighty Schools...</p>
                </div>

                <button className="w3-button w3-block w3-light-green" onClick={handleViewModal} >+ View Details</button>
                
                <div>
                  {viewOpen && <ViewInvestorDetails onHandleViewModal={closeModal}  wallet={wallet} contractId={contractId} landid={agree.object_id}/>}
               </div>


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

export default FarmerInvestors