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

function Navbar({ isSignedIn, wallet }) {
  const [dropdown, setDropdown] = useState(false);
  const [dropdownF, setDropdownF] = useState(false);
  const [dropdownP, setDropdownP] = useState(false);
  const [dropdownM, setDropdownM] = useState(false);

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

  return (
    <>
    <header>
      <Link to="/" className="site-title w3-bar">
        {" "}
        <i className="ser"><img src={hambre} className="logo"/></i> Hambre{" "}
      </Link>
      <nav className="">
        <ul>
          <li className="w3-bar-item">
            <CustomLink to="/"> Home</CustomLink>
          </li>
          <li className="w3-dropdown-hover"
          >
            {/*<Link> Farmers </Link>*/}
            {/*{dropdownF && <DropdownF />}*/}
  
              <button className="w3-button">Invest</button>
              <div className="w3-dropdown-content w3-bar-block w3-border">
                <Link to="/hire-land" className="w3-bar-item w3-button">Hire Farm</Link>
                <Link to="/partner" className="w3-bar-item w3-button">Be a Partner</Link>
                <Link to="/resources" className="w3-bar-item w3-button">Provide Resource</Link>
              </div>
          </li>
          <li className="w3-bar-item">
            <CustomLink to="/my-investments"> My Investments</CustomLink>
          </li>
          <li className="w3-bar-item w3-dropdown-hover"
          >
            {/*<Link> Farmers </Link>*/}
            {/*{dropdownF && <DropdownF />}*/}
  
              <button className="w3-button">Farmers</button>
              <div className="w3-dropdown-content w3-bar-block w3-border">
                <Link to="/post-farm" className="w3-bar-item w3-button">Post Farm</Link>
                <Link to="/farm-resource" className="w3-bar-item w3-button">Post Farm Resource</Link>
                <Link to="/my-investors" className="w3-bar-item w3-button">My Investors</Link>
              </div>
          </li>
          {/*<li
            onClick={handleDropdown3}
            onMouseEnter={onMouseEnter3}
            onMouseLeave={onMouseLeave3}
          >
            <Link> Marketplace</Link>
            {dropdownM && <MarketplaceDropdown />}
          </li>*/}
          <li className="w3-dropdown-hover w3-bar-item"
          >
            {/*<Link> Farmers </Link>*/}
            {/*{dropdownF && <DropdownF />}*/}
  
              <button className="w3-button">Marketplace</button>
              <div className="w3-dropdown-content w3-bar-block w3-border">
                <Link to="/farm-produce" className="w3-bar-item w3-button">Farm Products</Link>
                <Link to="/farm-inputs" className="w3-bar-item w3-button">Farm Inputs</Link>
              </div>
          </li>

          {isSignedIn ? (
            <li className="w3-dropdown-hover w3-bar-item"
          >
  
              <button className="w3-button">Profile</button>
              <div className="w3-dropdown-content w3-bar-block w3-border">
                <Link to="/account" className="w3-bar-item w3-button">Account</Link>
              </div>
          </li>


          ) : ( 
            <Link >
              
            </Link>
            )}

          <button onClick={showNavbar} className="close">
            <FaTimes />
          </button>

          {isSignedIn ? (
          <button onClick={signOut} className="log">
            Log out
          </button>
        ) : (
          <button onClick={signIn} className="log">
            Log in
          </button>
        )}
        
        </ul>

      </nav>


      <button onClick={showNavbar} className="bars">
        <FaBars />
      </button>

    </header>

    {/* <div className="w3-bar w3-black">
      <a href="#" className="w3-bar-item w3-button w3-mobile w3-green">Home</a>
      <a href="#" className="w3-bar-item w3-button w3-mobile">Link 1</a>
      <a href="#" className="w3-bar-item w3-button w3-mobile">Link 2</a>
      <div className="w3-dropdown-hover w3-mobile">
        <button className="w3-button">Dropdown <i className="fa fa-caret-down"></i></button>
        <div className="w3-dropdown-content w3-bar-block w3-dark-grey">
          <a href="#" className="w3-bar-item w3-button w3-mobile">Link 1</a>
          <a href="#" className="w3-bar-item w3-button w3-mobile">Link 2</a>
          <a href="#" className="w3-bar-item w3-button w3-mobile">Link 3</a>
        </div>
      </div>
    </div> */}


      </>
  );
}

export default Navbar;
