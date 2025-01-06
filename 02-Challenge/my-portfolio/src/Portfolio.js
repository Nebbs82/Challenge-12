import React from'react';

const Portfolio = () => {
  return (
    <section id="portfolio" class="page-section">
      <h2>My Work</h2>
      <div class="flex-container">
        <div class="portfolio-item study-guide flex-item">
          <a href="https://nebbs82.github.io/prework-study-guide/">My Prework Assignment</a>
        </div>
        <div class="portfolio-item flex-item app-2">
          <a href="">Coming Soon</a>
        </div>
        <div class="portfolio-item flex-item app-3">
          <a href="">Coming Soon</a>
        </div>
        <div class="portfolio-item flex-item app-4">
          <a href="">Coming Soon</a>
        </div>
        <div class="portfolio-item flex-item app-5">
          <a href="">Coming Soon</a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;