import React from 'react'
import Wrraper from '../componenet/Wrraper'
import Btn from '../componenet/Btn'
import { UserAuth } from '../context/AuthContext'

const Acount = () => {
  const  {user} =UserAuth()
  console.log(user)
  return (
    <Wrraper>
      <div>
        <h2 className='font-bold'>Account</h2>
        <p>Welcome</p>
      </div>
     <Btn text="Sign out"  className="bg-white shadow-md" />
    </Wrraper>
  )
}

export default Acount