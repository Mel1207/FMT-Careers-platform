import React from 'react'
import { NavLink } from 'react-router-dom'
import { navLinks } from '../constants'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="navbar-container">
        <div>
          <NavLink to='/'>
            <span className='navbar-logo'>LOGO</span>
          </NavLink>
        </div>

        <ul className='nav-links'>
          {navLinks.map(item => (
            <li key={item.id}>
              <NavLink to={item.linkPath}>{item.linkTitle}</NavLink>
            </li>
          ))}
        </ul>

        <button className='btn btn-primary'>Contact Us</button>
      </div>
    </nav>
  )
}

export default Navbar