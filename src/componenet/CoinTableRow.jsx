import React, { useState } from 'react'
import starIcon from "../assets/star-regular.svg"


const CoinTableRow = (props) => {
   
    return (
        <tr className='text-center font-medium h-[55px] p-10 '>

            <td className='w-[14px] h-[14px]' ><img className='h-full w-full' src={starIcon} alt="star icon" /> </td>
            <td className='text-end'>{props.market_cap_rank}</td>
            <td className='flex justify-around align-middle mt-4 items-center ' >
                <div>
                    <img className='h-5 w-5 inline' src={props.image} alt="coin image" />
                    <span> {props.name}</span>
                </div>
                <span className='ml-10'>{props.symbol}</span>
            </td>
            <td>${props.current_price}</td>
            <td className={`${Number(props.price_change_percentage_24h) <0 ? 'text-[red]' : 'text-[green]'}`}>${props.price_change_percentage_24h}</td>
            <td>${props.total_volume}</td>
            <td>${props.market_cap}</td>
            <td>$</td>
        </tr>
    )
}

export default CoinTableRow