import React, { Component } from 'react';
import {Link} from 'react-router';
import ProjectList from './ProjectList.jsx';
import CodeLinks from './CodeLinks.jsx';

export class Projects extends Component {
  render() {
    return (
      <div>
        <h2 className='text-center page-title'>Projects</h2>
        <ProjectList />
        <CodeLinks />
      </div>
    );
  }
}

export default Projects;
