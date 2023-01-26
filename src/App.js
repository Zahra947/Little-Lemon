import React from 'react';
import './style.css';
import Main from './Main.js';
import Footer from './Footer.js';
import { Routes, Route, Link } from 'react-router-dom';
import About from './components/About.js';
import Home from './components/Home.js';
import Login from './components/Login.js';
import Menu from './components/Menu.js';
import Order from './components/Order.js';
import Booking from './components/Booking.js';

export default function App() {
  return (
    <>
      <nav>
        <Link to="/" className="nav-item">
          <img className="logo" src="./media/LOGO.jpg" />
        </Link>
        <Link to="/" className="nav-item">
          Home
        </Link>
        <Link to="/about" className="nav-item">
          About
        </Link>
        <Link to="/menu" className="nav-item">
          Menu
        </Link>
        <Link to="/booking" className="nav-item">
          Booking
        </Link>
        <Link to="/order" className="nav-item">
          Order
        </Link>
        <Link to="/login" className="nav-item">
          Login
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/reservation" element={<Reservation />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <Main />
      <Footer />
    </>
  );
}
