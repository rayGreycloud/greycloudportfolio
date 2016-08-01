var React = require('react');
var {Link} = require('react-router');

var Splash = (props) => {
  return (
    <div>
      <h1>(rayGreycloud, webDev) => code</h1>
      <div className="container section" id="landing">
        <div className="content">
          <div className="jumbotron">
            <h2>"Diligence is the mother of good luck."</h2>
            <h3><em> --Benjamin Franklin</em></h3>
          </div>
          <p>
            I'm Ray, a web developer in Portland. I believe diligence and attention to detail are essential for good web app development. Especially going forward as the technologies and toolchains become more complicated and interconnected.
          </p>
          <p>
            <a className="button hollow primary" href="#about">More about me</a>
          </p>
        </div>
      </div>
    </div>
  )
};


module.exports = Splash;
