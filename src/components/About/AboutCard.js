import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Lakshmi Shravani K </span>
            from <span className="purple"> Bangalore, India.</span>
            <br /> I am a final year student pursuing a Degree in Bachelor of
            Engineering at Dayananda Sagar College of Engineering, Bangalore.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Drawing
            </li>
            <li className="about-activity">
              <ImPointRight /> Teaching
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>"Always Trust the God.!" </p>
          <footer className="blockquote-footer">Shravani</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
