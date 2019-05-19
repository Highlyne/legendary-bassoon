import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import backgroundImage  from '../../images/aleksei-i-1165695-unsplash.jpg';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";


const Example = (props) => {
  return (
    <div>
      <Jumbotron fluid style={{ backgroundImage: `url(${backgroundImage})`}}>
        <Container fluid>
          <h1 className="display-3"style={{ color: `white`, textAlign:'center', fontFamily: 'Volkhov'  }}>Book Hunt</h1>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Example;