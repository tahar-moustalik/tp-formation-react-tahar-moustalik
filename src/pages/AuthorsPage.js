import React, { useState, useEffect } from "react";
import { Row, Col, Spinner, Container } from "react-bootstrap";
import { fetchAllAuthors } from "../api";
import AuthorInfoCard from "../components/AuthorInfoCard";

export default function AuthorsPage() {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllAuthors().then((res) => {
      console.log(res[0]);
      setAuthors(res);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-md-center align-items-center vh-100">
          <Spinner animation="grow" variant="danger" size="lg" />
        </div>
      ) : (
        <Container>
          <Row className="show-grid mt-5">
            {authors.map((author, index) => (
              <Col sm={6} md={4} lg={3} key={index}>
                <AuthorInfoCard key={index} author={author} />
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </>
  );
}
