var React = require('react');
var {Link} = require('react-router');

var Splash = (props) => {
  return (
    <div className="section" id="landing">
      <div className="content">
        <div className="quote">
          <h4>"Diligence is the mother of good luck."</h4>
          <h5><em> --Benjamin Franklin</em></h5>
        </div>
        <div>
          <h3>rayGreycloud.webDev()</h3>
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
