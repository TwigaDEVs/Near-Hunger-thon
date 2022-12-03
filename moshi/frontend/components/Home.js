import React from 'react'
import down from './down.png'
import vm from './vm.png'
import Footer from './Footer'
import './home.css'

function Home() {
  return (
    <div>
      <header className='homeh'>
        <div className='hea'>
          Get a chance to partner with a farmer and get involved in growing your own food.
        </div>
        <div className='imgh'>
          <img src={down}/>
        </div>
      </header>
      <div className='explan'>
          <p>
            we offer
          </p>
          <p>
          Get a chance to partner with a farmer and get involved in growing your own food.
          </p>

          <button>
            Get Started
          </button>
      </div>
      <div className='pat'>
        <div>
        <h4>
          Partners
          <img src={vm}/>
        </h4>
        </div>
        <div>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home