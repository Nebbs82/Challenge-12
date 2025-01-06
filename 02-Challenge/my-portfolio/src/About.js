import React from'react';
import myPhoto from './assets/my-photo.jpg';

const About = () => {
  return (
    <section id="about" class="page-section">
      <h2>About Me</h2>
      <div class="page-section">
        <img src={myPhoto} alt="My Photo" class="about-image" />
        <p>
          I'm new to the world of coding, currently attending bootcamp through KU's edX program. I have been into PCgaming for years, built several of my own PCs, now I want to learn the coding side.
        </p>
      </div>
    </section>
  );
};

export default About;