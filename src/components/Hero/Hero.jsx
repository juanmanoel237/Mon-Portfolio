import './hero.css';

const Hero = () => {

  const scrollToProject = () => {
    const projectSection = document.getElementById('projects');
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <section id="hero">
      <div className="hero-container">
        <div className="hero-content">
          <p>Bienvenue sur mon portfolio ! 😊</p>
          <h2>Je suis Juan Manoel, Étudiant en développement web 🌐</h2>
          <p>Je sors tout fraîchement d'une formation développeur web Bac+2 chez OpenClassrooms.</p>
          <button className='cta-button' onClick={scrollToProject}>Découvrez mes projets 🚀</button>
        </div>
        <div className="hero-image">
          <img src="url_de_votre_image" alt="Juan Manoel" /> {/* Assurez-vous de remplacer 'url_de_votre_image' par le chemin réel de votre image */}
        </div>
      </div>
    </section>
  )
}

export default Hero;
