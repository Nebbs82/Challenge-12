import React from'react';
import Header from './Header.jsx';
import About from './About.jsx';
import Portfolio from './Portfolio.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';


function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
        <About />
        <Portfolio />
        <Contact />
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;