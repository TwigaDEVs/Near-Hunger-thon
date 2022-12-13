import React from 'react';
import axios, * as others from 'axios';
import { useState,useEffect } from "react";
import * as nearAPI from "near-api-js";
import { utils } from 'near-api-js';


const ProductBuy = (props) => {

    const produce = props.produce;
    const wallet = props.wallet;

    const [buy,setBuy] = useState([]);
	const [agreement,setAgreements] = useState([]);
    const [uiPleaseWait, setUiPleaseWait] = useState(true);

    const [pdata, setPData] = useState("Loading...");

    const getPData = () => {

        const options = {
           
            method: 'GET',
            url: 'https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency',
            params: {have: 'KES', want: 'USD', amount: produce.produce_price},
            headers: {
                'X-RapidAPI-Key': '54eea67071msh5d04b63a80c9ed6p19c3fbjsnf2d88b51728a',
                'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com'
            }
            };
            
            const da = axios.request(options).then(function (response) {
                
                setPData(response.data)
            }).catch(function (error) {
                console.error(error);
            });

    }

    useEffect(() => {
        getPData();
    }, [])


    console.log("i here",pdata)

    const priceNear = (pdata.new_amount/1.62).toFixed(5)

    function addBuy(e) {

        e.preventDefault();

   
       let id_gen = produce.id;


       let send_p =parseFloat(priceNear);

       let st = send_p.toString();

       console.log(st)
       
       const deposit = utils.format.parseNearAmount(st);
   
       // use the wallet to send the greeting to the contract
       wallet
         .callMethod({
           method: "buy_produce",
           args: {
             id: id_gen,
             price:send_p,
           },
           contractId:contractId,
           deposit:deposit
         })
         .then(async () => {
           return getAgreements();
         })
         .then(setAgreements)
         .finally(() => {
           setUiPleaseWait(false);
         });
     }

     function getAgreements() {
       console.log(contractId)
       return wallet.viewMethod({ method: "get_agreement", args: {id: produce.id}, contractId});
   
     }

  return (
    <div className="w3-modal">

    <div className="w3-modal-content w3-white w3-center">
        <div className="w3-container">
            <span className="form-header">Buy Product</span>
            <button className="w3-button w3-right w3-xlarge" onClick={props.onhandleProduceBuyModal}>&times;</button>
        </div>
        <div className='w3-padding'>
        <p>Farm input id: {produce.id}</p>
        <p> Name: {produce.produce_name}</p>
        <p> Quantity: {produce.produce_quantity}</p>
        <p> Owner: {produce.produce_owner}</p>
        </div>
        
        <form id="farmInputs" className="w3-container">
            <p> Price: ksh {produce.produce_price}</p>
            {
                pdata ? <p className='prn'> Price in Near: {priceNear} NEAR</p>: <p>{data}</p>
            }
            <button className="w3-button w3-green w3-block" onClick={addBuy}>Buy </button>
            <small> your account: {wallet.accountId}</small>
            <br />
            <br />
            <div className="w3-right">
                <button className="w3-button w3-red w3-round" onClick={props.onhandleProduceBuyModal}>Close</button>
            </div>
        </form>
    </div>
    
</div> 
  )
}

export default ProductBuy