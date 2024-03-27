import React from 'react'

const Button = ({children,className}) => {
  return (
    <div className={className}>
      <button>{ children}</button>
    </div>
  )
}

export default Button
