import React, { useState } from 'react'
// import { accItems } from '../constants'

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false)


  const toggleAcc = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='acc-item' onClick={toggleAcc}>
      <div className='acc-head'>
        <p className='acc-title'>{title}</p>
        {isOpen ? <button className='acc-btn'>-</button> : <button className='acc-btn'>+</button>}
      </div>
      {isOpen && <div className='acc-content'>{ content }</div>}
    </div>
  )
}

export default Accordion