import React from "react";
import { SiMinecraft,SiPhpmyadmin,SiMysql } from "react-icons/si" 
import { VscJson } from "react-icons/vsc" 
import { Col, Row } from "react-bootstrap";
import { SiCsharp } from "react-icons/si";
import {
  DiJavascript,
  DiMongodb,
  DiPython,
} from "react-icons/di";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <VscJson />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPhpmyadmin />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMinecraft />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript />
      </Col>
    </Row>
  );
}

export default Techstack;
