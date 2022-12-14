import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import "../styles/ProjectDisplay.css";

const ProjectDisplay = () => {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1>{project.name}</h1>
      {/* eslint-disable-next-line */}
      <img src={project.image} />
      <br />
      <p>
        <b>Link:</b> <a href="{project.url}">{project.url}</a>
      </p>
    </div>
  );
};

export default ProjectDisplay;
