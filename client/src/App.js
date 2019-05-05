import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import API from './utils/API';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import SearchBox from "./components/Form";
import Cards from "./components/Cards";

class App extends Component {
  state = {
    bookTitle: "",
    author: "",
    results: []
  };

  // Handle the change  in input of the form
  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    // Deconstructing the state object 
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    alert(this.state.bookTitle);
    API.search(this.state.author);

  };

  
  render() {
    return (
      
      <Router>
                <Navbar />
                <Jumbotron />
                <div className="container">
                <SearchBox  bookTitle={this.state.bookTitle} author={this.state.author}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange} />
                </div>

        

         
        <Route path="/results" component={Cards}/>
      </Router>
      
    );
  }
}

export default App;
