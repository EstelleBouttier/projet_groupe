import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";
import logo from "../images/homePage/logo.png";



function NavBar() {
  return (
    <Navbar expand="lg" className="navbar-color">
      <Container fluid>
        <Navbar.Brand>
          <img
            src={logo}
            width="30"
            height="30"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle className="navbar-toggler-color" aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 navbar-height"
            navbarScroll
          >
            <Nav.Link href="#action1">Accueil</Nav.Link>
            <Nav.Link href="#action2">A propos</Nav.Link>
            <Nav.Link href="#action3">Cours</Nav.Link>
            <Nav.Link href="#action4">Tarifs</Nav.Link>
            <Nav.Link href="#action5">Témoignages</Nav.Link>
            <Nav.Link href="#action6">Contact</Nav.Link>
            <Nav.Link href="#action7">Réserver un cours</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;