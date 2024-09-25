import React, { useState } from 'react'
import iconClose from '../assets/icon-close.svg'
import Button from './Button'
import iconArrowDown from '../assets/icon-arrow-down.svg'
import { useGlobalStore } from '../store/globalStore'
import { useAddJobPost } from '../hooks/useAddJobPost'
import { useGetJobPost } from '../hooks/useGetJobPost'

const Modal = ({modalTitle}) => {
  // LOCAL STATE
  const [jobTitle, setJobTitle] = useState('')
  const [category, setCategory] = useState('')
  const [type, setType] = useState('full-time')
  const [jobStatus, setJobStatus] = useState('open')
  const [applicationLink, setApplicationLink] = useState('')
  const [description, setDescription] = useState('')

  // GLOBAL STATE
  const { closeModal } = useGlobalStore()
  const { getJobPost } = useGetJobPost()
  const { addJobPost } = useAddJobPost()

  const handleSubmit = () => {
    addJobPost({
      jobTitle,
      category,
      type,
      jobStatus,
      applicationLink,
      description
    })
    getJobPost()
    closeModal()
  }
  
  return (
    <div className='modal'>
      <div className="modal-container">
        <p>{description}</p>
        <div className="modal-title">
          <p>{modalTitle}</p>
          <img src={iconClose} alt="close" onClick={closeModal}/>
        </div>
        <div className="modal-content">
          <div className="form-group">
            <label>Job Title</label>
            <input 
              type="text" 
              placeholder='Enter job title' 
              onChange={e => setJobTitle(e.target.value)}
            />
          </div>
          <div className='d-flex'>
            <div className="form-group">
              <label>Category</label>
              <select onChange={e => setCategory(e.target.value)}>
                <option>Select category</option>
                <option value='software-engineers'>Software Engineers</option>
                <option value='designers'>Designers</option>
                <option value='quality-assurance'>Quality assurance</option>
              </select>
              <img src={iconArrowDown} alt="Chevron down" className='arrow-down'/>
            </div>
            <div className="form-group">
              <label>Type</label>
              <select onChange={e => setType(e.target.value)}>
                <option value='full-time'>Full-time</option>
                <option value='part-time'>Part-time</option>
              </select>
              <img src={iconArrowDown} alt="Chevron down" className='arrow-down'/>
            </div>
          </div>
          <div className="form-group">
            <label>Status</label>
            <select onChange={e => setJobStatus(e.target.value)}>
              <option value='open'>Open</option>
              <option value='close'>Closed</option>
            </select>
            <img src={iconArrowDown} alt="Chevron down" className='arrow-down'/>
          </div>
          <div className="form-group">
            <label>Application link</label>
            <input 
              type="text" 
              placeholder='Enter application link' 
              onChange={e => setApplicationLink(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea placeholder='Enter description' onChange={e => setDescription(e.target.value)}></textarea>
          </div>
        </div>
        <div className="modal-footer" >
          <Button btnTitle='Cancel' classList='btn btn-outline-secondary' onClick={closeModal}/>
          <Button onClick={handleSubmit} btnTitle='Submit' classList='btn btn-primary' />
        </div>
      </div>
    </div>
  )
}

export default Modal