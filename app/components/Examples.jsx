var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className='text-center page-title'>Examples</h1>
      <div className="content">
        <div>
          <h1>Project Portfolio</h1>
        </div>
        <div className="container">
          <div className="row">
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
          </div>

          <div className="row">
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
        </div>

        <div>
          <h3><i className="fa fa-code"></i> More of My Code:</h3>
          <ul>
            <li>
              <a title="@raygreycloud's GitHub Profile" href="https://github.com/rayGreycloud" target="_blank" className="btn btn-primary btn-lg">
                <i className="fa fa-github-square"></i>
                <span>My GitHub Profile</span>
              </a>
            </li>
            <li>
              <a title="raygreycloud's code portfolio" href="http://www.freecodecamp.com/raygreycloud" target="_blank" className="btn btn-primary btn-lg">
                <span>My freeCodeCamp(<i className="fa fa-fire"></i>) portfolio</span>
              </a>
            </li>
            <li>
              <a title="Ray Greycloud's CodePen" href="http://codepen.io/rayGreycloud" target="_blank" className="btn btn-primary btn-lg">
                  <i className="fa fa-codepen"></i>
                  <span> My CodePen Portfolio</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

    </div>

  )
};
module.exports = Examples;
