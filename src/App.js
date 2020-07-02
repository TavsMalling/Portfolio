import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';

import NavBar from "./Components/NavBar";
import MePage from './Pages/MePage';
import Hero from './Components/Hero';

import Footer from "./Components/Footer";


function App() {
  return (
    <Router>
      <NavBar />
      <MePage />

      <Footer />
    </Router>

  );
}

export default App;