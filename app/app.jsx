import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import Main from 'Main';
import Splash from 'Splash';
import About from 'About';
import Projects from 'Projects';
import Contact from 'Contact';

// load foundation
$(document).foundation();

// app css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  // Add path to server if using BrowserHistory
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}></Route>
      <Route path="projects" component={Projects}></Route>
      <Route path="contact" component={Contact}></Route>
      <IndexRoute component={Splash}/>
    </Route>
  </Router>,
  document.querySelector('.container')
);
