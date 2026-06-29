import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div id='contact'>
       
            <form onSubmit={(e)=>{
                e.preventDefault()
                alert("Message Sucessfuly...")
            }}>
            <span className='contact-page'>Contact Page</span>
             <div className="list">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="" id="username" />
                </div>
                <div className="list">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="" id="email" />
                </div>
                <div className="list">
                    <label htmlFor="message">Message</label>
                    <textarea type="text" name="" id="message" />
                </div>
                <button id='submitbtn'>Submit</button>
            </form>

    </div>
  )
}

export default Contact;