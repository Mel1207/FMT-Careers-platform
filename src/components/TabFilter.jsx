import React, { useState } from 'react'
import { tabItems } from '../constants'

const TabFilter = () => {
  const [currentTab, setCurrentTab] = useState(1)

  const changeTab = (id) => {
    setCurrentTab(id)
  }

  return (
    <div className="tab-filter">
      <div className="tab-items">
        {tabItems.map(item => (
          <div className={`tab-item ${currentTab === item.id ? 'active' : ''}`} key={item.id} onClick={() => changeTab(item.id)}>{item.tabTitle}</div>
        ))}
      </div>
      <div className='tab-content'>
        {currentTab === 1 && <h1>Tab contents 1 </h1>}
        {currentTab === 2 && <h1>Tab contents 2 </h1>}
        {currentTab === 3 && <h1>Tab contents 3 </h1>}
        {currentTab === 4 && <h1>Tab contents 4 </h1>}
      </div>
  
    </div>
  )
}

export default TabFilter