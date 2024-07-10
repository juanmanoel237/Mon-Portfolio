import { useEffect, useState } from "react"; // Importation des hooks useEffect et useState de React
import projectsData from "../../data/projects.json"; // Importation des données des projets depuis un fichier JSON
import './project.css'; // Importation du fichier CSS pour le style des projets
import Modal from "../Modal/Modal"; // Importation du composant Modal pour afficher les détails des projets

const Projects = () => {
  const [projects, setProjects] = useState([]); // État pour stocker la liste des projets
  const [selectedProject, setSelectedProject] = useState(null); // État pour le projet sélectionné dans la modal
  const [isModalOpen, setIsModalOpen] = useState(false); // État pour contrôler l'ouverture/fermeture de la modal

  useEffect(() => {
    // Effet exécuté une fois après le premier rendu pour charger les données des projets
    setProjects(projectsData); // Initialisation de la liste des projets avec les données importées
  }, []); // Le tableau vide [] assure que cet effet ne s'exécute qu'une seule fois

  const openModal = (project) => {
    // Fonction pour ouvrir la modal avec les détails d'un projet
    setSelectedProject(project); // Sélection du projet à afficher dans la modal
    setIsModalOpen(true); // Activation de l'état pour ouvrir la modal
  };

  const closeModal = () => {
    // Fonction pour fermer la modal
    setIsModalOpen(false); // Désactivation de l'état pour fermer la modal
    setSelectedProject(null); // Réinitialisation du projet sélectionné à null
  };

  return (
    <section id="projects">
      <div className="title-container">
        <h2>Projects</h2>
      </div>
      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.id}> {/* Carte représentant un projet */}
            <img src={project.coverPicture} alt={`${project.title} cover`} /> {/* Image du projet */}
            <h3>{project.title}</h3> {/* Titre du projet */}
            <p>{project.description}</p> {/* Description du projet */}
            <button className="see-more-btn" onClick={() => openModal(project)}>Voir plus</button> {/* Bouton pour ouvrir la modal */}
          </div>
        ))}
      </div>
      {/* Affichage conditionnel de la modal si isModalOpen est vrai */}
      {isModalOpen && ( 
        <Modal project={selectedProject} onClose={closeModal}/> 
      )}
    </section>
  );
};
{/* Passage du projet sélectionné et de la fonction de fermeture à la modal */}

export default Projects;
