import React from "react";
import {
  Jumbotron,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  CustomInput
} from "reactstrap";

function SearchForm(props) {
  return (
    <Jumbotron>
      <Form>
          <Row><legend style={{textAlign:'center'}}>Use Google Books API to find your favorite book</legend></Row>
        <FormGroup row>
          <Label for="BookTitle" sm={2}>
            Book Title
          </Label>
          <Col sm={9}>
            <Input
              type="text"
              name="bookTitle"
              onChange={props.handleInputChange}
              value={props.bookTitle}
              placeholder="Enter Book Title"
            />
          </Col>
          <hr className="my-2" />
        </FormGroup>
        <FormGroup row>
          <Label for="author" sm={2}>
            Author
          </Label>
          <Col sm={9}>
            <Input
              type="text"
              name="author"
              onChange={props.handleInputChange}
              value={props.author}
              placeholder="Enter Author Name"
            />
          </Col>
          <hr className="my-2" />
        </FormGroup>
        <FormGroup row>
          <Label for="publisher" sm={2}>
            Publisher
          </Label>
          <Col sm={9}>
            <Input
              type="text"
              name="publisher"
              onChange={props.handleInputChange}
              value={props.publisher}
              placeholder="Enter Publishing Company"
            />
          </Col>
          <hr className="my-2" />
        </FormGroup>
        <FormGroup row>
          <Label for="isbn" sm={2}>
            ISBN
          </Label>
          <Col sm={9}>
            <Input
              type="text"
              name="isbn"
              onChange={props.handleInputChange}
              value={props.isbn}
              placeholder="Enter ISBN Number"
            />
          </Col>
          <hr className="my-2" />
        </FormGroup>
        <Button
          color="primary"
          href="/results"
          onClick={props.handleFormSubmit}
        >
          Search
        </Button>{" "}
      </Form>
    </Jumbotron>
  );
}
export default SearchForm;
