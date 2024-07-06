import React from 'react';
import './footer.css'; // Assurez-vous de créer un fichier CSS pour styliser le footer
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: <a href="mailto:example@example.com">example@example.com</a></p>
        </div>
        <div className="footer-section">
          <h4>Suivez-moi</h4>
          <div className="social-icons">
            <a href="https://github.com/ton_profil" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/ton_profil" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Crédits</h4>
          <p>&copy; {new Date().getFullYear()} NDEGUE JUAN. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
