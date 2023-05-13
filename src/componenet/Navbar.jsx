import React from 'react'
import Wrraper from './Wrraper'
import Btn from './Btn'

const Navbar = () => {
    return(
   <Wrraper >
    <nav className='flex  justify-between items-center'>
    <h1 className='text-2xl font-bold'>Cryptobase</h1>
    <div>
    <h4>Dark Mode</h4>
    </div>
    {/* sign in and sign up */}
     <div>
     <Btn text="Sign In" />
     <Btn text="Sign Up" className="bg-blue-500 text-white" />
     </div>
    </nav>
   </Wrraper>
    )
  
}

export default Navbar