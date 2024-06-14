import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/home/Home'
import Register from './Components/register/Register'
import Products from './Components/products/Products'
import Contact from './Components/contact/Contact'
import "./App.css";
import Navbar from './Components/navbar/Navbar'
import ProductInfo from "./Components/products/ProductInfo"
import ProductsSelect from './Components/productsSelect/ProductsSelect'
import Error from './Components/error/Error'
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/products' element={<Products />}/>
        <Route path='/contactus' element={<Contact />}/>
        <Route path='/productsSelect' element={<ProductsSelect />}/>
        <Route path='/product/:productId' element={<ProductInfo />}/>
        <Route path='*' element={<Error />}/>
      </Routes>
    </div>
  )
}

export default App
