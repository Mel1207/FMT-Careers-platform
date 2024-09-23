import React, { useState } from 'react'
import './test-css.css'

const TestAcc = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <button onClick={toggleAccordion} className="accordion-title">
        {title}
      </button>
      {isOpen && (
        <div className="accordion-content">
          <p>{content}</p>
        </div>
      )}
    </div>
  )
}

export default TestAcc