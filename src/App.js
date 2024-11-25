// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Technologies from './components/Technologies';  // Import Technologies component
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <Technologies />  {/* Add Technologies component */}
      <Contact />
    </div>
  );
};

export default App;
