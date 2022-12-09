import React, {useState} from 'react';
import UpdateProfileModal from './UpdateProfileModal';
import Footer from './Footer';

function Profile({lands,wallet,contractId}) {
    const [profileModalOpen, setProfileModalOpen] = useState(false);
    const handleProfileModalOpen = () => {
        setProfileModalOpen(true);
    }
    const handleCloseProfileModal = () => {
        setProfileModalOpen(false);
    }
  return (
    <div>
        <h2>
            {wallet.accountId}
        </h2>

        {profileModalOpen && <UpdateProfileModal onHandleCloseModal={handleCloseProfileModal} />}

        <div className='details'>
                <div className='det'>
                    <span style={{fontSize: "20px", fontWeight: "200"}}>Update Profile</span> 
                </div>
                <div className="w3-center">
                    <button onClick={handleProfileModalOpen} className='w3-center w3-button w3-padding w3-blue'>
                <i className="fa fa-pencil w3-text-white" aria-hidden="true"></i> update
                </button>
                </div>
                
                <div className='names'>
                    <p>Name: </p>
                    <p>Phone Number: </p>
                    <p>Email: </p>
                </div>

                <div className='w'>
                    <p> <a href='' className='twitter'><i className="fa fa-twitter" aria-hidden="true"></i></a>  </p>
                    <p> <a href='' className='facebook'><i className="fa fa-facebook" aria-hidden="true"></i></a></p>
                    <p> <a href='' className='insta'><i className="fa fa-instagram" aria-hidden="true"></i></a></p>
                    <p> <a href='' className='you'><i class="fa fa-youtube-play" aria-hidden="true"></i></a> </p>
                </div>
        </div>
        <Footer />
    </div>
  )
}

export default Profile