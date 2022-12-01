import React from 'react'
import {MenuItemsF} from './MenuItems';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import './DropdownF.css'

function DropdownF() {
    const [click, setClick] = useState(false);

    const handleClick = () =>(!click)

  return (
    <ul onClick={handleClick}
    className={click ? 'dropdown-menu1 clicked': 'dropdown-menu1'}
    >
        {
            MenuItemsF.map((item, index) => {
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

export default DropdownF