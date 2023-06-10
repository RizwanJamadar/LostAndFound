import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <div className='c-container'>
      <form action=''>
        <h3>Your Query</h3>
        <span>Name</span>
        <input type="text" name="" placeholder="John Doe" className="box" required />
        <span>Email</span>
        <input type="email" name="" placeholder="JohnDoe@student.sfit.ac.in" className="box" required />
        <span>Phone No</span>
        <input type="number" name="" placeholder="9876543210" className="box" required minLength={10} maxLength={10}/>
        <span>Year</span>
        <input type="text" name="" placeholder="SEIT-A" className="box" required />
        <span>Message</span>
        <textarea cols="8" rows="3" name="" placeholder="Your Message..." className="box" required style={{resize:"none"}} />
        <input type="submit" value="Submit" className="btn" />
      </form>
    </div>
  )
}

export default Contact