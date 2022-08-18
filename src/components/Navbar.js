import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import user from './assets/user.png';

const Navbar = () => (
  <>
    <div className="nav">
      <div className="links">
        <h1> React Bookstore</h1>
        <Link to="/">BOOKS</Link>
        <Link to="/categories">CATEGORIES</Link>
      </div>
      <img src={user} alt="user" />
    </div>
  </>
);

export default Navbar;
