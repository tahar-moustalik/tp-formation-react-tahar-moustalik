import React, { useState, useEffect } from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import { fetchAllBooks } from "../api";
import BookInfoCard from "./BookInfoCard";

const BookCardList = ({ loading, books, reference }) => {
  return (
    <Row className="show-grid mt-5">
      {books.map((book, index) => {
        if (books.length === index + 1) {
          return (
            <Col sm={6} md={4} lg={3} key={index} ref={reference}>
              <BookInfoCard key={index} book={book} />
            </Col>
          );
        } else {
          return (
            <Col sm={6} md={4} lg={3} key={index}>
              <BookInfoCard key={index} book={book} />
            </Col>
          );
        }
      })}
    </Row>
  );
};

export default BookCardList;
