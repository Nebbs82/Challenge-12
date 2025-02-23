import React from'react';
import resume from '../assets/NathanEbbesenResume.pdf';

function Contact() {
  return (
    <section id="contact" className="page-section">
      <h2>Contact Me</h2>
      <div className="contact">
        <address>
          <a href="tel:+3162042792">Phone/Text</a>
          <a href="mailto:nathan.r.ebbesen@hotmail.com">Email</a>
          <a href= {resume} download>Download Resume</a>
        </address>
      </div>
    </section>
  );
}

export default Contact;