import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" mb="5">
      <Navbar.Brand href="#home">Books</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Books</Nav.Link>
        <Nav.Link href="/authors">Authors</Nav.Link>
        <Nav.Link href="#pricing">About</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
