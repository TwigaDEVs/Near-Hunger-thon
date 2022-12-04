const UpdateProfileModal = (props) => {
    return (
        <div className="w3-modal" style={{display: "block"}}>
			<div className="w3-modal-content">
				<div className="w3-container">
					<span className="form-header">Update Profile</span>
					<button className="w3-button w3-right w3-xlarge" onClick={props.onHandleCloseModal}>&times;</button>
				</div>
				<form id="farmInputs" className="w3-container">
					<label>First Name</label>
					<input className="w3-input w3-border w3-round" />
					<label>Last Name</label>
					<input className="w3-input w3-border w3-round" />
					<label>Phone Number</label>
					<input className="w3-input w3-border w3-round" />
					<label>email</label>
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
export default UpdateProfileModal;
