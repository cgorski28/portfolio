import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, I'm <span className="purple">Cole Gorski, </span>
            a Chicago-based web and mobile software engineer.
            <br />
            <br />I graduated from Ohio State University in 2019 where I studied
            <span className="purple"> Computer Science</span> and{" "}
            <span className="purple">Business</span>, and have about 4 years of
            experience as a professional developer.
            <br />
            <br />
            Currently I'm with <span className="purple">Accenture</span> as a
            Frontend Development Specialist within the Digital Products group,
            where I work with our clients to develop their customer-facing
            applications.
            <br />
            <br />I enjoy using modern Javascript frameworks to create beautiful
            applications that solve{" "}
            <span className="purple">specific problems,</span> and am always on
            the lookout for new technologies to learn.
            <br />
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
