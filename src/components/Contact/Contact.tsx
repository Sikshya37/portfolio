import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Interested in research collaboration, engineering projects, or AI/ML work?</p>
        <p>Feel free to reach out.</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:admin@sikshyaneupane.com.np"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:admin@sikshyaneupane.com.np">admin@sikshyaneupane.com.np</a>
        </div>
      </div>
      <Form></Form>
    </Container>
  )
}
