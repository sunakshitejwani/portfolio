import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/sunakshi_home_page_doodle.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Tilt from "react-parallax-tilt";
import pdf from "../../Assets/../Assets/PGP23041_Sunakshi_Tejwani.pdf";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> SUNAKSHI TEJWANI</strong>
              </h1>

              <div style={{ paddingLeft:50, paddingBottom:30, textAlign: "left" }}>
                <Type />
              </div>
              
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <Tilt>
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid imgHome"
                  style={{ maxHeight: "450px" }}
                />
              </Tilt>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
