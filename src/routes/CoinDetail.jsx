import React from 'react'
import { useParams } from 'react-router-dom';
import { Sparklines,SparklinesLine } from 'react-sparklines';
import { data } from '../data';
const CoinDetail = () => {
    const { id } = useParams();
    const {symbol,name,image,market_cap_change_24h,sparkline,market_cap_rank,atl,price_change_24h,price_change_percentage_24h,low_24h,high_24h,total_volume    }=data.find(coin => coin.id === id);
    // console.log(targetedCoinDetails)
  return (
    <div>
        <div className='flex mb-10'>
         <img className='h-16 w-16 mr-6 ' src={image} alt='coin image' />
         <div>
             <h3 className='font-bold text-xl mr-6'>{name} price</h3>
             <p>({symbol.toUpperCase()}/USD)</p>
         </div>
        </div>
      <div className='grid grid-cols-6  gap-10'>
            {/* column */}
            <div className='col-span-3 row-span-2'>
                <div className='flex justify-between'>
                    <h2  className='font-bold text-2xl mr-6'>$ {high_24h.toFixed(3)}</h2>
                    <p className=' font-medium'>7 Days</p>
                </div>
                <Sparklines  data={sparkline}> 
                            <SparklinesLine color='teal' />
                </Sparklines>
            </div>
            {/* column */}
            <div>
                <h3 className='font-bold mb-6'>Market stats</h3>
                <p className='my-3 text-sm'>Market Rank</p>
                <span>{market_cap_rank}</span>
            </div>
            {/* column */}
            <div>
                <p className='my-3 text-sm'>Hashing Algorithem</p>
                <span>SHA-256</span>
            </div>
          
            {/* column */}
            <div>
                <p className='my-3 text-sm'>Price Change %(24h)</p>
                <span>{(price_change_percentage_24h ).toFixed(2)} %</span>
            </div>
            {/* column */}
            <div>
                <p className='my-3 text-sm'>Price Change(24)</p>
                <span>{price_change_24h.toFixed(2)}</span>
            </div>
        
            {/* column */}
            <div >
                <p className='my-3 text-sm'>Market Cap</p>
                <span>${Math.abs(market_cap_change_24h).toFixed(2)}</span>
            </div>
            {/* column */}
            <div>
                <p className='my-3 text-sm'>Volume(24h)</p>
                <span>${total_volume}</span>
            </div>
           
            {/* column */}
            <div className='col-span-2'>
                <p className='my-3 text-sm'>24h (High)</p>
                <span>${high_24h}</span>
            </div>
            {/* column */}
            <div>
                <p className='my-3 text-sm'>24h (Low)</p>
                <span>${low_24h}</span>
            </div>

        </div>
    </div>
  )
}

export default CoinDetail