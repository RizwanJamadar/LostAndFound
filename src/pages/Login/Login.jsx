import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { constant } from '../../constants'
import axios from 'axios'

const Login = () => {
  const [formData, setFormData] = useState({
    staff_id: 0,
    email: '',
    password: ''
  });

  const handleStaffIdChange = (event) => {
    setFormData({ ...formData, staff_id: event.target.value });
  }
  const handleEmailchange = (event) => {
    setFormData({ ...formData, email: event.target.value });
  }
  const handlePasswordChange = (event) => {
    setFormData({ ...formData, password: event.target.value });
  }

  const isvalid = true;

  const handleLogin = (e) => {
    e.preventDefault()
    console.log(formData)

    if (formData.email !== '' && formData.password !== '') {
      // setLoader(true);
      const formdata = new FormData();
      formdata.append('id', formData.staff_id);
      formdata.append('email', formData.email);
      formdata.append('password', formData.password);


      axios.post(constant.API_URL + '/api/admin/login', formdata, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(res => {
          console.log(res)

          if (res.status === 200) {
            localStorage.setItem('token', JSON.stringify(res.data.token));
            alert("Logged in successfully!")
          } else {
            alert(res.data)
          }
        })
        .catch(err => {
          console.log("Frontend err: ", err)
        });
    } else {
      // setError(true);
    }
  }



  return (
    <div className="login_form">
      <form action="">
        <h3>sign in</h3>
        <span>Staff Id</span>
        <input type="number" name="" placeholder="Enter your staff id" onChange={handleStaffIdChange} className="box" required />
        <span>username</span>
        <input type="email" name="" placeholder="Enter your email" onChange={handleEmailchange} className="box" required />
        <span>password</span>
        <input type="password" name="" placeholder="Enter your password" onChange={handlePasswordChange} className="box" minLength="2" />
        <div className="checkbox">
          <input type="checkbox" name="" id="remember-me" />
          <label htmlFor="remember-me">remember me</label>
        </div>
        <input onClick={handleLogin} type="submit" value="sign in" className="btn" />
        {/* <p>don't have an account ? <Link to="/signup"> <span>create one </span> </Link></p> */}
      </form>
    </div>
  )
}

export default Login