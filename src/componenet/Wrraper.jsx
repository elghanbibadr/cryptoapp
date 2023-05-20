import React from 'react'


// a wrapper componenet for each section
const Wrraper = ({children,props}) => {
  return (
    <div className={ `bg-white shadow-xl  p-3  rounded-md` }>{children}</div>
  )
}

export default Wrraper