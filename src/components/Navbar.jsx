import React from 'react'
import { NavLink } from 'react-router-dom'
import { navLinks } from '../constants'
import Button from './Button'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="navbar-container">
        <NavLink to='/'>
          <span className='navbar-logo'>LOGO</span>
        </NavLink>
  
        <ul className='nav-links'>
          {navLinks.map(item => (
            <li key={item.id}>
              <NavLink to={item.linkPath}>{item.linkTitle}</NavLink>
            </li>
          ))}
        </ul>
        
        <Button classList='btn btn-primary' btnTitle='Contact Us'/>
      </div>
    </nav>
  )
}

export default Navbar