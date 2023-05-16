import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogCard from "./BlogCard";
import InstagramEmbed from "react-instagram-embed";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
          Here are the top viewed posts of my Instagram page, with over 2
          million views.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="blog-card">
            {/* <BlogCard
              imgPath={chatify}
              isBlog={false}
              title="Project 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pellentesque auctor congue. Sed tincidunt ullamcorper tellus sed euismod. Nulla vitae odio quam. Fusce id dui a tortor hendrerit varius. Nunc eu justo sit amet urna convallis gravida. Quisque placerat velit leo, id lobortis velit luctus non. Ut varius nibh justo, blandit placerat quam volutpat ut. Nunc at efficitur ante. Etiam ullamcorper mollis nisl. Quisque in consectetur felis, porta dapibus urna. Maecenas accumsan laoreet iaculis."
              ghLink=""
              demoLink=""
            /> */}

            <blockquote
              className="instagram-media"
              data-instgrm-captioned
              data-instgrm-permalink="https://www.instagram.com/reel/Ch7ZvJ_u8RD/?utm_source=ig_embed&amp;utm_campaign=loading"
              data-instgrm-version="14"
              style={{
                background: "#FFF",
                border: 0,
                borderRadius: "3px",
                boxShadow:
                  "0 0 1px 0 rgba(0,0,0,0.5) 0 1px 10px 0 rgba(0,0,0,0.15)",
                margin: "1px",
                maxWidth: "540px",
                minWidth: "326px",
                padding: 0,
                width: "99.375%"
              }}
            ></blockquote>
          </Col>

          <Col md={4} className="blog-card">
            {/* <BlogCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Project 2"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pellentesque auctor congue. Sed tincidunt ullamcorper tellus sed euismod. Nulla vitae odio quam. Fusce id dui a tortor hendrerit varius. Nunc eu justo sit amet urna convallis gravida. Quisque placerat velit leo, id lobortis velit luctus non. Ut varius nibh justo, blandit placerat quam volutpat ut. Nunc at efficitur ante. Etiam ullamcorper mollis nisl. Quisque in consectetur felis, porta dapibus urna. Maecenas accumsan laoreet iaculis."
              ghLink=""
              demoLink=""
            /> */}
          </Col>

          <Col md={4} className="blog-card">
            {/* <BlogCard
              imgPath={editor}
              isBlog={false}
              title="Project 3"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pellentesque auctor congue. Sed tincidunt ullamcorper tellus sed euismod. Nulla vitae odio quam. Fusce id dui a tortor hendrerit varius. Nunc eu justo sit amet urna convallis gravida. Quisque placerat velit leo, id lobortis velit luctus non. Ut varius nibh justo, blandit placerat quam volutpat ut. Nunc at efficitur ante. Etiam ullamcorper mollis nisl. Quisque in consectetur felis, porta dapibus urna. Maecenas accumsan laoreet iaculis."
              ghLink=""
              demoLink=""              
            /> */}
          </Col>

          <Col md={4} className="blog-card">
            {/* <BlogCard
              imgPath={leaf}
              isBlog={false}
              title="Project 4"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pellentesque auctor congue. Sed tincidunt ullamcorper tellus sed euismod. Nulla vitae odio quam. Fusce id dui a tortor hendrerit varius. Nunc eu justo sit amet urna convallis gravida. Quisque placerat velit leo, id lobortis velit luctus non. Ut varius nibh justo, blandit placerat quam volutpat ut. Nunc at efficitur ante. Etiam ullamcorper mollis nisl. Quisque in consectetur felis, porta dapibus urna. Maecenas accumsan laoreet iaculis."
              ghLink=""
              demoLink=""
            /> */}
          </Col>

          <Col md={4} className="blog-card">
            {/* <BlogCard
              imgPath={suicide}
              isBlog={false}
              title="Project 5"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pellentesque auctor congue. Sed tincidunt ullamcorper tellus sed euismod. Nulla vitae odio quam. Fusce id dui a tortor hendrerit varius. Nunc eu justo sit amet urna convallis gravida. Quisque placerat velit leo, id lobortis velit luctus non. Ut varius nibh justo, blandit placerat quam volutpat ut. Nunc at efficitur ante. Etiam ullamcorper mollis nisl. Quisque in consectetur felis, porta dapibus urna. Maecenas accumsan laoreet iaculis."
              ghLink=""
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            /> */}
          </Col>

          <Col md={4} className="blog-card">
            {/* <BlogCard
              imgPath={emotion}
              isBlog={false}
              title="Project 6"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pellentesque auctor congue. Sed tincidunt ullamcorper tellus sed euismod. Nulla vitae odio quam. Fusce id dui a tortor hendrerit varius. Nunc eu justo sit amet urna convallis gravida. Quisque placerat velit leo, id lobortis velit luctus non. Ut varius nibh justo, blandit placerat quam volutpat ut. Nunc at efficitur ante. Etiam ullamcorper mollis nisl. Quisque in consectetur felis, porta dapibus urna. Maecenas accumsan laoreet iaculis."
              ghLink=""
              // demoLink=""      <--------Please include a demo link here 
            /> */}
            <blockquote
              className="instagram-media"
              data-instgrm-captioned
              data-instgrm-permalink="https://www.instagram.com/reel/Ch7ZvJ_u8RD/?utm_source=ig_embed&amp;utm_campaign=loading"
              data-instgrm-version="14"
              style={{
                background: "#FFF",
                border: 0,
                borderRadius: "3px",
                boxShadow:
                  "0 0 1px 0 rgba(0,0,0,0.5) 0 1px 10px 0 rgba(0,0,0,0.15)",
                margin: "1px",
                maxWidth: "540px",
                minWidth: "326px",
                padding: 0,
                width: "99.375%"
              }}
            ></blockquote>{" "}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Blogs;
