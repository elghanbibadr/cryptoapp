import React, { useState } from 'react'

export const CoinsTable = () => {
    const [coinsData,setCoinsData] = useState([])
    
  return (
    <table className='w-full'>
        {/* the table header  */}
    <tr className=' w-full '>
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
   
    
  </table>
  )
}
