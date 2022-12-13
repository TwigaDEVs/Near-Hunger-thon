import React from 'react';
import axios, * as others from 'axios';
import { useState,useEffect } from "react";
import * as nearAPI from "near-api-js";
import { utils } from 'near-api-js';

const InputBuy = (props) => {
    const input = props.input;
    const wallet = props.wallet;

    
    const [inputBuy,setInputBuy] = useState([]);
	const [agreement,setAgreements] = useState([]);
    const [uiPleaseWait, setUiPleaseWait] = useState(true);
    const [data, setData] = useState("Loading...");

    const getData = () => {

        const options = {
           
            method: 'GET',
            url: 'https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency',
            params: {have: 'KES', want: 'USD', amount: input.input_price},
            headers: {
                'X-RapidAPI-Key': '54eea67071msh5d04b63a80c9ed6p19c3fbjsnf2d88b51728a',
                'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com'
            }
            };
            
            const da = axios.request(options).then(function (response) {
                
                setData(response.data)
            }).catch(function (error) {
                console.error(error);
            });

    }

    useEffect(() => {
        getData();
    }, [])


    console.log("i here",data)

    const priceNear = (data.new_amount/1.62).toFixed(5)

    function addInputBuy(e) {

        e.preventDefault();


       let id_gen = input.id;



       let send_p =parseFloat(priceNear);

       let st = send_p.toString();

       console.log(st)
       
       const deposit = utils.format.parseNearAmount(st);
   
       // use the wallet to send the greeting to the contract
       wallet
         .callMethod({
           method: "buy_input",
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
       return wallet.viewMethod({ method: "get_agreement", args: {id: input.id}, contractId});
   
     }

  return (
    <div className="w3-modal">

    <div className="w3-modal-content w3-white">
        <div className="w3-container">
            <span className="form-header">Buy Farm Input</span>
            <button className="w3-button w3-right w3-xlarge" onClick={props.onhandleInputBuyModal}>&times;</button>
        </div>
        <div className='w3-padding'>
        <p>Farm input id: {input.id}</p>
        <p> Name: {input.input_name}</p>
        <p> Quantity: {input.input_quantity}</p>
        <p> Owner: {input.input_owner}</p>
        </div>
        
        <form id="farmInputs" className="w3-container">
            <p> Price: ksh {input.input_price}</p>
            {
                data ? <p className='prn'> Price in Near: {priceNear} NEAR</p>: <p>{data}</p> 
            }
            <button className="w3-button w3-green w3-block" onClick={addInputBuy}>Buy </button>
            <small> your account: {wallet.accountId}</small>
            <br />
            <br />
            <div className="w3-right">
                <button className="w3-button w3-red w3-round" onClick={props.onhandleInputBuyModal}>Close</button>
            </div>
        </form>
    </div>
    
</div> 
  )
}

export default InputBuy