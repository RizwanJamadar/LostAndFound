import React from 'react'
import './home.css'
import Card from '../../components/Card/Card'
import { category } from '../../data'

const Home = () => {
  return (
    <div className='home'>
     {
        category.map((item)=>(
          <Card key={item.id} {...item}/>
        ))
      }
    </div>
  )
}

export default Home