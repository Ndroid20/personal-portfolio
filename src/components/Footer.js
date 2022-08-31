import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.linkedin.com/in/anthony-romero-jorge/">
          <LinkedInIcon />
        </a>
        <a href="https://github.com/Ndroid20">
          <GitHubIcon />
        </a>
      </div>
      <p> &copy; 2022 https://anthony-romero-jorge.netlify.app/</p>
    </div>
  );
};

export default Footer;
