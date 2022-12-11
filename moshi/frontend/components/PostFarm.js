import React from "react";
import "./postfarm.css";
import { useState, useEffect } from "react";
import { uploadFileToIPFS, uploadJSONToIPFS } from "../pinata";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { uploadToIPFS } from "../Infura";

function PostFarm({ open, onclose, wallet, contractId }) {
  if (!open) return null;

  const [landss, setLands] = useState(null);
  const [fileURL, setFileURL] = useState(null);
  const [uiPleaseWait, setUiPleaseWait] = React.useState(true);

  useEffect(() => {
    getLands().then(setLands);
  }, []);

  //This function uploads the image to IPFS
  async function OnChangeFile(e) {
    var file = e.target.files[0];

    const response = await uploadToIPFS(file);

    console.log(response);

    setFileURL(response);
  }

  function addLand(e) {
    e.preventDefault();

    let myuuid = uuidv4();

    let id_gen = myuuid.toString();

    const {
      landOwner,
      landSize,
      landLocation,
      landDescription,
      contractType,
      landPrice,
    } = e.target.elements;
    let p = parseInt(landPrice.value);

    // use the wallet to send the greeting to the contract

    // contract fields

    // pub id:String,
    // pub land_owner: String,
    // pub land_size: String,
    // pub land_image: String,
    // pub land_description:String,
    // pub land_location:String,
    // pub land_price:u64,
    // pub contract_type:String,
    // pub availability:bool,
    // pub land_lister: AccountId,
    wallet
      .callMethod({
        method: "add_lands",
        args: {
          id: id_gen,
          land_owner: landOwner.value,
          land_size: landSize.value,
          land_image: fileURL,
          land_description: landDescription.value,
          land_location: landLocation.value,
          land_price: p,
          contract_type: contractType.value,
        },
        contractId,
      })
      .then(async () => {
        return getLands();
      })
      .then(setLands)
      .finally(() => {
        setUiPleaseWait(false);
      });
  }

  function getLands() {
    return wallet.viewMethod({ method: "get_lands", contractId });
  }

  return (
    <div className="">
      <div className="w3-modal">
			<div className="w3-modal-content w3-white">
				<div className="w3-container">
					<span className="form-header">Post Farm</span>
					<button className="w3-button w3-right w3-xlarge" onClick={onclose}>&times;</button>
				</div>
				<form id="farmInputs" className="w3-container" onSubmit={addLand}>
					<label>Farm Owner</label>
					<input className="w3-input w3-border w3-round" id="landOwner" required name="name"/>
					<label>Farm Size</label>
					<input className="w3-input w3-border w3-round" id="landSize" required/>
					<label>Short Description</label>
					<textarea className="w3-input w3-border w3-round" id="landDescription" required></textarea>
					<label>Farm Location</label>
					<input className="w3-input w3-border w3-round" id="landLocation" required/>
          <label>Contract Type</label>
          <select
                  autoComplete="off"
                  autoFocus
                  id="contractType"
                  required
                  name="contract"
                  className="w3-input w3-border w3-round"
                >
                  <option value="lease">Lease</option>
                  <option value="partner">partner</option>
                </select>
          <label>Price</label>
					<input className="w3-input w3-border w3-round" name="contractbid" required type="number" id = "landPrice"/>
					<label>Input image</label>
					<input className="w3-input w3-border w3-round" type={"file"} id="landImage" onChange={OnChangeFile}/>
					<button className="w3-button w3-green w3-block" type="submit" >Save</button>
					<br />
					<br />
					<div className="w3-right">
						<button className="w3-button w3-red w3-round" onClick={onclose}>Close</button>
					</div>
				</form>
			</div>
		</div>  
    </div>
  );
}

export default PostFarm;
