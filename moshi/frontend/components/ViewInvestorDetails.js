import React from 'react';
import { useState,useEffect } from 'react';


const ViewInvestorDetails = (props) => {

    const wallet = props.wallet;
    const contractId = props.contractId;
    const landid = props.landid;

    console.log(landid)

    const [land, setLand] = useState([]);


    useEffect(() => {
  
        getLand().then(setLand);
    
      }
      , []);


    function getLand() {
        console.log(contractId)
        return wallet.viewMethod({ method: "get_land", args: {id: landid}, contractId });
    
      }

      
  return (
    <div className="w3-modal">
    <div className="w3-modal-content w3-white w3-center">
        <div className="w3-container">
            <span className="form-header">View Investment</span>
            <button className="w3-button w3-right w3-xlarge" onClick={props.onHandleViewModal}>&times;</button>
        </div>
        <div>
            <p> farm id: {land.id}</p>
            <div class="w3-card-12 w3-padding">
            <img src={land.land_image} className="w3-round w3-image" alt="Norway"></img>
            </div>
            <p> farm name: {land.land_owner}</p>
            <p> farm size: {land.land_size}</p>
            <p> Contract: {land.contract_type}</p>
            
            <p className="w3-orange"> Price: Ksh {land.land_price}</p>
            
        </div>
        <form id="farmInputs" className="w3-container" >
            <label>Contract Owner: {land.land_lister}</label>
            <button className="w3-button w3-green w3-block" type="submit" >View Transaction</button>
            <br />
            <br />
            <div className="w3-right">
                <button className="w3-button w3-red w3-round" onClick={props.onHandleViewModal}>close</button>
            </div>
        </form>
    </div>
    </div> 
  )
}

export default ViewInvestorDetails