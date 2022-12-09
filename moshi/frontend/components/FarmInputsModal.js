import "./FarmInputsModal.css";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { uploadToIPFS } from "../Infura";



const FarmInputsModal = (props) => {

	const [inputss, setInputs] = useState(null);
	const [inputfileURL, setInputFileURL] = useState(null);
	const [uiPleaseWait, setUiPleaseWait] = useState(true);

	const wallet = props.wallet;
	const contractId = props.contractId;
  
	useEffect(() => {
		getInputs().then(setInputs);
	}, []);
  
	//This function uploads the image to IPFS
	async function OnChangeFileInput(e) {
	  var file = e.target.files[0];
  
	  const response = await uploadToIPFS(file);
  
	  console.log(response);
  
	  setInputFileURL(response);
	}
  
	function addInput(e) {
	  e.preventDefault();
  
	  let myuuid = uuidv4();
  
	  let id_input = myuuid.toString();
  
	  const {
		inputName,
		inputDescription,
		inputQuantity,
		inputPrice,
	  } = e.target.elements;
	  let input_pric = parseInt(inputPrice.value);
  
	//   id:String,
	//   input_name: String,
	//   input_description: String,
	//   input_quantity: String,
	//   input_image: String,
	//   input_price:u64,
	//   input_sold:bool,
	//   input_owner:AccountId,
	  wallet
		.callMethod({
		  method: "add_inputs",
		  args: {
			id: id_input,
			input_name: inputName.value,
			input_description: inputDescription.value,
			input_quantity: inputQuantity.value,
			input_image: inputfileURL,
			input_price: input_pric,
		  },
		  contractId,
		})
		.then(async () => {
		  return getInputs();
		})
		.then(setInputs)
		.finally(() => {
		  setUiPleaseWait(false);
		});
	}
  
	function getInputs() {
	  return wallet.viewMethod({ method: "get_inputs", contractId });
	}

    return (
		<div className="w3-modal">
			<div className="w3-modal-content w3-white">
				<div className="w3-container">
					<span className="form-header">New Farm input</span>
					<button className="w3-button w3-right w3-xlarge" onClick={props.onHandleCloseModal}>&times;</button>
				</div>
				<form id="farmInputs" className="w3-container" onSubmit={addInput}>
					<label>Input Name</label>
					<input className="w3-input w3-border w3-round" id="inputName"/>
					<label>Input quantity</label>
					<input className="w3-input w3-border w3-round" id="inputQuantity"/>
					<label>Input Description</label>
					<textarea className="w3-input w3-border w3-round" id="inputDescription"></textarea>
					<label>Input image</label>
					<input className="w3-input w3-border w3-round" type={"file"} onChange={OnChangeFileInput}/>
					<label>Price</label>
					<input className="w3-input w3-border w3-round" type='number' id="inputPrice"/>
					<button className="w3-button w3-green w3-block" type="submit">Save</button>
					<br />
					<br />
					<div className="w3-right">
						<button className="w3-button w3-red w3-round" onClick={props.onHandleCloseModal}>Close</button>
					</div>
				</form>
			</div>
		</div>        
    );
};

export default FarmInputsModal;
