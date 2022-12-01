import React from 'react'

function PostResourceForm({open,onclose, wallet,contractId}) {
  if (!open) return null;
  return (
    <div className='overlay'>
    <div className='modalContainer'>
        <div className='he'>
        <p>  </p>
    <button onClick={onclose} className="icon"><i className="fa fa-times" aria-hidden="true"></i></button>
        </div>
    <div>
    <form onSubmit="" className='postform'>
    
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
         id='landDescription'
         required
         name='description'
        />
        </label>
        <label>
            <p>Location</p>
            <input
              autoComplete="off"
              autoFocus
              id="LocationNeeded"
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
            <p>Land Image</p>
            <div className='image'>
                <input
                  
                  autoComplete="off"
                  autoFocus
                  id="proofImage"
                  name="location" 
                  type={"file"}
                  onChange="{OnChangeFile}"
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