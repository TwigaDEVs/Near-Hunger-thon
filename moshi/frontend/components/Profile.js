import React from 'react'


function Profile({lands,wallet,contractId}) {
  return (
    <div>
        <h2>
            {wallet.accountId}
        </h2>

        <div className='details'>
                <div className='det'>
                account details 
                </div>
                <div className='upda'>
                <i className="fa fa-pencil" aria-hidden="true"></i> update
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
    </div>
  )
}

export default Profile