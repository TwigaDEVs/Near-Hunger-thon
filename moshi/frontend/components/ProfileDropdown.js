import React from 'react'
import {ProfileMenu} from './MenuItems'
import {useState} from 'react';
import {Link} from 'react-router-dom';
import './profile.css'

function ProfileDropdown() {

    
    const [click, setClick] = useState(false);

    const handleClick = () =>(!click)

  return (
    <ul onClick={handleClick}
    className={click ? 'dropdown-menu2 clicked': 'dropdown-menu2'}
    >
        {
            ProfileMenu.map((item, index) => {
                return (
                    <li key={index}>
                        <Link className={item.cName} to={item.path} onClick={() =>{setClick(false)}}>{item.title}</Link>
                    </li>
                );
            })
        }

    </ul>
  )
}

export default ProfileDropdown