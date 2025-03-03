// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Technologies from './components/Techstack';  // Import Technologies component
import 'bootstrap/dist/css/bootstrap.min.css';
import TechStack from './components/Techstack';

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <TechStack />  {/* Add Technologies component */}
      <Contact />
    </div>
  );
};

export default App;
