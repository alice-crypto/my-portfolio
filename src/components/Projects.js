import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Card } from 'react-bootstrap';
import bckImage from './bck.jpeg';
import bckImage2 from './bck2.jpeg';
import bckImage1 from './bck1.jpeg';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

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
      <Row className="justify-content-center">
        <Col md={4} className="mb-4">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 0.1 }}
          >
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={bckImage} style={{ objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title className="text-center">Projet 1</Card.Title>
                <Card.Text className="text-muted">
                  Description du projet 1.
                </Card.Text>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>

        <Col md={4} className="mb-4">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 0.3 }}
          >
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={bckImage1} style={{ objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title className="text-center">Projet 2</Card.Title>
                <Card.Text className="text-muted">
                  Description du projet 2.
                </Card.Text>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>

        <Col md={4} className="mb-4">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={bckImage2} style={{ objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title className="text-center">Projet 3</Card.Title>
                <Card.Text className="text-muted">
                  Description du projet 3.
                </Card.Text>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
