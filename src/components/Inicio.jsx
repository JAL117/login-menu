import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Carrusel from '../components/Carrusel';

const Testimonial = ({ text, author }) => {
  return (
    <Card>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>{text}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

const InicioSection = () => {
  return (
    <div className="inicio-section">
      <Container>
        <Row className="justify-content-center">
          <Col md={7}>
            <br/><br />
            <h2 className="title">Bienvenido a nuestro sitio web</h2>
            <p className="description">Descubre nuestros servicios y contáctanos para obtener más información.</p>
            <Button className="contact-button" as={Link} to="contacto">Contacto</Button>
          </Col>
        </Row>
        <Row className="justify-content-center mt-5">
          <Col md={8}>
            <Carrusel />
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={6}>
            <h3>Nuestros Servicios</h3>
            <ul>
              <li>Diseño web</li>
              <li>Marketing digital</li>
              <li>Desarrollo de aplicaciones móviles</li>
              <li>Consultoría tecnológica</li>
            </ul>
          </Col>
          <Col md={6}>
            <h3>Contáctanos</h3>
            <p>Puedes comunicarte con nosotros a través de los siguientes medios:</p>
            <ul>
              <li>Teléfono: 123-456-789</li>
              <li>Email: ejemplo@correo.com</li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={12}>
            <h3>Testimonios de Clientes</h3>
            <div className="testimonials">
              <Testimonial text="¡Increíble servicio! Los resultados que obtuvimos con su ayuda fueron sorprendentes. ¡Altamente recomendado!" author="Juan Pérez" />
              <Testimonial text="El equipo de esta empresa es excepcional. Siempre están dispuestos a escuchar y responder a nuestras necesidades. ¡Muy contentos con los resultados!" author="María Gómez" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InicioSection;
