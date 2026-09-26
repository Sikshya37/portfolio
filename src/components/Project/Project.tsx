import { Container } from "./styles";
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://www.academia.edu/72560723/An_Application_of_Bci_Brain_Wave_Controlled_Robot" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="View publication" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Brain Wave Controlled Robot</h3>
              <p>
                Major research project published as first author: "An Application of BCI: Brain Wave Controlled Robot," presented at KEC Conference 2019. Explored EEG-based brain-computer interface techniques for real-time robotic control.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>BCI</li>
                <li>EEG</li>
                <li>MATLAB</li>
                <li>Arduino</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
              </div>
            </header>
            <div className="body">
              <h3>Apartment Security System</h3>
              <p>
                Minor research project focused on designing and implementing a security system for apartment complexes using sensor-based monitoring and alert mechanisms.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Arduino</li>
                <li>Sensors</li>
                <li>Proteus</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

      </div>
    </Container>
  );
}
