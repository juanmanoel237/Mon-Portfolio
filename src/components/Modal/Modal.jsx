/* eslint-disable react/prop-types */
import './modal.css';

const Modal = ({ project, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>&times;</button>
        <h2>{project.title}</h2>
        <p>{project.details}</p>
        <div className="project-images">
          {project.images.map((image, index) => (
            <img key={index} src={image} alt={`${project.title} ${index + 1}`} />
          ))}
        </div>
        <div className="technologies">
          <h3>Technologies utilisées :</h3>
          <ul>
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
        <div className="links">
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Demo</a>
        </div>
      </div>
    </div>
  );
};

export default Modal;