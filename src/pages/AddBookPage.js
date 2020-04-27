import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { fetchAllAuthors, saveBook } from "../api";

/*
    "@context": "string",
      "@id": "string",
      "@type": "string",
      "id": 0,
      "isbn": "string",
      "summary": "string",
      "title": "string",
      "publisher": "string",
      "publicationDate": "2020-04-22T16:25:19.893Z",
      "numberOfPages": 0,
      "language": "string",
      "author": "string"
*/

const bookModel = {
  isbn: "ii",
  summary: "sum",
  title: "title",
  publisher: "pub",
  publicationDate: null,
  numberOfPages: null,
  language: "english",
  author: "",
};

const AddBookPage = () => {
  const [book, setBook] = useState(bookModel);
  const [authors, setAuthors] = useState([]);

  const handleChange = (e) => {
    console.log(e.target.value);
    if (e.target.name === "numberOfPages") {
      console.log("entered", e.target.value);
      e.target.value = parseInt(e.target.value);
    }
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    fetchAllAuthors().then((res) => {
      console.log(res);
      setAuthors(res);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    saveBook(book);
  };

  return (
    <Container>
      <Row>
        <Col>
          <Card
            bg="dark"
            text="light"
            style={{ width: "100%" }}
            className="mb-2 mt-5"
          >
            <Card.Header>Add Book</Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="isbn">
                  <Form.Label>ISBN</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter ISBN"
                    name="isbn"
                    value={book.isbn}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="title">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Title"
                    name="title"
                    value={book.title}
                    required
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="summary">
                  <Form.Label>Summary</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Enter Summary"
                    name="summary"
                    required
                    value={book.summary}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group controlId="publicationDate">
                  <Form.Label>Publication Date</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="Enter Publication Date"
                    name="publicationDate"
                    required
                    value={book.publicationDate}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="numOfPages">
                  <Form.Label>Number of Pages</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter Number of Pages"
                    name="numberOfPages"
                    value={book.numberOfPages}
                    required
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="language">
                  <Form.Label>Language</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Language"
                    name="language"
                    required
                    value={book.language}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="authors">
                  <Form.Label>Authors</Form.Label>
                  <Form.Control
                    as="select"
                    name="author"
                    value={book.author}
                    required
                    onChange={handleChange}
                  >
                    {authors.map((author) => {
                      return (
                        <option
                          value={`/api/authors/${author.id}`}
                          key={author.id}
                        >
                          {author.name}
                        </option>
                      );
                    })}
                  </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AddBookPage;
