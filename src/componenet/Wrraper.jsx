import React from 'react'


// a wrapper componenet for each section
const Wrraper = ({children}) => {
  return (
    <div className='bg-white shadow-xl p-4 rounded-md'>{children}</div>
  )
}

export default Wrraper