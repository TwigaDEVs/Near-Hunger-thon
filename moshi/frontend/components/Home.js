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

        <div className="hero-image ">
          <div className="hero-text ">
            <h1>Improving Farming, Improving Life</h1>
            <p>Get a chance to partner with a farmer and get involved in  food production.</p>
            <button className='btn-invest'><Link to="/partner" className="w3-bar-item w3-button"> Invest </Link></button>
            
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
              <p w3-cursive> Hambre makes it easier for individuals without access to land to hire or partner with farmers through the platform, more land can be put into production, which can increase the overall food supply.</p>
            </div>
            <div className="w3-col l4  w3-center">
              <p className='w3-dark-grey'>2</p>
              <h6 className='w3-serif w3-xxlarge'>
                Partner With Farmer
              </h6>
              <p className='w3-cursive'> This aims to improve food production by providing additional resources and support to farmers, which can help them improve their agricultural practices and increase their crop yields. Partnering with organizations or companies that provide training, technology, or equipment can help farmers learn new techniques and access resources that they might not otherwise have access to.</p>
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
        <div className='w3-white w3-bottombar w3-border-green'>
        <p className='w3-green w3-text-white'>
            About
          </p>
          <p className=''>
          The project aims to increase food production by implementing improved agricultural practices and by helping farmers source income and farm equipment. This will be achieved through the use of the Near Protocol and blockchain technology, which will improve supply chain transparency and efficiency. The project will also help individuals with idle arable farms rent out their land, providing a new source of income and allowing them to contribute to food production. Additionally, the project will offer opportunities for individuals without access to farming land to hire or partner with farmers, allowing them to participate in food production and contribute to the local economy. The goal is to increase crop yields and reduce waste, in order to meet the growing demand for food and help feed a growing global population. The project will be carried out in collaboration with local farmers and agricultural experts, and will include training and support to ensure the success and sustainability of the new practices
          </p>

        </div>

          <button className='w3-green w3-text-white'>
          <Link to="/hire-land" className="w3-bar-item w3-button">Get Started</Link>
          </button>
      </div>       
      </div>


      <Footer />
    </div>
  )
}

export default Home