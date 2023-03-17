import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import mindfulness from "../../Assets/Projects/mindfullness_p1.jpg";
import amazon_music from "../../Assets/Projects/amazon_music.jpg";
import chaayos from "../../Assets/Projects/chaayos.jpg";
import elevator from "../../Assets/Projects/elevator.jpg";
import homework from "../../Assets/Projects/homework_app.jpg";
import supaushtik from "../../Assets/Projects/supaushtik.png";
import hotel from "../../Assets/Projects/hotel_booking.jpg";

import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "left", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mindfulness}
              isBlog={false}
              title="Mindfulness App for Employees"
              description=""
              ghLink="https://www.figma.com/proto/biuBHPqFrmj5HR3B2E4wSn/Meditation_UI_UX?node-id=36-850&scaling=scale-down&page-id=0%3A1&starting-point-node-id=36%3A850&show-proto-sidebar=1"
              demoLink=""
              userPersona="https://drive.google.com/file/d/1zhNFS_D_Dm1Ru8AL15yQ9uvyIf1ZiqVu/view"
              empathyMap="https://drive.google.com/file/d/1w6Wneb6CbwZ9Lm-lMX6tVXCV6NA11SVq/view"
              userJourney="https://drive.google.com/file/d/1sbVjsrWC9kLNfuxfcxudkoLUzFZQheFI/view"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amazon_music}
              isBlog={false}
              title="Increasing Market Share of Amazon Music vs Spotify Case"
              description=""
              ghLink="https://drive.google.com/file/d/1JFRrdPO1azYMH_qUll9ZqQEV_7Fno3W4/view?usp=share_link"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={homework}
              isBlog={false}
              title="Homework App: to help teachers give homework effectively"
              description=""
              ghLink="https://drive.google.com/file/d/1ONM8cEmSAJQBOxhbu6MOACnwdfWvv6uc/view?usp=share_link"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={supaushtik}
              isBlog={false}
              title="Supaushtik, nourishing body mind and Soul"
              description="Founded healthy food startup based on millets."
              ghLink="https://drive.google.com/file/d/1PZJ6LFd-uJVzxVfTlpCi0ro09nHJzT42/view?usp=sharing"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={elevator}
              isBlog={false}
              title="Minimising time in multiple elevator system"
              description=""
              ghLink="https://drive.google.com/file/d/1pF3iKk4SF7P2hoBqQHYD-nDaiHQJGiPD/view?usp=sharing"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hotel}
              isBlog={false}
              title="Hotel Booking App"
              description="Create PRD, Information Architecture, and Wireframes"
              ghLink="https://medium.com/@sunakshitejwani/hotel-booking-app-cancellation-design-and-prd-a1d846bc4f9f"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chaayos}
              isBlog={false}
              title="Chayos"
              description="Chayos: Proposing Chayos a new Vending Machine and a dedicated work space"
              ghLink="https://drive.google.com/file/d/1X0SaYy2MW6uLknvptuRyiW_W747_mXvQ/view?usp=share_link"
              // demoLink=""      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
