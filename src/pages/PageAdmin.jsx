import React from 'react'
import Sidebar from '../components/Sidebar'
import NavbarAdmin from '../components/NavbarAdmin'
import Button from '../components/Button'
import Modal from '../components/Modal'
import { useGlobalStore } from '../store/globalStore'
import { useGetJobPost } from '../hooks/useGetJobPost'

const PageAdmin = () => {
  // HOOKS CALL
  // const { jobPost, getJobPost } = useGetJobPost()

  // GLOBAL STATE
  const { isModalOpen, openModal } = useGlobalStore()
  // console.log(jobPost)
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
              <p>Status</p>
              <div></div>
            </div>
            <div className="t-body">
              <div className="t-row">
                <p>Job title</p>
                <p>Category</p>
                <p>Type</p>
                <p>Status</p>
                <div></div>
              </div>
              <div className="t-row">
                <p>Job title</p>
                <p>Category</p>
                <p>Type</p>
                <p>Status</p>
                <div></div>
              </div>
              <div className="t-row">
                <p>Job title</p>
                <p>Category</p>
                <p>Type</p>
                <p>Status</p>
                <div></div>
              </div>
            </div>
          </div>
          {/* <div className='test'>
            <h1>test</h1>
            {jobPost.map(item => (
              <div key={item.id}>
                <p>{item.jobTitle}</p>
                <p>{item.category}</p>
              </div>
            ))}
          </div>   */}
        </div>
      </main>
      {isModalOpen && <Modal modalTitle='New Job Post'/>}
    </> 
  )
}

export default PageAdmin