import React from 'react'
import BurgerMenu from '../assets/icon-burger-menu.svg'
import IconLogOut from '../assets/icon-logout.svg'

const NavbarAdmin = () => {
  return (
    <div className='navbar-admin'>
      <div className="navbar-admin-container">
        <div className='navbar-left'>
          <button>
            <img src={BurgerMenu} alt="Burger menu" />
          </button>
          <p className='greetings'>Hello John 👋</p>
        </div>
        
        <div className='account'>
          <div className='avatar'>J</div>
          <div className='account-details'>
            <p className='account-name'>John Doe</p>
            <span className='account-role'>Admin</span>
          </div>
          <img src={IconLogOut} alt="logout" className='logout'/>
        </div>
      </div>
    </div>
  )
}

export default NavbarAdmin