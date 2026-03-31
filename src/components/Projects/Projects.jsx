import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with real-time inventory and payment gateway integration.",
    longDescription: "This comprehensive e-commerce solution provides users with a seamless shopping experience. It features real-time inventory tracking, secure Stripe payment integration, and an intuitive admin dashboard for managing products and orders.",
    tags: ["React", "Node.js", "MongoDB"],
    image: "https://picsum.photos/seed/proj1/800/600",
    gallery: [
      "https://picsum.photos/seed/proj1/800/600",
      "https://picsum.photos/seed/proj1a/800/600",
      "https://picsum.photos/seed/proj1b/800/600",
      "https://picsum.photos/seed/proj1c/800/600"
    ],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "AI Chat App",
    description: "Real-time AI conversational interface utilizing OpenAI models.",
    longDescription: "An advanced chat application that leverages OpenAI's GPT models to provide intelligent, contextual responses. Built with WebSockets for true real-time communication and features conversation history saving.",
    tags: ["Python", "OpenAI API", "WebSockets"],
    image: "https://picsum.photos/seed/proj2/800/600",
    gallery: [
      "https://picsum.photos/seed/proj2/800/600",
      "https://picsum.photos/seed/proj2a/800/600",
      "https://picsum.photos/seed/proj2b/800/600",
      "https://picsum.photos/seed/proj2c/800/600"
    ],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "Portfolio Generator",
    description: "Dynamic portfolio generator for creative professionals and developers.",
    longDescription: "A Vite-powered tool that allows users to quickly generate stunning portfolios based on JSON configuration files. Features multiple themes and Framer Motion animations out of the box.",
    tags: ["React", "Vite", "CSS"],
    image: "https://picsum.photos/seed/proj3/800/600",
    gallery: [
      "https://picsum.photos/seed/proj3/800/600",
      "https://picsum.photos/seed/proj3a/800/600",
      "https://picsum.photos/seed/proj3b/800/600",
      "https://picsum.photos/seed/proj3c/800/600"
    ],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 4,
    title: "Task Manager Pro",
    description: "Collaborative task management tool with drag-and-drop boards.",
    longDescription: "A Kanban-style project management application designed for agile teams. Users can create boards, drag and drop tasks, assign team members, and track progress using integrated Firebase real-time updates.",
    tags: ["Vue.js", "Firebase", "Tailwind"],
    image: "https://picsum.photos/seed/proj4/800/600",
    gallery: [
      "https://picsum.photos/seed/proj4/800/600",
      "https://picsum.photos/seed/proj4a/800/600",
      "https://picsum.photos/seed/proj4b/800/600",
      "https://picsum.photos/seed/proj4c/800/600"
    ],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 5,
    title: "Weather Dashboard",
    description: "Hyper-local weather visualization with interactive maps.",
    longDescription: "A beautiful weather dashboard that aggregates data from multiple REST APIs to provide accurate, hyper-local forecasts. Includes interactive radar maps and historical temperature charts.",
    tags: ["React", "REST API", "Chart.js"],
    image: "https://picsum.photos/seed/proj5/800/600",
    gallery: [
      "https://picsum.photos/seed/proj5/800/600",
      "https://picsum.photos/seed/proj5a/800/600",
      "https://picsum.photos/seed/proj5b/800/600",
      "https://picsum.photos/seed/proj5c/800/600"
    ],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 6,
    title: "Blog CMS",
    description: "Headless content management system optimized for SEO and speed.",
    longDescription: "A custom headless CMS built for speed and SEO. Features MDX support, scheduled publishing, and a custom PostgreSQL backend to handle high traffic read operations efficiently.",
    tags: ["Next.js", "PostgreSQL", "Prisma"],
    image: "https://picsum.photos/seed/proj6/800/600",
    gallery: [
      "https://picsum.photos/seed/proj6/800/600",
      "https://picsum.photos/seed/proj6a/800/600",
      "https://picsum.photos/seed/proj6b/800/600",
      "https://picsum.photos/seed/proj6c/800/600"
    ],
    demoUrl: "#",
    githubUrl: "#"
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  React.useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedProject]);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="section-header">
          <motion.h2 
            className="section-title projects-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            My Work
            <span className="title-bg">PROJECTS</span>
          </motion.h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={(p) => setSelectedProject(p)} 
            />
          ))}
        </div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

export default Projects;
