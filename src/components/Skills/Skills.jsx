import React from 'react';
import { TechStackCard } from '../ui/tech-stack';
import './Skills.css';

const marqueeItemsRow1 = [
  "C/C++", "Python", "Java", "JavaScript", "PHP", "SQL", "Dart", "React", "Node.js", "Flutter", "Flask", "Bootstrap"
];

const marqueeItemsRow2 = [
  "Git", "Linux", "MySQL", "RESTful APIs", "Google Cloud Platform", "Android Studio", "VS Code", "Arduino", "Data Structures & Algorithms", "OOP", "System Architecture", "Cloud Computing"
];

const techStack = [
  { name: 'C/C++', url: 'https://isocpp.org/', color: '#00599C' },
  { name: 'Python', url: 'https://www.python.org/', color: '#3776AB' },
  { name: 'Java', url: 'https://www.java.com/', color: '#EA2D2E' },
  { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', color: '#F7DF1E' },
  { name: 'PHP', url: 'https://www.php.net/', color: '#777BB4' },
  { name: 'SQL', url: 'https://www.mysql.com/', color: '#4479A1' },
  { name: 'Dart', url: 'https://dart.dev/', color: '#0175C2' },
  { name: 'React', url: 'https://react.dev/', color: '#61DAFB' },
  { name: 'Node.js', url: 'https://nodejs.org/en', color: '#68A063' },
  { name: 'Flutter', url: 'https://flutter.dev/', color: '#02569B' },
  { name: 'Flask', url: 'https://flask.palletsprojects.com/', color: '#FFFFFF' },
  { name: 'Bootstrap', url: 'https://getbootstrap.com/', color: '#7952B3' },
  { name: 'Git', url: 'https://git-scm.com/', color: '#F05032' },
  { name: 'Linux', url: 'https://www.kernel.org/', color: '#FCC624' },
  { name: 'MySQL', url: 'https://www.mysql.com/', color: '#4479A1' },
  { name: 'RESTful APIs', url: 'https://restfulapi.net/', color: '#10B981' },
  { name: 'Google Cloud Platform', url: 'https://cloud.google.com/', color: '#4285F4' },
  { name: 'Android Studio', url: 'https://developer.android.com/studio', color: '#3DDC84' },
  { name: 'VS Code', url: 'https://code.visualstudio.com/', color: '#007ACC' },
  { name: 'Arduino', url: 'https://www.arduino.cc/', color: '#00979D' },
  { name: 'Data Structures & Algorithms', url: 'https://en.wikipedia.org/wiki/Data_structure', color: '#EF4444' },
  { name: 'Object-Oriented Programming', url: 'https://en.wikipedia.org/wiki/Object-oriented_programming', color: '#A855F7' },
  { name: 'Database Design', url: 'https://en.wikipedia.org/wiki/Database_design', color: '#0EA5E9' },
  { name: 'Operating Systems', url: 'https://en.wikipedia.org/wiki/Operating_system', color: '#EAB308' },
  { name: 'Computer Networks', url: 'https://en.wikipedia.org/wiki/Computer_network', color: '#22C55E' },
  { name: 'System Architecture', url: 'https://en.wikipedia.org/wiki/Systems_architecture', color: '#FB7185' },
  { name: 'Full-Stack Development', url: 'https://en.wikipedia.org/wiki/Web_development', color: '#14B8A6' },
  { name: 'Cloud Computing', url: 'https://en.wikipedia.org/wiki/Cloud_computing', color: '#60A5FA' },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <h2 className="section-title">Tech Stack</h2>
      </div>

      <div className="marquee-container">
        <div className="marquee-row right-to-left">
          <div className="marquee-content">
            {[...marqueeItemsRow1, ...marqueeItemsRow1, ...marqueeItemsRow1].map((item, idx) => (
              <span key={idx} className="marquee-item hover-target">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="marquee-row left-to-right">
          <div className="marquee-content">
            {[...marqueeItemsRow2, ...marqueeItemsRow2, ...marqueeItemsRow2].map((item, idx) => (
              <span key={idx} className="marquee-item hover-target">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="skills-container">
        <div className="skills-tech-card-wrap">
          <TechStackCard techStack={techStack} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
