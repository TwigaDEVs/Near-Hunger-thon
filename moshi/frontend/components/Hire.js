import "./FarmInputsModal.css";
import axios, * as others from 'axios';
import { useState } from "react";
import * as nearAPI from "near-api-js";
import { utils } from 'near-api-js';

const Hire = (props) => {

	
	const land = props.land;
	const [hire,setHire] = useState([]);
	const [agreement,setAgreements] = useState([]);
	const [uiPleaseWait, setUiPleaseWait] = useState(true);
	const wallet = props.wallet;
	const contractId = props.contractId;
	
			 



	function addHire(e) {

		 e.preventDefault();

		 const options = {
			
			method: 'GET',
			url: 'https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency',
			params: {have: 'KES', want: 'USD', amount: land.land_price},
			headers: {
				'X-RapidAPI-Key': '54eea67071msh5d04b63a80c9ed6p19c3fbjsnf2d88b51728a',
				'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com'
			}
			};
			
			axios.request(options).then(function (response) {
				setHire(response.data)
			}).catch(function (error) {
				console.error(error);
			});
	
	
	
			console.log(hire.new_amount)
		



		let id_gen = land.id;

		console.log(hire.new_amount)
	
		let p = (hire.new_amount);

		let    new_p = p/1.79;
		console.log(new_p)

		let send_p =parseFloat(new_p);

		let st = send_p.toString();

		console.log(st)
		
		const deposit = utils.format.parseNearAmount(st);
	
		// use the wallet to send the greeting to the contract
		wallet
		  .callMethod({
			method: "hire_land",
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
		return wallet.viewMethod({ method: "get_agreement", args: {id: land.id}, contractId});
	
	  }

	  


    return (
		<div className="w3-modal">
			<div className="w3-modal-content w3-white">
				<div className="w3-container">
					<span className="form-header">Hire Land</span>
					<button className="w3-button w3-right w3-xlarge" onClick={props.onHandleHireModal}>&times;</button>
				</div>
				<div>
					<p> farm id: {land.id}</p>
					<p> farm name: {land.land_owner}</p>
					<p> farm size: {land.land_size}</p>
					<p> Contract: {land.contract_type}</p>
					<p className="w3-orange"> Price: Ksh {land.land_price}</p>
				</div>
				<form id="farmInputs" className="w3-container" >
					<label>Contract Owner: {land.land_lister}</label>
					<button className="w3-button w3-green w3-block" type="submit" onClick={addHire} >Hire</button>
					<br />
					<br />
					<div className="w3-right">
						<button className="w3-button w3-red w3-round" onClick={props.onHandleHireModal}>close</button>
					</div>
				</form>
			</div>
		</div>        
    );
};

export default Hire;
