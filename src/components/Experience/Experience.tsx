import ScrollAnimation from "react-animate-on-scroll";
import { Container } from "./styles";

export function Experience() {
  return (
    <Container id="experience">
      <h2>Experience</h2>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-icon"></div>
          <div className="timeline-content">
            <ScrollAnimation animateIn="flipInX">
              <div className="project">
                <header>
                  {/* <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> 
                    <title>Folder</title> 
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                    
                  </svg> */}
                  <div className="Company-logo">

                  <a href="https://app.interviewintelligence.in/login" target="_blank" rel="noreferrer">
                      <img
                        src="https://cdn.prod.website-files.com/65360e0e03e27760e1cb441b/653fd77d90a17032d4aefb88_logo%20(5)%201.png"
                        alt="Company Logo"
                        className="logo-image"
                      />
                    </a>
                  </div>
                  <div className="project-links">
                    <a href="https://github.com/ashutosh04k/netflixgpt" target="_blank" rel="noreferrer">
                      {/* <img src={} alt="GitHub Link" /> */}
                    </a>
                    <a href="" target="_blank" rel="noreferrer">
                      {/* <img src={externalLink} alt="Visit site" /> */}
                    </a>
                  </div>
                </header>
                <div className="body">
                  <h3>Tawgl</h3>
                  <p>
                  Engineered a chat feature for interviews, boosting real-time communication and increasing user engagement by 30%, while improving feedback collection efficiency by 40%.</p>
                  <p>Implemented Notification service using WebSocket, leading to a 50% boost in client engagement through real-time server-frontend communication.</p>
<p>Spearheaded UI enhancements and APIs that accelerated product performance by 20%, while also optimizing the app's network performance for enhanced speed and reliability.</p>
                </div>
                <footer>
                  <ul className="tech-list">
                    <li>React JS with TypeScript</li>
                    <li>API Gateway</li>
                    <li>SCSS</li>
                    <li>Aws CLI</li>
                  </ul>
                </footer>
              </div>
            </ScrollAnimation>
          </div>
        </div>
        {/* Add similar blocks for other projects */}
      </div>
    </Container>
  );
}
