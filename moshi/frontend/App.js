import 'regenerator-runtime/runtime';
import React from 'react';

import './assets/global.css';
import ItemsList from './components/ItemsList';
import Navbar from './components/Navbar';
import Marketplace from './components/Marketplace';
import Invest from './components/Invest';
import MyINvestments from './components/MyINvestments';
import Home from './components/Home';
import {Route,Routes} from 'react-router-dom'
import Partner from './components/Partner';
import HireLand from './components/HireLand';
import FarmerFarm from './components/FarmerFarm';
import FarmerInvestors from './components/FarmerInvestors';
import Profile from './components/Profile';
import Resources from './components/Resources';
import FarmResource from './components/FarmResource'
import FarmInputs from './components/FarmInputs';
import FarmProduce from './components/FarmProduce';
import HireLandView from './components/HireLandView';
import PartnerLandDetails from './components/PartnerLandDetails';
import ProductView from './components/ProductView';
import InputView from './components/InputView';


export default function App({ isSignedIn, contractId, wallet }) {
  const [valueFromBlockchain, setValueFromBlockchain] = React.useState();

  const [uiPleaseWait, setUiPleaseWait] = React.useState(true);

  const [lands, setLands] = React.useState([]);
  // Get blockchian state once on component load
  React.useEffect(() => {
    getLands().then(setLands);
    }
  , []);


  /// If user not signed-in with wallet - show prompt




  function getLands(){
  return wallet.viewMethod({ method: 'get_lands', contractId })
  }

  console.log(lands)

  function getAllItems(){
    return wallet.viewMethod({ method: 'total_items', contractId })
  }

  function getItems(){
    return wallet.viewMethod({ method: 'get_items', contractId })
  }


  // function addItem (e) {
  //   e.preventDefault();
  //   setUiPleaseWait(true);

  //   const { id, itemName, itemQuantity, itemPrice } = e.target.elements;
  //   let p = parseInt(itemPrice.value);

  //   // use the wallet to send the greeting to the contract
  //   wallet.callMethod({ method: 'add_items', args: { id: id.value ,item_name: itemName.value ,item_quantity: itemQuantity.value, item_price: p }, contractId })
  //     .then(async () => {return getItems();})
  //     .then(setItems)
  //     .finally(() => {
  //       setUiPleaseWait(false);
  //     });
  // };

  return (
    <>
      <React.Fragment>
        <Navbar isSignedIn = {isSignedIn}  wallet = {wallet}/>
      </React.Fragment>
      <div className='container'>

        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/invest" element = {<Invest />} />
          <Route path="/marketplace" element = {<Marketplace />} />
          <Route path="/my-investments" element = {<MyINvestments  wallet={wallet} contractId={contractId} lands={lands}/>} />
          <Route path="/hire-land" element = {<HireLand  wallet={wallet} contractId={contractId} lands={lands}/>} />
          <Route path="/partner" element = {<Partner  wallet={wallet} contractId={contractId} lands={lands}/>} />
          <Route path="/post-farm" element = {<FarmerFarm wallet={wallet} contractId={contractId} lands={lands}/>} />
          <Route path="/my-investors" element = {<FarmerInvestors lands={lands} />} />
          <Route path="/resources" element = {<Resources wallet={wallet} contractId={contractId} lands={lands} />} />
          <Route path="/account" element = {<Profile wallet={wallet} contractId={contractId} lands={lands} />} />
          <Route path="/farm-resource" element = {<FarmResource wallet={wallet} contractId={contractId} lands={lands} />} />
          <Route path="/farm-inputs" element = {<FarmInputs wallet={wallet} contractId={contractId} lands={lands} />} />
          <Route path="/farm-produce" element = {<FarmProduce wallet={wallet} contractId={contractId} lands={lands} />} />
          <Route path="/hire-land-view/:id" element = {<HireLandView wallet={wallet} contractId={contractId} lands={lands} />} />
          <Route path="/partner-land-view/:id" element = {<PartnerLandDetails wallet={wallet} contractId={contractId} lands={lands} />} />
          <Route path="/produce-view/:id" element = {<ProductView wallet={wallet} contractId={contractId} lands={lands} />} />
          <Route path="/farm-input/:id" element = {<InputView wallet={wallet} contractId={contractId} lands={lands} />} />
        </Routes>

      </div>

    </>
  );
}