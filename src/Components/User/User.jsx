import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from '../../Navbar';
import Home from '../Home';
import About from '../About';
import Books from '../Books';
import Readbook from '../readbook';
import Cart from '../Cart';


export default function User() {
  return (
    <>
    <Navbar/>
      <div style={{
        padding: '20px',
        animation: 'fadeIn 1s ease-out'
      }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Books' element={<Books />} />
         <Route path='/readbook/:id' element={<Readbook />} />
         <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </div>
    </>
  )
}
