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
import tata_1mg from "../../Assets/Projects/tata1mg.png";
import amazon_logo from "../../Assets/Projects/amazon_logo.png";
import lms from "../../Assets/Projects/canvas_lms.png";
import gmail from "../../Assets/Projects/Gmail_logo.jpg";
import gmaps from "../../Assets/Projects/google_Maps.png";
import metrics from "../../Assets/Projects/metrics.png";
import swiggyuber from "../../Assets/Projects/swiggy_vs_ubereats.jpg";
import superset from "../../Assets/Projects/superset.png";
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
              imgPath={homework}
              isBlog={false}
              title="Homework App: to help teachers give homework effectively"
              description=""
              ghLink="https://drive.google.com/file/d/1itr1GAHq1rOOtuiZ-fRGb6R9AcXy1WjO/view?usp=share_link"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={superset}
              isBlog={false}
              title="Improve Superset"
              description="Improve the product Superset, innovate for students and disabilities."
              ghLink="https://drive.google.com/file/d/1dH2THkW3S2QB-o2CGt5tsI7KzHnb76Gt/view?usp=sharing"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={swiggyuber}
              isBlog={false}
              title="Swiggy vs Uber Eats"
              description="Taking Design Decision - Menu design Swiggy v/s UberEats"
              ghLink="https://drive.google.com/file/d/18dmJGMYeTFKlMIyBFUZoaKepK5vE3XUS/view?usp=sharing"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tata_1mg}
              isBlog={false}
              title=":Tata 1MG - Homepage AB"
              description="launched a new homepage of 1MG app.Currently the 2 versions are running in AB experiment
              What are the metrics you would track as part of the AB"
              ghLink="https://drive.google.com/file/d/1Wn_qqlbIy5v6fmXz8tvFhVN3ssyvEVP_/view?usp=sharing"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amazon_music}
              isBlog={false}
              title="Increasing Market Share of Amazon Music vs Spotify Case"
              description=""
              ghLink="https://drive.google.com/file/d/138qBUq8_GPd_qTVDUS-G4NPRqkw7IdnZ/view?usp=share_link"
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
              ghLink="https://drive.google.com/file/d/1PxqD8GWwyUuQiLXE1RminlH1aGtKVtri/view?usp=share_link"
              // demoLink=""      <--------Please include a demo link here 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gmaps}
              isBlog={false}
              title="Improve Google Maps"
              description="improve the discovery of Location sharing feature on Google Maps."
              ghLink="https://drive.google.com/file/d/1F4NHwzAjbzD64_RSwgfSn0Ixo-fnyQT9/view?usp=share_link"
              // demoLink=""      <--------Please include a demo link here 
            />
            </Col>
            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gmail}
              isBlog={false}
              title="Product Strategy GMail"
              description="Create product strategy to improve Gmail "
              ghLink="https://drive.google.com/file/d/1NA8m9W5oOQxYvRAyqJJDbUs06eTCh69L/view?usp=sharing"
              // demoLink=""      <--------Please include a demo link here 
            />
            </Col>
            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lms}
              isBlog={false}
              title="LMS System"
              description="List of features I would like to have as part of the LMS college app, into Epics / User Stories"
              ghLink="https://drive.google.com/file/d/1A8GEa6ZugvxZB1zwPanuBuUZuhfM-NR6/view?usp=sharing"
              // demoLink=""      <--------Please include a demo link here 
            />
            </Col>
            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amazon_logo}
              isBlog={false}
              title="Metrics for amazon app re-design"
              description="Metrics to track in new design of Amazon Home page."
              ghLink="https://drive.google.com/file/d/1riRRfZz1mwZOIdoQH4MvekSheOEAn2fO/view?usp=sharing"
              // demoLink=""      <--------Please include a demo link here 
            />
            </Col>
            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={metrics}
              isBlog={false}
              title="Saas metrics calculation and dashboarding"
              description="Calculation of metrics marked in yellow."
              ghLink="https://drive.google.com/file/d/1iARW6eLLcd9ZrvIvmcsX0CP76t-7wvLM/view?usp=sharing"
              // demoLink=""      <--------Please include a demo link here 
            />
            </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
