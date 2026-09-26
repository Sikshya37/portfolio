import { Container } from "./styles";
import python from "../../assets/python.svg"
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import arduinoIcon from "../../assets/arduino-icon.svg";
import matlabIcon from "../../assets/matlab-icon.svg";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";

export function About() {
  return (
    <Container id="about">
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.21 * 1000}>
          <img src={`${import.meta.env.BASE_URL}Images/image.jpeg`} alt="Sikshya Neupane" />
        </ScrollAnimation>
      </div>
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Electronics and Communication Engineer with a research-driven background in intelligent systems and emerging technologies. Currently pursuing a Master of Engineering at UESTC, China, and a Master's in Business Studies, building on a B.E. in Electronics and Communication Engineering (First Division) from Kantipur Engineering College, Tribhuvan University.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            Research interests include Machine Learning, Artificial Intelligence, and Brain-Computer Interfaces. Published first-author research on BCI-controlled robotics at KEC Conference 2019.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={400}>
          <div className="education">
            <h3>Education:</h3>
            <h4>University of Electronic Science and Technology of China (UESTC)</h4>
            <p>Master of Engineering | Sept 2026 – Present</p>
            <br />
            <h4>Janjyoti Multiple Campus, Sarlahi</h4>
            <p>Master's in Business Studies (MBS) | 2024 – 2026</p>
            <br />
            <h4>Kantipur Engineering College, Tribhuvan University</h4>
            <p>B.E. Electronics & Communication Engineering, First Division | 2015 – 2021</p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={550}>
          <div className="experience">
            <h3>Experience:</h3>
            <h4>Employment Assistant</h4>
            <p>Harion Municipality, Government of Nepal | Aug 2022 – Jul 2025</p>
            <br />
            <h4>Engineering Researcher (Technical Writer)</h4>
            <p>Entegra Sources Pvt. Ltd. | Jul 2021 – Nov 2021</p>
            <br />
            <h4>L1 Technical Support Executive</h4>
            <p>Vianet Communication | Nov 2019 – Mar 2021</p>
            <br />
            <h4>Research Trainee</h4>
            <p>Kantipur Engineering College | Dec 2018 – Oct 2019</p>
            <br />
            <h4>Intern</h4>
            <p>Robotics Association of Nepal | May 2019 – Sep 2019</p>
            <br />
            <h4>Intern</h4>
            <p>Nepal Telecom Training Centre | Nov 2018</p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src={python} alt="Python" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.11 * 1000}>
              <img src={matlabIcon} alt="MATLAB" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={arduinoIcon} alt="Arduino" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={htmlIcon} alt="HTML" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={cssIcon} alt="CSS" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={boostrapIcon} alt="Bootstrap" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </Container>
  )
}

