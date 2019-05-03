import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Results from "./components/Results";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <Link to={'/results'}> Results</Link>
        </div>
        <Route path="/results" component={Results}/>
      </Router>
    );
  }
}

export default App;
