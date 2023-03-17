import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank" style={{margin:"10px"}}>
          {/* <BsGithub /> &nbsp; */}
          {props.isBlog ? "Blog" : "Project Link"}
        </Button><br />
        {props.userPersona ? <Button variant="secondary" href={props.userPersona} target="_blank" style={{margin:"10px"}}>User Persona</Button> : ""} <br />
        {props.empathyMap ? <Button variant="secondary" href={props.empathyMap} target="_blank" style={{margin:"10px"}}>Empathy Map</Button>: ""}<br />
        {props.userJourney ? <Button variant="secondary" href={props.userJourney} target="_blank" style={{margin:"10px"}}>User Journey</Button>: ""}<br />

        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
