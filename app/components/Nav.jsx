import React from 'react';
import {Link, IndexLink} from 'react-router';

const Nav = () => {
  return (
    <div className='top-bar'>
      <div className='top-bar-left'>
        <ul className='menu'>
          <li className='menu-text'>rayGreycloud</li>
          <li>
            <IndexLink to='/' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Home</IndexLink>
          </li>
          <li>
            <Link to='/about' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>About</Link>
          </li>
          <li>
            <Link to='/projects' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Projects</Link>
          </li>
          <li>
            <Link to='/contact' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
