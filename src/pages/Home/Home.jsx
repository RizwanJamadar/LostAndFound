import React from 'react'
import './home.css'
import Card from '../../components/Card/Card'
import { category } from '../../data'
import { setProducts } from '../../redux/actions/actions'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { constant } from '../../constants'

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
      {
        category.map((item) => (
          <Card key={item.id} {...item} />
        ))
      }
    </div>
  )
}

export default Home