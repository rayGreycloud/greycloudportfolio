import React from 'react';
import {Link, IndexLink} from 'react-router';

const Nav = () => {
  return (
    <nav className='navbar navbar-default'>
      <div className='container-fluid'>
        <div className="navbar-header">
          <div className='navbar-brand'>rayGreycloud</div>
        </div>
        <div class="collapse navbar-collapse">
          <ul className='nav navbar-nav navbar-right'>
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
    </nav>
  );
}

export default Nav;
