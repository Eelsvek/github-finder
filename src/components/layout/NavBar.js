import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class NavBar extends Component {
  // static defaultProps = {
  //   icon: 'fab fa-github',
  //   title: 'Github Finder',
  // };

  static propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <i className={this.props.icon} />
          {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default NavBar;
