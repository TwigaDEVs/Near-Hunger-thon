import React from 'react'
import {MarketplaceMenu} from './MenuItems';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import "./MarketplaceDrop.css"

function MarketplaceDropdown() {

    const [click, setClick] = useState(false);

    const handleClick = () =>(!click)

  return (
    <ul onClick={handleClick}
    className={click ? 'dropdown-menum clicked': 'dropdown-menum'}
    >
        {
            MarketplaceMenu.map((item, index) => {
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

export default MarketplaceDropdown