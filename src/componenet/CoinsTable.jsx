import React, { useState, useEffect } from 'react'
import CoinItem from './CoinItem'
import { data } from '../data'
import Wrraper from "../componenet/Wrraper"
export const CoinsTable = () => {
const [searchQuery,setSearchQuery]=useState('');
const [coins,setCoins] = useState(data)

const handleSearchChange=(e) => {
  if (!searchQuery) setCoins(data)
  setSearchQuery(e.target.value)
  filterCoins()

}
const filterCoins= () => {
  const filteredData= data.filter(coin => coin.name.toLowerCase().startsWith(searchQuery.toLowerCase()))
  setCoins(filteredData)
} 



useEffect(()=>
filterCoins()
,[searchQuery])


  return (
    <Wrraper >
      <div className='flex justify-between mb-10'>
        <h1 className='font-bold'>Search Crypto</h1>
        <Wrraper>
        <input value={searchQuery}
        onChange={handleSearchChange}
         className='outline-none'
          type="text"
           placeholder='Search a coin' />
        </Wrraper>
      </div>
      <table className='w-full '>
        <thead>
          <tr className=' my-20 w-full  m-[2rem]'>
            <th></th>
            <th className='text-end'>#</th>
            <th>coin</th>
            <th>price</th>
            <th>24h</th>
            <th className='hidden  lg:table-cell'>24h Volume</th>
            <th className='hidden  lg:table-cell'>mkt</th>
            <th className='hidden  lg:table-cell'>last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {coins.map(({ id, market_cap_rank, image, name, symbol, sparkline, current_price, price_change_percentage_24h, total_volume, market_cap }) => {
            return <CoinItem key={id} market_cap_rank={market_cap_rank} sparkline={sparkline} image={image} name={name} symbol={symbol} current_price={current_price} price_change_percentage_24h={price_change_percentage_24h} total_volume={total_volume} market_cap={market_cap} />
          })}
        </tbody>
      </table>
       {coins.length===0 && <p className='flex justify-center my-6'>no coins found</p>}
    </Wrraper>
  )
}
