import React from 'react'
import Wrraper from '../componenet/Wrraper'
import Btn from '../componenet/Btn'
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Acount = () => {
  const  {user,logout} =UserAuth()
  const navigate=useNavigate()

  const handleSignOut=async () => {
    try{
   await logout()
   navigate('/')
    }catch(e){
  
    }

  }
  console.log(user)
  return (
    <>
    <Wrraper>
      <div className='flex justify-between items-center p-3'>
        <div>
          <h2 className='font-bold'>Account</h2>
          <p className='mt-4'>Welcome   {user?.email}</p>
        </div>
             <Btn onClick={handleSignOut} text="Sign out"  className="bg-white shadow-md" />
      </div>
    </Wrraper>
    <Wrraper className='mt-6 h-[200px]'> 
    <h2 className='font-bold'>Watch List</h2>
    <p>you don't have any coins saved please save a coin to add it to your watch list . click here to search coin</p>
    </Wrraper>
  
    </>
  )
}

export default Acount