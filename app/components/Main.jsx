var React = require('react');
var Nav = require('Nav');
import Footer from './footer';

var Main = (props) => {
  return (
    <div className='wrapper'>
      <Nav />
      <div className='container'>
        {props.children}
      </div>
    </div>
  );
};

module.exports = Main;
