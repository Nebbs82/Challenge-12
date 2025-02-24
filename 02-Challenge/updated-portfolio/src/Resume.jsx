import React from'react';
import resume from '../assets/NathanEbbesenResume.pdf';

const Resume = () => {
  return (
    <section id="resume" className="page-section">
      <h2>Resume</h2>
      <div className="flex-container">
      <p className="portfolio-item flex-item resume">
        <a href= {resume} download>Download Resume</a>
      </p>
      </div>
    </section>
  );
};

export default Resume;