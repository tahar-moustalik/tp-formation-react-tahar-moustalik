import React from "react";
import { Card, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";

const BookInfoCard = (props) => {
  return (
    <Card
      bg="dark"
      key={props.key}
      text="light"
      style={{ width: "100%", height: 400 }}
      className="mb-2"
    >
      <Card.Header>{props.book.title}</Card.Header>
      <Card.Body>
        <Card.Text> {props.book.summary.substring(0, 80)}...</Card.Text>
        <Card.Text>{props.book.language}</Card.Text>
        <Card.Text>{props.book.publicationDate}</Card.Text>
        <Card.Footer>
          <Button
            variant="success"
            onClick={() => props.history.push("/edit/book/" + props.book.id)}
          >
            Voir
          </Button>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default withRouter(BookInfoCard);
