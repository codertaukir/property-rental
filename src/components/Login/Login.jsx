import React from 'react'
import './Login.css'

function Login() {
    return (
        <div id='login'>
            <form onSubmit={(e)=>{
                e.preventDefault()
                alert("Login Sucessfuly...")
                
            }}>
            <span className='login-heiding'>Login Page</span>
                <div className="list">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="" id="email" />
                </div>
                <div className="list">
                    <label htmlFor="Password">Password</label>
                    <input type="password" name="" id="password" />
                </div>
                <button id='loginbtn'>Login</button>
            </form>
        </div>
    )
}

export default Login