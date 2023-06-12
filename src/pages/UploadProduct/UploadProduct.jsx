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
            <input type="text" name="" placeholder="Phone" className="box" required />
            <span>Color</span>
            <input type="text" name="" placeholder="Black" className="box" required />
            <span>Model</span>
            <input type="text" name="" placeholder="Iphone 14" className="box" required />
            <div>
              <span>Found In</span>
              <input type="text" name="" placeholder="Library" className="box" required />
              <span>Room No</span>
              <input type="number" name="" placeholder="218" className="box" required />
              <span>Category</span>
              <select name="couses" class="box" required>
                <option value="" disabled selected>select the category --</option>
                <option value="idcards">Id Cards</option>
                <option value="calculators">Calculators</option>
                <option value="waterbottles">Water Bottles</option>
                <option value="electronics">Electronics</option>
                <option value="statinaries">Statinaries</option>
                <option value="others">Others</option>
              </select>
            </div>
            <button type='submit' className='btn'><UploadIcon sx={{ fontSize: "20px" }} /> Upload</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UploadProduct