
import { useState } from "react";
import Dropdown from "./Dropdown";
import { login } from "../utils/utils";
const Navbar = () => {
  return (
    <nav className="w3-bar w3-padding w3-text-green">
    <a className="w3-large">Hambre</a>
    <div className="w3-right">
      <a className="w3-bar-item">Home</a> 
      <a className="w3-bar-item">Marketplace</a>
      <button onClick={login} className="w3-button w3-green w3-round">Connect Wallet</button> 
    </div>
    </nav>
  )
};

export default Navbar;
