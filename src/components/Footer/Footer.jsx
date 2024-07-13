/* eslint-disable react/no-unescaped-entities */
import './footer.css'; // Assurez-vous de créer un fichier CSS pour styliser le footer
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Contact</h4>
          <p>M'envoyer un Email: <a href="mailto:ndeguemanoeljuan@gmail.com">Ndegue Juan</a></p>
        </div>
        <div className="footer-section">
          <h4>Suivez-moi</h4>
          <div className="social-icons">
            <a href="https://github.com/juanmanoel237" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="http://linkedin.com/in/juan-manoel-ndegue-658949282" target="_blank" rel="noopener noreferrer">
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
