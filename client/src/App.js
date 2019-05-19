import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import {CardColumns} from 'reactstrap';
import bookImage from '../src/images/stack-of-books.png';

import logo from "./logo.svg";
import "./App.css";
import API from './utils/API';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import SearchBox from "./components/Form";
import Cards from "./components/Cards";
// import results from "./pages/Results";

class App extends Component {
  state = {
    selectedOption:"",
    value: "",
    bookTitle: "",
    author: "",
    publisher:"",
    isbn:"",
    results:[]
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
    const searchTerms = {...this.state};
    console.log(searchTerms.selectedOption);
    API.setQuery(searchTerms)
    // API.search(searchTerms)
    .then((res) => {
      console.log(res.data.items)

      this.setState({ results: res.data.items });
      console.log(this.state.results);
      let volume = this.state.results.map(volumes => volumes)
   console.log(volume);
    })
    .catch(err => console.log(err));
    
    this.setState({
      bookTitle: "",
    author: "",
    publisher:"",
    isbn:""
    });
   
  };

  render() {
    return (
      
      <Router>
                <Navbar />
                <Jumbotron />
                <div className="container">
                <SearchBox Option={this.state.selectedOption} bookTitle={this.state.bookTitle} author={this.state.author}
                publisher={this.state.publisher} isbn={this.state.isbn}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange} />
                {this.state.results ? (
                <CardColumns>
                  {this.state.results.map(book => (
                    <Cards
                      key={book.id}
                      title={book.volumeInfo.title}
                      subtitle={book.volumeInfo.subtitle}
                      link={book.volumeInfo.previewLink}
                      authors={book.volumeInfo.authors}
                      description={book.volumeInfo.description}
                      image={"undefined" ? bookImage : book.volumeInfo.imageLinks.thumbnail }
                      />
                  ))}
                  </CardColumns>
                ): (
                  <h2 className="text-center"> Results Here</h2>
                )}
              
              
                </div>


        

         
        {/* <Route path="/results" component={results} props= {this.state}/> */}
      </Router>
      
    );
  }
}

export default App;
