import React from 'react'
import { NavLink } from 'react-router-dom';
import './NavMenu.css';




const NavMenu = () => {
  return (
    <nav>
        <ul>
            <li className='navHead'>Mohammad Raashid</li>
            <li> <NavLink to='/' className={({isActive}) =>  (isActive ? 'active-menu': 'regular-menu')}>Home</NavLink> </li>
            <li> <NavLink to='about' className={({isActive}) =>  (isActive ? 'active-menu': 'regular-menu')} >About</NavLink> </li>
            <li> <NavLink to='project' className={({isActive}) =>  (isActive ? 'active-menu': 'regular-menu')}>Project</NavLink></li>
            <li> <NavLink to='contact' className={({isActive}) =>  (isActive ? 'active-menu': 'regular-menu')}>Contact</NavLink></li>
        </ul>
        
    </nav>
  )
}

export default NavMenu;