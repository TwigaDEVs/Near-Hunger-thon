import React from 'react';
import Footer from './Footer';
import { useParams} from 'react-router-dom';
import {useState,useEffect} from 'react';
import Hire from './Hire';
import axios, * as others from 'axios';
import { Convert } from './PriceConverter';
import { nearConnectB } from './NearAccount';
import axios, * as others from 'axios';
import { async } from 'regenerator-runtime';


function HireLandView({wallet,contractId}) {


    let [HireOpen, setHireOpen] = useState(false);
    const handleHireModal = () => {
        setHireOpen(true);
    }

    const closeModal = () => {
        setHireOpen(false);
    }

    const params = useParams();
    console.log(params);


    const [land, setLand] = useState([]);
    const[accountBalance, setAccBalance] = useState([]);
    const[priceConv, setPrice] = useState('');

    const newConnectBalance = new nearConnectB();
    const newConvert = new Convert();
    

  
    useEffect(() => {
  
      getLand().then(setLand);
      getData();
      newConnectBalance.nearConnect().then(setAccBalance);
    //   ;
  
    }
    , []);

    
 
  
      
   console.log(land);
   console.log('balance',accountBalance);
   console.log('price',priceConv)

    const  getData = () => {
        async () => {
            const nm = await newConvert.Converter(land.land_price);
            const cd = nm;
            setPrice(cd)
            return cd
          }
   }


  
  
     function getLand() {
      console.log(contractId)
      return wallet.viewMethod({ method: "get_land", args: {id: params.id}, contractId });
  
    }

    function getPriceConverted(){
        return newConvert.Converter(land.land_price);
    }



    const near = "1000000000000000000000000";
    const is = window.walletisSignedIn;
    console.log(is)
const url = "https://api.swapzone.io/v1/exchange/get-rate?from=btc&to=near&amount=1&rateType=all&availableInUSA=false&chooseRate=best&noRefundAddress=false";

const options = {
  headers: {
    "x-api-key": "7bBWa9QUG"
  }
};

fetch(url, options)
  .then( res => res.json() )
  .then( data => console.log(data) );


    window.addEventListener("beforeunload", (event) => {
        getData();
        console.log("API call before page reload");
    });
    window.addEventListener("unload", (event) => {
        getData();
        console.log("API call after page reload");
    });


  return (
    <>
    <div>

        <h2> Land Details </h2>

        <div className='container'>
        <div className='w3-display-container'>

            <div className='w3-center w3-margin '>
            <div className='w3-card w3-round-xlarge'>
                <div className="w3-row-padding w3-stretch">
                    <div className="w3-col m4 l5">
                    
                        <img src={land.land_image}  alt="lands to lease" className="w3-image" style={{width: "100%"}}/>
                    </div>
                    <div className="w3-col m8 l5">
                        
                        <p> {land.land_owner}</p>
                        <div>
                            {land.land_description}
                        </div>
                        <p> Hire Price: Ksh {land.land_price}</p>
                        
                       { priceConv ?
                        <p className="prn">Amount in NEAR: {priceConv.new_amount}  NEAR</p> 
                        :
                        <p className="prn">Amount in NEAR: NaN  NEAR</p> 

                       }
                         
                        
                        <p> {land.land_size}</p>

                        <div>
                            {land.land_lister}
                        </div>

                        <div>
                            <button className='w3-green w3-text-white' onClick={handleHireModal}> Hire land </button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                {HireOpen && <Hire onHandleHireModal={closeModal} land={land} wallet={wallet} contractId={contractId}/>}
            </div>

            </div>

        </div>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default HireLandView