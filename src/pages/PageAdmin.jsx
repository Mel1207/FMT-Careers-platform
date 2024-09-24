import React from 'react'
import Sidebar from '../components/Sidebar'
import NavbarAdmin from '../components/NavbarAdmin'
import Button from '../components/Button'
import Modal from '../components/Modal'
import { useGlobalStore } from '../store/globalStore'

const PageAdmin = () => {
  const { isModalOpen, openModal } = useGlobalStore()
  
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
        </div>
      </main>
      {isModalOpen && <Modal modalTitle='New Job Post'/>}
    </> 
  )
}

export default PageAdmin