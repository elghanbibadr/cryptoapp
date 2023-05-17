import React from 'react'
import starIcon from "../assets/star-regular.svg"

export const CoinsTable = () => {
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
    <tr className='text-center'>

      <td className='w-[14px] h-[14px]' ><img className='h-full w-full' src={starIcon} alt="star icon" /> </td>
      <td className='text-end'>1</td>
      <td >hello</td>
      <td>$100</td>
      <td>$100</td>
      <td>$100</td>
      <td>$100</td>
      <td>$100</td>
    </tr>
    
  </table>
  )
}
