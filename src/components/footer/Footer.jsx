import React from 'react'
import './footer.css'

const Footer = () => {
  return (
      <div className="footer-top">
    <div className="footer-heading">
        <div className="heading-container">
    <h1>Get The App</h1>
    <p>Get the Home Groom App/Book and Relax</p>
    </div>
    <div className="image-containers">
    <img style={{height:"100px"}} src="app.svg" alt="" />
    <img  style={{height:"100px"}} src="play.svg" alt="" />
    </div>
    </div>
    <div className="footer">

        <div className="left">
          
            <div className="footer-services">
                <ul>
                   <li className="lihead">Our Services</li>
                    <li>House Maid</li>
                    <li>Cooking Maid</li>
                    <li>Baby Sitter</li>
                    <li>Gardner</li>
                    <li>All Rounder</li>
                    <li>Driver</li>
                    <li>Office Maid</li>
                </ul>
                <ul>
                    <li className="lihead1">About Us</li>
                    <li>Our Mission</li>
                    <li>Our Team</li>
                    <li>Our Blog</li>
                </ul>
                </div>
                </div>

                <div className="footer-cook">
                    <ul>
                        <li>Cook In Mohali</li>
                        <li>car Washing in Mohali</li>
                        <li>Gardner in Mohali</li>
                        <li>All ROunder in Mohali</li>
                        <li>Office Maid in Mohali</li>
                    </ul>
                    <ul className="contact-us">
                        <li className="lihead1">Contact Us</li>
                        <li className="lihead">Register as Home Groom </li>
                        <li className="lihead">Terms and Condition</li>
                        <li className="lihead">Privacy Policy</li>
                    </ul>

                </div>
      
        <div className="right">
            <ul>
                <li>car Washing in Ludhiana</li>
                <li>Cook in Ludhiana</li>
                <li>Baby Sitter in Ludhiana</li>
                <li>Gardner in Ludhiana</li>
                <li>All Rounder in Ludhiana</li>
                <li>Driver in Ludhiana</li>
                <li>Office Maid in Ludhiana</li>
            </ul>
        </div>
        <div className="right-side">
            <ul>
                <li className="lihead">Follow Us</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Whatsapp</li>
                <li>Facebook</li>
            </ul>
        </div>
    </div>

   <hr className="hr"/>
   <div className="last-text">
       <p>Support@HomeGroom.com</p>
       <p>Copyright@2023HomeGroom.com All Rights Reserved</p>

   </div>
    </div>

  )
}

export default Footer