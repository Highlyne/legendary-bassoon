import React from 'react';
import { Jumbotron, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

function SearchForm(props) {
      return (
          <Jumbotron>
        <Form>
          <FormGroup row>
            <Label for="BookTitle" sm={2}>Book Title</Label>
            <Col sm={10}>
              <Input type="text" name="bookTitle" id="exampleEmail" onChange={props.handleInputChange}
          value={props.bookTitle} placeholder="Enter Book Title" />
            </Col>
            <hr className="my-2" />

          </FormGroup>
          <FormGroup row>
            <Label for="author" sm={2}>author</Label>
            <Col sm={10}>
              <Input type="text" name="author" id="exampleEmail" onChange={props.handleInputChange}
          value={props.author} placeholder="Enter Book Author" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleSelect" sm={2}>Select</Label>
            <Col sm={10}>
              <Input type="select" name="select" id="exampleSelect" />
            </Col>
          </FormGroup>
          <Button color="primary" href="/results"  onClick={props.handleFormSubmit} >Search</Button>{' '}

        </Form>
        </Jumbotron>
      );
    
  }
  export default SearchForm;