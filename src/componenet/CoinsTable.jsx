import React, { useState, useEffect } from 'react'
import CoinItem from './CoinItem'
import { data } from '../data'
import Wrraper from "../componenet/Wrraper"
export const CoinsTable = () => {



  return (
    <Wrraper>
      <table className='w-full '>
        <thead>
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
        </thead>
        <tbody>
          {data.map(({ id, market_cap_rank, image, name, symbol, sparkline, current_price, price_change_percentage_24h, total_volume, market_cap }) => {
            return <CoinItem key={id} market_cap_rank={market_cap_rank} sparkline={sparkline} image={image} name={name} symbol={symbol} current_price={current_price} price_change_percentage_24h={price_change_percentage_24h} total_volume={total_volume} market_cap={market_cap} />
          })}
        </tbody>
      </table>
    </Wrraper>
  )
}
