var React = require('react');
var {Link, IndexLink} = require('react-router');


var Nav = React.createClass({
  
  render: function() {
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
              <Link to='/examples' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Examples</Link>
            </li>
            <li>
              <Link to='/contact' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Contact</Link>
            </li>
          </ul>
        </div>

      </div>
    );
  }
});

module.exports = Nav;
