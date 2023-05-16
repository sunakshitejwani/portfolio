import React from "react";
import { Col, Row } from "react-bootstrap";

import {
  FaUsers
} from "react-icons/fa";

import {
  MdDesignServices,
  MdManageAccounts
} from "react-icons/md";

import {
  BsClipboardData
} from "react-icons/bs";

import {
  SiMicrostrategy,
  SiPowerbi,
  SiAdobephotoshop
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px"}}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrostrategy />
        <p style={{fontSize:"16px" }}>Go-To-Market Strategy</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <MdManageAccounts />
        <p style={{fontSize:"16px" }}>Product Management</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <BsClipboardData />
        <p style={{fontSize:"16px" }}>Data Analysis</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <MdDesignServices />
        <p style={{fontSize:"16px" }}>Product Design</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaUsers/>
        <p style={{fontSize:"16px" }}>User Interface/User Experience</p>
      </Col>
    </Row>
  );
}

export default Techstack;
