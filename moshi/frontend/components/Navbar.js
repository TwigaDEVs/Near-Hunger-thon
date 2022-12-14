import React from "react";
import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useResolvedPath, useMatch } from "react-router-dom";
import "./style.css";
import Dropdown from "./Dropdown";
import DropdownF from "./DropdownF";
import ProfileDropdown from "./ProfileDropdown";
import MarketplaceDropdown from "./MarketplaceDropdown";
import hambre from '../assets/hambre.png'
import MobileNav from "./MobileNav";

function Navbar({ isSignedIn, wallet }) {
  const [dropdown, setDropdown] = useState(false);
  const [dropdownF, setDropdownF] = useState(false);
  const [dropdownP, setDropdownP] = useState(false);
  const [dropdownM, setDropdownM] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const navRef = useRef();

  const signIn = () => {
    wallet.signIn();
  };

  const signOut = () => {
    wallet.signOut();
  };

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
      <Link className={isActive ? "active" : ""} to={to} {...props}>
        {children}
      </Link>
    );
  }

  const onMouseEnter = () => {
    if (window.innerWidth < 900) {
      setDropdown(true);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 900) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  const onMouseEnter1 = () => {
    if (window.innerWidth < 900) {
      setDropdownF(true);
    } else {
      setDropdownF(true);
    }
  };

  const onMouseLeave1 = () => {
    if (window.innerWidth < 900) {
      setDropdownF(false);
    } else {
      setDropdownF(false);
    }
  };

  const handleDropdown1 = () => {
    setDropdownF(!dropdownF);
  };

  const onMouseEnter2 = () => {
    if (window.innerWidth < 900) {
      setDropdownP(true);
    } else {
      setDropdownP(true);
    }
  };

  const handleCloseMobileNav = () => {
    setMobileNavOpen(false);
  }

  const onMouseLeave2 = () => {
    if (window.innerWidth < 900) {
      setDropdownP(false);
    } else {
      setDropdownP(false);
    }
  };

  const handleDropdown2 = () => {
    setDropdownP(!dropdownF);
  };

  const onMouseEnter3 = () => {
    if (window.innerWidth < 900) {
      setDropdownM(true);
    } else {
      setDropdownM(true);
    }
  };

  const onMouseLeave3 = () => {
    if (window.innerWidth < 900) {
      setDropdownM(false);
    } else {
      setDropdownM(false);
    }
  };

  const handleDropdown3 = () => {
    setDropdownM(!dropdownF);
  };

  const handleOpenMobileBar = () => {
    setMobileNavOpen(true);
}

  return (
    <>
    <div className="w3-bar w3-card w3-text-green" style={{padding: "0px", margin: "0px"}}>
      <div className="w3-auto" style={{marginLeft: "10%", marginRight: "10%"}}>
      <Link to="/" className="w3-text-green" style={{fontWeight: 300, fontSize: "22px"}}>
        <i className="ser" style={{padding: "0px", margin: "0px", fontStyle: "bold"}}><img src={hambre} className="logo"/></i> Hambre
      </Link>
      <div className="w3-right" style={{marginTop: "8px"}}>
        <a className="w3-bar-item w3-hide-small">
          <CustomLink className="w3-text-green" to="/"> Home</CustomLink>
        </a>
         <a className="w3-dropdown-hover w3-hide-small w3-bar-item w3-text-green"
          >
  
              Invest
              <div className="w3-dropdown-content w3-bar-block w3-border" style={{zIndex: 4}}>
                <Link to="/hire-land" className="w3-bar-item w3-button">Hire Farm</Link>
                <Link to="/partner" className="w3-bar-item w3-button">Be a Partner</Link>
                <Link to="/resources" className="w3-bar-item w3-button">Provide Farm  Tools and Equipment</Link>
              </div>
          </a>
          <a className="w3-bar-item w3-hide-small"><CustomLink to="/my-investments" className="w3-text-green"> My Investments</CustomLink></a>
          <a className="w3-text-green w3-bar-item w3-hide-small w3-dropdown-hover"
          >
  
  
              Farmers
              <div className="w3-dropdown-content w3-bar-block w3-border" style={{zIndex: 4}}>
                <Link to="/post-farm" className="w3-bar-item w3-button">Post Farm For Hire/Partnership</Link>
                <Link to="/farm-resource" className="w3-bar-item w3-button">Request Farm Resource</Link>
                <Link to="/my-investors" className="w3-bar-item w3-button">My Investors</Link>
              </div>
          </a>
          <a className="w3-text-green w3-hide-small w3-dropdown-hover w3-bar-item"
          >
 
  
              Marketplace
              <div className="w3-dropdown-content w3-bar-block w3-border" style={{zIndex: 4}}>
                <Link to="/farm-produce" className="w3-bar-item w3-button">Farm Products</Link>
                <Link to="/farm-inputs" className="w3-bar-item w3-button">Farm Inputs</Link>
                <Link to="/sales" className="w3-bar-item w3-button">Completed Sales</Link>
              </div>
          </a>
                    {isSignedIn ? (
            <a className="w3-dropdown-hover w3-hide-small w3-text-green w3-bar-item"
          >
  
              Profile
              <div className="w3-dropdown-content w3-bar-block w3-border" style={{zIndex: 4}}>
                <Link to="/account" className="w3-bar-item w3-button">Account</Link>
              </div>
          </a>


          ) : ( 
            <Link >
              
            </Link>
            )}

         {/* <button onClick={showNavbar} className="close">
            <FaTimes />
          </button>*/}

          {isSignedIn ? (
          <button onClick={signOut} className="w3-bar-item w3-hide-small w3-green" style={{padding: "9px", margin: "0px"}}>
            Log out
          </button>
        ) : (
          <button onClick={signIn} className="log">
            Log in
          </button>
        )}

        <a className="w3-hide-large w3-hide-medium w3-bar-item"  onClick={handleOpenMobileBar}><FaBars /></a>
        {mobileNavOpen && (<MobileNav handleCloseMobileNav={handleCloseMobileNav} signOut={signOut} CustomLink={CustomLink} signIn={signIn} />)}

      </div>
      

    </div>

      </div>
      </>
  );
}

export default Navbar;
