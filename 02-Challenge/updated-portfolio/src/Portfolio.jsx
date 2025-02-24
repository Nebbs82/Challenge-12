import React from 'react';

function Portfolio() {
  return (
    <section id="portfolio" className="page-section">
      <h2>My Work</h2>
      <div className="flex-container">
        <div className="portfolio-item study-guide flex-item">
          <p>
            <a href="https://nebbs82.github.io/prework-study-guide/">My Prework Assignment</a>
          </p>
          <p>
            <a href="https://github.com/Nebbs82/prework-study-guide">Github Repo</a>
          </p>  
        </div>
        <div className="portfolio-item flex-item app-2">
          <a href="">Coming Soon</a>
        </div>
        <div className="portfolio-item flex-item app-3">
          <a href="">Coming Soon</a>
        </div>
        <div className="portfolio-item flex-item app-4">
          <a href="">Coming Soon</a>
        </div>
        <div className="portfolio-item flex-item app-5">
          <a href="">Coming Soon</a>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;