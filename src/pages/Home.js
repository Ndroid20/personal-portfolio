import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, my name is Anthony Romero-Jorge</h2>
        {/* Fix this css */}
        <br />
        <br />
        <div className="prompt">
          <p>
            A new software developer with a passion for learning and creating.{" "}
          </p>
          <a href="https://www.linkedin.com/in/anthony-romero-jorge/">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/Ndroid20">
            <GitHubIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>
              {" "}
              <b>Front-End</b>
            </h2>
            <span>ReactJS, HTML, CSS, BootStrap, and MaterialUI</span>
          </li>
          <li className="item">
            <h2>
              <b>Back-End</b>
            </h2>
            <span>NodeJS, ExpressJS, MySQL, and MongoDB</span>
          </li>
          <li className="item">
            <h2>
              <b>Languages</b>
            </h2>
            <span>JavaScript and Java</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
