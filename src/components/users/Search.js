import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchUsers, setAlert, showClear, clearUsers }) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      setAlert('Please enter something', 'light');
    } else {
      searchUsers(text);
      setText('');
    }

    searchUsers(text);
    setText('');
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <Fragment>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search users..."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {showClear && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </Fragment>
  );
};

Search.propTypes = {
  clearUsers: PropTypes.func.isRequired,
  searchUsers: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
};

export default Search;
