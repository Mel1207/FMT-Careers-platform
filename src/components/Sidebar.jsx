import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { sidebarLinks } from '../constants'

const Sidebar = () => {
  const location = useLocation()

  // console.log(location)
  return (
    <div className='sidebar'>
      <div className='sidebar-logo'>
        <span>FMT Admin</span>
      </div>
      <div className="sidebar-tabs">
        {sidebarLinks.map(item => (
          <NavLink key={item.id} to={item.path} className='sidebar-link'>
            <img src={item.iconWhite} alt="active" className='white-icon'/>
            <img src={item.iconBlack} alt="not" className='black-icon'/>
            {item.title}
          </NavLink>
        ))}
        
      </div>
    </div>
  )
}

export default Sidebar