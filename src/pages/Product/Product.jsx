import React from 'react'
import './product.css'

const Product = () => {
  return (
    <div className='p-container'>
      <div className='row'>
        <div className='left'>
        <img src='https://images.pexels.com/photos/13570143/pexels-photo-13570143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''/>
        </div>
        <div className='right'>
          <h3>About Product</h3>
          <div className='details'>
            <div className='Id'><div>Id:</div> 000001</div>
            <div className='title'><div>Name:</div> IPhone</div>
            <div className='desc'><div>Desc:</div> Black in color Portable Water Bottle Sports Water Cup Large-capacity Student Water Bottle Fitness Cup Straw.....</div>
            <div className='fouondin'><div>Found In:</div> Classroom</div>
            <div className='roomno'><div>Room No:</div> 322</div>
          </div>
          <button className='btn'>Collect it</button>
        </div>
      </div>
    </div>
  )
}

export default Product