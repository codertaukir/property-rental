import React from 'react'
import './Signup.css'
const Signup = () => {
  return (
    <div id='signup'>
<form onSubmit={()=>{
                alert("Login Sucessfuly...")
            }}>
            <span className='login-heiding'>Signup Page</span>
                <div className="list">
                    <label htmlFor="fullname">Full Name</label>
                    <input type="text" name="fullname" id="fullname" />
                </div>
                <div className="list">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className="list">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>
                 
                <div className="list">
                    <label htmlFor="conf-password">Confiram Password</label>
                    <input type="password" name="" id="conf-password" />
                </div>
                <button id='signupntn'>Signup</button>
            </form>
            </div>
  )
}

export default Signup