import React from 'react';
import { NavLink } from 'react-router-dom';
import userAvatar from '../Images/userAvatar.png';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <h1>Bookstore CMS</h1>
      <ul>
        <li>
          <NavLink to="/" className="links">
            Books
          </NavLink>
        </li>
        <li>
          {' '}
          <NavLink to="Categories" className="links">
            Categories
          </NavLink>
        </li>
      </ul>
      <div className="userOval">
        <img className="userAvatar" src={userAvatar} alt="" />
      </div>
    </div>
  );
}

export default Header;
