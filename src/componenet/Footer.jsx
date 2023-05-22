import React from 'react'
import Wrraper from './Wrraper'
import MoonIcon from "../assets/moon-solid.svg"
import Btn from './Btn'

const Footer = () => {
    const list = [
        { title: "support", links: ["help center", "contact us", "api status", "documentation"] },
        { title: "info", links: ["about us", "careers", "invest", "legal"] }
    ]
    const styles = {
        input: "outline-none py-2 px-1 shadow-lg focus:border-blue-400 rounded-md focus:border-2"
    }

    return (
        <Wrraper className='mt-20 p-3'>
            <div className='flex justify-between'>
                <div className='flex '>
                    <ul className='uppercase mr-10'>
                        <li className='font-bold text-xl'>{list[0].title}</li>
                        {list[0].links.map((link, index) => {
                            return <li key={index} className='my-2 text-sm'>{link}</li>
                        })}
                    </ul>
                    <ul className='uppercase'>
                        <li className='font-bold text-xl'>{list[1].title}</li>
                        {list[1].links.map((link, index) => {
                            return <li key={index} className='my-2 text-sm'>{link}</li>
                        })}
                    </ul>
                </div>
                <div >
                    <div className='flex  justify-end '>
                        <img className='h-6 mx-3' src={MoonIcon} alt="moon icon" />
                        <h4>Dark Mode</h4>
                    </div>
                    <p className='my-6 flex  justify-end'>Sign up for crypto news</p>
                    <form>
                        <input type="text" className={styles.input} placeholder='Enter your email' />
                        {/* <Link to="/signUp"> */}
                            <Btn text="Sign Up" className="bg-blue-400  text-white" />
                        {/* </Link> */}
                    </form>
                </div>
            </div>
            <p className='text-center mt-5'>Powered by Coin Gecko</p>
        </Wrraper>
    )
}

export default Footer