import React from 'react';
import Nav from 'Nav';
import Footer from './footer';

const Main = (props) => {
  return (
    <div className='wrapper'>
      <Nav />
      <div>
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default Main;
