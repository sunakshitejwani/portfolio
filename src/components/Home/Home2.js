import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/sunakshi_tejwani.png";
import Tilt from "react-parallax-tilt";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import pdf from "../../Assets/../Assets/PGP23041_Sunakshi_Tejwani.pdf";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body"> 
              <br />
              <br />I got into product management by accident
              <br />
              <i>
                <b className="purple"> while resolving customer bugs and feedback </b>
              </i>
              <br />
              during development days I found that I love working with users.
              <br />
              I like listening to their feedback and their pain points. &nbsp;
              <br />
              <i>
              <b className="purple">This fueled my passion to find out the root cause of any issues at hand. </b>
              </i>
      
            </p>
            <div style={{ paddingLeft: 50, textAlign: "left" }}>
                <Button
                  variant="primary"
                  href={pdf}
                  target="_blank"
                  style={{ maxWidth: "250px" }}
                >
                  <AiOutlineDownload />
                  &nbsp; Download Resume
                </Button>
              </div>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid imgBorder" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sunakshitejwani"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/sunakshitejwani"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sunakshitejwani/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/the_humming_snitch"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
