import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div id='footer'>
        <div className="footertop">
            <div className="box">
                <span className='heading'>Contact Us</span>
                <span>+91 00000 00000</span>
                <span>codertaukir@gmail.com</span>
                <span>India</span>
            </div>
            <div className="box">
                <span className='heading'>Our Services</span>
                <span>Home</span>
                <span>Add Listing</span>
                <span>Rent</span>
            </div>
            <div className="box">
                <span className='heading'>Quick Link</span>
                <span>Knowledge Base</span>
                <span>FAQ</span>
                <span>Contact</span>
            </div>
            <div className="box">
                <span className='logo'>Private Property Rental</span>

                 <Link to={"/Help-center"} > <button className='contactbtn'>Contact Us</button> </Link>
            </div>
        </div>
        <div className="footer-buttom">
            <span>Privacy Policy | |</span>
            <span>Use of terms</span>
        </div>
    </div>
  )
}

export default Footer