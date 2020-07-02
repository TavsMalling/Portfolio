import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";

import MeContent from "./Components/MeContent";
import CVContent from "./Components/CVContent";
import ContactContent from "./Components/ContactContent";
import Footer from "./Components/Footer";

class App extends Component {
  state = {
    me: {
      hero: "Ducks",
    },

    cv: {
      hero: "Painting",
    },

    contact: {
      hero: "ColouredLightning",
    },
  };
  render() {
    return (
      <Router>
        <NavBar />
        <Route
          path="/"
          exact
          render={() => (
            <>
              <Hero heroImage={this.state.me.hero} />
              <MeContent />
            </>
          )}
        />

        <Route
          path="/CV"
          exact
          render={() => (
            <>
              <Hero heroImage={this.state.cv.hero} />
              <CVContent />
            </>
          )}
        />

        <Route
          path="/Contact"
          exact
          render={() => (
            <>
              <Hero heroImage={this.state.contact.hero} />
              <ContactContent />
            </>
          )}
        />
        <Footer />
      </Router>
    );
  }
}

export default App;

/*<NavBar />
      <Route path='/' exact component={MePage} />*/
