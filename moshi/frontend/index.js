// React
import React from "react";
import "w3-css/w3.css";
//import ReactDOM from 'react-dom';
import App from "./App";
import { createRoot } from "react-dom/client";

// NEAR
import { Wallet } from "./near-wallet";
import { ItemsListed } from "./near-interface";
import { BrowserRouter } from "react-router-dom";

const CONTRACT_ADDRESS = "dev-1670843382887-77241312949034";

// When creating the wallet you can optionally ask to create an access key
// Having the key enables to call non-payable methods without interrupting the user to sign
const wallet = new Wallet({ createAccessKeyFor: CONTRACT_ADDRESS });
// Abstract the logic of interacting with the contract to simplify your flow
const itemsListed = new ItemsListed({
  contractId: process.env.CONTRACT_NAME,
  walletToUse: wallet,
});

window.nearwallet = wallet;
window.contractId = process.env.CONTRACT_NAME;

// Setup on page load
window.onload = async () => {
  const isSignedIn = await wallet.startUp();
  const container = document.getElementById("root");
  const root = createRoot(container); // createRoot(container!) if you use TypeScript
  window.walletisSignedIn = isSignedIn

  root.render(
    <BrowserRouter>
      <App
        isSignedIn={isSignedIn}
        contractId={CONTRACT_ADDRESS}
        wallet={wallet}
      />
    </BrowserRouter>
  );
};
