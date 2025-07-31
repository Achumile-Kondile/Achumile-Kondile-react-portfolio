import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Component Imports
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience'; // Assuming this contains your tech-stack section
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      {/* This div might still be useful for initial padding below the fixed navbar */}
      <div style={{ paddingTop: '80px' }}>
        {/*
          Render all components on the root path if you want a single scrollable page.
          Each of these components should contain its respective <section id="...">.
          Make sure each section does NOT have its own min-height: 100vh if they are
          all meant to stack and contribute to one large scroll. Or, if they DO have
          min-height: 100vh, then multiple sections will naturally cause scrolling.
        */}
        <Routes>
  <Route path="/" element={
    <>
      <HomePage />
      <About />
      <Projects />
      <Experience /> {/* Or whatever component holds your tech stack */}
      <Contact />
    </>
  } />
</Routes>
      </div>
    </Router>
  );
};

export default App;