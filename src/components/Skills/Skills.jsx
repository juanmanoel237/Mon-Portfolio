import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHtml5, 
  faCss3Alt, 
  faJs, 
  faReact,
  faNodeJs,
  faSass
} from '@fortawesome/free-brands-svg-icons';
import {
  faDatabase,
  faSearch,
  faBug,
  faServer
} from '@fortawesome/free-solid-svg-icons'; 

import './skills.css'

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2>Skills</h2>

        <div className="category">
          <h3>Front-end</h3>
          <div className="skills-list">
            <div className="skill">
              <FontAwesomeIcon icon={faHtml5} className="html-icon" />
              <span>HTML5</span>
            </div>
            <div className="skill">
              <FontAwesomeIcon icon={faCss3Alt} className="css-icon" />
              <span>CSS3</span>
            </div>
            <div className="skill">
              <FontAwesomeIcon icon={faJs} className="js-icon" />
              <span>JavaScript</span>
            </div>
            <div className="skill">
              <FontAwesomeIcon icon={faReact} className="react-icon" />
              <span>React</span>
            </div>
            <div className="skill">
              <FontAwesomeIcon icon={faSass} className="sass-icon" />
              <span>Sass</span>
            </div>
          </div>
        </div>

        <div className="category">
          <h3>Back-end</h3>
          <div className="skills-list">
            <div className="skill">
              <FontAwesomeIcon icon={faNodeJs} className="node-icon" />
              <span>Node.js</span>
            </div>
            <div className="skill">
              <FontAwesomeIcon icon={faDatabase} className="mongodb-icon" />
              <span>MongoDB</span>
            </div>
            <div className="skill">
              <FontAwesomeIcon icon={faServer} className="express-icon" />
              <span>Express</span>
            </div>
          </div>
        </div>

        <div className="category">
          <h3>SEO, Optimisations & Debug</h3>
          <div className="skills-list">
            <div className="skill">
              <FontAwesomeIcon icon={faSearch} className="seo-icon" />
              <span>SEO</span>
            </div>
            <div className="skill">
              <FontAwesomeIcon icon={faBug} className="debug-icon" />
              <span>Debugging</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
