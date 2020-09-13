import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <nav className="main-nav">
    <ul>
      <li>
        <NavLink to="/mountains">Mountains</NavLink>
      </li>
      <li>
        <NavLink to="/headphones">Headphones</NavLink>
      </li>
      <li>
        <NavLink to="/robots">Robots</NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
