import React from 'react'
import { Link } from 'react-router-dom'
import './card.css'
// import bottle from "../../assets/Bottle.jpg";

const Card = (item) => {
  return (
    <Link to="/product/123" className="link">
      <div className='catCard'>
        <div className='img'>
          <img src={item.img} alt='' />
        </div>        
        <div className='details'>
          <span className='title'>{item.name}</span>
          <p className='desc'>{item.desc}</p>
          <span className='foundIn'>{item.foundIn} </span>
          <span className='roomno'>{item.roomNo}</span>
        </div>
      </div>
    </Link>
  )
}

export default Card