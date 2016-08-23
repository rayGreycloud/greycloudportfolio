import React from 'react';
import { Links } from 'react-router';
import projectsData from './projects-data';

const ProjectList = (props) => {
  const projectItems = projectsData.map((project) => {
      return (
        <div key={project.name} className="col-md-6 list-group-item">
          <div className="thumbnail">
            <img src={project.imageURL}></img>
            <div className="caption">
              <h4>{project.name}</h4>
              <p>{project.re}</p>
              <a href={project.appURL}>Live App</a>
              <a href={project.codeURL}>GitHub Repo</a>
            </div>
          </div>
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
