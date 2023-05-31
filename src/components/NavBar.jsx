import React, { useState } from 'react';
import { Navbar, Button, Offcanvas, Nav } from 'react-bootstrap';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
import imglog from '../img/01_logo.png';

const NavbarComponent = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleToggleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  const handleMenuClick = () => {
    setShowOffcanvas(false);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" className="custom-navbar">
        <Navbar.Brand as={Link} to="/inicio" className="logo">
          <img src={imglog} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="offcanvas-navbar"
          className="order-md-2"
          onClick={handleToggleOffcanvas}
        />
        <Navbar.Collapse id="offcanvas-navbar" className="justify-content-end">
          <Button variant="outline-light" className="menu-button" onClick={handleToggleOffcanvas}>
            Menú
          </Button>
        </Navbar.Collapse>
      </Navbar>
      <Offcanvas show={showOffcanvas} onHide={() => setShowOffcanvas(false)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menú</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/inicio" onClick={handleMenuClick}>
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="info" onClick={handleMenuClick}>
              Acerca de
            </Nav.Link>
            <Nav.Link as={Link} to="servicios" onClick={handleMenuClick}>
              Servicios
            </Nav.Link>
            <Nav.Link as={Link} to="contacto" onClick={handleMenuClick}>
              Contacto
            </Nav.Link>
            <Button variant="outline-primary" size="sm" className="mt-5" href="/">
              Salir
            </Button>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NavbarComponent;
