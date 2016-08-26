import React from 'react';
import Nav from 'Nav';
import Footer from 'Footer';

const Main = (props) => {
  return (
    <div className='wrapper'>
      <Nav />
      <div>
        {props.children}
      </div>
      <div id="footerComponent">
        <Footer />
      </div>

    </div>
  );
};

export default Main;
