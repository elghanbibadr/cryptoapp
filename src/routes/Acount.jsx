import React from 'react'
import Wrraper from '../componenet/Wrraper'
import Btn from '../componenet/Btn'
import { UserAuth } from '../context/AuthContext'

const Acount = () => {
  const  {user} =UserAuth()
  console.log(user.email)
  return (
    <Wrraper>
      <div className='flex justify-between items-center p-3'>
        <div>
          <h2 className='font-bold'>Account</h2>
          <p className='mt-4'>Welcome {user.email}</p>
        </div>
             <Btn text="Sign out"  className="bg-white shadow-md" />
      </div>
    </Wrraper>
  )
}

export default Acount