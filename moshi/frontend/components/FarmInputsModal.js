import "./FarmInputsModal.css";
const FarmInputsModal = (props) => {
    return (
		<div className="w3-modal">
			<div className="w3-modal-content w3-white">
				<div className="w3-container">
					<span className="form-header">New Farm input</span>
					<button className="w3-button w3-right w3-xlarge" onClick={props.onHandleCloseModal}>&times;</button>
				</div>
				<form id="farmInputs" className="w3-container">
					<label>Input Name</label>
					<input className="w3-input w3-border w3-round" />
					<label>Input quantity</label>
					<input className="w3-input w3-border w3-round" />
					<label>Input Description</label>
					<textarea className="w3-input w3-border w3-round"></textarea>
					<label>Input image</label>
					<input className="w3-input w3-border w3-round" type="file" />
					<label>Price</label>
					<input className="w3-input w3-border w3-round" />
					<button className="w3-button w3-green w3-block">Save</button>
					<br />
					<br />
					<div className="w3-right">
						<button className="w3-button w3-red w3-round" onClick={props.onHandleCloseModal}>Close</button>
					</div>
				</form>
			</div>
		</div>        
    );
};

export default FarmInputsModal;
