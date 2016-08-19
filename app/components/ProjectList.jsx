import React from 'react';

const ProjectList = () => {
  return (
    <div className="project-list">

      <div className="col-lg-4 col-sm-6">
        <div className="thumbnail">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/470387/rgb-color-game.png" alt="RGB Color Game"></img>
        </div>
      </div>

      <div className="col-lg-4 col-sm-6">
        <div className="thumbnail">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/470387/weather-app.png" alt="Weather App"></img>
        </div>
      </div>

      <div className="col-lg-4 col-sm-6">
        <div className="thumbnail">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/470387/quote-app.png" alt="Quote Machine"></img>
        </div>
      </div>

      <div className="col-lg-4 col-sm-6">
        <div className="thumbnail">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/470387/ginormous.png" alt="Ginormous"></img>
        </div>
      </div>

    </div>
  )
};

export default ProjectList;
