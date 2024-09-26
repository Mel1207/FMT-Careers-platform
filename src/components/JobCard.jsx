import React from 'react'
import Button from './Button'
import IconView from '../assets/icon-view.svg'
import ButtonLink from './ButtonLink'

const JobCard = ({jobTitle, description, type, setup, location, applicationLink}) => {
  return (
    <div className='card-job'>
      <p className='job-title'>{jobTitle}</p>
      <div className='job-details'>
        <p className='detail-item'>{type}</p>
        <p className='detail-item'>{setup}</p>
        <p className='detail-item'>{location}</p>
      </div>
      <p className='job-description'>{description}</p>
      <ButtonLink btnTitle='Learn More' applicationLink={applicationLink} classList='btn btn-primary btn-link' btnicon={IconView}/>
    </div>
  )
}

export default JobCard