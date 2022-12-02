import React from 'react'
import './FarmResource.css'
import Footer from './Footer'
import PostResourceForm from './PostResourceForm'
import {useState,useEffect} from 'react'


function FarmResource({wallet,contractId,lands}) {
  const [openModalResource, setOpenModalResource] = useState(false);
  const [resources, setProfileResources] = useState([]);

  
  useEffect(() => {

    getResources().then(setProfileResources);

  }
  , []);

    
 console.log(resources)

  function getResources() {
    console.log(contractId)
    return wallet.viewMethod({ method: "get_resources", contractId });

  }

   // pub id:String,
  // pub resource_name: String,
  // pub resource_type: String,
  // pub resource_description: String,
  // pub contract_type:String,
  // pub image_proof:String,

  return (
    <div>
      <h2>Your Listed Resources</h2>
      <div className='resource-button'>
          <button onClick={() => setOpenModalResource(true)}>
            Post Farm resource You Require
          </button>
          
          <PostResourceForm open = {openModalResource} onclose={() => setOpenModalResource(false)} wallet={wallet} contractId={contractId}/>
      </div>
      <div className='resource-farm'>
            <div className='card'>

                {Object.values(resources).map((resource, index) => {
                    
                    if (resource.request_farmer == wallet.accountId){

                        return (
                            <div key={index} className="card-body">
                                <div>
                                    <div>
                                    <img src={resource.image_proof} alt="lands to lease"/>
                                    </div>
                                    <h5> {resource.resource_name} </h5>
                                    <div>
                                        {resource.resource_description}
                                    </div>
                                    <p>{resource.contract_type}</p>
                                </div>

                                <hr />
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