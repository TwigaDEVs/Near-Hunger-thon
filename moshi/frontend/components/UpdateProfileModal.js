import { useState } from "react";
const UpdateProfileModal = (props) => {
	var email_patt = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [email, setEmail] = useState("");
	const wallet = props.wallet;
	const contractId = props.contractId
	const handleUpdate = (e) => {
		e.preventDefault();
		console.log(firstName, lastName, phoneNumber, email);
		if(firstName == "" || lastName == "" || phoneNumber == "" || email == ""){
			alert("please fill in all the forms");
			return;
		}

		if(email_patt.test(email) !== true){
			alert("please enter a valid email");
			return;
		}

		window.nearwallet.callMethod({contractId: window.contractId, method: "update_user", args: {first_name: firstName, last_name: lastName, phone_number: Number(phoneNumber), email: email}}).then((data) => console.log(data));
	};

	return (
		<div className="w3-modal" style={{ display: "block" }}>
			<div className="w3-modal-content">
				<div className="w3-container">
					<span className="form-header">Update Profile</span>
					<button
						className="w3-button w3-right w3-xlarge"
						onClick={props.onHandleCloseModal}
					>
						&times;
					</button>
				</div>
				<form id="farmInputs" className="w3-container">
					<label>First Name</label>
					<input
						onChange={(e) => setFirstName(e.target.value)}
						className="w3-input w3-border w3-round"
					/>
					<label>Last Name</label>
					<input
						onChange={(e) => setLastName(e.target.value)}
						className="w3-input w3-border w3-round"
					/>
					<label>Phone Number</label>
					<input
						onChange={(e) => setPhoneNumber(e.target.value)}
						className="w3-input w3-border w3-round"
					/>
					<label>email</label>
					<input
						onChange={(e) => {
							setEmail(e.target.value);
						}}
						className="w3-input w3-border w3-round"
					/>
					<button
						className="w3-button w3-green w3-block"
						onClick={handleUpdate}
					>
						Save
					</button>
					<br />
					<br />
					<div className="w3-right">
						<button
							className="w3-button w3-red w3-round"
							onClick={props.onHandleCloseModal}
						>
							Close
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default UpdateProfileModal;
