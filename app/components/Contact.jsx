var React = require('react');
var {Link} = require('react-router');

var Contact = (props) => {
  return (
    <div>
      <h1 className='text-center page-title'>Contact Me</h1>
      <p>Let's talk about what I can do for you:</p>
      <div className="container section" id="contact">
        <div className="content">
          <h2>Contact Me</h2>
          <div>
           <a title="Email Me" href="mailto:rayGreycloud@gmail.com" target="_blank" class="btn btn-primary btn-lg"><i class="fa fa-envelope-o"></i><span> Email Me</span></a>
  
           <a title="Tweet Me" href="https://twitter.com/rayGreycloud" target="_blank" class="btn btn-primary btn-lg">
             <i class="fa fa-twitter-square"></i>
             <span>Tweet Me</span>
            </a>
          </div>

        </div>
      </div>
    </div>

  )
};
module.exports = Contact;
