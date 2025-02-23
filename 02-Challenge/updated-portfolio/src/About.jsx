import React from'react';
import portrait from '../assets/my-photo.jpg';

function About() {
  return (
    <section id="about" className="page-section">
      <h2>About Me</h2>
      <div className="page-section">
        <img src={portrait} alt="My Photo" className="about-image" />
        <p>
          I'm new to the world of coding, currently attending bootcamp through KU's edX program. I have been into PC gaming for years, built several of my own PCs, now I want to learn the coding side.
        </p>
      </div>
    </section>
  );
}

export default About;