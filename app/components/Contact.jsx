import React from 'react';
import {Link} from 'react-router';

const Contact = () => {
  return (
    <div>
      <h2 className='text-center page-title'>Contact Me</h2>
      <p>Let's talk about what I can do for you. Send me a message, and we'll set up a time to chat.</p>
      <div className="section" id="contact">
        <div className="content">

          <ul className="social_links">
            <li className="email">
              <a title="Email Me" href="mailto:rayGreycloud@gmail.com" target="_blank" className="btn btn-primary btn-lg">
                <button className="button hollow primary">
                  <i className="fa fa-envelope-o"></i>
                  <span> Email Me</span>
                </button>
              </a>
            </li>

            <li>
              <a title="Tweet Me" href="https://twitter.com/rayGreycloud" target="_blank" className="btn btn-primary btn-lg">
                <button className="button hollow primary">
                <i className="fa fa-twitter-square"></i>
                <span> Tweet Me</span>
                </button>
              </a>
            </li>
            </ul>

        </div>
      </div>
    </div>
  );
};

export default Contact;
