import React from 'react';
import PropTypes from 'prop-types';

const NavBar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon} style={{ marginRight: '1rem' }} />
        {title}
      </h1>
    </nav>
  );
};

NavBar.defaultProps = {
  icon: 'fab fa-github',
  title: 'Github Finder',
};

NavBar.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default NavBar;
