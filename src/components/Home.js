import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import './Home.css';

const Home = () => {
  const canvasRef = useRef(null);
  const [shapes, setShapes] = useState([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      console.error('Le canevas est null');
      return;
    }
    
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('Impossible d\'obtenir le contexte du canevas');
      return;
    }

    const width = canvas.width;
    const height = canvas.height;
    const fontSize = height / 6;
    //  Initialiser les formes avec des positions et vitesses aléatoires
    const initializeShapes = () => {
      const shapesArray = [];
      for (let i = 0; i < 100; i++) {
        shapesArray.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 30,
          dx: (Math.random() - 0.5) * 2, // Vitesse horizontale
          dy: (Math.random() - 0.5) * 2, // Vitesse verticale
          type: Math.floor(Math.random() * 3) // Type de forme
        });
      }
      setShapes(shapesArray);
    };

    initializeShapes();

    const drawShapes = () => {
      ctx.clearRect(0, 0, width, height);

      shapes.forEach(shape => {
        ctx.beginPath();
        const color = `rgba(111, 78, 56, 0.6)`; // Couleur café

        ctx.fillStyle = color;

        switch (shape.type) {
          case 0: // Cercle
            ctx.arc(shape.x, shape.y, shape.size, 0, Math.PI * 2, false);
            break;
          case 1: // Carré
            ctx.rect(shape.x, shape.y, shape.size, shape.size);
            break;
          case 2: // Triangle
            ctx.moveTo(shape.x, shape.y);
            ctx.lineTo(shape.x + shape.size, shape.y);
            ctx.lineTo(shape.x + shape.size / 2, shape.y - shape.size);
            ctx.closePath();
            break;
          default:
            break;
        }

        ctx.fill();

        // Mettre à jour la position de la forme
        shape.x += shape.dx;
        shape.y += shape.dy;

        // Rebondir les formes lorsqu'elles atteignent les bords
        if (shape.x < 0 || shape.x > width) shape.dx *= -1;
        if (shape.y < 0 || shape.y > height) shape.dy *= -1;
      });

      setShapes([...shapes]); // Mettre à jour l'état des formes
    };

    const drawTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      const timeString = `${hours}:${minutes}:${seconds}`;

      ctx.font = '2000% Digital7';
      ctx.fillStyle = 'white';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'top';
      ctx.fillText(timeString, 10, 10); // Dessine l'heure au centre du canevas
    };

    const draw = () => {
      drawShapes();
      drawTime();
      requestAnimationFrame(draw);
    };

    draw(); // Appeler la fonction une fois au chargement // Mettre à jour les formes et l'heure toutes les secondes

    return () => {
      setShapes([]); // Nettoyer les formes lorsque le composant est démonté
    };
  }, []);

  return (
    <div className="home-container text-center">
      <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} style={{ position: 'absolute', top: 0, left: 0 }}></canvas>
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
