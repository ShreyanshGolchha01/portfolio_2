import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './LoadingScreen.css';

const languages = [
  "Hello", "Hola", "Bonjour", "Ciao", "Namaste", "Konnichiwa", 
  "Merhaba", "Salut", "Olá", "你好", "안녕하세요", "مرحبا", "Привет", "שלום"
];

const LoadingScreen = ({ onComplete }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setIndex((prev) => {
        if (prev < languages.length - 1) return prev + 1;
        
        clearInterval(wordInterval);
        // Add a short delay over the very last word before completion
        setTimeout(() => onComplete(), 600);
        return prev;
      });
    }, 250); 

    return () => clearInterval(wordInterval);
  }, [onComplete]);

  return (
    <motion.div 
      className="loading-screen"
      initial={{ y: 0 }}
      exit={{ y: '-100vh', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
    >
      <div className="words-container">
        <AnimatePresence mode="wait">
          <motion.h1
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.05 }}
            className="greeting-word"
          >
            {languages[index]}
          </motion.h1>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
