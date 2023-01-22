import React from 'react';

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <img className="logo" src="./media/LOGO.jpg" />
        </li>
        <li> Home </li>
        <li>About</li>
        <li>Menu</li>
        <li>Reservation</li>
        <li>Order</li>
        <li> Login</li>
      </ul>
    </nav>
  );
}
