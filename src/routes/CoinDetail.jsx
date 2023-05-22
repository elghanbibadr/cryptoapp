import React from 'react'
import { useParams } from 'react-router-dom';
import { data } from '../data';
const CoinDetail = () => {
    const { id } = useParams();
    const targetedCoinDetails=data.find(coin => coin.id === id);
    console.log(targetedCoinDetails)
  return (
    <div>CoinDetail</div>
  )
}

export default CoinDetail