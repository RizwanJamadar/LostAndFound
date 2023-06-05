import React from 'react'
import './register.css'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='r-container'>
      <form action=''>
        <h3>sign up</h3>
        <span>Email</span>
        <input type="email" name="" placeholder="JohnDoe@student.sfit.ac.in" className="box" required />
        <span>Staff Id</span>
        <input type="number" name="" placeholder="221253" className="box" required />
        <span>First Name</span>
        <input type="text" name="" placeholder="John" className="box" required />
        <span>Last Name</span>
        <input type="text" name="" placeholder="Doe" className="box" required />
        <span>Password</span>
        <input type="password" name="" placeholder="Password" className="box" minLength="8" />
        <input type="submit" value="Register" className="btn" />
        <div><p>Already have an account ? <Link to="/login"> <span>Sign in </span> </Link></p></div>
      </form>
    </div>
  )
}

export default Register