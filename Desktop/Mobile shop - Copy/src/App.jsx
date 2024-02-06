import React from 'react'
import HeaderSite from './components/HeaderSite'
import Slider from './components/Slider'
import SliderItems from './components/SliderItems'
import Advertisement from './components/Advertisement'
import { photos } from './components/DATA/photos'
import Sale from './components/Sale'
import Latest from './components/Latest'
import SubscribeBox from './components/SubscribeBox'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Cart from './components/Cart'
import Shop from './components/Shop'
import ProductVal from './components/ProductVal'
const App = () => {

  return (
    <>
    <HeaderSite/>
    <Routes>
      <Route path='/' element={
      <>
    <Slider/>
    <Advertisement/>
    <SliderItems name = 'MOBILE PRODUCTS' data={photos} />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <SliderItems name = 'SMART WATCHES' data={photos} />
    <Sale/>
    <Latest/>
     </>
      }/>
      <Route path='about' element={<About/>}/>
      <Route path='cart' element={<Cart/>}/>
      <Route path='shop' element={<Shop/>}/>
      <Route path='shop/product-val' element={<ProductVal/>}/>
    </Routes>
   
    <SubscribeBox/>
    <Footer/>
    </>
  )
}

export default App