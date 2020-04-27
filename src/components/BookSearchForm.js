import React, { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const BookSearchForm = ({ onSearch }) => {
  const [searchTitleValue, setSearchTitleValue] = useState("");

  const handleSearchTitleChange = (event) => {
    setSearchTitleValue(event.target.value);
  };
  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Book title"
        aria-label="Book title"
        aria-describedby="basic-addon2"
        value={searchTitleValue}
        onChange={handleSearchTitleChange}
      />
      <InputGroup.Append>
        <Button onClick={() => onSearch(searchTitleValue)} variant="dark">
          Search
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
};

export default BookSearchForm;
