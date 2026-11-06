import { mount } from '../mount.jsx';
import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import Disciplines from '../components/Disciplines.jsx';
import ProjectCards from '../components/ProjectCards.jsx';
import Education from '../components/Education.jsx';
import Contact from '../components/Contact.jsx';

mount('home', () => (
  <>
    <Hero />
    <About />
    <ProjectCards />
    <Disciplines />
    <Education />
    <Contact />
  </>
));
