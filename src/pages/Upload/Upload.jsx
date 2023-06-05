import React, { useState, useRef } from 'react'
import './upload.css'
// import bottle from '../../assets/Bottle.jpg'
import UploadIcon from '@mui/icons-material/Upload';
import { Link } from 'react-router-dom';

const Upload = () => {
  // const ref = useRef(null);
  const [image, setImage] = useState("");

  const handleImage = (e) => {
    setImage(e.target.files[0])
  }

  return (
    <div className='u-container'>
      <div className='img'>
        {image ? <img src={URL.createObjectURL(image)} alt='' /> : <span>Upload Your Image Here...</span>}
      </div>
      <div className='buttons'>
        <div>
          <label htmlFor='file' className='btn'><UploadIcon sx={{ fontSize: "20px" }} /> Upload</label>
          <input type='file' accept="image/*" id='file' style={{ display: "none" }} onChange={handleImage} />
        </div>
        <div>
          {image && <Link to='/upload/details'><button className='btn'>Next</button></Link>  }
        </div>
      </div>
    </div>
  )
}

export default Upload