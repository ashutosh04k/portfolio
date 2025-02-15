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
                  <h3>Tawgl - Internship</h3>
                  <p>
                  Engineered a chat feature for interviews, boosting real-time communication and increasing user engagement by 30%, while improving feedback collection efficiency by 40%.</p>
                  <p>Implemented Notification service using WebSocket, leading to a 50% boost in client engagement through real-time server-frontend communication.</p>
<p>Spearheaded UI enhancements and APIs that accelerated product performance by 20%, while also optimizing the app's network performance for enhanced speed and reliability.</p>
                </div>
                <footer>
                  <ul className="tech-list">
                    <li>React JS</li>
                    <li>TypeScript</li>
                    <li>Javascript</li>
                    <li>API Gateway</li>
                    <li>SCSS</li>
                    <li>Aws CLI</li>
                  </ul>
                </footer>
              </div>
            </ScrollAnimation>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-icon"></div>
          <div className="timeline-content" style={{marginLeft:'4rem'}}>
            <ScrollAnimation animateIn="flipInX">
              <div className="project">
                <header>
                  <div className="Company-logo">

                  <a href="https://www.100acress.com/" target="_blank" rel="noreferrer">
                      <img
                        src="https://100acress-media-bucket.s3.ap-south-1.amazonaws.com/100acre/logo/logo.webp"
                        alt="Company Logo"
                        className="logo-image"
                      />
                    </a>
                  </div>
                  <div className="project-links">
                    <a href="https://github.com/web100Acress/100acressFront" target="_blank" rel="noreferrer">
                      {/* <img src={} alt="GitHub Link" /> */}
                    </a>
                    <a href="" target="_blank" rel="noreferrer">
                      {/* <img src={externalLink} alt="Visit site" /> */}
                    </a>
                  </div>
                </header>
                <div className="body">
                  <h3>100acress.com - Front-End Developer / Devops</h3>
                  <p>
                  Transformed Figma designs into a fully responsive React.js user interface, elevating user engagement metrics by
20% through enhanced usability features and seamless interaction design adjustments throughout the application.</p>
                  <p>Led Front-End Development to increase performance by 30% to improve S.C.O .</p>
<p>Achieved Deployment to AWS,leveraging EC2 to enhance system reliability to 50% and Scalabitility by 40%
using CI/CD Pipeline , Git-Hub Actions.</p>
                </div>
                <footer>
                  <ul className="tech-list">
                    <li>React JS</li>
                    <li>AWS-EC2</li>
                    <li>Javascript</li>
                    <li>API Gateway</li>
                    <li>TailWind</li>
                    <li>Aws CLI</li>
                    <li>Node J.S</li>
                  </ul>
                </footer>
              </div>
            </ScrollAnimation>
          </div>
        </div>
        
      </div>
    </Container>
  );
}
