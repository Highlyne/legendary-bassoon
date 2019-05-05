import React from 'react';
import { Jumbotron, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Example extends React.Component {
    render() {
      return (
          <Jumbotron>
        <Form>
          <FormGroup row>
            <Label for="exampleEmail" sm={2}>Book Title</Label>
            <Col sm={10}>
              <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
            </Col>
            <hr className="my-2" />

          </FormGroup>
          <FormGroup row>
            <Label for="examplePassword" sm={2}>Password</Label>
            <Col sm={10}>
              <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleSelect" sm={2}>Select</Label>
            <Col sm={10}>
              <Input type="select" name="select" id="exampleSelect" />
            </Col>
          </FormGroup>
          <Button color="primary" href="/results" >Search</Button>{' '}

        </Form>
        </Jumbotron>
      );
    }
  }