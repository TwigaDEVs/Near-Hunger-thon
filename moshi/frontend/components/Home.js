import React from 'react'
import down from './down.png'
import vm from './vm.png'
import Footer from './Footer'
import './home.css'
import mai from '../assets/mai.jpg'
import maize from './maize1.jpg'
import musa from './musa.jpg'
import musa1 from './musa1.jpg'
import { Link } from 'react-router-dom'



function Home() {
  return (
    <div>

        <div className="hero-image">
          <div className="hero-text">
            <h1>Improving Farming, Improving Life</h1>
            <p>Get a chance to partner with a farmer and get involved in growing your own food.</p>
            <button className='btn-invest'>Invest</button>
          </div>
        </div>

      <div className='home-cont'>
      <div className="w3-display-container w3-white">
          <h6 className='w3-padding'> What Hambre Entails ... </h6>
        <div className="w3-display-middle w3-large">
        </div>
      </div>
      <div className="w3-stretch w3-row-padding">
            <div className="w3-col l4  w3-center ">
              <p className='w3-green'>1</p>
              <h6 className='w3-serif w3-xxlarge'> Farm Hire</h6>
              <p w3-cursive> Find a list of available farms for hire and invest in agricultural production</p>
            </div>
            <div className="w3-col l4  w3-center">
              <p className='w3-dark-grey'>2</p>
              <h6 className='w3-serif w3-xxlarge'>
                Partner With Farmer
              </h6>
              <p className='w3-cursive'> Get yourself a partner in the farming industry</p>
              <p className='w3-cursive'> Patner can be either by funding the farmer or providing required resources</p>
            </div>
            <div className="w3-col l4  w3-center">
              <p className='w3-green'>3</p>
              <h6 className='w3-serif w3-xxlarge'>
                Sell and Buy Farm Inputs/Produce
              </h6>
              <p className='w3-cursive'>
                Helping the farmer get access to farm inputs
              </p>
              <p className='w3-cursive'>
                Help the farmer find new markets for farm produce
              </p>
            </div>
      </div>
      <p className='w3-large w3-cursive w3-padding'> Helping farmers improve productivity, increase income </p>
      <div className=" w3-stretch w3-row-padding">
        <div className="w3-col l4"><img src={maize} className='w3-image'/></div>
        <div className="w3-col l4"><img src={musa} className='w3-image'/></div>
        <div className="w3-col l4  w3-center">
              <h6 className='w3-serif w3-xxlarge'>
                Discover the topics
              </h6>
              <p className='w3-cursive'>
                Helping the farmer get access to required resources ...
              </p>
              <p className='w3-cursive'>
                Help the farmer get the maximum produce ...
              </p>

              <button className='btn-invest'>Read more ..</button>

            </div>        
      </div>
      
      <div className='hometext'>
            <p className=''>improving agricultural productivity thus enhancing household food security, income and reducing poverty among farmers</p>
      </div>
      
      <div className='w3-row dol'>

        <div className='w3-col'>

          <div className='w3-card dol1'>
          <button className='bg-c'> <Link to="/hire-land" className="w3-bar-item w3-button">Hire Farm</Link></button>
          </div>

        </div>

        <div className='w3-col'>

        <div className='w3-card dol1'>
              <button className='bg-c'><Link to="/partner" className="w3-bar-item w3-button"> partner with farmer </Link></button>
        </div>

        </div>
        <div className='w3-col'>

          <div className='w3-card dol1'>
                <button className='bg-c'> <Link to="/resources" className="w3-bar-item w3-button">Provide Farm Resource</Link></button>
          </div>

        </div>

      </div>

      <div className='explan w3-row-padding'>
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
      </div>


      <Footer />
    </div>
  )
}

export default Home