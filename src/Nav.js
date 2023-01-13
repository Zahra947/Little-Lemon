import React from 'react';

export default function Nav() {
  return (
    <nav>
      <ul className="nav">
        <img className="logo" src="./logo.png" />
        <li className="item">Home </li>
        <li className="item">About</li>
        <li className="item">Menu</li>
        <li className="item">Reservation</li>
        <li className="item">Order Online</li>
        <li className="item"> Login</li>
      </ul>
    </nav>
  );
}
