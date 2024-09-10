import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Button } from 'react-bootstrap';
import profileImage from './bck3.jpeg'; // Assurez-vous que ce chemin est correct
import './About.css'; // fichier CSS pour les animations

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="about-container py-5"
      style={{marginTop:'12rem', }}
    >
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center mb-4">
            <motion.img
              src={profileImage}
              alt="Profil"
              className="img-fluid rounded-circle"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
              style={{ maxWidth: '250px' }}
            />
          </Col>
          <Col md={6}>
          <Container className='aboutt-container'>
            <motion.h2
              className="text-center mb-4"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{color:'white'}}
            >
              À propos de moi
            </motion.h2>
            <motion.p
              className="lead text-center"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              style={{color:'white'}}

            >
              Je suis un développeuse passionnée par la création d'expériences web innovantes. Avec une solide expérience en développement front-end et back-end, je m'efforce de construire des applications qui sont non seulement fonctionnelles mais aussi esthétiques. Mon objectif est de toujours apprendre et d'améliorer mes compétences tout en contribuant à des projets stimulants.
            </motion.p>
            <div className="text-center mt-4">
              <Button href="/cv" target="_blank" style={{backgroundColor: '#8B4513', border:'none'}}>
                Télécharger mon CV
              </Button>
            </div>
            </Container>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default About;
