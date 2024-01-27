import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/1.png",
    tag: ["All", "web"],
  },
  {
    id: 1,
    title: "Photography Portfolio Website",
    description: "Project 2 description",
    image: "/images/projects/2.png",
    tag: ["All", "web"],
  },
  ,
  {
    id: 1,
    title: "E-commerce Application",
    description: "Project 3 description",
    image: "/images/projects/3.png",
    tag: ["All", "web"],
  },
];

const ProjectsSection = ({}) => {
  return (
    <div>
      <h2>Projects</h2>
      <div>
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
