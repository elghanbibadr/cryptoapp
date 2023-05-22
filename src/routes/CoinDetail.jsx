import React from 'react'
import { useParams } from 'react-router-dom';
const CoinDetail = () => {
    const { slug } = useParams();
{console.log(slug)}
  return (
    <div>CoinDetail</div>
  )
}

export default CoinDetail