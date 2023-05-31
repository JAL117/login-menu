import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="text-light">
        <Container>
          <Row>
            <Col md={4} className="footer-section">
              <h5>Información de contacto</h5>
              <p>Correo electrónico: info@example.com</p>
              <p>Teléfono: 123-456-7890</p>
            </Col>
            <Col md={4} className="footer-section">
              <h5>Enlaces útiles</h5>
              <ul className="list-unstyled">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Acerca de nosotros</a></li>
                <li><a href="#">Servicios</a></li>
                <li><a href="#">Contacto</a></li>
              </ul>
            </Col>
            <Col md={4} className="footer-section">
              <h5>Redes sociales</h5>
              <ul className="list-unstyled">
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Instagram</a></li>
              </ul>
            </Col>
          </Row>
          <hr className="divider" />
          <Row>
            <Col className="text-center">
              <p>&copy; {new Date().getFullYear()} Nombre de tu empresa</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
