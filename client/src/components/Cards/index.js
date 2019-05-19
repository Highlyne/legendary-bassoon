import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody } from 'reactstrap';

const Example = (props) => {
  return (
      <Card>
        <CardImg top width="75px" height="175px" src={props.image} alt="Card image cap" />
        <CardBody>
          <CardTitle> {props.title} </CardTitle>
          <CardText>{props.subtitle}</CardText>
          <CardText>{props.authors}</CardText>
          <CardText>{props.description}</CardText>
          <a href={props.link} target="blank" ><Button>Preview</Button></a>
        </CardBody> 
      </Card>
      
  );
};

export default Example;