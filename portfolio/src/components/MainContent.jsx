import '../styles/components/maincontent.sass';
import AboutContainer from './AboutContainer';
import ProjectsContainer from './ProjectsContainer';
import TecnoligiesContainer from './TecnologiesContainer';

const MainContent = () => {
  return (
    <main id="maincontent">
      <AboutContainer/>
      <TecnoligiesContainer/>
      <ProjectsContainer/>
    </main>
  )
}

export default MainContent