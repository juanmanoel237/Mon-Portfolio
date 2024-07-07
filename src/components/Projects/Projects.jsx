import { useEffect, useState } from "react"
import projectsData from "../../data/projects.json"
import './project.css'

const Projects = () => {

  const [projects, setProjects] = useState([])
  
  useEffect(()=>{
    setProjects(projectsData)
  },[])

  return (
    <section id="projects">
      {projects.map((project)=>(
        <div className="project-card" key={project.id}>
          <img src={project.coverPicture} alt={`${project.title} cover`} />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </section>
  )
}

export default Projects