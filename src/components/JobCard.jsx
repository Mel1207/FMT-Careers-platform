import React from 'react'
import Button from './Button'
import IconView from '../assets/icon-view.svg'

const JobCard = ({jobTitle, description, type, setup, location}) => {
  return (
    <div className='card-job'>
      <p className='job-title'>{jobTitle}</p>
      <div className='job-details'>
        <p className='detail-item'>{type}</p>
        <p className='detail-item'>{setup}</p>
        <p className='detail-item'>{location}</p>
      </div>
      <p className='job-description'>{description}</p>
      <Button btnTitle='Learn More' classList='btn btn-primary' btnicon={IconView}/>
    </div>
  )
}

export default JobCard