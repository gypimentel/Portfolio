import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from "lucide-react"
import "./Portfolio.css"

const Portfolio = () => {
  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "Java",
    "HTML/CSS",
    "Git",
    "SQL",
    "C++",
    "Linux",
  ]

  const projects = [
    {
      title: "E-commerce Web App",
      description:
        "A full-stack e-commerce application built with React and Node.js, featuring user authentication, product catalog, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      demo: "#",
    },
    {
      title: "Task Management System",
      description:
        "A collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      github: "#",
      demo: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "A responsive weather application that displays current conditions and forecasts using external APIs with interactive charts.",
      technologies: ["React", "Chart.js", "OpenWeather API", "CSS3"],
      github: "#",
      demo: "#",
    },
  ]

  return (
    <div className="portfolio">
      {/* Header */}
      <header className="header">
        <nav className="nav">
          <div className="nav-container">
            <h1 className="logo">Guian Karlo Pimentel</h1>
            <div className="nav-links">
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="avatar">
            <span>GKP</span>
          </div>
          <h1 className="hero-title">Guian Karlo Pimentel</h1>
          <p className="hero-subtitle">Computer Engineering Student</p>
          <p className="hero-description">
            Passionate about building innovative software solutions and exploring the intersection of hardware and
            software engineering.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">
              <Mail size={16} />
              Contact Me
            </button>
            <button className="btn btn-secondary">
              <Github size={16} />
              GitHub
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="card">
            <p className="about-text">
              I'm a fourth year BS Computer Engineering student from TIP Manila. This is an attempt to create a simple 
              website that showcases my portfolio and serve as a CV. This is created using React and templates from Lucide.
            </p>
            <p className="about-text">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              working on personal projects that challenge me to grow as a developer. I'm always eager to learn and take
              on new challenges in the ever-evolving world of technology.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="card">
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <span key={index} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-buttons">
                  <button className="btn btn-outline">
                    <Github size={16} />
                    Code
                  </button>
                  <button className="btn btn-outline">
                    <ExternalLink size={16} />
                    Demo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-card">
            <p className="contact-description">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about
              technology!
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <Mail size={20} />
                <span>john.doe@email.com</span>
              </div>
              <div className="contact-item">
                <Phone size={20} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <MapPin size={20} />
                <span>Your City, State</span>
              </div>
            </div>
            <div className="social-buttons">
              <button className="btn btn-outline">
                <Github size={16} />
                GitHub
              </button>
              <button className="btn btn-outline">
                <Linkedin size={16} />
                LinkedIn
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© 2025 Guian Karlo Pimentel. Built with React and lots of ☕</p>
        </div>
      </footer>
    </div>
  )
}

export default Portfolio
