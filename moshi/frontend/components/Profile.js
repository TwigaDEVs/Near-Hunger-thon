import React, {useState, useRef, useEffect} from 'react';
import UpdateProfileModal from './UpdateProfileModal';
import Footer from './Footer';
import * as nearAPI from "near-api-js";

function Profile({lands,wallet,contractId}) {

    const [profileModalOpen, setProfileModalOpen] = useState(false);
    const [userProfile, setUserProfile] = useState([]);
    const [conn,setConnect] = useState("");
    const [bal,setBalance] = useState("");
    const user = useRef();
    const { keyStores, connect } = nearAPI;
    const myKeyStore = new keyStores.BrowserLocalStorageKeyStore();
    const handleProfileModalOpen = () => {
        setProfileModalOpen(true);
    }
    const handleCloseProfileModal = () => {
        setProfileModalOpen(false);
    }

    const viewProfile = () => {
        const profile = window.nearwallet.viewMethod({ method: "get_users", contractId }).then((result) => result[window.nearwallet.accountId]).then(data => data);
        return profile;
    }

    console.log(wallet.walletSelector)

    useEffect(() => {
        viewProfile().then((data) => (setUserProfile(data)));
        console.log(userProfile);
        nearConnect();
    }, [])

 async function nearConnect() {
    const connectionConfig = {
        networkId: "testnet",
        keyStore: myKeyStore, // first create a key store 
        nodeUrl: "https://rpc.testnet.near.org",
        walletUrl: "https://wallet.testnet.near.org",
        helperUrl: "https://helper.testnet.near.org",
        explorerUrl: "https://explorer.testnet.near.org",
      };
    const nearConnection = await connect(connectionConfig);
    setConnect(nearConnection)
    const account = await nearConnection.account(wallet.accountId);
    const s_b = await account.getAccountBalance();
    setBalance(s_b)
    console.log(s_b)
   
}


const near = "1000000000000000000000000";


    


  return (
    <div>
        <h2>
            {wallet.accountId}
        </h2>

        <div className='w3-row w3-center w3-rounded w3-light-gray w3-margin '>
            <div className='w3-col l4'>
            <p className='w3-cursive'> Available Balance: {bal.total/near}  NEAR</p>
            </div>
            <div className='w3-col l4'>
            <p> Total Balance: {bal.total/near}  NEAR</p>
            </div>
            <div className='w3-col l4'>
            <p> Total stateStaked: {bal.stateStaked/near}  NEAR</p>
            </div>
            <div className='w3-col l4'>
            <p> Staked: {bal.staked/near}  NEAR</p>
            </div>

        </div>
       
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
                
                { userProfile ?
                <div className='names '>
                    <p>Name: { userProfile.first_name  + " " + userProfile.last_name}</p>
                    <p>Phone Number: {userProfile.phone_number}</p>
                    <p>Email: {userProfile.email }</p>
                </div>
                :
                <div className='w3-center'>
                    <p className='w3-text green'> Please Update your profile</p>
                </div>
                 
                    }
                <div className='w'>
                    <p> <a href='' className='twitter'><i className="fa fa-twitter" aria-hidden="true"></i></a>  </p>
                    <p> <a href='' className='facebook'><i className="fa fa-facebook" aria-hidden="true"></i></a></p>
                    <p> <a href='' className='insta'><i className="fa fa-instagram" aria-hidden="true"></i></a></p>
                    <p> <a href='' className='you'><i className="fa fa-youtube-play" aria-hidden="true"></i></a> </p>
                </div>
        </div>
        <Footer />
    </div>
  )
}

export default Profile