import React, { useState ,useEffect } from 'react'
import CoinTableRow from './CoinTableRow'
import { data } from '../data'

export const CoinsTable = () => {
   


  return (
    <table className='w-full '>
        {/* the table header  */}
    <tr className=' my-20 w-full  m-[2rem]'>
      <th></th>
      <th className='text-end'>#</th>
      <th>coin</th>
      <th>price</th>
      <th>24h</th>
      <th>24h Volume</th>
      <th>mkt</th>
      <th>last 7 Days</th>
    </tr>
 {console.log(data)}

    {/* table data row */}
   { data.map(({id,market_cap_rank,image,name,symbol,sparkline,current_price,price_change_percentage_24h,total_volume,market_cap}) => {
    return <CoinTableRow key={id} market_cap_rank={market_cap_rank} sparkline={sparkline} image={image} name={name} symbol={symbol} current_price={current_price} price_change_percentage_24h={price_change_percentage_24h} total_volume={total_volume} market_cap={market_cap} />
   })}
    
  </table>
  )
}
