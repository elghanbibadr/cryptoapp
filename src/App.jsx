import React from 'react'
import Navbar from './componenet/Navbar'
import { Routes,Route } from 'react-router-dom'
import SignUp from './routes/SignUp'

const App = () => {
  return (
    <div className='max-w-[1100px] mt-6 mx-auto'>
    <Navbar/>
    <Routes>
      <Route path='/signUp' element={<SignUp />} />
    </Routes>
    </div>
  )
}

export default App