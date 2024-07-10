/* eslint-disable react/prop-types */ // Désactivation spécifique de la règle eslint pour les props

import './modal.css'; // Importation du fichier CSS pour le style de la modal

const Modal = ({ project, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}> {/* Fond de la modal qui se ferme lorsqu'on clique dessus */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}> {/* Contenu de la modal, clic à l'intérieur ne ferme pas la modal */}
        <button className="close-button" onClick={onClose}>&times;</button> {/* Bouton pour fermer la modal */}
        <h2>{project.title}</h2> {/* Titre du projet affiché dans la modal */}
        <p>{project.details}</p> {/* Détails du projet affichés dans la modal */}
        <div className="project-images"> {/* Section pour afficher les images du projet */}
          {project.images.map((image, index) => (
            <img key={index} src={image} alt={`${project.title} ${index + 1}`} />
          ))}
        </div>
        <div className="technologies"> {/* Section pour afficher les technologies utilisées */}
          <h3>Technologies utilisées :</h3>
          <ul>
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
        <div className="links"> {/* Section pour afficher les liens GitHub et Demo */}
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a> {/* Lien vers le repository GitHub */}
          <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Demo</a> {/* Lien vers la démo du projet */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
