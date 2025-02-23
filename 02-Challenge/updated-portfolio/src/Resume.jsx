import React from'react';
import resume from '../assets/NathanEbbesenResume.pdf';

const Resume = () => {
  return (
    <section id="resume" className="page-section">
      <h2>Resume</h2>
      <p>
        <a href= {resume} download>Download Resume</a>
      </p>
    </section>
  );
};

export default Resume;