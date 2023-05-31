import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ContactSection = () => {
  return (
    <div className="contact-section" style={{ padding: '50px', backgroundColor: '#ffffff', textAlign: 'center', marginTop: '100px' }}>
      <Container>
        <h2 className="section-title" style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px' }}>Contáctanos</h2>
        <p className="section-description" style={{ fontSize: '16px', marginBottom: '40px' }}>Estamos encantados de responder tus preguntas.</p>
        <Form>
          <Form.Group controlId="formName" style={{ marginBottom: '20px' }}>
            <Form.Label style={{ fontWeight: 'bold' }}>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Ingrese su nombre" style={{ borderRadius: '8px' }} />
          </Form.Group>
          <Form.Group controlId="formEmail" style={{ marginBottom: '20px' }}>
            <Form.Label style={{ fontWeight: 'bold' }}>Correo electrónico</Form.Label>
            <Form.Control type="email" placeholder="Ingrese su correo electrónico" style={{ borderRadius: '8px' }} />
          </Form.Group>
          <Form.Group controlId="formMessage" style={{ marginBottom: '20px' }}>
            <Form.Label style={{ fontWeight: 'bold' }}>Mensaje</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Ingrese su mensaje" style={{ borderRadius: '8px', resize: 'vertical' }} />
          </Form.Group>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant="primary" type="submit" style={{ backgroundColor: '#007bff', border: 'none', borderRadius: '8px', padding: '12px 24px', fontSize: '16px', color: '#fff', cursor: 'pointer' }} as={Link} to="/inicio">
              Enviar
            </Button>
          </div>
         
        </Form>
      </Container>
    </div>
  );
};

export default ContactSection;
