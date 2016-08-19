import React from 'react';

const CodeLinks = () => {
  return (
    <div id="code-links">
      <h3 className="section-title"><i className="fa fa-code"></i> More of My Code:</h3>
      <ul className="code_links">
        <li>
          <a title="@raygreycloud's GitHub Profile" href="https://github.com/rayGreycloud" target="_blank" className="button hollow primary">
            <i className="fa fa-github-square"></i>
            <span>My GitHub Profile</span>
          </a>
        </li>

        <li>
          <a title="raygreycloud's code portfolio" href="http://www.freecodecamp.com/raygreycloud" target="_blank" className="button hollow primary">
            <span>My freeCodeCamp(<i className="fa fa-fire"></i>) portfolio</span>
          </a>
        </li>

        <li>
          <a title="Ray Greycloud's CodePen" href="http://codepen.io/rayGreycloud" target="_blank" className="button hollow primary">
              <i className="fa fa-codepen"></i>
              <span> My CodePen Portfolio</span>
          </a>
        </li>

      </ul>
    </div>
  );
}

export default CodeLinks;
