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
          <li><Link to="/About">About Me</Link></li>
          <li><Link to="/Portfolio">My Portfolio</Link></li>
          <li><Link to="/Contact">Contact Me</Link></li>
          <li><Link to="/Resume">Resume</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;