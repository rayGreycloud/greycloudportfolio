import React from 'react';
import { Links } from 'react-router';
import projectsData from './projects-data';

const ProjectList = () => {
  const projectItems = projectsData.map((project) => {
      return (
        <div className="col-md-6 list-group-item">
          <a href={project.codeURL}>
            <div className="thumbnail">
              <img src={project.imageURL}></img>
              <div className="caption">
                <h4>{project.name}</h4>
                <p>{project.re}</p>
              </div>
            </div>
          </a>
        </div>
      );
  });

  return (
    <div className="project-list list-group">
      {projectItems}
    </div>
  );
};

export default ProjectList;
