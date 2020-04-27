import React from "react";
import { Card } from "react-bootstrap";

const AuthorInfoCard = (props) => {
  return (
    <Card
      bg="dark"
      key={props.author.id}
      text="light"
      style={{ width: "100%", height: 300 }}
      className="mb-2"
    >
      <Card.Header>{props.author.name}</Card.Header>
      <Card.Body>
        <Card.Title> Biography</Card.Title>
        <Card.Text>{props.author.biography.substring(0, 120)} ....</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default AuthorInfoCard;
