import React from 'react'
import Wrraper from './Wrraper'
const Footer = () => {
    const list=[
    {title:"support",links:["help center","contact us","api status","documentation"]},
    {title:"info",links:["about us","careers","invest","legal"]}
]
  return (
    <Wrraper className='mt-20'>
    <div className='flex'>
        <ul className='uppercase mr-10'>
           <li className='font-bold text-xl'>{list[0].title}</li>
           {list[0].links.map((link,index) => {
            return <li key={index} className='my-2 text-sm'>{link}</li>
           })}
        </ul>
        <ul className='uppercase'>
           <li className='font-bold text-xl'>{list[1].title}</li>
           {list[1].links.map((link,index) => {
            return <li key={index} className='my-2 text-sm'>{link}</li>
           })}
        </ul>
    </div>
    </Wrraper>
  )
}

export default Footer