import React from 'react';
import './resultsComponent.css';

const ResultsComponent = () => {
  const academicResults = [
    {
      semester: "Second Year, Second Semester",
      courses: [
        { name: "Data Structures", grade: "A", score: "85%" },
        { name: "Web Development", grade: "A-", score: "82%" },
        { name: "Database Systems", grade: "B+", score: "78%" },
        { name: "Computer Networks", grade: "B", score: "75%" }
      ]
    },
    {
      semester: "Second Year, First Semester",
      courses: [
        { name: "Object-Oriented Programming", grade: "A", score: "88%" },
        { name: "Discrete Mathematics", grade: "B+", score: "80%" },
        { name: "Operating Systems", grade: "B", score: "76%" }
      ]
    }
  ];

  const projects = [
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website built with React and modern CSS",
      technologies: ["React", "CSS3", "JavaScript", "React Router"],
      link: "https://github.com/yourusername/portfolio"
    },
    {
      title: "Swimming Tips App",
      description: "Interactive platform for swimming tutorials and tips",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      link: "https://github.com/yourusername/swimming-app"
    },
    {
      title: "Student Management System",
      description: "Web-based system for managing student records and grades",
      technologies: ["React", "Python", "Django", "PostgreSQL"],
      link: "https://github.com/yourusername/student-management"
    }
  ];

  return (
    <div className="results-container">
      <section className="academic-results">
        <h2>Academic Performance</h2>
        {academicResults.map((semester, index) => (
          <div key={index} className="semester-results">
            <h3>{semester.semester}</h3>
            <div className="results-grid">
              {semester.courses.map((course, courseIndex) => (
                <div key={courseIndex} className="course-card">
                  <h4>{course.name}</h4>
                  <div className="grade-info">
                    <span className={`grade ${course.grade.toLowerCase()}`}>
                      {course.grade}
                    </span>
                    <span className="score">{course.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="projects-section">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ResultsComponent; 