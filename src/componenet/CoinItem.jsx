import React, { useState } from 'react'
import starIcon from "../assets/star-regular.svg"
import { Link } from 'react-router-dom'
import { Sparklines, SparklinesLine } from 'react-sparklines'

const CoinItem = (props) => {

    return (
        <tr className='text-center border-t-[1px] border-[#ccc] font-medium h-[75px] p-10 '>

            <td className='w-[14px] h-[14px]' >
            <img className='h-full w-full' src={starIcon} alt="star icon" /> 
            </td>
            <td className='text-end'>{props.market_cap_rank}</td>
            <td className='flex flex-col  self-center mt-6 items-center md:flex-row md:justify-around ' >
                <Link to={`/coin/${props.id}`}>
                    {console.log(props.id)}
                    <div className='cursor-pointer'>
                        <img className='h-5 w-5 inline' src={props.image} alt="coin image" />
                        <span> {props.name}</span>
                    </div>
                </Link>
                <span className=' md:ml-10'>{props.symbol}</span>
            </td>
            <td>${props.current_price}</td>
            <td className={`${Number(props.price_change_percentage_24h) < 0 ? 'text-[red]' : 'text-[green]'}`}>$ {`${Number(props.price_change_percentage_24h).toFixed(2)}`}</td>
            <td className='hidden lg:table-cell'>${props.total_volume}</td>
            <td className='hidden  lg:table-cell'>${props.market_cap}</td>
            <td className='hidden  lg:table-cell'>
                <Sparklines data={props.sparkline}>
                    <SparklinesLine color='teal' />
                </Sparklines>
            </td>
        </tr>
    )
}

export default CoinItem