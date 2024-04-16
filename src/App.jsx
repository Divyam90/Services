import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import SignUp from './components/signIn/SignUp'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Service from './components/service/Service'
import Homepage from './components/Homepage'

function App() {

  const [login, setlogin] = useState(false)
  return (
    <BrowserRouter>
  
    <div className="app">
      {login?<SignUp setlogin={setlogin}/>:<></>}

      <Navbar setlogin={setlogin}/>

     <Routes>

      <Route path="/" element={<Homepage/>}/>

      <Route path="/services" element={<Service/>}/>

      </Routes>
    
    
    </div>
    
    </BrowserRouter>
  )
}

export default App
