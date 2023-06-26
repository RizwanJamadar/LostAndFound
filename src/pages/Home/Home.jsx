import React from 'react'
import './home.css'
import { setProducts } from '../../redux/actions/actions'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { constant } from '../../constants'
import Slider from '../../components/Slider/Slider'

const Home = () => {

  const dispatch = useDispatch();
  const data = useSelector((state) => state);

  const [loader, setLoader] = useState(true)

  const [products, setHomeProducts] = useState([])

  useEffect(() => {

    axios.get(constant.API_URL + '/api/product/getproducts')
      .then((res) => {
        setLoader(false)
        console.log(res)
        setHomeProducts(res.data)
        dispatch(setProducts(res.data));
      })
      .catch(err => {
        console.log("Frontend err: ", err)
      });

  }, [])




  return (
    <div className='home'>
      <div className='img'>
        <img src='/img/main.png' alt='' />
      </div>
      <Slider />
    </div>
  )
}

export default Home