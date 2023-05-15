import React from 'react'
import Wrraper from './Wrraper'
import Btn from './Btn'
import { Link } from 'react-router-dom'
import MoonIcon from "../../src/moon-solid.svg"
const Navbar = () => {
    return(
   <Wrraper >
    <nav className='flex  justify-between items-center'>
    <h1 className='text-2xl font-bold'>Cryptobase</h1>
    <div className='flex'>
     <img className='h-6 mx-3' src={MoonIcon} alt="moon icon" /> 
    <h4>Dark Mode</h4>
    </div>
    {/* sign in and sign up */}
     <div>
     <Btn text="Sign In" />
     <Link to="/signUp">
     <Btn text="Sign Up" className="bg-blue-500 text-white" />
     </Link>
     </div>
    </nav>
   </Wrraper>
    )
  
}

export default Navbar