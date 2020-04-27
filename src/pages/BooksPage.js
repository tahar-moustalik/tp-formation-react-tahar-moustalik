import React, { useState, useRef, useCallback } from "react";
import BookSearchForm from "../components/BookSearchForm";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { BookCardList } from "../components";

import useBookSearch from "../useBookSearch";
const BooksPage = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const { loading, books, hasMore } = useBookSearch(searchValue, pageNumber);

  const observer = useRef();
  const lastBookElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );
  const handleSearchTitle = (searchValue) => {
    setSearchValue(searchValue);
    setPageNumber(1);
  };
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col>
            <BookSearchForm onSearch={handleSearchTitle} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              variant="dark"
              size="lg"
              onClick={() => props.history.push("/add/book")}
            >
              New
            </Button>
          </Col>
        </Row>
        <BookCardList
          books={books}
          loading={loading}
          reference={lastBookElementRef}
        />
      </Container>
      {loading && (
        <div className="d-flex justify-content-md-center align-items-center ">
          <Spinner animation="border" variant="danger" size="128" />
        </div>
      )}
    </>
  );
};

export default BooksPage;
