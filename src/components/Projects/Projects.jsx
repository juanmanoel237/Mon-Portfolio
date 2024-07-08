import { useEffect, useState } from "react";
import projectsData from "../../data/projects.json";
import './project.css';
import Modal from "../Modal/Modal";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  const openModal = (project) =>{
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () =>{
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <section id="projects">
      <div className="title-container">
        <h2>Projects</h2>
      </div>
      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.coverPicture} alt={`${project.title} cover`} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <button className="see-more-btn" onClick={() => openModal(project)}>Voir plus</button>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <Modal project={selectedProject} onClose={closeModal}/>
      )}
    </section>
  );
};

export default Projects;
