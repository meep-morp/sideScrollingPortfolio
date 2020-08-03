import React, { useState } from "react";
import "./styles/App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { PortProvider } from "./context/portContext";
import Home from "./components/Home";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <PortProvider>
      <Nav />
      <div className="App">
        <Home />
        <Work />
        <About />
        <Contact />
      </div>
    </PortProvider>
  );
}

export default App;
