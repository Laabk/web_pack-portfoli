import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Laab-Garia David </span>
            from <span className="purple"> Northern Part, Ghana.</span>
            <br />
            I am currently an intern engineer and a full stack software developer.
            <br />
            I have a bsc degree  in petroleum and also persuing my masters.
            <br />
            <br />
            Apart from working, i love 
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Coding
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New things
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "If I cant do great things, I can do small things in a great"{" "}
          </p>
          <footer className="blockquote-footer">Laab</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;