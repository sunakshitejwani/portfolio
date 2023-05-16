import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogCard from "./BlogCard";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import { InstagramEmbed } from "react-social-media-embed";

function Blogs() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent{" "}
          <strong className="purple">Art Content on Instagram </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are the top viewed posts of my Instagram page, with over 3
          million views.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="blog-card">
            <InstagramEmbed
              url="https://www.instagram.com/reel/Ch7ZvJ_u8RD/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
              width={328}
              height={568}
            />
          </Col>

          <Col md={4} className="blog-card">
            <InstagramEmbed
              url="https://www.instagram.com/reel/CqaVRCILev5/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
              width={328}
              height={568}
            />
          </Col>

          <Col md={4} className="blog-card">
            <InstagramEmbed
              url="https://www.instagram.com/reel/Cjz_uv0JYvz/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
              width={328}
              height={568}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="blog-card">
            <InstagramEmbed
              url="https://www.instagram.com/reel/Ci2sleiKo6i/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
              width={328}
              height={568}
            />
          </Col>

          <Col md={4} className="blog-card">
            <InstagramEmbed
              url="https://www.instagram.com/reel/CjFEOkAL0O8/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
              width={328}
              height={568}
            />
          </Col>

          <Col md={4} className="blog-card">
            <InstagramEmbed
              url="https://www.instagram.com/reel/Cjkt7Rurqpg/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
              width={328}
              height={568}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="blog-card">
            <InstagramEmbed
              url="https://www.instagram.com/reel/Cjc-Q5evxZJ/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
              width={328}
              height={568}
            />
          </Col>

          <Col md={4} className="blog-card">
            <InstagramEmbed
              url="https://www.instagram.com/reel/CiseVvXgsqA/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
              width={328}
              height={568}
            />
          </Col>

          <Col md={4} className="blog-card">
            <InstagramEmbed
              url="https://www.instagram.com/reel/Cibs28gujXr/"
              width={328}
              height={568}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Blogs;
