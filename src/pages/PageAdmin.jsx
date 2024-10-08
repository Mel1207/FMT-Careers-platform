import React from 'react'
import Sidebar from '../components/Sidebar'
import NavbarAdmin from '../components/NavbarAdmin'
import Button from '../components/Button'
import Modal from '../components/Modal'
import IconRemove from '../assets/icon-remove.svg'
import { useGlobalStore } from '../store/globalStore'
// import { jobPost } from '../constants'
import { useDeleteJobPost } from '../hooks/useDeleteJobPost'
import { useGetJobPost } from '../hooks/useGetJobPost'



const PageAdmin = () => {
  // HOOKS CALL
  const { jobPost, getJobPost } = useGetJobPost()
  const { deleteJobPost } = useDeleteJobPost()

  // GLOBAL STATE
  const { isModalOpen, openModal } = useGlobalStore()
  
  // FUNCTIONS
  const handleDeleteJob = (id) => {
    console.log(`your target doc is ${id}`)
    deleteJobPost(id)
    getJobPost()
  } 
  return (
    <>
      <NavbarAdmin />
      <Sidebar />
      <main>
        <div className='container'>
          <div className='page-title'>
            <h2>Job Postings</h2>
            <Button classList='btn btn-primary' btnTitle='New Job Post' onClick={openModal}/>
          </div>
          <div className="table">
            <div className="t-head">
              <p>Job title</p>
              <p>Category</p>
              <p>Type</p>
              <p>Location</p>
              <div></div>
            </div>
            <div className="t-body">
              {jobPost.map(item => (
                <div className="t-row" key={item.id}>
                  <p>{item.jobTitle}</p>
                  <p className='table-category'>{item.category}</p>
                  <p>{item.type}</p>
                  <p className='table-location'>{item.location}</p>
                  <div className='remove-job-item' onClick={() => handleDeleteJob(item.id)}>Remove<img src={IconRemove} alt="remove" /></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      {isModalOpen && <Modal modalTitle='New Job Post'/>}
    </> 
  )
}

export default PageAdmin