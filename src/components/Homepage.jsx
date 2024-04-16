import React from 'react'
import Hero from './hero/Hero'
import Carousal from './carousal/Carousal'
import Choose from './chooseus/Choose'
import Register from './register/Register'
import Footer from './footer/Footer'


const Homepage = () => {
  return (
    <div>
        <Hero/>
        <Carousal/>
        <Choose/>
        <Register/>
        <Footer/>
    </div>
  )
}

export default Homepage