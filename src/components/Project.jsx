import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Project = ({ project }) => {
  return (
    <>
      <div class="project">
        <div class="wrapper">
          <h1>{project.name}</h1>
          <div class="banner-image">
            <img src={project.img} alt="dd" />
          </div>
          <p>{project.desc}</p>
        </div>
        <div class="button-wrapper">
          <Link to={project.github} target="_blanc" class="button btn outline">
            Code source
          </Link>
          <Link to={project.preview} target="_blanc" class="button btn fill">
            Web preview
          </Link>
        </div>
      </div>
    </>
  );
};

export default Project;
