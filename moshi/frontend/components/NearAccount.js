import * as nearAPI from "near-api-js";
import { useState,useEffect } from "react";


const { keyStores, connect } = nearAPI;
const myKeyStore = new keyStores.BrowserLocalStorageKeyStore();



export class  nearConnectB {

    

async  nearConnect() {


    const is = window.walletisSignedIn;
    console.log(is);
    if (is) {

        const connectionConfig = {
            networkId: "testnet",
            keyStore: myKeyStore, // first create a key store 
            nodeUrl: "https://rpc.testnet.near.org",
            walletUrl: "https://wallet.testnet.near.org",
            helperUrl: "https://helper.testnet.near.org",
            explorerUrl: "https://explorer.testnet.near.org",
          };
        const nearConnection = await connect(connectionConfig);
        const account = await nearConnection.account(window.nearwallet.accountId);
        const s_b = await account.getAccountBalance();
        const bal_det = s_b;
  
        console.log("the sab",s_b)
        
        return bal_det;

    }
    else{
        return [];
    }

   
}

}



