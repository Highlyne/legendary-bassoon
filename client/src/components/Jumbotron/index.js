import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";


const Example = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Google API Books</h1>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Example;