import React from "react";
import { useNavigate } from "react-router-dom";
// import { ProjectList } from "../helpers/ProjectList";

const ProjectItem = ({ image, name, id }) => {
  const navigate = useNavigate();
  // const project = ProjectList[url];
  return (
    <div
      className="projectItem"
      onClick={() => {
        navigate("/project/" + id);
      }}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1> {name}</h1>
      {/* <a> {url} </a> */}
    </div>
  );
};

export default ProjectItem;
