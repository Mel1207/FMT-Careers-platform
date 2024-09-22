import React from 'react'
import iconPlay from '../assets/icon-play.svg'
import Button from '../components/Button'

const PageCareers = () => {
  return (
    <>
      <div className='container header'>
        <div className="tag">Careers</div>
        <h1>Join our awesome team</h1>
        <p>We are hiring! our company is expanding, and we are looking <br /> for talented professionals to join our dynamic team! </p>
        <div className='header-banner'>
          <img src={iconPlay} alt="Play button" />
        </div>
      </div>

      <section className='section-1'>
        <div className="container">
          <h2>Our <span>Openings</span></h2>
          <p>Explore new career opportunities with us. Join a dynamic, <br /> innovative, and growing team today!</p>
        </div>
      </section>
    </>
    
  )
}

export default PageCareers