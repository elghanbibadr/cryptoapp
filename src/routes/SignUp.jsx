import React, { useState } from 'react'

const SignUp = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword] = useState("");

    const handleEmailChange=(e)=>setEmail(e.target.value)
    const handlePasswordChange=(e)=>setPassword(e.target.value)

  return (
    <div>
    <form>
        <div>
            <label htmlFor='email'/>
            <input id="email"
             type='email'  
             value={email}
              onChange={handleEmailChange} />
        </div>
        <div>
            <label htmlFor='password'/>
            <input id="password"
             type='password'  
             value={password} 
             onChange={handlePasswordChange} />
        </div>
    </form>
   </div>
  )
}

export default SignUp