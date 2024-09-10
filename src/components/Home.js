import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import './Home.css';

const slides = [
  "Bienvenue dans mon Portfolio",
  "Explorez mes projets et découvrez mes compétences",
  "Contactez-moi pour en savoir plus",
];

const Home = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isInverted, setIsInverted] = useState(false);
  const [direction, setDirection] = useState(1); // 1 pour droite, -1 pour gauche

  // Fonction pour gérer le changement de slide et inverser les couleurs
  const handleNextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    setIsInverted((prev) => !prev); // Inverser l'état des couleurs à chaque slide
    setDirection(1); // Aller vers la droite
  };

  const handlePrevSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    setIsInverted((prev) => !prev); // Inverser l'état des couleurs à chaque slide
    setDirection(-1); // Aller vers la gauche
  };

  // Fonction pour générer les bandes horizontales avec la bande du milieu plus large
  const renderStripes = () => {
    const stripes = [];
    const colors = isInverted ? ['white', '#8B4513'] : ['#8B4513', 'white'];
  
    const stripeHeights = [15, 15, 40, 15, 15]; // La bande du milieu est plus large
  
    for (let i = 0; i < 5; i++) {
      const stripeStyle = {
        backgroundColor: i % 2 === 0 ? colors[0] : colors[1], // Alterner entre les couleurs
        height: `${stripeHeights[i]}%`,
        width: '100%',
      };
  
      // Ajouter des styles de texture uniquement pour les bandes marron
      if (colors[i % 2] === '#8B4513') {
        stripeStyle.backgroundImage = `
          linear-gradient(
            135deg, rgba(0, 0, 0, 0.3) 25%, transparent 25%, transparent 50%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.3) 75%, transparent 75%, transparent
          ),
          linear-gradient(
            -45deg, rgba(0, 0, 0, 0.3) 25%, transparent 25%, transparent 50%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.3) 75%, transparent 75%, transparent
          ),
          radial-gradient(circle, rgba(0, 0, 0, 0.05) 20%, rgba(0, 0, 0, 0.15) 50%, rgba(0, 0, 0, 0.3) 100%)
        `;
        stripeStyle.backgroundSize = '40px 40px, 40px 40px, 100px 100px';
        stripeStyle.backgroundPosition = '0 0, 20px 20px, 0 0';
        stripeStyle.boxShadow = 'inset 0 0 10px rgba(0, 0, 0, 0.5), inset 0 0 20px rgba(0, 0, 0, 0.3)';
      }
  
      stripes.push(
        <div
          key={i}
          className="stripe textured-brown"
          style={stripeStyle} // Appliquer le style à chaque bande
        />
      );
    }
    return stripes;
  };
  

  return (
    <div className="home-container">
      {/* Bandes horizontales avec animation de glissement */}
      <AnimatePresence>
        <motion.div
          key={isInverted} // Animation lors de l'inversion des couleurs
          initial={{ x: direction === 1 ? '100%' : '-100%' }} // Commence hors écran à droite ou à gauche
          animate={{ x: '0%' }} // Glisse vers le centre
          exit={{ x: direction === 1 ? '-100%' : '100%' }} // Sort de l'autre côté
          transition={{ duration: 1.5 }}
          className="stripes-container"
        >
          {renderStripes()}
        </motion.div>
      </AnimatePresence>

      {/* Texte du slide */}
      <motion.div
        className="text-container"
        key={slideIndex} // Animation lors du changement de texte
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 1.5 }}
        style={{
          position: 'absolute',
          top: '40%',
          left: '40%',
          transform: 'translate(-50%, -50%)',
          color: isInverted ? 'black' : 'white',
        }}
      >
        <h1 className="display-4">{slides[slideIndex]}</h1>
      </motion.div>

      {/* Boutons pour passer au prochain ou précédent slide */}
      <motion.button
        onClick={handlePrevSlide}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="prev-slide-button"
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '30%',
          padding: '10px 20px',
          fontSize: '18px',
          backgroundColor: isInverted ? 'black' : 'white',
          color: isInverted ? 'white' : 'black',
          border: '2px solid',
        }}
      >
        Diapositive précédente
      </motion.button>

      <motion.button
        onClick={handleNextSlide}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="next-slide-button"
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '30%',
          padding: '10px 20px',
          fontSize: '18px',
          backgroundColor: isInverted ? 'black' : 'white',
          color: isInverted ? 'white' : 'black',
          border: '2px solid',
        }}
      >
        Prochaine diapositive
      </motion.button>
    </div>
  );
};

export default Home;
