import React, { useState } from 'react'
import starIcon from "../assets/star-regular.svg"


const CoinTableRow = (props) => {
    const [priceChangeNegative,setPriceChangeNegative]=useState(undefined)
  return (
    <tr className='text-center p-10 '>

    <td className='w-[14px] h-[14px]' ><img className='h-full w-full' src={starIcon} alt="star icon" /> </td>
    <td className='text-end'>{props.market_cap_rank}</td>
    <td className=' ' >
      <img className='h-5 w-5 inline' src={props.image} alt="coin image" />
     <span> {props.name}</span>  
     <span className='ml-10'>{props.symbol}</span>
     </td>
    <td>${props.current_price}</td>
    <td className={`${priceChangeNegative ? 'text-[red]':'text-[green]'}`}>${Number(props.price_change_percentage_24h) < 0 ?setPriceChangeNegative(true):setPriceChangeNegative(false)}</td>
    <td>${props.total_volume}</td>
    <td>${props.market_cap}</td>
    <td>$100</td>
  </tr>
  )
}

export default CoinTableRow