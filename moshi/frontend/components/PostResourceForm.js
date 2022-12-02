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


    wallet.callMethod({ method: 'add_resources', 
      args: { id:id_gen ,resource_name: resourceName.value,resource_type:resourceType.value,resource_description:resourceDescription.value,
        contract_type:contractType.value,image_proof:fileResourceURL
    },
       contractId })};


  return (
    <div className='overlay'>
    <div className='modalContainer'>
        <div className='he'>
        <p>  </p>
    <button onClick={onclose} className="icon"><i className="fa fa-times" aria-hidden="true"></i></button>
        </div>
    <div>
    <form onSubmit={addResource} className='postform'>
    
      <fieldset id="fieldset">
        {/* <p>Sign the guest book, { currentAccountId }!</p> */}
        <p className='modelhead'>Post Resource</p>
        <label>
            <p>Name</p>
            <input 
            autoComplete="off"
            autoFocus
            id="resourceName"
            required
            name="name" />
        </label>
        <label>
            <p>Resource Type</p>
            <input 
            autoComplete="off"
            autoFocus
            id="resourceType"
            required
            name="type" />
        </label>
        <label>
        <p> Short Description</p>
        <textarea 
         autoComplete="off"
         autoFocus
         id='resourceDescription'
         required
         name='description'
        />
        </label>
        <label htmlFor="contract">
          <p>Contract Type</p>
          <select className='sel'
              autoComplete="off"
              autoFocus
              id="contractType"
              required
             name="contract" 
            
            >
              <option value="lease">Lease</option>
              <option value="partner">partner</option>
           </select>
        </label>
        <label>
            <p>Proof Image</p>
            <div className='image'>
                <input
                  
                  autoComplete="off"
                  autoFocus
                  id="proofImage"
                  name="location" 
                  type={"file"}
                  onChange={OnChangeFile}
                  required

                />
            </div>

             
        </label>

        <div className='text'>
          <button type="submit">
            submit
          </button>
        </div>

      </fieldset>
    </form>
    </div>
    </div>
    
</div>
  )
}

export default PostResourceForm