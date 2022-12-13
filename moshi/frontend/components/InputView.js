import React from 'react';
import { useParams} from 'react-router-dom';
import {useState,useEffect} from 'react';
import Footer from './Footer';
import InputBuy from './InputBuy';

const InputView = ({wallet,contractId}) => {

    let [inputBuyOpen, setInputBuyOpen] = useState(false);
    const handleInputBuyModal = () => {
        setInputBuyOpen(true);
    }

    const closeModal = () => {
        setInputBuyOpen(false);
    }

    const params = useParams();
    console.log(params);


    const [input, setInput] = useState([]);

  
    useEffect(() => {
  
      getInput().then(setInput);
  
    }
    , []);
  
      
   console.log(input)
  
    function getInput() {
      console.log(contractId)
      return wallet.viewMethod({ method: "get_input", args: {id: params.id}, contractId });
  
    }

  return (
    <div>
        <div>
            {inputBuyOpen && <InputBuy onhandleInputBuyModal={closeModal} input={input} wallet={wallet}/>}
        </div>
        <div className="w3-card-4 ">
            
            <div className="w3-container w3-center w3-padding">
                <div className='w3-row-padding'>
                <div className='w3-col l4'>
                    <img src={input.input_image} alt="Alps" className='image-input'/>
                </div>
                <div className='w3-col l4'>
                    <h4 className='w3-text-green'> {input.input_name} </h4>
                    <p>{input.input_description}</p>
                    <div>
                        {input.input_quantity}
                    </div>
                    <div className='w3-padding'>
                        <p className='w3-text-orange'>
                        <small className='w3-text-green w3-text-bold'>ksh: </small>{input.input_price}
                        </p>
                    </div>
                    <p>{input.input_owner}</p>
                    <div className='w3-padding'>
                    <button className='w3-green w3-text-white' onClick={handleInputBuyModal}> Buy </button>
                </div>
                </div>
                </div>

            </div>
        </div>
       <Footer />
    </div>
  )
}

export default InputView