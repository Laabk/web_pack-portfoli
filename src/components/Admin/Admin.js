import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import homeLogo from "../../Assets/home-main.svg";

function Admin({ setIsAuthenticated }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Mock login logic (hardcoded for this example)
    if (email === "laabkdavid@gmail.com" && password === "0546407004david") {
      setIsAuthenticated(true);
      navigate("/dashboard"); // Redirect to dashboard on successful login
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <Container fluid className="about-section" style={{ position: "relative" }}>
      <img
        src={homeLogo}
        alt="Home"
        style={{
          width: "350px", // Increased size of the image
          position: "absolute",
          top: "100px", // Move the image down a bit
          right: "20px", // Align to the right
        }}
      />
      <Container>
        <Row style={{ justifyContent: "center", paddingTop: "150px" }}>
          <Col md={12} style={{ textAlign: "center", marginBottom: "30px" }}>
            <h1 style={{ fontSize: "2.5em", color: "white" }}>
              Admin <strong className="purple">Panel</strong>
            </h1>
            <p style={{ fontSize: "1.2em", color: "white", marginBottom: "0" }}>
              Welcome to the admin panel.
            </p>
            <p style={{ fontSize: "1.2em", color: "white" }}>
              Here, you can manage users, update content, and configure system settings efficiently.
            </p>
          </Col>
        </Row>

        {/* Login Form Positioned Below the "Admin Panel" Section */}
        <Row style={{ justifyContent: "center" }}>
          <Col
            md={6}
            style={{
              paddingTop: "50px",
              paddingBottom: "50px",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: "8px",
            }}
          >
            <h2 style={{ textAlign: "center", color: "white" }}>Login</h2>
            <Form onSubmit={handleLogin}>
              <Row className="align-items-center">
                <Col md={12}>
                  <Form.Group controlId="email">
                    <Form.Label>
                      <strong>Email</strong>
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter Email"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={12} style={{ marginTop: "15px" }}>
                  <Form.Group controlId="password">
                    <Form.Label>
                      <strong>Password</strong>
                    </Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter Password"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={12} style={{ marginTop: "30px" }}>
                  <Button
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: "100%" }}
                  >
                    Login
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Admin;
