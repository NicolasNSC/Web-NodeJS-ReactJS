import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const Header: React.FC = () => {
  return (
    <Navbar bg="navbar navbar-dark border-bottom d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-dark">
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/alunos">Alunos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
