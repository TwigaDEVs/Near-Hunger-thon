import React from 'react'
import './FarmResource.css'
import Footer from './Footer'
import PostResourceForm from './PostResourceForm'
import {useState} from 'react'


function FarmResource({wallet,contractId,lands}) {
  const [openModalResource, setOpenModalResource] = useState(false);
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

      </div>
      <Footer />
    </div>
    
  )
}

export default FarmResource