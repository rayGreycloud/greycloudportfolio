import React from 'react';

const About = () => {
  return (
    <div id="about" className="wrapper">
      <div>
        <h2 className='text-center page-title'>
          About Me
        </h2>
        <h3><em>Coding is My Passion</em></h3>
        <p>After years of working in the business world, I decided to leave it behind for coding and web development. Why? Because coding was my passion in high school, something I enjoyed doing for its own sake. But in college I took a more traditional path that promised security and success. However, work became something I did for money and it never fulfilled me the way working with code does.</p>

        <p>Last year, I realized that only following my passion would give me satisfaction and true success. So I dedicated myself to learning to code and making it my profession. And since then I've spent many, many hours and many months learning web development. I've completed several online courses covering basics like html, css and jQuery as well as more advanced technologies such as Node.js, Express and React.</p>
      </div>

      <div>
        <h4>Tools = &#123;</h4>
          <ul className="tools">

            <li>Basics: &#123; HTML5, CSS3, Javascript, ES2015 &#125;</li>
            <li>Front-end: &#123; jQuery, Bootstrap, Foundation &#125;</li>
            <li>Back-end: &#123; npm, NodeJs, Express &#125;</li>
            <li>Full-stack: &#123; React, Redux and Meteor &#125;</li>
            <li>DataBase: &#123; MongoDB, FireBase and SQLite &#125;</li>
            <li>Dev Tools: &#123; Webpack, Babel, Karma, Mocha &#125;</li>
          </ul>
        <h4>&#125;</h4>
      </div>
    </div>
  )
};

export default About;
