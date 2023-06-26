import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <div className='c-container'>
      <form action=''>
        <h3>Your Query</h3>
        <span>Name<p>*</p></span>
        <input type="text" name="" placeholder="John Doe" className="box" required />
        <span>Email<p>*</p></span>
        <input type="email" name="" placeholder="JohnDoe@student.sfit.ac.in" className="box" required />
        <span>Department<p>*</p></span>
        <select required className='box'>
          <option disabled selected> -- Your department -- </option>
          <option value="IT">IT</option>
          <option value="CO">CO</option>
          <option value="ME">ME</option>
          <option value="EXTC">EXTC</option>
          <option value="EE">EE</option>
        </select>
        <span>Year<p>*</p></span>
        <select required className="box" >
        <option disabled selected> -- Your Year -- </option>
          <option value="FEA">FE-A</option>
          <option value="FEB">FE-B</option>
          <option value="SEA">SE-A</option>
          <option value="SEB">SE-B</option>
          <option value="TEA">TE-A</option>
          <option value="TEB">TE-B</option>
          <option value="BEA">BE-A</option>
          <option value="BEB">BE-B</option>
        </select>
        <span>Message<p>*</p></span>
        <textarea cols="8" rows="3" name="" placeholder="Your Message..." className="box" required style={{resize:"none"}} />
        <input type="submit" value="Submit" className="btn" />
      </form>
    </div>
  )
}

export default Contact