import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";

import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="E-Commerce API"
              description="Developed a comprehensive E-Commerce API utilizing Express and MongoDB. Encompasses vital features including user registration, login, category management (add, edit, delete), product management (add, edit, delete), and seamless order creation. Demonstrates expertise in building a fully functional E-Commerce system."
              ghLink=""             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Personal Portfolio"
              description="Design and developed a personal portfolio using React. Seamlessly combined responsive design principles with interactive JavaScript elements, resulting in a captivating showcase of my skills and projects."
              ghLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Peace Interior Website"
              description="Create a dynamic and visually appealing web application using NextJS and Tailwind CSS that includes a Contact Us page with Google Maps integration and a Category page for classifying properties into Residential and Commercial segments."
              ghLink="https://github.com/tushar0454/Peace-Interior"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
