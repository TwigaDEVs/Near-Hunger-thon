import React from 'react';
import { useState,useEffect } from 'react';
import Footer from './Footer';

const Sales = ({wallet}) => {


    const [sales, setCompleteedSales] = useState([]);
    let [viewOpen, setViewOpen] = useState(false);
    const handleViewModal = () => {
      setViewOpen(true);
    }
  
    const closeModal = () => {
      setViewOpen(false);
    }
  

  
    useEffect(() => {
  
        getAgreements().then(setCompleteedSales);
  
    }
    , []);
  
      
   console.log(sales)
  
    function getAgreements() {
      return wallet.viewMethod({ method: "get_agreements", contractId });
  
    }

  return (
    <div>
        <h2 className='w3-green w3-padding'> Completed Sales in Hambre Marketplace</h2>

        <div className='farms'>
          {Object.values(sales).map((sale, index) => {
            if (sale.contra_type == "Bought Farm Input" || sale.contra_type == "Bought Farm produce") {
//               const newTo = {
//                 pathname: "/hire-land-view/" + land.id,
//               };
// // 
              return (
          <div key={index} className="w3-card-4">

                <header className="w3-container w3-light-grey">
                  <h3>Sale : {sale.object_id}</h3>
                </header>

                <div className="w3-container w3-center">
                  <p>From: {sale.party_one}</p>
                  <hr/>
                  <p>To: {sale.party_two}</p>
                </div>

                <div className="w3-container w3-center">
                    <p className='prn'> Amount paid: ksh {sale.amount}</p>
                </div>

                <button className="w3-button w3-block w3-light-gray" onClick={handleViewModal} >+ View Details</button>
                
                <div>
                  {/* {viewOpen && <ViewInvestorDetails onHandleViewModal={closeModal}  wallet={wallet} contractId={contractId} landid={agree.object_id}/>} */}
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

export default Sales