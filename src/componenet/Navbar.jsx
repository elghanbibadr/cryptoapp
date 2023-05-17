import React from 'react'
import Wrraper from './Wrraper'
import Btn from './Btn'
import { Link } from 'react-router-dom'
import { auth } from '../firebase'
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
    {  <>
        <Link to="/signUp">
     <Btn text="Sign Up" className="bg-blue-400  text-white" />
     </Link> 
       <Btn text="Sign In" />
    </>  
     }

      {/* { <>
        <button>sign out</button>
     <button className='mx-4'>account</button>
     </>} */}
 </div> 
    </nav>
   </Wrraper>
    )
  
}

export default Navbar