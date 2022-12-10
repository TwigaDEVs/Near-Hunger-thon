import React from 'react'

const ProductBuy = (props) => {
    const produce = props.produce;
    const wallet = props.wallet;
  return (
    <div className="w3-modal">

    <div className="w3-modal-content w3-white">
        <div className="w3-container">
            <span className="form-header">Buy Product</span>
            <button className="w3-button w3-right w3-xlarge" onClick={props.onhandleProduceBuyModal}>&times;</button>
        </div>
        <div className='w3-padding'>
        <p>Farm input id: {produce.id}</p>
        <p> Name: {produce.produce_name}</p>
        <p> Quantity: {produce.produce_quantity}</p>
        <p> Owner: {produce.produce_seller}</p>
        </div>
        
        <form id="farmInputs" className="w3-container">
            <p> Price: ksh {produce.produce_price}</p>
            <button className="w3-button w3-green w3-block">Buy </button>
            <small> your account: {wallet.accountId}</small>
            <br />
            <br />
            <div className="w3-right">
                <button className="w3-button w3-red w3-round" onClick={props.onhandleProduceBuyModal}>Close</button>
            </div>
        </form>
    </div>
    
</div> 
  )
}

export default ProductBuy