import React from 'react'
import './postfarm.css'
import {useState,useEffect} from 'react'
import { uploadFileToIPFS, uploadJSONToIPFS } from "../pinata";
import axios from "axios";
import {v4 as uuidv4} from 'uuid';
import{uploadToIPFS} from "../Infura";

function PostFarm({open,onclose, wallet,contractId}) {




    if (!open) return null;

    const [landss, setLands] = useState(null);
    const [fileURL, setFileURL] = useState(null);
    const [uiPleaseWait, setUiPleaseWait] = React.useState(true);
  

        //This function uploads the image to IPFS
  async function OnChangeFile(e) {
    var file = e.target.files[0];
 
    const response = await uploadToIPFS(file);

    console.log(response)

        setFileURL(response);
}

    function addLand (e) {
      e.preventDefault();

      let myuuid = uuidv4();

      let id_gen = myuuid.toString();
      
  
      const { landOwner, landSize,landLocation,landDescription, contractType, landPrice } = e.target.elements;
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
      wallet.callMethod({ method: 'add_lands', 
        args: { id:id_gen ,land_owner: landOwner.value,land_size:landSize,land_image:fileURL,land_description:landDescription,
          land_location: landLocation.value, land_price: p,contract_type:contractType
      },
         contractId })
        .then(async () => {return getLands();})
        .then(setLands)
        .finally(() => {
          setUiPleaseWait(false);
        });
    };

    
  return (
    <div className='overlay'>
        <div className='modalContainer'>
            <div className='he'>
            <p>  </p>
        <button onClick={onclose} className="icon"><i className="fa fa-times" aria-hidden="true"></i></button>
            </div>
        <div>
        <form onSubmit={addLand} className='postform'>
        
          <fieldset id="fieldset">
            {/* <p>Sign the guest book, { currentAccountId }!</p> */}
            <p className='modelhead'>Post Farm</p>
            <label>
                <p>Name</p>
                <input 
                autoComplete="off"
                autoFocus
                id="landOwner"
                required
                name="name" />
            </label>
            <label>
                <p>Farm Size</p>
                <input 
                autoComplete="off"
                autoFocus
                id="landSize"
                required
                name="land_size" />
            </label>
            <label>
            <p> Short Description</p>
            <textarea 
             autoComplete="off"
             autoFocus
             id='landDescription'
             required
             name='description'
            />
            </label>
            <label>
                <p>Land Location</p>
                <input
                  autoComplete="off"
                  autoFocus
                  id="landLocation"
                  required
                 name="location" />
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
                <p>Contract Bid</p>
                <input
                  autoComplete="off"
                  autoFocus
                  id="landPrice"
                  type="number"
                  required
                 name="contractbid" />
            </label>
            <label>
                <p>Land Image</p>
                <div className='image'>
                    <input
                      
                      autoComplete="off"
                      autoFocus
                      id="landImage"
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

export default PostFarm