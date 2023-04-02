import React from 'react';
import { Link } from 'react-router-dom';

//import PropTypes from 'prop-types';

function Navbar(props) {
  return (
    <div>
      {/* <h1>Navbar</h1> */}
      <nav className="navbar-nav navbar-expand-lg navbar-dark bg-dark mb-3 p-3">
      <a href="/" className="navbar-brand">{props.title}</a>
      <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
          <Link to='/about' className="nav-link">About Page</Link>
        </li>
        <li className="nav-item active">
          <Link to='/' className="nav-link">User List Page</Link>
        </li>
        <li className="nav-item active">
          <Link to='/add' className="nav-link">User Add Page</Link>
        </li>
        {/* <li className="nav-item active">
          <Link to='/update:id' className="nav-link">User Update Page</Link>
        </li> */}
        <li className="nav-item active">
          <Link to='/contact' className="nav-link">Contact Page</Link>
        </li>
      </ul>
      </nav>
    </div>
  )
}
// Navbar.propTypes = {
//   title: PropTypes.string.isRequired,
// }
// Navbar.defaultProps = {
//   title: 'Zisancim'
// }
export default Navbar;