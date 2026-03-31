import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const experiences = [
  {
    id: 1,
    company: "Tech Company XYZ",
    role: "Full Stack Developer",
    duration: "Jan 2023 – Present",
    achievements: [
      "Built scalable RESTful APIs serving 10k+ daily users",
      "Improved frontend performance by 40% using React and Vite",
      "Led and mentored a team of 3 junior developers"
    ]
  },
  {
    id: 2,
    company: "Startup ABC",
    role: "Frontend Developer",
    duration: "Jun 2022 – Dec 2022",
    achievements: [
      "Redesigned the core UI/UX resulting in 25% higher engagement",
      "Integrated Stripe payment gateway securely",
      "Reduced initial load time by 60% with lazy loading"
    ]
  },
  {
    id: 3,
    company: "Freelance",
    role: "Web Developer",
    duration: "2021 – 2022",
    achievements: [
      "Delivered 10+ custom client websites and platforms",
      "Built a bespoke CMS using Node.js and MongoDB",
      "Implemented responsive e-commerce solutions"
    ]
  }
];

const ExperienceCard = ({ exp, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`timeline-item ${isEven ? 'left' : 'right'}`}>
      <motion.div 
        className="timeline-content hover-target"
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="timeline-date">{exp.duration}</div>
        <h3 className="timeline-role">{exp.role}</h3>
        <h4 className="timeline-company">{exp.company}</h4>
        <ul className="timeline-achievements">
          {exp.achievements.map((ach, i) => (
            <li key={i}>{ach}</li>
          ))}
        </ul>
      </motion.div>
      <div className="timeline-node"></div>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <div className="section-header text-center">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Experience
          </motion.h2>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.id} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
