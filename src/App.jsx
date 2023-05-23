import Navbar from './componenet/Navbar'
import { Routes,Route } from 'react-router-dom'
import SignUp from './routes/SignUp'
import SignIn from './routes/SignIn'
import Footer from './componenet/Footer'
import CoinDetail from './routes/CoinDetail'
import Home from './routes/Home'

const App = () => {
  return (
    <div className='max-w-[1100px] mt-6 mx-auto'>
    <Navbar/>
    <main className='mt-20'>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/coin/:id" element={<CoinDetail/>}/>
      <Route path='/signUp' element={<SignUp />} />
      <Route path='/signIn' element={<SignIn />} />
    </Routes>
    </main>
    <Footer/>
    </div>
  )
}

export default App