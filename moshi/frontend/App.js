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



export default function App({ isSignedIn, contractId, wallet }) {
  const [valueFromBlockchain, setValueFromBlockchain] = React.useState();

  const [uiPleaseWait, setUiPleaseWait] = React.useState(true);

  const [items, setItems] = React.useState([]);
  const [allItems, setAllItems] = React.useState(0);
  const [lands, setLands] = React.useState([]);
  // Get blockchian state once on component load
  React.useEffect(() => {
    getAllItems().then(setAllItems)
   getItems().then(setItems);
   getLands().then(setLands);

    // getGreeting()
    //   .then(setValueFromBlockchain)
    //   .catch(alert)
    //   .finally(() => {
    //     setUiPleaseWait(false);
    //   });
    }
  , []);

  console.log("see",items)
  /// If user not signed-in with wallet - show prompt


  function changeGreeting(e) {
    e.preventDefault();
    setUiPleaseWait(true);
    const { greetingInput } = e.target.elements;
    
    // use the wallet to send the greeting to the contract
    wallet.callMethod({ method: 'set_greeting', args: { message: greetingInput.value }, contractId })
      .then(async () => {return getGreeting();})
      .then(setValueFromBlockchain)
      .finally(() => {
        setUiPleaseWait(false);
      });
  }

 

function getLands(){
return wallet.viewMethod({ method: 'get_lands', contractId })
}

  function getGreeting(){
    // use the wallet to query the contract's greeting
    return wallet.viewMethod({ method: 'get_greeting', contractId })
  }

  function getAllItems(){
    return wallet.viewMethod({ method: 'total_items', contractId })
  }

  function getItems(){
    return wallet.viewMethod({ method: 'get_items', contractId })
  }


  function addItem (e) {
    e.preventDefault();
    setUiPleaseWait(true);

    const { id, itemName, itemQuantity, itemPrice } = e.target.elements;
    let p = parseInt(itemPrice.value);

    // use the wallet to send the greeting to the contract
    wallet.callMethod({ method: 'add_items', args: { id: id.value ,item_name: itemName.value ,item_quantity: itemQuantity.value, item_price: p }, contractId })
      .then(async () => {return getItems();})
      .then(setItems)
      .finally(() => {
        setUiPleaseWait(false);
      });
  };

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
          <Route path="/account" element = {<Profile wallet={wallet} contractId={contractId} lands={lands} />} />

        </Routes>

      </div>
      <main >
        <form onSubmit={addItem}>
          <fieldset id="fieldset">
            {/* <p>Sign the guest book, { currentAccountId }!</p> */}
            <p> {allItems}</p>
            <p className="highlight">
              <label htmlFor="message">Item id:</label>
              <input
                autoComplete="off"
                autoFocus
                id="id"
                required
              />
            </p>
            <p className="highlight">
              <label htmlFor="message">Item Name:</label>
              <input
                autoComplete="off"
                autoFocus
                id="itemName"
                required
              />
            </p>
            <p >
              <label htmlFor="message">Item Quantity:</label>
              <input
                autoComplete="off"
                autoFocus
                id="itemQuantity"
                required
              />
            </p>
            <p>
              <label htmlFor="donation">Price:</label>
              <input
                autoComplete="off"
                defaultValue={'0'}
                id="itemPrice"
                min="0"
                step="0.1"
                type="number"
                required
              />
            </p>
            <button type="submit">
              save
            </button>
          </fieldset>
        </form>
        <div>

        </div>
        <ItemsList items={items}/> 
        <p> {items[2]}</p>
        <p>haroo</p>
        
      </main>
    </>
  );
}