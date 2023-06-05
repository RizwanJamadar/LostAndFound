import React from 'react'
import './uploadproduct.css'
import UploadIcon from '@mui/icons-material/Upload';


const UploadProduct = () => {
  return (
    <div className='up-container'>
      <div className='row'>
        <div className='left'>
          <img src='https://images.pexels.com/photos/13570143/pexels-photo-13570143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
        </div>
        <div className='right'>
          <form action=''>
            <h3>Product Details</h3>
            <span>Name</span>
            <input type="text" name="" placeholder="Ex., Book" className="box" required />
            <span>Description</span>
            <textarea cols="8" rows="1" name="" placeholder="Desc..." className="box" required style={{resize:"none"}} />
            <span>Found In</span>
            <input type="text" name="" placeholder="Ex., Library" className="box" required />
            <span>Room No</span>
            <input type="number" name="" placeholder="Ex., 218" className="box" required />
            <button type='submit' className='btn'><UploadIcon sx={{ fontSize: "20px" }} /> Upload</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UploadProduct