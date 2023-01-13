import React from 'react';

export default function Nav() {
  return (
    <nav>
      <ul className="nav">
        <img className="logo" src="./Top pic.png" />
        <li className="nav-item">Home </li>
        <li className="nav-item">About</li>
        <li className="nav-item">Menu</li>
        <li className="nav-item">Reservation</li>
        <li className="nav-item">Order Online</li>
        <li className="nav-item"> Login</li>
      </ul>
    </nav>
  );
}
