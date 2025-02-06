import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nithish Kumar </span>
            from <span className="purple"> Tamilnadu, India.</span>
            <br />
            II am passionate about Machine Learning models and AI technologies, constantly exploring ways to push innovation in these fields.
            <br />
            I have completed B.Tech. in Artificial Intelligence and Data Science at MKCE, 
            Karur.
            <br />
            <br />
            Apart from AI research, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling in bike
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring AI research papers
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Striving to innovate and build solutions that impact the world!"{" "}
          </p>
          <footer className="blockquote-footer">Nithish Kumar R</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
