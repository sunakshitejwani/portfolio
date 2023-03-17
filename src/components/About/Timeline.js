import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import timelineData from "./TimelineData";

function Timeline() {
  const TimelineItem = ({ data }) => (
    <div className="timeline-item">
      <div className="timeline-item-content">
        <span className="tag" style={{ background: data.category.color }}>
          {data.category.tag}
        </span>
        <b style={{ opacity:0.8,fontSize:"0.9em" }}>{data.date}</b>
        <city>{data.city}</city>
        <p>{data.text}
        <br />
        <i style={{ opacity:0.6,fontSize:"0.9em" }}>{data.details}</i>
        </p>
        <span className="circle" />
      </div>
    </div>
  );
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        My brief <strong className="purple">History</strong>
      </h1>
      <div className="timeline-container">
        {timelineData.map((data, idx) => (
          <TimelineItem data={data} key={idx} />
        ))}
      </div>
    </Row>
  );
}

export default Timeline;
