import React, { useState } from 'react';
import './generalComponents.css';

const GeneralComponents = () => {
  const [activeTab, setActiveTab] = useState('about');

  const skills = [
    { name: 'React.js', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Node.js', level: 75 },
    { name: 'Python', level: 80 },
    { name: 'SQL', level: 70 }
  ];

  const achievements = [
    {
      title: 'Academic Excellence',
      description: 'Dean\'s List - First Year',
      icon: '🎓'
    },
    {
      title: 'Swimming',
      description: 'University Swimming Team Member',
      icon: '🏊‍♂️'
    },
    {
      title: 'Technical Skills',
      description: 'React.js Certification',
      icon: '💻'
    }
  ];

  return (
    <div className="about-container">
      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'about' ? 'active' : ''}`}
          onClick={() => setActiveTab('about')}
        >
          About Me
        </button>
        <button 
          className={`tab ${activeTab === 'skills' ? 'active' : ''}`}
          onClick={() => setActiveTab('skills')}
        >
          Skills
        </button>
        <button 
          className={`tab ${activeTab === 'achievements' ? 'active' : ''}`}
          onClick={() => setActiveTab('achievements')}
        >
          Achievements
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'about' && (
          <div className="about-section">
            <h2>About Me</h2>
            <div className="about-content">
              <div className="about-text">
                <p>
                  I am a passionate and curious individual with a love for technology. 
                  I thrive on learning new things and collaborating with others to create 
                  impactful solutions. When I'm not coding, I enjoy swimming and 
                  interacting with friends.
                </p>
                <p>
                  As a Computer Science student at UCU, I'm constantly exploring new 
                  technologies and developing my skills. My goal is to become a 
                  full-stack developer who can create innovative solutions to real-world 
                  problems.
                </p>
              </div>
              <div className="education-info">
                <h3>Education</h3>
                <ul>
                  <li>Bachelors of Science in Computer Science</li>
                  <li>Second year 2nd semester</li>
                  <li>M23B23/018</li>
                  <li>B20715</li>
                </ul>
              </div>
              <div className="video-section">
                <h3>My Introduction Video</h3>
                <div className="video-container">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/kWGAqE_qt8I"
                    title="Introduction Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'skills' && (
          <div className="skills-section">
            <h2>My Skills</h2>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-card">
                  <div className="skill-header">
                    <h3>{skill.name}</h3>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'achievements' && (
          <div className="achievements-section">
            <h2>Achievements</h2>
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <div key={index} className="achievement-card">
                  <span className="achievement-icon">{achievement.icon}</span>
                  <h3>{achievement.title}</h3>
                  <p>{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GeneralComponents; 