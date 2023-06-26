import React from 'react'
import './uploadproduct.css'
import UploadIcon from '@mui/icons-material/Upload';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { constant } from '../../constants';
import axios from 'axios';



const UploadProduct = () => {
  const params = useParams();

  const imgUrl = 'http://res.cloudinary.com/desqsr61l/image/upload/' + params.id1 + '/lostandfound/' + params.id2;
  console.log(imgUrl);

  const [formData, setFormData] = useState({
    productName: '',
    color: '',
    model: '',
    room: '',
    roomNumber: 0,
    category: ''
  });

  const handleProductNameChange = (event) => {
    setFormData({ ...formData, productName: event.target.value });
  }
  const handleColorChange = (event) => {
    setFormData({ ...formData, color: event.target.value });
  }
  const handleModelChange = (event) => {
    setFormData({ ...formData, model: event.target.value });
  }
  const handleRoomChange = (event) => {
    setFormData({ ...formData, room: event.target.value });
  }
  const handleRoomnumberChange = (event) => {
    setFormData({ ...formData, roomNumber: event.target.value });
  }
  const handleCategoryChange = (event) => {
    setFormData({ ...formData, category: event.target.value });
  }


  const handleUploadProduct = (e) => {
    e.preventDefault()
    console.log(localStorage.getItem('token'))
    console.log(formData)

    if (formData.email !== '' && formData.password !== '') {
      // setLoader(true);
      const formdata = new FormData();
      formdata.append('productName', formData.productName);
      formdata.append('color', formData.color);
      formdata.append('model', formData.model);
      formdata.append('room', formData.room);
      formdata.append('roomNumber', formData.roomNumber);
      formdata.append('imgUrl', imgUrl);
      formdata.append('category', formData.category);


      axios.post(constant.API_URL + '/api/product/addproduct', formdata, {
        headers: {
          'Content-Type': 'application/json',
          'token': JSON.parse(localStorage.getItem('token'))
        },
      })
        .then(res => {
          console.log(res)

          if (res.status === 200) {

            alert("Product ID:  " + res.data.uniqueId)
            console.log(res.data);
            console.log(res.data.uniqueId)
          } else {
            alert(res.data)
          }
        })
        .catch(err => {
          console.log("Frontend err: ", err)
        });
    } else {
      // setError(true);
    }
  }

  return (
    <div className='up-container'>
      <div className='row'>
        <div className='left'>
          <img src={imgUrl} alt='' />
        </div>
        <div className='right'>
          <form action=''>
            <h3>Product Details</h3>
            <span>Name<p>*</p></span>
            <input type="text" name="" placeholder="Phone" className="box" onChange={handleProductNameChange} required />
            <span>Color<p>*</p></span>
            <input type="text" name="" placeholder="Black" className="box" onChange={handleColorChange} required />
            <span>Model</span>
            <input type="text" name="" placeholder="Iphone 14" className="box" onChange={handleModelChange} />
            <span>Found In</span>
            <input type="text" name="" placeholder="Library" className="box" onChange={handleRoomChange}/>
            <span>Room No</span>
            <input type="number" name="" placeholder="218" className="box" required onChange={handleRoomnumberChange} />
            <span>Category<p>*</p></span>
            <select name="category" class="box" onChange={handleCategoryChange} required>
              <option value="" disabled selected>select the category --</option>
              <option value="idcards">Id Cards</option>
              <option value="calculators">Calculators</option>
              <option value="waterbottles">Water Bottles</option>
              <option value="electronics">Electronics</option>
              <option value="stationary">Statinaries</option>
              <option value="others">Others</option>
            </select>
            <button type='submit' onClick={handleUploadProduct} className='btn'><UploadIcon sx={{ fontSize: "20px" }} /> Upload</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UploadProduct