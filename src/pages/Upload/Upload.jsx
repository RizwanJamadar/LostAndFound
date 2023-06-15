import React, { useState } from 'react'
import './upload.css'
import UploadIcon from '@mui/icons-material/Upload';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
// import upload from '../../utils/upload';

const Upload = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);

  // To handle image or set current selected image
  const handleImage = (e) => {
    setImage(e.target.files[0])
  }

  // upload function for converting images to url
  const upload = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "lostandfound");

    try {
      const res = await axios.post("https://api.cloudinary.com/v1_1/desqsr61l/upload", data);

      const { url } = res.data;
      console.log(url);
      return url;
    } catch (err) {
      console.log(err);
    }
  };

  // submit url to next page or db
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = await upload(image);
    try {
      console.log(url)

      const id1 = url.split("/")[6];
      const id2 = url.split("/")[8];
      navigate(`/upload/details/${id1}/${id2}`)


    } catch (err) {
      console.log(err)
    }
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
          {image && <Link><button className='btn' onClick={handleSubmit}>Next</button></Link>}
        </div>
      </div>
    </div>
  )
}

export default Upload