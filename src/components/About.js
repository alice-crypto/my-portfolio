import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="about-container"
    >
      <h2 className="text-center my-5">À propos de moi</h2>
      <p className="lead text-center">
        Je suis un développeur passionné par la création d'expériences web innovantes.
      </p>
    </motion.div>
  );
};

export default About;
