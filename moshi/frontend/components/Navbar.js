import React from 'react'
import { useRef,useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import {Link,useResolvedPath,useMatch} from 'react-router-dom'
import "./style.css"
import Dropdown from './Dropdown';
import DropdownF from './DropdownF';
import ProfileDropdown from './ProfileDropdown';


function Navbar({isSignedIn,wallet}) {

    const [dropdown,setDropdown] = useState(false);
    const [dropdownF,setDropdownF] = useState(false);
    const [dropdownP,setDropdownP] = useState(false);

    const navRef = useRef();

    const signIn = () => { wallet.signIn() }

    const signOut = () => { wallet.signOut() }


    const showNavbar = () =>{
        navRef.current.classList.toggle('responsive_nav');

    
    }

    function CustomLink({to,children,...props}){

      const resolvedPath = useResolvedPath(to)
      const isActive = useMatch({path: resolvedPath.pathname, end:true})

      return(
        <Link className={isActive ? "active" : ""} to ={to} {...props}>
          {children}
        </Link>
      )

    }

    const onMouseEnter = () =>{
      if(window.innerWidth < 900){
        setDropdown(true)
      }else{
        setDropdown(true)
      }
    };

    const onMouseLeave = () =>{
      if(window.innerWidth < 900){
        setDropdown(false)
      }else{
        setDropdown(false)
      }
    };

    const handleDropdown = () => {
      setDropdown(!dropdown);
    };

    const onMouseEnter1 = () =>{
      if(window.innerWidth < 900){
        setDropdownF(true)
      }else{
        setDropdownF(true)
      }
    };
  
    const onMouseLeave1 = () =>{
      if(window.innerWidth < 900){
        setDropdownF(false)
      }else{
        setDropdownF(false)
      }
    };

    const handleDropdown1 = () => {
      setDropdownF(!dropdownF);
    };

    const onMouseEnter2 = () =>{
      if(window.innerWidth < 900){
        setDropdownP(true)
      }else{
        setDropdownP(true)
      }
    };
  
    const onMouseLeave2 = () =>{
      if(window.innerWidth < 900){
        setDropdownP(false)
      }else{
        setDropdownP(false)
      }
    };

    const handleDropdown2 = () => {
      setDropdownP(!dropdownF);
    };
    
  return (
    <header>
        <Link to='/' className='site-title'> Hambre </Link>
        <nav > 
            <ul ref={navRef}>
              <li>
              <CustomLink to='/' > Home</CustomLink>
              </li>

              <li onClick={handleDropdown}   onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
              <Link> Invest</Link>
                {dropdown && <Dropdown />}
              </li>
              <li>
              <CustomLink to='/marketplace'> Marketplace</CustomLink>
              </li>
              <li>
              <CustomLink to='/my-investments'> My Investments</CustomLink>
              </li>
              <li onClick={handleDropdown1}   onMouseEnter={onMouseEnter1} onMouseLeave={onMouseLeave1}>
              <Link> Farmers </Link>
              {dropdownF && <DropdownF />}
              </li>

              <li onClick={handleDropdown2}   onMouseEnter={onMouseEnter2} onMouseLeave={onMouseLeave2}>
              <Link className='profile'><i className="fa fa-user" aria-hidden="true"></i> profile </Link>
              {dropdownP && <ProfileDropdown />}
              </li>


            <button onClick={showNavbar} className = "close">
            <FaTimes />
            </button>            
            
            </ul>




        </nav>
        { isSignedIn
          ? <button onClick={signOut} className='log'>Log out</button>
          : <button onClick={signIn} className='log'>Log in</button> 
        }
 


        <button onClick={showNavbar} className='bars'>
                <FaBars />
        </button>

    </header>
  )
}

export default Navbar