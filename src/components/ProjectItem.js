import React from "react";

const ProjectItem = ({ image, name, url }) => {
  return (
    <div className="projectItem">
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1> {name}</h1>
      {/* <a> {url} </a> */}
    </div>
  );
};

export default ProjectItem;
