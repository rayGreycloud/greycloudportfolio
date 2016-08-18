import React from 'react';
import Nav from 'Nav';
import Footer from './footer';

const Main = (props) => {
  return (
    <div className='wrapper'>
      <Nav />
      <div className='container'>
        {props.children}
      </div>
    </div>
  );
};

export default Main;
