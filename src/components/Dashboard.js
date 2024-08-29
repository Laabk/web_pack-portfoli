import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Dashboard() {
  const tasks = [
    "Create New Project",
    "Reset User Passwords",
    "Edit My Information",
    // Add more tasks here
  ];
return (
    <Container fluid className="about-section" style={{ paddingTop: "50px", paddingBottom: "50px" }}>
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={8}
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: "8px",
              padding: "30px",
              textAlign: "center"
            }}
          >
            <h2 style={{ color: "white", marginBottom: "30px" }}>Welcome to Your Dashboard</h2>
            <h3 style={{ color: "white", marginBottom: "20px" }}>Things to Do:</h3>
            <ul style={{ listStyleType: "none", paddingLeft: "0", color: "white" }}>
              {tasks.map((task, index) => (
                <li
                  key={index}
                  style={{
                    marginBottom: "10px",
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    padding: "10px",
                    borderRadius: "4px",
                  }}
                >
                  {task}
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Dashboard;
