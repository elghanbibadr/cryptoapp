import React from 'react'
import Wrraper from './Wrraper'
import { data } from '../data'
const TrendingCoins = () => {
  return (
    <Wrraper>
        <h1 className='text-black text-xl font-bold'>TrendingCoins</h1>
        {data.slice(4,8).map(({id,name,symbol,image})=>{
            return <Wrraper className="m-2" key={id}>
            <div>
              <img className='h-10 w-10 float-left' src={image} alt="coin image" />
              <p>{name}</p>
              <p>{symbol}</p>
            </div>
            </Wrraper>
        }) }
    </Wrraper>
  )
}

export default TrendingCoins