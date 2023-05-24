import React, { useEffect, useState } from 'react'
import Wrraper from '../componenet/Wrraper'
import Btn from '../componenet/Btn'
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { doc } from 'firebase/firestore'
import { db } from '../firebase'
import { onSnapshot } from 'firebase/firestore'

const Acount = () => {
  const  {user,logout} =UserAuth()
  const [watchListCoins,setWatchListCoins] =useState([])
  const navigate=useNavigate()

  const handleSignOut=async () => {
    try{
   await logout()
   navigate('/')
    }catch(e){
  
    }
  }

  useEffect(() => {
onSnapshot(doc(db , 'users' ,`${user?.email}`) , (doc) => {
  setWatchListCoins(doc.data()?.watchList)
})
  },[user?.email])

console.log(watchListCoins)
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
    <Wrraper className='mt-6 min-h-[200px]'> 
    {!watchListCoins  ? <> 
      <h2 className='font-bold'>Watch List</h2>
    <p>you don't have any coins saved please save a coin to add it to your watch list . click here to search coin</p>
     </>
     : <table className='w-1/2'>
      <thead>
        <th>Rank #</th>
        <th>Coin</th>
        <th>Remove</th>
      </thead>
      <tbody className='text-center'>
        {watchListCoins.map(coin => {
          return   <tr className='h-10'>
          <td >{coin?.rank}</td>
          <td> <img className='h-6 w-6 mx-auto' src= {coin?.image} alt="coin image" /> </td>
          <td>1</td>
          </tr>
        })}
      </tbody>
     </table>
     
    }
    
    </Wrraper>
  
    </>
  )
}

export default Acount