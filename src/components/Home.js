import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="home-container text-center">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="display-4"
      >
        Bienvenue dans mon Portfolio
      </motion.h1>
      <motion.p
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 50 }}
        className="lead"
      >
        Explorez mes projets et découvrez mes compétences.
      </motion.p>
    </div>
  );
};

export default Home;
