import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

const InformationSection = () => {
  return (
    <div className="information-section" style={{ padding: '40px', backgroundColor: '#ffffff', textAlign: 'center' }}>
      <Container>
        <Row>
          <Col>
            <Card className="info-card" style={{ marginBottom: '20px' }}>
              <Card.Body>
                <Card.Title>Dirección</Card.Title>
                <Card.Text>123 Calle Principal, Ciudad, País</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="info-card" style={{ marginBottom: '20px' }}>
              <Card.Body>
                <Card.Title>Contacto</Card.Title>
                <Card.Text>Correo electrónico: info@example.com</Card.Text>
                <Card.Text>Teléfono: 123-456-7890</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="info-card" style={{ marginBottom: '20px' }}>
              <Card.Body>
                <Card.Title>Horario de atención</Card.Title>
                <Card.Text>Lunes a Viernes: 9:00 AM - 6:00 PM</Card.Text>
                <Card.Text>Sábado: 10:00 AM - 2:00 PM</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="info-card" style={{ marginBottom: '20px' }}>
              <Card.Body>
                <Card.Title>Servicios</Card.Title>
                <Card.Text>
                  Ofrecemos una amplia gama de servicios de alta calidad para satisfacer las necesidades de nuestros clientes. Nuestros servicios incluyen desarrollo web, diseño gráfico, marketing digital y consultoría tecnológica.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="info-card" style={{ marginBottom: '20px' }}>
              <Card.Body>
                <Card.Title>Equipo</Card.Title>
                <Card.Text>
                  Contamos con un equipo altamente capacitado y apasionado que se esfuerza por brindar soluciones innovadoras a nuestros clientes. Nuestros expertos en desarrollo, diseño y marketing trabajan en conjunto para lograr los mejores resultados.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="info-card" style={{ marginBottom: '20px' }}>
              <Card.Body>
                <Card.Title>Clientes</Card.Title>
                <Card.Text>
                  Tenemos el privilegio de trabajar con una amplia variedad de clientes, desde pequeñas empresas hasta grandes corporaciones. Nos enorgullece ayudar a nuestros clientes a alcanzar sus objetivos y brindarles un servicio excepcional.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="info-card" style={{ marginBottom: '20px' }}>
              <Card.Body>
                <Card.Title>Preguntas frecuentes</Card.Title>
                <Card.Text>
                  Aquí respondemos algunas de las preguntas más frecuentes que recibimos de nuestros clientes. Si tienes alguna otra pregunta, no dudes en contactarnos y estaremos encantados de ayudarte.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="info-card" style={{ marginBottom: '20px' }}>
              <Card.Body>
                <Card.Title>Testimonios</Card.Title>
                <Card.Text>
                  Nuestros clientes satisfechos comparten sus experiencias y testimonios sobre nuestro trabajo y los resultados que hemos logrado juntos. Estamos agradecidos por sus comentarios y nos inspiran a seguir brindando un servicio excepcional.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="info-card" style={{ marginBottom: '20px' }}>
              <Card.Body>
                <Card.Title>Redes sociales</Card.Title>
                <Card.Text>
                  Síguenos en nuestras redes sociales para estar al tanto de las últimas noticias, actualizaciones y promociones. También compartimos consejos y contenido relevante relacionado con nuestros servicios.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InformationSection;
