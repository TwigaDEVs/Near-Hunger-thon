import React from 'react';
import { useState,useEffect } from 'react';
import { useParams} from 'react-router-dom';
import Footer from './Footer';


const ViewInvestorDetails = (props) => {

    const wallet = props.wallet;
    const contractId = props.contractId;
    

    const params = useParams();
    console.log(params);

    

    const [land, setLand] = useState([]);


    useEffect(() => {
  
        getLand().then(setLand);
    
      }
      , []);


    function getLand() {
        console.log(contractId)
        return wallet.viewMethod({ method: "get_land", args: {id: params.id}, contractId });
    
      }

      
  return (
    <div className="">
    <div className=" w3-white w3-center">
        <div className="w3-container">
            <span className="form-header">View Investment</span>
        </div>
        <div>
            <p> farm id: {land.id}</p>
            <div className="w3-card-12 w3-padding soll">
            <img src={land.land_image} className="w3-round w3-image " alt="Norway"></img>
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
            </div>
        </form>
    </div>
    <Footer />
    </div> 
  )
}

export default ViewInvestorDetails