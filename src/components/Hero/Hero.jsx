/* eslint-disable react/no-unescaped-entities */
import './hero.css';
import moiImage from '/images/moi.jpg';

const Hero = () => {
  const scrollToProject = () => {
    const projectSection = document.getElementById('projects');
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero">
      <div className="hero-container">
        <div className="hero-content">
          <p>Bienvenue sur mon portfolio ! </p>
          <h2>Je suis Juan Manoel, Étudiant en développement web 🌐</h2>
          <p>Je sors tout fraîchement d'une formation développeur web Bac+2 chez OpenClassrooms.</p>
          <button className='cta-button' onClick={scrollToProject}>Découvrez mes projets 🚀</button>
        </div>
        <div className="hero-image">
          <img src={moiImage} alt="Juan Manoel" /> {/* Utilisation de l'image importée */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
