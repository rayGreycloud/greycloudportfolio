import React from 'react';
import Nav from 'Nav';
import Footer from './Footer.jsx';

const Main = (props) => {
  return (
    <div className='wrapper'>
      <Nav />
      <div>
        {props.children}
      </div>
      <div id="footerComponent">
        <Footer className="align-self-bottom" />
      </div>

    </div>
  );
};

export default Main;
