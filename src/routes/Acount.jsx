import React, { useEffect, useState } from 'react'
import Wrraper from '../componenet/Wrraper'
import Btn from '../componenet/Btn'
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import closeIcon from "../assets/x-solid.svg"
import { doc, updateDoc } from 'firebase/firestore'
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

  const coinPath=doc(db,'users' , `${user?.email}`)

  const deleteCoin=async (passedId) => {
    try {
      const result =watchListCoins.filter ((item) => item.id !==passedId)
      await updateDoc(coinPath , {
        watchList :result
      })
    }
    catch(e){
      alert(e.message)
    }
  }

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
      <h2 className='font-bold'>Watch List</h2>
    {watchListCoins.length === 0  ? <> 
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
          <td onClick={() => deleteCoin(coin.id)} className='cursor-pointer'>x</td>
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