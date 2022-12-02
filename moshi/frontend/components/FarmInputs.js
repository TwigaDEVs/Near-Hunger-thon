import React from 'react'
import Footer from './Footer'

function FarmInputs() {
  return (
    <div>
        <div className='sell'>
            <button> Sell </button>
            <div className='input-card'>
                <div className='card'> 
                    <div className='card-body'>
                        name
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default FarmInputs