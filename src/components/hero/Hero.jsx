import React from 'react'
import './hero.css'
import Lottie from 'lottie-react'
import animate from '../../animation.json'
import { motion } from 'framer-motion'


const Hero = () => {
  return (
      <div className="main">
        <div className="text">
        <div className="inner-text">
          <h1>Customer's Choice <br/>HomeGroom</h1>
          <p>Finidng a reliable online servicee is no more difficult specially when it comes to domestic help. So What are you waiting for click the button below</p>
          <div className="div-section">
            <motion.div 
                      initial={{ x:-100, opacity: 0, scale: 0.5 }} 
                      whileInView={{x:0,opacity:1,scale:1}}
                      transition={{ duration: 0.8,ease:"easeOut" }}

            className="div1"><h3>5☆</h3><p>RATINGS</p></motion.div>
            <motion.div
                      initial={{ x:-100, opacity: 0, scale: 0.5 }} 
                      whileInView={{x:0,opacity:1,scale:1}}
                      transition={{ duration: 0.8,ease:"easeOut" }} 
            
            className="div2"><h3>550+</h3><p>STAFF MEMBERS</p></motion.div>
            <motion.div     
                       initial={{ x:-100, opacity: 0, scale: 0.5 }} 
                       whileInView={{x:0,opacity:1,scale:1}}
                       transition={{ duration: 0.8,ease:"easeOut" }}

            className="div3"><h3>450+</h3><p>HAPPY CLIENTS</p></motion.div>
          </div>
          </div>    
          <div className="image-container">
            <Lottie animationData={animate} className="lottie"/>
            {/* <img className="image1" src="service1.jpg" alt="" />
            <img className="image2" src="service2.jpg" alt="" /> */}

          </div>   
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,224L60,229.3C120,235,240,245,360,208C480,171,600,85,720,74.7C840,64,960,128,1080,138.7C1200,149,1320,107,1380,85.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
      </div>
      
  )
}

export default Hero