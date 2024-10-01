import React, { useEffect, useState } from 'react'
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
  const [location, setLocation] = useState('')
  const [setup, setSetup] = useState('remote')
  const [applicationLink, setApplicationLink] = useState('')
  const [description, setDescription] = useState('')
  const [required, setRequired] = useState(false)

  // GLOBAL STATE
  const { closeModal } = useGlobalStore()
  const { getJobPost } = useGetJobPost()
  const { addJobPost } = useAddJobPost()

  // FUNCTION
  const handleSubmit = () => {
    if(!jobTitle) {
      setRequired(true)
      console.log('please add title')
      return
    } 

    if(!location) {
      setRequired(true)
      console.log('Please add location')
      return
    }

    if(!description) {
      setRequired(true)
      console.log('Please add description')
      return
    }

    addJobPost({
      jobTitle,
      category,
      type,
      location,
      setup,
      applicationLink,
      description
    })
    getJobPost()
    closeModal()
  }
  
  return (
    <div className='modal'>
      <div className="modal-container">
        <div className="modal-title">
          <p>{modalTitle}</p>
          <img src={iconClose} alt="close" onClick={closeModal}/>
        </div>
        <div className="modal-content">
          <div className="form-group">
            <label className={required ? 'label-required' : ''}>Job Title</label>
            <input 
              type="text" 
              placeholder='Enter job title' 
              onChange={e => setJobTitle(e.target.value)}
              className={required ? 'input-required' : ''}
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
            <label className={required ? 'label-required' : ''}>Location</label>
            <input 
              type="text" 
              placeholder='Enter location' 
              onChange={e => setLocation(e.target.value)}
              className={required ? 'input-required' : ''}
            />
          </div>
          <div className="form-group">
              <label>Setup</label>
              <select onChange={e => setSetup(e.target.value)}>
                <option value='remote'>Remote</option>
                <option value='onsite'>Onsite</option>
                <option value='hybrid'>Hybrid</option>
              </select>
              <img src={iconArrowDown} alt="Chevron down" className='arrow-down'/>
            </div>
          <div className="form-group">
            <label>Application link</label>
            <select onChange={e => setApplicationLink(e.target.value)}>
              <option>Select link for</option>
              <option value='https://forms.gle/GFAWSf96C5BWk9Ft8'>Software Engineers</option>
              <option value='https://forms.gle/Vrj4nT6xMtD1UNSMA'>Quality Assurance</option>
              <option value='https://forms.gle/WhUosf6E58YAnUZSA'>Designers</option>
            </select>
            <img src={iconArrowDown} alt="Chevron down" className='arrow-down'/>
          </div>
          <div className="form-group">
            <label className={required ? 'label-required' : ''}>Description</label>
            <textarea placeholder='Enter description' onChange={e => setDescription(e.target.value)} className={required ? 'input-required' : ''}></textarea>
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