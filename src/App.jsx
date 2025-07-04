import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import { Menu, X } from "lucide-react";
import "./App.css"; // Ensure App.css contains all global and Navbar styles

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <span className="logo-text">Portfolio</span>
        </Link>

        {/* Added role="menu" and role="menuitem" for accessibility */}
        <div className={`nav-menu ${isMenuOpen ? "active" : ""}`} role="menu">
          <Link
            to="/"
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
            onClick={closeMenu}
            aria-current={location.pathname === "/" ? "page" : undefined}
            role="menuitem"
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`nav-link ${
              location.pathname === "/about" ? "active" : ""
            }`}
            onClick={closeMenu}
            aria-current={location.pathname === "/about" ? "page" : undefined}
            role="menuitem"
          >
            About
          </Link>
          <Link
            to="/projects"
            className={`nav-link ${
              location.pathname === "/projects" ? "active" : ""
            }`}
            onClick={closeMenu}
            aria-current={
              location.pathname === "/projects" ? "page" : undefined
            }
            role="menuitem"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className={`nav-link ${
              location.pathname === "/contact" ? "active" : ""
            }`}
            onClick={closeMenu}
            aria-current={location.pathname === "/contact" ? "page" : undefined}
            role="menuitem"
          >
            Contact
          </Link>
        </div>

        {/* Added aria-label for accessibility */}
        <button
          className="nav-toggle"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div
        className="loader-container"
        role="status"
        aria-live="polite"
        aria-label="Loading content"
      >
        <div className="loader">
          <div className="loader-circle"></div>
          <div className="loader-circle"></div>
          <div className="loader-circle"></div>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="app-content" id="main-content">
          {" "}
          {/* Added ID for skip links if needed */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
