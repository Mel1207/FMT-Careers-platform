import React, { useEffect, useState } from 'react'
import { jobPost, tabItems } from '../constants'
// import { useGetJobPost } from '../hooks/useGetJobPost'
import JobCard from './JobCard'

const TabFilter = () => {
  // LOCAL STATE
  const [currentTab, setCurrentTab] = useState(1)
  const [seList, setSeList] = useState([])
  const [qaList, setQaList] = useState([])
  const [deList, setDeList] = useState([])

  // HOOKS CALL
  // const { jobPost } = useGetJobPost()

  const changeTab = (id) => {
    setCurrentTab(id)
  }

  const filterSoftwareEngineers = () => {
    const newList = jobPost.filter(item => item.category === 'software-engineers')
    setSeList(newList)
  } 

  const filterQualityAssurance = () => {
    const newList = jobPost.filter(item => item.category === 'quality-assurance')
    setQaList(newList)
  }

  const filterDesigners = () => {
    const newList = jobPost.filter(item => item.category === 'designers')
    setDeList(newList)
  }

  useEffect(() => {
    filterSoftwareEngineers()
    filterQualityAssurance()
    filterDesigners()
  }, [])

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
            {jobPost.map(item => (
              <JobCard key={item.id} jobTitle={item.jobTitle} type={item.type} setup={item.setup} location={item.location} description={item.description}/>
            ))}
          </div>
        )}
        {currentTab === 2 && (
          <div className="job-list">
            {seList.map(item => (
              <JobCard key={item.id} jobTitle={item.jobTitle} type={item.type} setup={item.setup} location={item.location} description={item.description}/>
            ))}
          </div>
        )}
        {currentTab === 3 && (
          <div className='job-list'>
            {qaList.map(item => (
              <JobCard key={item.id} jobTitle={item.jobTitle} type={item.type} setup={item.setup} location={item.location} description={item.description}/>
            ))}
          </div>
        )}
        {currentTab === 4 && (
          <div className="job-list">
            {deList.map(item => (
              <JobCard key={item.id} jobTitle={item.jobTitle} type={item.type} setup={item.setup} location={item.location} description={item.description}/>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default TabFilter