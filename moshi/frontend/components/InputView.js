import React from 'react';
import { useParams} from 'react-router-dom';
import {useState,useEffect} from 'react';

const InputView = ({wallet,contractId}) => {

    let [HireOpen, setHireOpen] = useState(false);
    const handleHireModal = () => {
        setHireOpen(true);
    }

    const closeModal = () => {
        setHireOpen(false);
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
        <div class="w3-card ros">
            <img src={input.input_image} alt="Alps" />
            <div class="w3-container w3-center">
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

                <div className='w3-padding'>
                    <button className='w3-green w3-text-white'> Buy </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InputView