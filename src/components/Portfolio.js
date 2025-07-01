import { Mail, Phone, MapPin, Github, Facebook } from "lucide-react"
import profilePicture from "../assets/JackyRocha.JPEG"
import ccna1Badge from "../assets/ccna/CCNA 1.png"
import ccna2Badge from "../assets/ccna/CCNA 2.png"
import ccna3Badge from "../assets/ccna/CCNA 3.png"
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
  
  const certifications = [
    {
      name: "CCNA 1: Introduction to Networks",
      image: ccna1Badge,
      alt: "CCNA 1 Certification Badge",
    },
    {
      name: "CCNA 2: Switching, Routing, and Wireless Essentials",
      image: ccna2Badge,
      alt: "CCNA 2 Certification Badge",
    },
    {
      name: "CCNA 3: Cybersecurity Essentials",
      image: ccna3Badge,
      alt: "CCNA 3 Certification Badge",
    },
  ]

  const experiences = [
    {
      position:"Customer and Sales Representative",
      duration:"August, 2015 - August, 2016",
      accounts: "DirecTV and AT&T",
      company: "IBEX Global Paranaque"
    },{
      position:"Customer Service Email Support",
      duration:"February, 2017 - June, 2018",
      accounts: "Lyft",
      company: "IBEX Global Paranaque"
    },{
      position:"Technical Support",
      duration:"November, 2018 - Present",
      accounts: "APCL",
      company: "Conduent Business Inc."
    }
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
              <a href="#experience">Work</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="avatar">
            <img
              src={profilePicture || "/placeholder.svg"}
              alt="Jacky Rocha"
              className="avatar-image"
            />
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
              <a href="mailto:mgkpimentel@tip.edu.ph">
                Contact Me
              </a>
            </button>
            <button className="btn btn-secondary">
              <Github size={16} />
              <a 
                href="https://github.com/gypimentel"
                target="_blank"
                rel="noreferrer"
              >
              GitHub
              </a>
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
              website that showcases my portfolio and serve as a CV. This is created using React and icons from Lucide.
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
            <h3 className="subsection-title">Technical Skills</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <span key={index} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>

            <h3 className="subsection-title">Certifications</h3>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <div key={index} className="certification-item">
                  <img src={cert.image || "/placeholder.svg"} alt={cert.alt} className="certification-badge" />
                  <p className="certification-name">{cert.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <div className="container">
          <h2 className="section-title">Work Experience</h2>
          <div className="experience-list">
            {experiences.map((experience, index) => (
              <div key={index} className="experience-card">
                <div className="experience-header">
                  <h3 className="experience-position">{experience.position}</h3>
                  <span className="experience-duration">{experience.duration}</span>
                </div>
                <h4 className="experience-company">{experience.company}</h4>
                <p className="experience-accounts">{experience.accounts}</p>
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
                <a href="mailto:mgkpimentel@tip.edu.ph">
                  <span>mgkpimentel@tip.edu.ph</span>
              </a>
              </div>
              <div className="contact-item">
                <Phone size={20} />
                <span>+63 936 456 7890</span>
              </div>
              <div className="contact-item">
                <MapPin size={20} />
                <span>Manila, Philippines</span>
              </div>
            </div>
            <div className="social-buttons">
              <button className="btn btn-outline">
                <Github size={16} />
                <a 
                  href="https://github.com/gypimentel"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </button>
              <button className="btn btn-outline">
                <Facebook size={16} />
                <a 
                  href="https://www.facebook.com/guiankarlo.pimentel"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
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
