import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
    if (window.innerWidth > 768) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const closeMenu = () => {
    if (isMobile) {
      setIsOpen(false);
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu(); // Ferme le menu après le défilement
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" onClick={closeMenu}>NDEGUE JUAN </Link>
      </div>
      <div className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/" onClick={() => scrollToSection('skills')}>Skills</Link>
        <Link to="/" onClick={() => scrollToSection('projects')}>Projects</Link>
        <Link to="/" onClick={() => scrollToSection('contact')}>Contact</Link>
      </div>
      {isMobile && (
        <div className={`navbar-burger ${isOpen ? 'is-active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
