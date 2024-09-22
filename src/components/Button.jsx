import React from 'react'

const Button = (props) => {
  return (
    <button className={props.classList}>
      {props.btnTitle}
    </button>
  )
}

export default Button