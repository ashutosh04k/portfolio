import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Excited to kickstart my career in a full-time role?</p>
        <p>Let's connect and explore how I can contribute to your team!</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:kumarasutosh2014@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:kumarasutosh2014@gmail.com">kumarasutosh2014@gmail.com</a>
        </div>
        <div>
        <a href="tel:+918521975695"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+918521975695">(+91) 8521975695</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}