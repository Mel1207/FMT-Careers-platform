import React from 'react'
import iconPlay from '../assets/icon-play.svg'
import TabFilter from '../components/TabFilter'
import Accordion from '../components/Accordion'
import { accItems, offices } from '../constants'
import iconEmail from '../assets/icon-email.svg'
import iconPhone from '../assets/icon-phone.svg'

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
          <p className='p-text'>Explore new career opportunities with us. Join a dynamic, <br /> innovative, and growing team today!</p>
          <TabFilter />
        </div>
      </section>

      <section className="section-2">
        <div className="container">
          <h2>Frequently Asked <br /> <span>Questions</span></h2>
          <div className="accordion">
            {accItems.map(item => <Accordion key={item.id} title={item.accTitle} content={item.accContent}/>)}
          </div>
        </div>
      </section>
      
      <footer className='footer'>
        <div className="container">
          <div className='footer-top'>
            <h3>Contact Us</h3>
            <p className='contact-info'><img src={iconEmail} alt="Email" />hello@fmt.techno</p>
            <p className='contact-info'><img src={iconPhone} alt="Phone" />+1 (510) 680-3749</p>
          </div>
          <div className='footer-bottom'>
            <div>
              <h3 className='footer-logo'>FMT-LOGO</h3>
              <p>FMT is the trusted software development partner for game-changing startups.</p>
            </div>
            {offices.map(item => (
              <div key={item.id}>
                <h3>{item.office}</h3>
                <p>{item.address}</p>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </>

  )
}

export default PageCareers