import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { InteractiveRobotSpline } from '../ui/interactive-3d-robot';
import './About.css';

const stats = [
  { value: 3, label: "Years Experience", suffix: "+" },
  { value: 20, label: "Projects", suffix: "+" },
  { value: 10, label: "Happy Clients", suffix: "+" },
  { value: 5, label: "Technologies", suffix: "+" }
];

const AnimatedNumber = ({ end, duration = 2.5, inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let startTimestamp = null;
    let animationFrame;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(step);
      }
    };
    animationFrame = window.requestAnimationFrame(step);
    
    return () => {
      if(animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, [inView, end, duration]);

  return <span>{count}</span>;
};

const About = () => {
  const ROBOT_SCENE_URL = 'https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode';

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="about-section" ref={ref}>
      <div className="about-container">
        
        <div className="about-header">
          <motion.div 
            className="section-number"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 0.1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            02
          </motion.div>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            About Me
          </motion.h2>
        </div>

        <div className="about-content">
          <motion.div 
            className="about-text-container"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="about-text">
              I'm <span className="highlight">Shreyansh Golchha</span>, a passionate developer from <span className="highlight">New Delhi, India</span>. 
              I love crafting beautiful, high-performance web applications. When I'm not coding, I'm exploring new tech, playing games, or drinking chai ☕.
            </p>
            
            <div className="stats-grid">
              {stats.map((stat, idx) => (
                <div key={idx} className="stat-card hover-target">
                  <div className="stat-value">
                    <AnimatedNumber end={stat.value} inView={inView} />
                    <span className="stat-suffix">{stat.suffix}</span>
                  </div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="about-visual"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <InteractiveRobotSpline
              scene={ROBOT_SCENE_URL}
              className="about-robot-spline"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
