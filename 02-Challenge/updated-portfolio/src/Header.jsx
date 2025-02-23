import React from'react';

function Header() {
  return (
    <header>
      <h1>Nathan Ebbesen</h1>
      <img src="./assets/AniMe.jpg" alt="My Avatar" class="header-image" />
      <nav>
        <ul>
          <li><a href="#about">About Me</a></li>
          <li><a href="#portfolio">My Portfolio</a></li>
          <li><a href="#contact">Contact Me</a></li>
          <li><a href="#resume">Resume</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;