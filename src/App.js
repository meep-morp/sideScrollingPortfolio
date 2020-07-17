import React, { useState } from 'react';
import "./styles/App.css";
import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Home from './components/Home.jsx';

function App() {

  return (
    <div className="App">
      <Router>
        <Nav />
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/work">
          <Work />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
