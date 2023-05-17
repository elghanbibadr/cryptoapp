import React, { useState ,useEffect } from 'react'
import CoinTableRow from './CoinTableRow'
export const CoinsTable = () => {
    const [coinsData,setCoinsData] = useState([])

    useEffect( () => {
        async function fetchCoins() {
            try{
                const response= await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
                 const data=await response.json(); 
                 setCoinsData(data)
            }catch(e){
           console.log(e.message)
            }
        }
        return () => fetchCoins()
    },[])


  return (
    <table className='w-full '>
        {/* the table header  */}
    <tr className='bg-black my-20 w-full  m-[2rem]'>
      <th></th>
      <th className='text-end'>#</th>
      <th>coin</th>
      <th>price</th>
      <th>24h</th>
      <th>24h Volume</th>
      <th>mkt</th>
      <th>last 7 Days</th>
    </tr>
    {/* table data row */}
   {coinsData && coinsData.map(({id,market_cap_rank,image,name,symbol,current_price,price_change_percentage_24h,total_volume,market_cap}) => {
    return <CoinTableRow key={id} market_cap_rank={market_cap_rank} image={image} name={name} symbol={symbol} current_price={current_price} price_change_percentage_24h={price_change_percentage_24h} total_volume={total_volume} market_cap={market_cap} />
   })}
    
  </table>
  )
}
