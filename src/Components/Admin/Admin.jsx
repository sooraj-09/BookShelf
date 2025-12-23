import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../Home';  
import Books from '../Books';
import UserAdmin from '../UserAdmin';
import About from '../About';
import Adduser from './Adduser';
import Addbook from './Addbook';
import Navbar from '../../Navbar';
import Readbook from '../readbook';
import Cart from '../Cart';

export default function Admin() {
  return (
    <>
      <Navbar/>
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Books' element={<Books />} />
          <Route path='/UserAdmin' element={<UserAdmin/>} />
          <Route path='/Adduser' element={<Adduser />} />
          <Route path='/Addbook' element={<Addbook />} />
          <Route path='/readbook/:id' element={<Readbook />} />
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </div>
    </>
  );
}