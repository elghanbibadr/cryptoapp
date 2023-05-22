import React from 'react'
import { useParams } from 'react-router-dom';
import { Sparklines,SparklinesLine } from 'react-sparklines';
import { data } from '../data';
const CoinDetail = () => {
    const { id } = useParams();
    const {sybmol,name,image,market_cap_change_24h,sparkline,market_cap_rank,price_change_24h,price_change_percentage_24h,low_24h,high_24h,total_volume    }=data.find(coin => coin.id === id);
    // console.log(targetedCoinDetails)
  return (
    <div>
        <div className='flex mb-10'>
         <img className='h-16 w-16 mr-6 ' src={image} alt='coin image' />
         <div>
             <h3 className='font-bold text-xl mr-6'>bitcoin price</h3>
             <p>(BTC/USD)</p>
         </div>
        </div>
        <div className='grid grid-cols-6'>
            {/* column */}
            <div className='col-span-3'>
                <div className='flex justify-between'>
                    <h2  className='font-bold text-2xl mr-6'>$ {high_24h}</h2>
                    <p className=' font-medium'>7 Days</p>
                </div>
                <Sparklines  data={sparkline}> 
                            <SparklinesLine color='teal' />
                </Sparklines>
            </div>
            {/* column */}

        </div>
    </div>
  )
}

export default CoinDetail