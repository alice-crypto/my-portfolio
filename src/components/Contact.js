import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './Contact.css'; // fichier CSS pour les animations

function Contact() {
  return (
    <Container className="contact-container">
      <Row className="justify-content-md-center">
        <Col md={8}>
          <h1 className="text-center contact-header">Contactez-Nous</h1>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Nom</Form.Label>
              <Form.Control type="text" placeholder="Entrez votre nom" className="input-field" />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Entrez votre email" className="input-field" />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Votre message" className="input-field" />
            </Form.Group>

            <Button variant="primary" type="submit" className="submit-button">
              Envoyer
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
