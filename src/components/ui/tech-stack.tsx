'use client';

import React, { useState } from 'react';
import { FileCode2 } from 'lucide-react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import './tech-stack.css';

interface Tech {
  name: string;
  url: string;
  color: string;
}

interface TechStackCardProps {
  techStack: Tech[];
}

export const TechStackCard: React.FC<TechStackCardProps> = ({ techStack }) => {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const lightSize = 110;

  const lightX = useTransform(x, (value) => value - lightSize / 2);
  const lightY = useTransform(y, (value) => value - lightSize / 2);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  };

  return (
    <div className="techstack-shell">
      <div
        className={`techstack-card ${isHovered ? 'is-hovered' : ''}`}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src="https://images.unsplash.com/photo-1695883701435-7bd88f796e05?w=1200&auto=format&fit=crop&q=80"
          alt="Tech stack glow background"
          className="techstack-bg"
        />

        <div className="techstack-overlay" />

        <motion.div
          className="techstack-light"
          animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.65 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          style={{
            width: lightSize,
            height: lightSize,
            x: lightX,
            y: lightY,
          }}
        />

        <div className="techstack-content">
          <div className="techstack-header">
            <div className="techstack-title-wrap">
              <FileCode2 size={20} />
              <p className="techstack-title">Tech Stack</p>
            </div>
            <span className="techstack-subtitle">Interactive UI</span>
          </div>

          <div className="techstack-tags">
            {techStack.map((tech, index) => (
              <a key={index} target="_blank" rel="noopener noreferrer" href={tech.url} className="techstack-link">
                <span className="techstack-tag">
                  <span className="techstack-dot" style={{ backgroundColor: tech.color }} />
                  {tech.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
