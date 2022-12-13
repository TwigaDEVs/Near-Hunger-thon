import React from 'react';
import { useParams} from 'react-router-dom';
import {useState,useEffect} from 'react';
import Footer from './Footer'
import ProductBuy from './ProductBuy';

const ProductView = ({contractId,wallet}) => {
    let [produceOpen, setProduceOpen] = useState(false);
    const handleProductBuyModal = () => {
        setProduceOpen(true);
    }

    const closeModal = () => {
        setProduceOpen(false);
    }

    const params = useParams();
    console.log(params);


    const [produce, setProduce] = useState([]);

  
    useEffect(() => {
  
      getProduce().then(setProduce);
  
    }
    , []);
  
      
   console.log(produce)
  
    function getProduce() {
      console.log(contractId)
      return wallet.viewMethod({ method: "get_produce", args: {id: params.id}, contractId });
  
    }
  return (
    <div>
        <div>
            {produceOpen && <ProductBuy onhandleProduceBuyModal={closeModal} produce={produce} wallet={wallet}/>}
        </div>
        <div className="w3-card w3-row-padding w3-stretch w3-padding">

            <div className='w3-col l4'>
                <img src={produce.produce_image} alt="Alps" />
            </div>
            <div className=" w3-col l4 w3-container w3-center">
                <h4 className='w3-text-green'> {produce.produce_name} </h4>
                <p>{produce.produce_description}</p>
                <div>
                    {produce.produce_quantity}
                </div>
                <div className='w3-padding'>
                    <p className='w3-text-orange'>
                     <small className='w3-text-green w3-text-bold'>ksh: </small>{produce.produce_price}
                    </p>
                </div>

                <p> {produce.produce_owner}</p>

                <div className='w3-padding'>
                    <button className='w3-green w3-text-white' onClick={handleProductBuyModal}> Buy </button>
                </div>
                <p className='w3-padding'>{produce.produce_seller}</p>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default ProductView