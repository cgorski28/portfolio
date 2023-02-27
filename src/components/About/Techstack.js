import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiOutlineConsoleSql } from "react-icons/ai";
import {
  DiCss3,
  DiGoogleCloudPlatform,
  DiHtml5,
  DiJsBadge,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import {
  SiAzuredevops,
  SiFirebase,
  SiJenkins,
  SiJest,
  SiTypescript,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJsBadge />
        <div className="test-hover">Javascript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <div className="test-hover">NodeJS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <div className="test-hover">React</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <div className="test-hover">MongoDB</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
        <div className="test-hover">Typescript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJest />
        <div className="test-hover">Jest</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGoogleCloudPlatform />
        <div className="test-hover">Google Cloud Platform</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAws />
        <div className="test-hover">AWS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <div className="test-hover">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <div className="test-hover">Firebase</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <div className="test-hover">HTML5</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <div className="test-hover">CSS3</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJenkins />
        <div className="test-hover">Jenkins</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAzuredevops />
        <div className="test-hover">Azure DevOps</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiOutlineConsoleSql />
        <div className="test-hover">SQL</div>
      </Col>
    </Row>
  );
}

export default Techstack;
