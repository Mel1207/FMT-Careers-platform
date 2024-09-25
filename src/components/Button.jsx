import React from 'react'

const Button = (props) => {
  return (
    <button className={props.classList} onClick={props.onClick} >
      {props.btnTitle}
      {props.btnicon && <img src={props.btnicon} alt="icon" />}
    </button>
  )
}

export default Button