import React, { useState } from 'react'
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = () => {
    const styles = {
        input: "outline-none py-2 px-1 shadow-lg focus:border-blue-400 rounded-md focus:border-2"
    }
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e) => setEmail(e.target.value)
    const handlePasswordChange = (e) => setPassword(e.target.value)
    const handleSignUp = async (e) => {
        e.preventDefault()
        await createUserWithEmailAndPassword(auth, email, password)
        setEmail('')
        setPassword('')
    };
{console.log(auth.currentUser.email)}
    return (
        <div className='mx-auto w-[30%]'>
            <h2 className='font-bold text-lg my-10'>Sign up</h2>
            <form onSubmit={handleSignUp} >
                <div className='flex flex-col'>
                    <label className='' htmlFor='email'>Email</label>
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