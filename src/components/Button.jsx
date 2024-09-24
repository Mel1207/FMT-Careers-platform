import React from 'react'

const Button = (props) => {
  return (
    <button className={props.classList} onClick={props.onClick}>
      {props.btnTitle}
    </button>
  )
}

export default Button