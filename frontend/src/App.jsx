import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Product from './pages/Product'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Shirts from './pages/Shirts'
import Tshirts from './pages/Tshirts'
import Paints from './pages/Pants'
import Pajamas from './pages/Pajamas'
import Suits from './pages/Suits'
import Pants from './pages/Pants'
import AllProducts from './pages/AllProducts'

const App = () => {
  return (
    <div className='' >
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/men' element={<Men/>} />
        <Route path='/women' element={<Women/>} />
        <Route path='/kids' element={<Kids/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/product/:productId' element={<Product/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/orders' element={<Orders/>} />
        <Route path='/place-order' element={<PlaceOrder/>} />
        <Route path='/collection' element={<Collection/>} />
        <Route path='/shirts' element={<Shirts/>} />
        <Route path='/t-shirts' element={<Tshirts/>} />
        <Route path='/pants' element={<Pants/>} />
        <Route path='/pajamas' element={<Pajamas/>} />
        <Route path='/suits' element={<Suits/>} />
        <Route path='/all-products' element={<AllProducts/>} />

      </Routes>
      <Footer />
    </div>
  )
}

export default App