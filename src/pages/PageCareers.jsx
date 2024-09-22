import React from 'react'
import iconPlay from '../assets/icon-play.svg'
import Button from '../components/Button'

const PageCareers = () => {
  return (
    <div className='container header'>
      <div className="tag">Careers</div>
      <h1>Join our awesome team</h1>
      <p>We are hiring! our company is expanding, and we are looking <br /> for talented professionals to join our dynamic team! </p>
      <div className='header-banner'>
        <img src={iconPlay} alt="Play button" />
      </div>
    </div>
  )
}

export default PageCareers