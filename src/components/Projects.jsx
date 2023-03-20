import React from "react";
import { BsGithub, BsBrowserChrome } from "react-icons/bs";
import data from "../assets/data.json";
const Projects = () => {
  return (
    <div id="projects">
      {data.projects.map((i) => (
        <ProjectComponent
          key={i.date}
          title={i.title}
          description={i.description}
          github={i.github}
          image={i.imgSrc}
          live={i.liveUrl}
        />
      ))}
    </div>
  );
};

const ProjectComponent = ({ title, description, github, live, image }) => {
  return (
    <div className="projectComponent">
      <img src={image} alt={title} />
      <div>
        <a href={github} target="blank">
          Github Repo <BsGithub />
        </a>
        <a href={live} target="blank">
          Live Demo <BsBrowserChrome />
        </a>
      </div>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default Projects;
