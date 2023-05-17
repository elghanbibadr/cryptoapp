import React from 'react'

export const CoinsTable = () => {
  return (
    <table className='w-full'>
        {/* the table header  */}
    <tr className=' w-full '>
      <th>coin</th>
      <th>price</th>
      <th>24h</th>
      <th>24h Volume</th>
      <th>mkt</th>
      <th>last 7 Days</th>
    </tr>
    {/* table data row */}
    <tr className='text-center'>
      <td >hello</td>
      <td>$100</td>
      <td>$100</td>
      <td>$100</td>
      <td>$100</td>
      <td>$100</td>
    </tr>
    <tr>
      <td>January</td>
      <td>$100</td>
    </tr>
  </table>
  )
}
