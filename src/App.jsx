// src/App.jsx
import React, { useState, useEffect } from 'react';
import { profileData } from './profileData';
import { Mail, MapPin, Linkedin, Github, BookOpen, ExternalLink, Menu, X, ArrowUp, ChevronRight } from 'lucide-react';
import './App.css';

function App() {
  const { header, about, interests, experience, education, publications, projects, skills } = profileData;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Efek untuk navbar transparan saat di atas
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="app-container">
      {/* NAVIGATION BAR */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-content">
          <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            FS<span>.</span>
          </div>
          
          <div className="desktop-menu">
            {['About', 'Experience', 'Education', 'Publications', 'Portfolio'].map((item) => (
              <button key={item} onClick={() => scrollToSection(item.toLowerCase())}>
                {item}
              </button>
            ))}
          </div>

          <div className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div className={`mobile-dropdown ${isMenuOpen ? 'open' : ''}`}>
          {['About', 'Experience', 'Education', 'Publications', 'Portfolio'].map((item) => (
            <button key={item} onClick={() => scrollToSection(item.toLowerCase())}>
              {item}
            </button>
          ))}
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="hero-section">
        <div className="hero-bg-pattern"></div>
        <div className="hero-content">
          <div className="hero-text fade-in-up">
            <span className="badge">Academic & Researcher</span>
            <h1>{header.name}</h1>
            <p className="hero-title">{header.title}</p>
            <div className="location-tag">
              <MapPin size={18} /> {header.location}
            </div>
            
            <div className="social-links">
              <a href={header.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
              <a href={header.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
              <a href={header.scholar} target="_blank" rel="noreferrer" aria-label="Google Scholar"><BookOpen /></a>
            </div>

            <div className="cta-group">
              <a href={`mailto:${header.emailWork}`} className="btn btn-primary">
                Contact Work <Mail size={16} />
              </a>
              <a href={`mailto:${header.emailResearch}`} className="btn btn-secondary">
                Contact Research <ArrowUp className="rotate-45" size={16} />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="main-container">
        
        {/* ABOUT SECTION */}
        <section id="about" className="section-padding">
          <div className="section-header">
            <h2>About & Vision</h2>
            <div className="line"></div>
          </div>
          
          <div className="about-grid">
            <div className="about-text card">
              <p className="lead">{about.summary}</p>
              <div className="vision-box">
                <span className="vision-label">Research Goal</span>
                <p>{about.vision}</p>
              </div>
            </div>
            
            <div className="interests-wrapper">
              <h3>Core Interests</h3>
              <div className="interests-list">
                {interests.map((item, index) => (
                  <div key={index} className="interest-item">
                    <div className="check-icon"><ChevronRight size={16}/></div>
                    <div>
                      <strong>{item.title}</strong>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="section-padding bg-light">
          <div className="section-header">
            <h2>Professional Experience</h2>
            <div className="line"></div>
          </div>

          <div className="timeline-container">
            {experience.map((exp, index) => (
              <div key={index} className="timeline-card fade-in-on-scroll">
                <div className="timeline-year">{exp.period}</div>
                <div className="timeline-content">
                  <h3>{exp.role}</h3>
                  <h4>{exp.company}</h4>
                  <p>{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="section-padding">
          <div className="section-header">
            <h2>Education History</h2>
            <div className="line"></div>
          </div>
          
          <div className="education-grid">
            {education.map((edu, index) => (
              <div key={index} className="edu-card">
                <div className="edu-icon"><BookOpen size={24} /></div>
                <div className="edu-info">
                  <h3>{edu.degree}</h3>
                  <span className="edu-school">{edu.school}</span>
                  <span className="edu-year">{edu.period}</span>
                  <span className="edu-grade">{edu.grade}</span>
                  {edu.note && <p className="edu-note">{edu.note}</p>}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PUBLICATIONS SECTION */}
        <section id="publications" className="section-padding bg-light">
          <div className="section-header">
            <h2>Selected Publications</h2>
            <div className="line"></div>
          </div>

          <div className="pub-grid">
            {publications.map((pub, index) => (
              <a key={index} href={`https://doi.org/${pub.doi}`} target="_blank" rel="noreferrer" className="pub-card">
                <div className="pub-content">
                  <h3>{pub.title}</h3>
                  <div className="pub-meta">
                    <span className="publisher">{pub.publisher}</span>
                    <span className="doi-link">View Paper <ExternalLink size={14} /></span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* PORTFOLIO & SKILLS SECTION */}
        <section id="portfolio" className="section-padding">
          <div className="grid-2-col">
            <div className="projects-column">
              <div className="section-header-left">
                <h3>Key Projects & Certifications</h3>
              </div>
              <ul className="project-list">
                {projects.map((proj, index) => (
                  <li key={index} className="project-item">
                    <span className="bullet"></span> {proj}
                  </li>
                ))}
              </ul>
            </div>

            <div className="skills-column">
              <div className="section-header-left">
                <h3>Technical Arsenal</h3>
              </div>
              <div className="skills-cloud">
                {skills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="footer-professional">
        <div className="footer-content">
          <div className="footer-logo">FS.</div>
          <p>© {new Date().getFullYear()} Fadillah Siva. <br/>Lecturer & Researcher.</p>
          <div className="footer-socials">
             <a href={header.linkedin}>LinkedIn</a> • <a href={header.scholar}>Scholar</a>
          </div>
        </div>
      </footer>
      
      {/* Scroll to Top Button */}
      {isScrolled && (
        <button className="scroll-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
}

export default App;