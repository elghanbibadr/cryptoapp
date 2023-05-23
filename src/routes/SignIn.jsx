import React from 'react'
// import {AiOutlineMail} from 'react-icons'
import { Link } from 'react-router-dom'
import Btn from '../componenet/Btn'

const SignIn = () => {
  const handleSignIn=() => alert('Sign In')
  
  return (
    <div>
      {/* <AiOutlineMail /> */}
      <div className='max-w-[400px] mx-auto min-h-[600px] px-4 py-20'>
        <h1 className='text-2xl font-bold'>Sign In</h1>
        <form onSubmit={handleSignIn} >
          <div className="my-4">
            <label>email</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input className="w-full p-2 bg-primary border border-input rounded-2xl" type='email' placeholder='enter your email'/>
            </div>
          </div>
          <div className="my-4">
            <label>Password</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input className="w-full p-2 bg-primary border border-input rounded-2xl" type='password' placeholder='enter your password'/>
            </div>
          </div>
          <Btn text="Sign In" className="bg-blue-400  my-6 w-full text-white" />
          <p>don't have an account ? <Link to='/signUp' className='text-blue-400'>Sign up</Link> </p>
        </form>
      </div>
    </div>
  )
}

export default SignIn