import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Image from "react-bootstrap/Image";
import GitHubLogo from "./Assets/Images/github-logo.png";

function App() {
  return (
    <Router>
      <NavBar />

      <Footer />
    </Router>
  );
}

/*<Router>
      <NavBar />
      <Footer />
    </Router>*/
export default App;
