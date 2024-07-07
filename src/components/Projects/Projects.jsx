import { useEffect, useState } from "react";
import projectsData from "../../data/projects.json";
import './project.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
