//import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import "./App.css";
import agaba from "./assets/agaba.jpeg";
import ResultsComponent from "./app/resultsComponent.js";
import GeneralComponents from "./app/generalComponents.js";
import Login from "./components/Login";
import Navbar from './components/Navbar';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    const savedAuth = localStorage.getItem('isAuthenticated') === 'true';
    setDarkMode(savedDarkMode);
    setIsAuthenticated(savedAuth);
  }, []);

  const darkmodeFunc = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  // Initialize dark mode on mount
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    }
  }, [darkMode]);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  const PrivateRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  return (
    <Router>
      <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
        {isAuthenticated && (
          <Navbar 
            darkMode={darkMode} 
            toggleDarkMode={darkmodeFunc} 
            onLogout={handleLogout}
          />
        )}
        
        <Routes>
          <Route path="/login" element={
            !isAuthenticated ? (
              <Login onLogin={handleLogin} />
            ) : (
              <Navigate to="/" />
            )
          } />
          
          <Route path="/" element={
            <PrivateRoute>
              <div className="main-content">
                <header className="container hero-section">
                  <img src={agaba} alt="Itungo Agaba" className="profile-image" />
                  <h1>Itungo Agaba</h1>
                  <p className="subtitle">Computer Science Student | Developer | Swimmer</p>
                </header>

                <section className="container">
                  <h2>Welcome to My Portfolio</h2>
                  <div className="feature-grid">
                    <div className="feature-card">
                      <h3>🎓 Education</h3>
                      <p>Bachelors of Science in Computer Science</p>
                      <p>Second year 2nd semester</p>
                      <p>M23B23/018</p>
                      <p>B20715</p>
                    </div>
                    <div className="feature-card">
                      <h3>💻 Skills</h3>
                      <ul>
                        <li>Web Development</li>
                        <li>React.js</li>
                        <li>JavaScript</li>
                        <li>HTML/CSS</li>
                      </ul>
                    </div>
                    <div className="feature-card">
                      <h3>🏊‍♂️ Hobbies</h3>
                      <p>Swimming enthusiast</p>
                      <p>Technology lover</p>
                      <p>Problem solver</p>
                    </div>
                  </div>
                </section>

                <section className="container">
                  <h2>Latest Projects</h2>
                  <div className="project-grid">
                    <div className="project-card">
                      <h3>Portfolio Website</h3>
                      <p>A responsive portfolio built with React</p>
                      <div className="tech-stack">
                        <span>React</span>
                        <span>CSS3</span>
                        <span>JavaScript</span>
                      </div>
                    </div>
                    <div className="project-card">
                      <h3>Swimming Tips App</h3>
                      <p>Interactive swimming tutorial platform</p>
                      <div className="tech-stack">
                        <span>React</span>
                        <span>Node.js</span>
                        <span>MongoDB</span>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </PrivateRoute>
          } />
          
          <Route path="/about" element={
            <PrivateRoute>
              <div className="main-content">
                <GeneralComponents />
              </div>
            </PrivateRoute>
          } />
          
          <Route path="/results" element={
            <PrivateRoute>
              <div className="main-content">
                <ResultsComponent />
              </div>
            </PrivateRoute>
          } />
          
          <Route path="/contact" element={
            <PrivateRoute>
              <div className="main-content">
                <section className="container">
                  <h2>Contact Me</h2>
                  <div className="contact-container">
                    <div className="contact-info">
                      <h3>Get in Touch</h3>
                      <div className="contact-details">
                        <div className="contact-item">
                          <span className="icon">📧</span>
                          <a href="mailto:itungoagaba@gmail.com">itungoagaba@gmail.com</a>
                        </div>
                        <div className="contact-item">
                          <span className="icon">📞</span>
                          <a href="tel:+256-775-511-961">+256-775-511-961</a>
                        </div>
                        <div className="contact-item">
                          <span className="icon">📍</span>
                          <p>Kampala, Uganda</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="social-links">
                      <h3>Connect With Me</h3>
                      <div className="social-grid">
                        <a href="https://x.com/AgabaMugisha1" target="_blank" rel="noopener noreferrer" className="social-link">
                          <span className="icon">𝕏</span>
                          <span>Twitter</span>
                        </a>
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
                          <span className="icon">📚</span>
                          <span>GitHub</span>
                        </a>
                        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="social-link">
                          <span className="icon">💼</span>
                          <span>LinkedIn</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </PrivateRoute>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
