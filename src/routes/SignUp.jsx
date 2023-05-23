import React, { useState } from 'react'
import { auth ,db} from '../firebase';
import {setDoc,doc} from "firebase/firestore"
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {

    const styles = {
        input: "outline-none py-2 px-1 shadow-lg focus:border-blue-400 rounded-md focus:border-2"
    }

    const {signUp}=UserAuth()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error,setError]=useState('') ;
    const navigate=useNavigate('')

    const handleEmailChange = (e) => setEmail(e.target.value)
    const handlePasswordChange = (e) => setPassword(e.target.value)
    const handleSubmit=async (e) => {
        e.preventDefault()
        setError('')
        try{
         await signUp(email,password)
         navigate('/account')
        }catch(e){
            console.log(e.message)
            setError(e.message)
        }
    }
    console.log(error)

    return (
        <div className='mx-auto w-[30%]'>
            <h2 className='font-bold text-lg my-10'>Sign up</h2>
            {error ? <p className='bg-red-300 p-3 my-2'>{error}</p> :null }
            <form onSubmit={handleSubmit} >
                <div className='flex flex-col'>
                    <label  htmlFor='email'>Email</label>
                    <input id="email"
                        className={styles.input}
                        type='email'
                        value={email}
                        placeholder='test@test.com'
                        onChange={handleEmailChange} />
                </div>
                <div className='flex my-8 flex-col'>
                    <label htmlFor='password'>password</label>
                    <input id="password"
                        className={styles.input}
                        type='password'
                        value={password}
                        placeholder='password'
                        onChange={handlePasswordChange} />
                </div>
                <button className='text-white bg-blue-400 w-full py-2 rounded-md font-bold '>Sign up</button>
            </form>
        </div>
    )
}

export default SignUp