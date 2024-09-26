import React from 'react'

const ButtonLink = ({classList, btnTitle, btnicon, applicationLink}) => {
  return (
    <a href={applicationLink} target='_blank' className={classList}>
      {btnTitle}
      {btnicon && <img src={btnicon} alt={btnTitle}/>}
    </a>
  )
}

export default ButtonLink