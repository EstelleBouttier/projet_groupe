import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../images/homePage/logo.png";

function NavBar() {
  return (
    <Navbar expand="lg" className="navbar-color" fixed="top" >
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="30"
            height="30"
            alt="Logo du site qui permet de retourner à l'accueil"
          />
        </Navbar.Brand>
        <Navbar.Toggle className="navbar-toggler-color" aria-controls="navbarScroll" aria-label="Ouvre le menu de navigation" />
        <Navbar.Collapse id="navbarScroll" role="navigation">
          <Nav className="me-auto">
            <Nav.Link href="/">Accueil</Nav.Link>
            <Nav.Link href="#about">A propos</Nav.Link>
            <Nav.Link href="#courses">Cours</Nav.Link>
            <Nav.Link href="#pricing">Tarifs</Nav.Link>
            <Nav.Link href="#testimony">Témoignages</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link onClick={() => {
              window.open(`${window.location.origin}/subscription`, '_blank')
            }
            }>Réserver un cours</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;