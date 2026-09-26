import { Container } from './styles'
import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'

export function Footer() {
  return (
    <Container className="footer">
      <a href="https://sikshyaneupane.com.np" className="logo">
        <span>sikshyaneupane</span>
        <span>.com.np</span>
      </a>
      <div>
        <p>
          Built with React, TypeScript, and Vite <img src={reactIcon} alt="React" />
        </p>
        <p style={{ fontSize: "0.8rem", opacity: 0.6, marginTop: "0.5rem" }}>
          Theme by <a href="https://github.com/CodeVinayak" target="_blank" rel="noreferrer" style={{ color: "inherit" }}>CodeVinayak</a>
        </p>
      </div>
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/sikshya-neupane-449410172/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/Sikshya37"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
      </div>
    </Container>
  )
}
