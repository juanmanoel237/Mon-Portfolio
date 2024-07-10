import { useState, useEffect } from 'react'; // Importation des hooks useState et useEffect de React
import { Link } from 'react-router-dom'; // Importation du composant Link de react-router-dom pour la navigation
import './navbar.css'; // Importation du fichier CSS pour le style de la navbar

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // État pour contrôler l'ouverture/fermeture du menu
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // État pour déterminer si l'affichage est mobile

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Fonction pour inverser l'état isOpen (ouvrir/fermer le menu)
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768); // Met à jour l'état isMobile en fonction de la largeur de la fenêtre
    if (window.innerWidth > 768) {
      setIsOpen(false); // Ferme le menu si la fenêtre est redimensionnée au-dessus de 768px
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize); // Ajoute un écouteur d'événement pour redimensionner la fenêtre
    return () => {
      window.removeEventListener('resize', handleResize); // Nettoie l'écouteur d'événement lors du démontage du composant
    };
  }, []); // Le tableau vide [] assure que cet effet n'est exécuté qu'une seule fois après le premier rendu

  const closeMenu = () => {
    if (isMobile) {
      setIsOpen(false); // Fonction pour fermer le menu sur les appareils mobiles
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId); // Récupère l'élément de la section à défilement
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' }); // Défilement doux jusqu'à la section sélectionnée
    }
    closeMenu(); // Ferme le menu après avoir cliqué sur un lien de navigation
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" onClick={closeMenu}>NDEGUE JUAN </Link> 
      </div>
      <div className={`navbar-menu ${isOpen ? 'is-active' : ''}`}> {/* Menu de navigation principale avec gestion de la classe active */}
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/" onClick={() => scrollToSection('skills')}>Skills</Link> {/* Lien vers la section Skills avec défilement */}
        <Link to="/" onClick={() => scrollToSection('projects')}>Projects</Link> {/* Lien vers la section Projects avec défilement */}
        <Link to="/" onClick={() => scrollToSection('contact')}>Contact</Link> {/* Lien vers la section Contact avec défilement */}
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
