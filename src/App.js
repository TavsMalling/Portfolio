import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';

import NavBar from "./Components/NavBar";
import MePage from './Pages/MePage';
import CVPage from './Pages/CVPage';
import ContactPage from './Pages/ContactPage';


import Footer from "./Components/Footer";


function App() {
  return (
    <Router>
      <NavBar />
      <Route path='/' exact component={MePage} />
      <Route path='/CV' exact component={CVPage} />
      <Route path='/Contact' exact component={ContactPage} />
      <Footer />
    </Router>

  );
}

/*<NavBar />
      <Route path='/' exact component={MePage} />*/

export default App;