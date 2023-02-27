import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiFigma,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiXcode,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", marginBottom: 100 }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <div className="test-hover">VSCode</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
        <div className="test-hover">Figma</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiXcode />
        <div className="test-hover">XCode</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <div className="test-hover">Postman</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
        <div className="test-hover">Heroku</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
