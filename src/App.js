import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home'
import Signup from './pages/Register/Register'
import Login from './pages/Login/Login'
import Product from './pages/Product/Product'
import Upload from './pages/Upload/Upload'
import UploadProduct from './pages/UploadProduct/UploadProduct';
import Contact from './pages/Contact/Contact'
import Products from './components/Products/Products';

const App = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/signup' element={<><Signup /></>}></Route>
          <Route path='/login' element={<><Login /></>}></Route>
          <Route path='/products' element={<><Products /></>}></Route>
          <Route path='/products/:id' element={<Product/>}></Route>
          <Route path='/upload' element={<><Upload /></>}></Route>
          <Route path='/upload/details' element={<><UploadProduct /></>}></Route>
          <Route path='/contact' element={<><Contact/></>}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App