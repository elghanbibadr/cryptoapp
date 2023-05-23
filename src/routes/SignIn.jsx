import React ,{useState} from 'react'
import { Link } from 'react-router-dom'
import Btn from '../componenet/Btn'
import { UserAuth } from '../context/AuthContext'

const SignIn = () => {
  const {signIn}=UserAuth()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError]=useState('');

    const handleSubmit=async (e) => {
      e.preventDefault()
      setError('')
      try{
       await signIn(email,password)
       navigator('/account')
      }catch(e){
          setError(e.message)
      }
  }
  
  return (
    <div>
      <div className='max-w-[400px] mx-auto min-h-[600px] px-4 py-20'>
        <h1 className='text-2xl font-bold'>Sign In</h1>
        {error ? <p className='bg-red-300 p-3 my-2'>{error}</p> :null }

        <form onSubmit={handleSubmit} >
          <div className="my-4">
            <label>email</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input onChange={(e)=>setEmail(e.target.value)} className="w-full p-2 bg-primary border border-input rounded-2xl" type='email' placeholder='enter your email'/>
            </div>
          </div>
          <div className="my-4">
            <label>Password</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input onChange={(e) => setPassword(e.target)} className="w-full p-2 bg-primary border border-input rounded-2xl" type='password' placeholder='enter your password'/>
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