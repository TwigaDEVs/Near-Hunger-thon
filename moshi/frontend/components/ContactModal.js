import React from 'react';
import { useState,useEffect } from 'react';

const ContactModal = ({onHandleContactModal, wallet,contractId,resorce}) => {
    const [userProfile, setUserProfile] = useState([]);

    

    const viewProfiles = () => {
        const profile = wallet.viewMethod({ method: "get_users", contractId }).then((result) => result[resorce.request_farmer]).then(data => setUserProfile(data));
        return profile;
    }

    useEffect(() => {
        viewProfiles();
    }, [])

    console.log(userProfile);
    
    

  return (
        <div className="w3-modal">
        <div className="w3-modal-content w3-white">
            <div className="w3-container">
                <span className="form-header">Contact Details</span>
                <button className="w3-button w3-right w3-xlarge" onClick={onHandleContactModal}>&times;</button>
            </div>
            <form id="farmInputs" className="w3-container" >

                <div className='w3-center'>

                    <p className=''><i className="fa fa-user-circle-o w3-padding" aria-hidden="true"></i>: {userProfile.first_name + " " + userProfile.last_name}</p>
                    <p className=''> <i className="fa fa-phone-square w3-padding" aria-hidden="true"></i> : {userProfile.phone_number}</p>
                    <p className=''><i className="fa fa-envelope w3-padding" aria-hidden="true"></i>: {userProfile.email}</p>
                    <p className=''> <i className="fa fa-money w3-padding" aria-hidden="true"></i> : {userProfile.user}</p>

                </div>

                <br />
                <br />
                <div className="w3-right">
                    <button className="w3-button w3-red w3-round" onClick={onHandleContactModal}>Close</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default ContactModal