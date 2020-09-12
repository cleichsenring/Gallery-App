// eslint-disable-next-line no-unused-vars
import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <nav className="main-nav">
    <ul>
      <li><NavLink to="/spaceship">Spaceship</NavLink></li>
      <li><NavLink to="#">Dogs</NavLink></li>
      <li><NavLink to="#">Computers</NavLink></li>
    </ul>
  </nav>
);

export default Nav;