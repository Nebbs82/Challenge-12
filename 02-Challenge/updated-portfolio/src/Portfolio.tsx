import * as React from'react';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="page-section">
      <h2>My Work</h2>
      <div className="flex-container">
        <div className="portfolio-item study-guide flex-item">
          <a href="https://nebbs82.github.io/prework-study-guide/">My Prework Assignment</a>
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
};

export default Portfolio;