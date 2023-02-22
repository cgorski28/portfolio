import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import flag from "../../Assets/Projects/Chicago-muni-flag.png";
import map from "../../Assets/Projects/map.jpeg";
import constructionapp from "../../Assets/Projects/constructionapp.jpeg";
import utilitiesapp from "../../Assets/Projects/utilitiesapp.jpeg";
import webchat from "../../Assets/Projects/webchat.jpeg";
import bustracker from "../../Assets/Projects/bustracker.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container className="project-body">
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <Row className="project-subheader">
          <h1 className="project-subheading">Professional</h1>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={constructionapp}
              isBlog={false}
              title="Ecommerce Construction App"
              description="React Native / Typescript application to purchase replacement parts for construction equipment. Led Payments API integration as well as navigation setup and data fetching strategy with React Query. Developed and delivered to Fortune 100 client; available on App Store and Google Play Store"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={utilitiesapp}
              isBlog={false}
              title="Utilities App"
              description="Native iOS / Android app for Chicago residents to pay their utility bills on their mobile phones, check previous usage, and manage account. Included notifications center that allowed customers to manage notification channels (SMS, email, push) and preferences. Available on App Store and Google Play Store."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={webchat}
              isBlog={false}
              title="Care Center Virtual Agent"
              description="Dialogflow / Google Cloud Platform natural language processing virtual agent that lived on all client screens to deflect incoming Care Center requests. Application included custom frontend web chat integration. Agent maintained a 50% containment rate and reduced incoming requests by 44%. "
            />
          </Col>
        </Row>
        <Row className="project-subheader">
          <h1 className="project-subheading">Personal</h1>
        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flag}
              isBlog={false}
              title="Destination Windy City"
              description="Online vanilla Javascript application used to search, submit, rate and review the best attractions in Chicago. Users may create their own accounts to submit or review bars, restaurants and activities. Integration with Google Maps provides exact addresses and map overlays for the items"
              ghLink="https://github.com/cgorski28/destination-windy-cityy"
              demoLink="https://www.destinationwindycity.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={map}
              isBlog={false}
              title="Run Tracker"
              description="React Native application designed to map user's running or walking routes and store route for later use. Includes basic auth as well as custom API connected to Mongo via Mongoose. App is rudimentary and there is still much to be improved, but core functionality is present. "
              ghLink="https://github.com/cgorski28/tracker"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bustracker}
              isBlog={false}
              title="Alexa CTA Tracker"
              description="Amazon Alexa skill to track locations of CTA busses and trains. Simply ask Alexa when the next train or bus is, and she will respond with the appropriate arrival time. Screenshot of route from bus/train to users current location is automatically sent to Alexa app using Google Maps integration. "
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
