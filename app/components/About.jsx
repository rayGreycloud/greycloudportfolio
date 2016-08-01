var React = require('react');
var {Link} = require('react-router');

var About = (props) => {
  return (
    <div>
      <h1 className='text-center page-title'>About Me</h1>
        <div className="container section" id="about">
          <div className="content">
            <h2>Coding is My Passion</h2>
            <div className="blurb">
              <p>After years of working in the business world, I decided to leave it behind for coding and web development. Why? Because coding was my passion in high school, something I enjoyed doing for its own sake. But in college I took a more traditional path that promised security and success. However, work became something I did for money and it never fulfilled me the way working with code does.</p>
              <p>Last year, I realized that only following my passion would give me satisfaction and true success. So I dedicated myself to learning to code and making it my profession. And since then I've spent many, many hours and many months learning web development. I've completed several online courses covering basics like html, css and jQuery as well as more advanced technologies such as Node.js, Express and React.</p>
            </div>
            <div>
              <h2>Technologies and Tools</h2>
              <ul>
                <li>Basics: HTML5, CSS3, Javascript, ES2015</li>
                <li>Front-end: jQuery, Bootstrap, Foundation</li>
                <li>Back-end: NodeJs, Express, npm</li>
                <li>Full-stack: React, JSX and Redux </li>
                <li>DataBase: MongoDB, FireBase and SQLite </li>
                <li>Dev Tools: Webpack, Babel, Karma, Mocha</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  )
};


module.exports = About;
