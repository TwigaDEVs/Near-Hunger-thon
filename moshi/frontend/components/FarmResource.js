import React from 'react';
import './FarmResource.css';
import Footer from './Footer';
import PostResourceForm from './PostResourceForm';
import {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';


function FarmResource({wallet,contractId,isSignedIn}) {
  const [openModalResource, setOpenModalResource] = useState(false);
  const [resources, setProfileResources] = useState([]);

  const [userProfile, setUserProfile] = useState([]);

  const viewProfile = () => {
    const profile = window.nearwallet.viewMethod({ method: "get_users", contractId }).then((result) => result[window.nearwallet.accountId]).then(data => data);
    return profile;
}


  useEffect(() => {

    getResources().then(setProfileResources);
    viewProfile().then((data) => (setUserProfile(data)));

  }
  , []);

    
 console.log(resources);
 console.log(userProfile);

  function getResources() {
    console.log(contractId)
    return wallet.viewMethod({ method: "get_resources", contractId });

  }

  const signIn = () => {
    wallet.signIn();
  };


   // pub id:String,
  // pub resource_name: String,
  // pub resource_type: String,
  // pub resource_description: String,
  // pub contract_type:String,
  // pub image_proof:String,

  return (
    <div>
      <h2>Your Listed Requests</h2>
      <div className='resource-button'>
      {isSignedIn ? <>
      { userProfile ?

          <button onClick={() => setOpenModalResource(true)}>
          Request Farm  Tools and Equipment
          </button> :

          <button>
           <Link to="/account" className="w3-bar-item w3-button"> Please Update Profile before Posting Equipment Request</Link>
          </button> 

      }
      </>
      
      :
      <button onClick={signIn}>
      Please Login to Start
     </button> 

    }
          
          <PostResourceForm open = {openModalResource} onclose={() => setOpenModalResource(false)} wallet={wallet} contractId={contractId}/>
      </div>
      <div className='resource-farm'>
        <div className="w3-row-padding w3-stretch">
          {Object.values(resources).map((resource, index) => {
            if (resource.request_farmer == wallet.accountId) {
              return (
                <div key={index} className="w3-col l4 m6">
                  <div className="w3-card sol">
                    <div className="card-header">
                      <img src={resource.image_proof} alt="rover" />
                    </div>
                    <div className="card-body">
                      <p> {resource.resource_type}</p>
                      <h4>{resource.resource_name}</h4>
                      <div className="des">
                        <p>{resource.resource_description}</p>
                      </div>
                      <div>
                        <p className="w3-text-orange w3-large pri">{resource.contract_type}</p>
                        
                      </div>
                      
                      <div className="user">
                        <div className="user-info">
                          <h5>

                          </h5>
                          <small>{resource.request_farmer}</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
      <Footer />
    </div>
    
  )
}

export default FarmResource