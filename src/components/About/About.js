import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/sunakshi_doodle.png";
import Timeline from "./Timeline";
import { GiAchievement } from "react-icons/gi";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px"
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs={0} md={2}></Col>
          <Col xs={4} md={2} className="tech-icons-text">
            <GiAchievement />
          </Col>
          <Col xs={4} md={4}>
            <h1 className="project-heading" style={{ paddingBottom: "10px" }}>
              My <strong className="purple">Achievements</strong>
            </h1>
          </Col>
          <Col xs={4} md={2} className="tech-icons-text">
            <GiAchievement />
          </Col>
          <Col xs={0} md={2}></Col>
        </Row>
      </Container>
      <Container>
        <Row style={{ justifyContent: "left", padding: "10px" }}>
          <Col
            md={3}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px"
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Work-<strong className="purple">Ex</strong>
            </h1>
            <p style={{ textAlign: "left" }}>
              <li><b className="purple">Promoted </b >twice in the span of 4 years from 2018 to 2022</li>
              <li>
                Awarded the <b className="purple">Software Engineer Hall of Fame</b> for being the Star
                Performer for creating a website guide for stakeholders.
              </li>
              <li>
                Awarded <b className="purple"> Force-for-good Champion </b> for building a content website
                for an NGO in a JP Morgan Social Event.
              </li>
              <li>
                Awarded the <b className="purple"> Team Excellence Award </b>as a team for developing the
                most-liked Application for employees.
              </li>
            </p>
          </Col>
          <Col
            md={3}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px"
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong className="purple">MBA</strong>
            </h1>
            <p style={{ textAlign: "left" }}>
              <li>Recipient of Kartik Ramana <b className="purple">Academic Scholarship </b ></li>
              <li>
                Awarded the <b className="purple">Best Business Plan Award</b> by Ex Chief Information Officer of NASA.
              </li>
              <li>
                Achieved <b className="purple"> 2 million views </b> on Instagram for the Creator Challenge.
              </li>
              <li>
              <b className="purple">Founded </b>healthy foods startup and reached 300+ customers.
              </li>
            </p>
          </Col>
          <Col
            md={3}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px"
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong className="purple">B-Tech</strong>
            </h1>
            <p style={{ textAlign: "left" }}>
              <li>Scored<b className="purple"> 9.1 CGPA </b > received <b className="purple">Silver Medal</b></li>
              <li>
                Represented College on International Stage in <b className="purple">World Cultural Festival</b>.
              </li>
              <li>
                Organised Meditation Workshops for <b className="purple">2000+ </b> students
              </li>
            </p>
          </Col>
          <Col
            md={3}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px"
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              High-<strong className="purple">School</strong>
            </h1>
            <p style={{ textAlign: "left" }}>
              <li>Scored<b className="purple"> 94.4 % </b > in 12th CBSE boards <b className="purple">Silver Medal</b></li>
              <li>Scored<b className="purple"> 99.09 percentile </b > in JEE Mains 2014</li>
              <li>Scored<b className="purple"> 10 CGPA </b > in 10th CBSE boards</li>
            </p>
          </Col>
        </Row>
      </Container>
      <Timeline />
    </Container>
  );
}

export default About;
