import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const Header: React.FC = () => {
  return (
    <Navbar bg="secondary" expand="lg">
      <Container>
        <Navbar.Brand href="/home">Lista de Alunos</Navbar.Brand>
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
