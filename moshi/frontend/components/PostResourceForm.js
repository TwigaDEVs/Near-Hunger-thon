import React from 'react'

import { v4 as uuidv4 } from "uuid";
import { uploadToIPFS } from "../Infura";
import { useState, useEffect } from "react";

function PostResourceForm({open,onclose, wallet,contractId}) {
  const [fileResourceURL, setResourceFileURL] = useState(null);
  const [resources, setProfileResources] = useState([]);

  if (!open) return null;


  async function OnChangeFile(e) {
    var file = e.target.files[0];

    const response = await uploadToIPFS(file);

    console.log(response);

    setResourceFileURL(response);
  }



  function addResource (e) {
    e.preventDefault();

    let myuuid = uuidv4();

    let id_gen = myuuid.toString();
    

    const { resourceName,resourceType,resourceDescription, contractType} = e.target.elements;
    

  // pub id:String,
  // pub resource_name: String,
  // pub resource_type: String,
  // pub resource_description: String,
  // pub contract_type:String,
  // pub image_proof:String,


    const d = wallet.callMethod({ method: 'add_resources', 
      args: { id:id_gen ,resource_name: resourceName.value,resource_type:resourceType.value,resource_description:resourceDescription.value,
        contract_type:contractType.value,image_proof:fileResourceURL
    },
       contractId })
      
       console.log("this is d",d)
      
      };


  return (
   
    <div className="w3-modal">
			<div className="w3-modal-content w3-white">
				<div className="w3-container">
					<span className="form-header">Request Farm  Tools and Equipment</span>
					<button className="w3-button w3-right w3-xlarge" onClick={onclose}>&times;</button>
				</div>
				<form id="farmInputs" className="w3-container" onSubmit={addResource}>
					<label>Name Of Farm Eqipment/Tool</label>
					<input className="w3-input w3-border w3-round"  id="resourceName" required name="name"/>
					<label>Type</label>
          <select
                  autoComplete="off"
                  autoFocus
                  id="resourceType"
                  required
                  name="type"
                  className="w3-input w3-border w3-round"
                >
                  <option value="Garden tools and equipment">Garden tools and equipment</option>
                  <option value="Livestock production tools and equipment">Livestock production tools and equipment</option>
                </select>
					<label>Request Description</label>
					<textarea className="w3-input w3-border w3-round" id="resourceDescription" required></textarea>
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
					<label>Image of Equipment/Tool</label>
					<input className="w3-input w3-border w3-round" type={"file"} id="proofImage" onChange={OnChangeFile}/>
					<button className="w3-button w3-green w3-block" type="submit" >Save</button>
					<br />
					<br />
					<div className="w3-right">
						<button className="w3-button w3-red w3-round" onClick={onclose}>Close</button>
					</div>
				</form>
			</div>
		</div>
  )
}

export default PostResourceForm