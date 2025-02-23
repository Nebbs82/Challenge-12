import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../assets/AniMe.jpg';

function Header() {
  return (
    <header>
      <h1>Nathan Ebbesen</h1>
      <img src={avatar} alt="My Avatar" className="header-image" />
      <nav>
        <ul>
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/portfolio">My Portfolio</Link></li>
          <li><Link to="/contact">Contact Me</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;