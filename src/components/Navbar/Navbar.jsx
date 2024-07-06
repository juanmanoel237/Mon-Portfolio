import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();

  useEffect(() => {
    const section = location.hash.slice(1) || 'home';
    setActiveSection(section);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Mon Portfolio</Link>
      </div>
      <div className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
        <Link to="/" className={activeSection === 'home' ? 'active' : ''} onClick={closeMenu}>Home</Link>
        <Link to="#skills" className={activeSection === 'skills' ? 'active' : ''} onClick={closeMenu}>Skills</Link>
        <Link to="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={closeMenu}>Projects</Link>
        <Link to="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={closeMenu}>Contact</Link>
      </div>
      <div className={`navbar-burger ${isOpen ? 'is-active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;