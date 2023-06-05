import React from 'react'
import './products.css'
import Card from '../Card/Card';
import product1 from '../../data.js'

const products = () => {
  return (
    <div className='products'>
      {
        product1.map((item)=>(
          <Card key={item.id} {...item}/>
        ))
      }
    </div>
  )
}

export default products