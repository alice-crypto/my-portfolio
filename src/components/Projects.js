import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Projects = () => {
  return (
    <Container>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="my-5 text-center"
      >
        Mes Projets
      </motion.h2>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
            <Card.Body>
              <Card.Title>Projet 1</Card.Title>
              <Card.Text>
                Description du projet 1.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* Ajouter plus de projets ici */}
      </Row>
    </Container>
  );
};

export default Projects;
