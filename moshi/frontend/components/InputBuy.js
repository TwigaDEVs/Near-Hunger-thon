import React from 'react'

const InputBuy = (props) => {
    const input = props.input;
    const wallet = props.wallet;
  return (
    <div className="w3-modal">

    <div className="w3-modal-content w3-white">
        <div className="w3-container">
            <span className="form-header">Buy Farm Input</span>
            <button className="w3-button w3-right w3-xlarge" onClick={props.onhandleInputBuyModal}>&times;</button>
        </div>
        <div className='w3-padding'>
        <p>Farm input id: {input.id}</p>
        <p> Name: {input.input_name}</p>
        <p> Quantity: {input.input_quantity}</p>
        <p> Owner: {input.input_owner}</p>
        </div>
        
        <form id="farmInputs" className="w3-container">
            <p> Price: ksh {input.input_price}</p>
            <button className="w3-button w3-green w3-block">Buy </button>
            <small> your account: {wallet.accountId}</small>
            <br />
            <br />
            <div className="w3-right">
                <button className="w3-button w3-red w3-round" onClick={props.onhandleInputBuyModal}>Close</button>
            </div>
        </form>
    </div>
    
</div> 
  )
}

export default InputBuy