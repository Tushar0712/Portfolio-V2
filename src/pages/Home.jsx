import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Code,
  Palette,
  Zap,
} from "lucide-react";
import "../style/Home.css";
// import avatar from "../assets/avatar.svg";
// import Spline from "@splinetool/react-spline";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    "Full Stack Developer",
    "UI/UX Designer",
    "Frontend Developer",
    "React Developer",
    "Problem Solver",
  ];

  useEffect(() => {
    setIsVisible(true);

    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500); // Increased interval slightly for readability

    return () => clearInterval(roleInterval);
  }, [roles.length]);

  const features = [
    {
      icon: <Code size={28} />, // Increased icon size slightly
      title: "Clean Code",
      description: "Crafting robust and maintainable code with best practices.",
    },
    {
      icon: <Palette size={28} />,
      title: "Modern Design",
      description:
        "Designing intuitive and aesthetically pleasing user interfaces.",
    },
    {
      icon: <Zap size={28} />,
      title: "Fast Performance",
      description: "Building highly optimized and efficient web applications.",
    },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="spline-3d-bg">
            {/* <Spline scene="https://prod.spline.design/q1cW0KT7y6xVcd03/scene.splinecode" /> */}
          </div>
          <div className="floating-shapes" aria-hidden="true">
            {/* aria-hidden for decorative elements */}
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
            <div className="shape shape-5"></div>
          </div>
        </div>
        <div
          className={`hero-content ${isVisible ? "animate-fade-in-up" : ""}`}
        >
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span>Tushar Kalathiya</span>
            </h1>
            <p className="hero-subtitle">
              A passionate{" "}
              <span className="role-text">{roles[currentRole]}</span>
            </p>
            <p className="hero-description">
              I build modern, responsive, and high-performance web applications.
              Let's create something amazing together!
            </p>
            <div className="hero-actions">
              <Link to="/projects" className="btn btn-primary">
                View My Work <ArrowRight size={18} />
              </Link>
              <a
                href="/path/to/your/cv.pdf"
                download
                className="btn btn-secondary"
              >
                {/* Update path */}
                Download CV <Download size={18} />
              </a>
            </div>
            <div className="hero-social">
              <a
                href="https://github.com/Tushar0712"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/tushar-kalathiya-6bb7b4257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:your.tusharkalathiya07@gmail.com"
                aria-label="Send me an email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="hero-image">
            {/* <img
              src={avatar}
              alt="Tushar Kalathiya - Portfolio Avatar"
              className="avatar"
            /> */}
            {/* <div className="image-placeholder"></div> */}
            {/* Placeholder if no image */}
          </div>
        </div>
        <div className="scroll-indicator" aria-hidden="true">
          <p>Scroll to explore</p>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features section">
        <div className="container">
          <h2 className="section-title text-center">What I Do</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div className="feature-card" key={index}>
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="stats section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">3+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>{" "}
              <div className="stat-label">Client Satisfaction</div>{" "}
            </div>
            <div className="stat-item">
              <div className="stat-number">Award</div>{" "}
              <div className="stat-label">Winning Design</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="cta section">
        <div className="container">
          <div className="cta-content card">
            {" "}
            {/* Added 'card' class for consistent styling */}
            <h2 className="cta-title">Ready to Start Your Project?</h2>
            <p className="cta-description">
              Let's work together to bring your ideas to life. I'm here to help
              you create something amazing.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Get In Touch <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
