import React, { Fragment, useContext, useState } from 'react';
import AlertContext from '../../context/alert/alertContext';
import GithubContext from '../../context/github/githubContext';

const Search = () => {
  const { clearUsers, searchUsers, users } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      setAlert('Please enter something', 'light');
    } else {
      searchUsers(text);
      setText('');
    }
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
      {!!users.length && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </Fragment>
  );
};

export default Search;
