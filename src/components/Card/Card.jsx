import React from 'react'
import { Link } from 'react-router-dom'
import './card.css'

const Card = (item) => {



  
  return (
    <Link to="/products" className="link">
      <div className='catCard'>
        <div className='img'>
          <img src={item.img} alt='' />
        </div>
        <div className='details'>
          <span className='title'>{item.name}</span>
        </div>
      </div>
    </Link>
  )
}

export default Card