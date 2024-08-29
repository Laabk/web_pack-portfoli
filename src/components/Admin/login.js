import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        if (result.data === "Success") {
          alert("Login successful!");
          navigate("/home");
        } else {
          alert("Incorrect password! Please try again.");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row className="justify-content-center align-items-center vh-100">
          <Col md={8} className="quote-card-view bg-white p-5 rounded">
            <h2 className="mb-4 text-primary text-center">Login</h2>
            <form onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Col md={4} className="text-end">
                  <label htmlFor="email" className="form-label">
                    <strong>Email Address</strong>
                  </label>
                </Col>
                <Col md={8}>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Enter Email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={4} className="text-end">
                  <label htmlFor="password" className="form-label">
                    <strong>Password</strong>
                  </label>
                </Col>
                <Col md={8}>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="Enter Password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Col>
              </Row>
              <Row>
                <Col md={{ span: 8, offset: 4 }}>
                  <button type="submit" className="btn btn-primary w-100">
                    Login
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Login;
