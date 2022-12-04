import "./FarmInputsModal.css";
const Hire = (props) => {
    return (
		<div className="w3-modal">
			<div className="w3-modal-content w3-white">
				<div className="w3-container">
					<span className="form-header">Hire Land</span>
					<button className="w3-button w3-right w3-xlarge" onClick={props.onHandleHireModal}>&times;</button>
				</div>
				<form id="farmInputs" className="w3-container">
					<label>Agreement image</label>
					<input className="w3-input w3-border w3-round" type="file" />
					<label>Deposit</label>
					<input className="w3-input w3-border w3-round"  type="number"/>
					<button className="w3-button w3-green w3-block">Save</button>
					<br />
					<br />
					<div className="w3-right">
						<button className="w3-button w3-red w3-round" onClick={props.onHandleHireModal}>Close</button>
					</div>
				</form>
			</div>
		</div>        
    );
};

export default Hire;
