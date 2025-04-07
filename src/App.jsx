import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import Contact from './pages/ContactDetails';
import About from './pages/About';
import NotFound from './pages/NotFound';

import './HomePage.css';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Welcome from './pages/Welcome';
import Menu from './pages/menu';
import SpecialOffersPage from './pages/SpecialOffersPage';


export default function App() {
  return (
    <div><Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/menu" element={<Menu/>} />
    <Route path="/specialofferspage" element={<SpecialOffersPage/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/signup" element={<Signup/>} />
    <Route path="/welcome" element={<Welcome/>} />
    <Route path="*" element={<NotFound/>} />
  </Routes></div>
  )
}

