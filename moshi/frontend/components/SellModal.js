import "./SellModal.css";
const SellModal = (props) => {
    return (
        <div className="w3-modal w3-text-black" style={{display: "block"}}>
        	<div className="w3-modal-content w3-text-white">
        		<div className="w3-container w3-padding xlarge">
        			<span>Enter Details</span>
        			<button className="w3-button w3-right closeTimes" onClick={props.handleCloseModal}>&times;</button>
        		</div>
        		<form id="sellForm" className="w3-container">
        			<label>Product Name</label>
        			<input className="w3-input w3-border w3-round" type="text" placeholder="enter product name" />
        			<label>Price</label>
        			<input className="w3-input w3-border w3-round" type="number" placeholder="enter product name" />
        			<label>Description</label>
        			<textarea className="w3-input w3-border w3-round" placeholder="type Description here..."></textarea>
        			<label>image</label>
        			<input className="w3-input w3-border w3-round" type="file" placeholder="enter product name" />
        			<button className="w3-button w3-green w3-block w3-round">Save and continue</button>
        		</form>
        		<br />
        		<div className="w3-container">
        			<button className="w3-button w3-right w3-red" onClick={props.handleCloseModal}>close</button>
        		</div>
        	</div>
        </div>
    );
};


export default SellModal