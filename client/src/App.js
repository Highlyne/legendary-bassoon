import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Results from "./components/Results";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Form from "./components/Form";
import Cards from "./components/Cards";

class App extends Component {
  render() {
    return (
      
      <Router>
                <Navbar />
                <Jumbotron />
                <div className="container">
                <Form />
                </div>

        

         
        <Route path="/results" component={Cards}/>
      </Router>
      
    );
  }
}

export default App;
