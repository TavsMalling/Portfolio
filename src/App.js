import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import NavBar from "./Components/NavBar";
import MePage from './Pages/MePage';

import Footer from "./Components/Footer";


function App() {
  return (
    <Router>
      <NavBar />
      <Route path='/' exact component={MePage} />

      <Footer />
    </Router>

  );
}

export default App;