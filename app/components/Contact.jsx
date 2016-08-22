import React from 'react';
import {Link} from 'react-router';

const Contact = () => {
  return (
    <div id="contact">

      <div>
        <h2 className='text-center page-title'>
          Contact Me
        </h2>
        <p>Let's talk about what I can do for you. Send me a message, and we'll set up a time to chat.</p>
      </div>

      <div className="content">
        <ul className="social_links">

          <li className="email">
            <a title="Email Me"
              className="btn btn-default" href="mailto:rayGreycloud@gmail.com" target="_blank">
              <i className="fa fa-envelope-o"></i>
              <span> Email Me</span>
            </a>
          </li>

          <li>
            <a title="Tweet Me"
              className="btn btn-default"
              href="https://twitter.com/rayGreycloud" target="_blank">
              <i className="fa fa-twitter-square"></i>
              <span> Tweet Me</span>
            </a>
          </li>

        </ul>
      </div>

    </div>
  );
};

export default Contact;
