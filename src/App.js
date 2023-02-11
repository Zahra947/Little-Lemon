import React from 'react';
import { useState, useReducer } from 'react';
import './style.css';
import Footer from './Footer.js';
import { Routes, Route, Link } from 'react-router-dom';
import About from './components/About.js';
import Home from './components/Home.js';
import Login from './components/Login.js';
import Menu from './components/Menu.js';
import Order from './components/Order.js';
import Booking from './components/Booking.js';

export default function App() {
  //we need to lift the initialAvailableTimes state up to the home component. so first define the available times for the day
  const initialAvailableTimes = [
    { time: '7:00 pm' },
    { time: '8:00 pm' },
    { time: '9:00 pm' },
    { time: '10:00 pm' },
  ];
  //The initializeTimes function returns the initial state for the availableTimes reducer.
  const initializeTimes = () => initialAvailableTimes;

  //The updateTimes function is a reducer that returns the initial available times for now.
  const updateTimes = (state, action) => {
    switch (action.type) {
      case 'update':
        return initialAvailableTimes;
      default:
        throw new Error();
    }
  };

  // I changed availableTimes to a reducer using the useReducer function and provide the two previous functions as parameters
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

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
        <Route
          path="/booking"
          element={
            <Booking availableTimes={availableTimes} dispatch={dispatch} />
          }
        ></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <Footer />
    </>
  );
}
