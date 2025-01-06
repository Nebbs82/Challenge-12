import React from'react';
import myPhoto from './assets/AniMe.jpg';

const Header = () => {
  return (
    <header>
      <h1>Nathan Ebbesen</h1>
      <img src={myPhoto} alt="My Avatar" class="header-image" />
      <nav>
        <ul>
          <li><a href="#about">About Me</a></li>
          <li><a href="#portfolio">My Portfolio</a></li>
          <li><a href="#contact">Contact Me</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;