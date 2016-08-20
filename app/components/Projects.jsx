import React, { Component } from 'react';
import {Link} from 'react-router';
import ProjectList from './ProjectList.jsx';
import CodeLinks from './CodeLinks.jsx';

export class Projects extends Component {
  render() {
    return (
      <div className="container">
        <h2 className='text-center page-title'>Projects</h2>
        <div>
          <ProjectList />
        </div>

        <div className="container">
          <CodeLinks />
        </div>
      </div>
    );
  }
}

export default Projects;
