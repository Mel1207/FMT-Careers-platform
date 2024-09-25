import React, { useState } from 'react'
import { jobPost, tabItems } from '../constants'
// import { useGetJobPost } from '../hooks/useGetJobPost'
import Button from './Button'
import IconView from '../assets/icon-view.svg'

const TabFilter = () => {
  // LOCAL STATE
  const [currentTab, setCurrentTab] = useState(1)

  // HOOKS CALL
  // const { jobPost } = useGetJobPost()

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
        {currentTab === 1 && (
          <div className="job-list">
            {/* {jobPost.map(item => (
              <div key={item.id} className='card-job'>
                <p className='job-title'>{item}</p>
              </div>
            ))} */}
            {jobPost.map(item => (
              <div key={item.id} className='card-job'>
                <p className="job-title">{item.jobTitle}</p>
                <p>{item.description}</p>
                <Button btnTitle='Learn More' classList='btn btn-primary' btnicon={IconView}/>
              </div>
            ))}
          </div>
        )}
        {currentTab === 2 && <h1>Tab contents 2 </h1>}
        {currentTab === 3 && <h1>Tab contents 3 </h1>}
        {currentTab === 4 && <h1>Tab contents 4 </h1>}
      </div>
  
    </div>
  )
}

export default TabFilter