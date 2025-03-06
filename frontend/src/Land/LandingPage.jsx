import React from "react";
import Header from "../Header/Header";
import Land from "./Land";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import { Container, Row, Col, Button } from "react-bootstrap";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <>
      <Header />

      {/* Hero Section with 3D Background */}
      <div className="hero-container position-relative text-center text-light">
        <Land />
        <Container className="hero-content position-absolute top-50 start-50 translate-middle">
          <h1 className="fw-bold">Welcome to IntelliClass System</h1>
          <p className="fs-4">Smart, Secure, and Efficient Classroom Management</p>
          <Button variant="success" size="lg" onClick={() => navigate("/about")}>
            <i className="bi bi-info-circle me-2"></i> Learn More
          </Button>
        </Container>
      </div>

      {/* Features Section */}
      <Container className="features-container text-center my-5">
        <h2 className="fw-bold">Why Choose IntelliClass?</h2>
        <Row className="mt-4">
          <Col md={6} lg={3} className="p-3">
            <i className="bi bi-person-badge-fill fs-1 text-success"></i>
            <p className="mt-2">AI-Powered Face Recognition</p>
          </Col>
          <Col md={6} lg={3} className="p-3">
            <i className="bi bi-phone fs-1 text-primary"></i>
            <p className="mt-2">Remote Access via Web & Mobile</p>
          </Col>
          <Col md={6} lg={3} className="p-3">
            <i className="bi bi-shield-lock-fill fs-1 text-danger"></i>
            <p className="mt-2">Motion Sensors & Phone Detection</p>
          </Col>
          <Col md={6} lg={3} className="p-3">
            <i className="bi bi-bell-fill fs-1 text-warning"></i>
            <p className="mt-2">Real-Time Alerts for Safety</p>
          </Col>
        </Row>
      </Container>

      {/* Technology Stack */}
      <Container className="tech-container text-center my-5">
        <h2 className="fw-bold">Technology Stack</h2>
        <p><strong>Hardware:</strong> <i className="bi bi-cpu"></i> Raspberry Pi, Webcam, Fire & Noise Sensors.</p>
        <p><strong>Software:</strong> <i className="bi bi-code-slash"></i> Python, React, PHP, MySQL, Flutter (Mobile App).</p>
      </Container>

      {/* CTA Section */}
      <Container className="cta-container text-center my-5">
        <h2 className="fw-bold">Join the Future of Smart Classrooms!</h2>
        <Button variant="primary" size="lg" onClick={() => navigate("/contact")}>
          <i className="bi bi-rocket-takeoff-fill me-2"></i> Get Started
        </Button>
      </Container>
    </>
  );
}

export default LandingPage;
