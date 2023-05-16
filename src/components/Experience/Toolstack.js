import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
} from "react-icons/si";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";

import {
  TbSql
} from "react-icons/tb";

import {
  AiFillFileExcel
} from "react-icons/ai";

import {
  FiFigma
} from "react-icons/fi";

import {
  SiMicrostrategy,
  SiPowerbi,
  SiAdobephotoshop
} from "react-icons/si";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FiFigma />
        <p style={{fontSize:"16px" }}>Figma</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi />
        <p style={{fontSize:"16px" }}>PowerBi</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillFileExcel />
        <p style={{fontSize:"16px" }}>Excel</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop />
        <p style={{fontSize:"16px" }}>Photoshop</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
        <p style={{fontSize:"16px" }}>C++</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p style={{fontSize:"16px" }}>Javascript</p>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p style={{fontSize:"16px" }}>Nodejs</p>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p style={{fontSize:"16px" }}>React</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <p style={{fontSize:"16px" }}>MongoDB</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p style={{fontSize:"16px" }}>Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p style={{fontSize:"16px" }}>Python</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <TbSql />
        <p style={{fontSize:"16px" }}>SQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
        <p style={{fontSize:"16px" }}>Linux</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p style={{fontSize:"16px" }}>Visual Studio Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p style={{fontSize:"16px" }}>Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
        <p style={{fontSize:"16px" }}>Heroku</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
