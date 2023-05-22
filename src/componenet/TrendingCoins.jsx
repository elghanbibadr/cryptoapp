import Wrraper from './Wrraper'
import { Link } from 'react-router-dom'
import { data } from '../data'

const TrendingCoins = () => {
  return (
    <Wrraper className='mt-10'>
      <h2 className='text-black text-xl mb-20 font-bold'>TrendingCoins</h2>
      <div className='grid grid-cols-3'>
        {data.slice(3, 8).map(({ id, name, symbol, image, high_24h }) => {
    return <Link to={`/coin/${id}`} >
            <Wrraper className="m-2 flex justify-between items-center" key={id}>
              <div className='flex '>
                <img className='h-10 w-10 mr-6 ' src={image} alt="coin image" />
                <div>
                  <p>{name}</p>
                  <p>{symbol}</p>
                </div>
              </div>
              <div className='flex'>
                <span className='bg-orange-300 h-5 w-5 text-white inline-flex justify-center items-center mx-1 rounded-full'>$</span>
                <p>{high_24h}</p>
              </div>
            </Wrraper>
          </Link>
        })}
      </div>
    </Wrraper>
  )
}

export default TrendingCoins