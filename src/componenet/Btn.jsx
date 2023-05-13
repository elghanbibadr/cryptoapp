import React from 'react'

const Btn = ({text,className}) => {
  return (
    <button className={` rounded-xl font-medium px-3 mx-1 py-2 ${className}`}>{text}</button>
  )
}

export default Btn