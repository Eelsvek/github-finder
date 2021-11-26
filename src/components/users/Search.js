import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  static propTypes = {
    clearUsers: PropTypes.func.isRequired,
    searchUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
  };

  state = {
    text: '',
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({ text: '' });
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <Fragment>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            name='text'
            placeholder='Search users...'
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>
        {this.props.showClear && (
          <button
            className='btn btn-light btn-block'
            onClick={this.props.clearUsers}
          >
            Clear
          </button>
        )}
      </Fragment>
    );
  }
}

export default Search;
