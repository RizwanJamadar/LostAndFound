import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="login_form">
      <form action="">
        <h3>sign in</h3>
        <span>username</span>
        <input type="email" name="" placeholder="Enter your email" className="box" required />
        <span>password</span>
        <input type="password" name="" placeholder="Enter your password" className="box" minLength="8" />
        <div className="checkbox">
          <input type="checkbox" name="" id="remember-me" />
          <label htmlFor="remember-me">remember me</label>
        </div>
        <input type="submit" value="sign in" className="btn" />
        <p>forgot password ? <span>click here</span></p>
        <p>don't have an account ? <Link to="/signup"> <span>create one </span> </Link></p>
      </form>
    </div>
  )
}

export default Login