import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import ProjectDetail from './components/ProjectDetail/ProjectDetail';
import Contact from './components/Contact/Contact';
import './App.css';

const Home = () => (
  <>
    <Hero />
    <Skills />
    <Projects />
    <Contact />
  </>
);

const App = () => (
  <Router>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;