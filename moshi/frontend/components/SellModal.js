import "./SellModal.css";
import { useState,useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { uploadToIPFS } from "../Infura";

const SellModal = (props) => {

	const [producess, setProducess] = useState(null);
	const [producefileURL, setProduceFileURL] = useState(null);
	const [uiPleaseWait, setUiPleaseWait] = useState(true);

	const wallet = props.wallet;
	const contractId = props.contractId;
  
	useEffect(() => {
		getProduces().then(setProducess);
	}, []);
  
	//This function uploads the image to IPFS
	async function OnChangeFileProduce(e) {
	  var file = e.target.files[0];
  
	  const response = await uploadToIPFS(file);
  
	  console.log(response);
  
	  setProduceFileURL(response);
	}
  
	function addProduce(e) {
	  e.preventDefault();
  
	  let myuuid = uuidv4();
  
	  let id_prod = myuuid.toString();
  
	  const {
		produceName,
		produceDescription,
		produceQuantity,
		producePrice,
	  } = e.target.elements;
	  let input_prod = parseInt(producePrice.value);
  
	//   id:String,
	//   produce_name: String,
	//   produce_description: String,
	//   produce_quantity: String,
	//   produce_image: String,
	//   produce_price:u64,
	//   produce_sold:bool,
	//   produce_owner:AccountId,
  
	  wallet
		.callMethod({
		  method: "add_produces",
		  args: {
			id: id_prod,
			produce_name: produceName.value,
			produce_description: produceDescription.value,
			produce_quantity: produceQuantity.value,
			produce_image: producefileURL,
			produce_price: input_prod,
		  },
		  contractId,
		})
		.then(async () => {
		  return getProduces();
		})
		.then(setProducess)
		.finally(() => {
		  setUiPleaseWait(false);
		});
	}
	
	function getProduces() {
	  return wallet.viewMethod({ method: "get_produces", contractId });
	}

    return (
        <div className="w3-modal w3-text-black" style={{display: "block"}}>
        	<div className="w3-modal-content w3-text-white">
        		<div className="w3-container w3-padding xlarge">
        			<span>Enter Details</span>
        			<button className="w3-button w3-right closeTimes" onClick={props.handleCloseModal}>&times;</button>
        		</div>
        		<form id="sellForm" className="w3-container" onSubmit={addProduce}>
        			<label>Product Name</label>
        			<input className="w3-input w3-border w3-round" id="produceName" type="text" placeholder="enter product name" />
					<label>Product quantity</label>
        			<input className="w3-input w3-border w3-round" id="produceQuantity" type="text" placeholder="enter produce quantity" />
        			<label>Price</label>
        			<input className="w3-input w3-border w3-round" id="producePrice" type="number" placeholder="enter product name" />
        			<label>Description</label>
        			<textarea className="w3-input w3-border w3-round" placeholder="type Description here..." id="produceDescription"></textarea>
        			<label>image</label>
        			<input className="w3-input w3-border w3-round" type={"file"} onChange={OnChangeFileProduce} />
        			<button className="w3-button w3-green w3-block w3-round" type="submit">Save and continue</button>
        		</form>
        		<br />
        		<div className="w3-container">
        			<button className="w3-button w3-right w3-red" onClick={props.handleCloseModal}>close</button>
        		</div>
        	</div>
        </div>
    );
};


export default SellModal