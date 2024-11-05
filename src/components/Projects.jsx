import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Project from "./Project.jsx";
import { projects } from "../data/data.js";

const Projects = ({ type }) => {
  const [filterdProjects, setFilterdProjects] = useState([]);

  useEffect(() => {
    if (type !== "all") {
      let filterdData = projects.filter((p) => p.type == type);
      setFilterdProjects(filterdData);
    } else setFilterdProjects(projects);
  }, [type]);

  return (
    <>
      <Container>
        <div className="projects">
          {filterdProjects.length &&
            filterdProjects.map((p) => {
              return <Project key={p.id} project={p} />;
            })}
        </div>
      </Container>
    </>
  );
};

export default Projects;
