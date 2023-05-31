import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import img1 from '../img/111.jpg';

const ServiceSection = () => {
  const services = [
    {
      title: 'Diseño web',
      description: 'Creamos sitios web modernos y atractivos que se adaptan a tus necesidades.',
      icon: 'web-design.svg',
    },
    {
      title: 'Marketing digital',
      description: 'Impulsamos tu presencia en línea mediante estrategias de marketing efectivas.',
      icon: 'digital-marketing.svg',
    },
    {
      title: 'Desarrollo de aplicaciones móviles',
      description: 'Creamos aplicaciones móviles nativas y multiplataforma para iOS y Android.',
      icon: 'mobile-app-development.svg',
    },
    {
      title: 'Consultoría tecnológica',
      description: 'Brindamos asesoramiento experto para optimizar tus procesos y tecnologías.',
      icon: 'technology-consulting.svg',
    },
  ];

  return (
    <div className="service-section" style={{ textAlign: 'center', padding: '40px' }}>
      <Container>
        <Row>
          {services.map((service, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src={img1} />
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ServiceSection;
