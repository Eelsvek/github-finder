import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Spinner from '../layout/Spinner';

class User extends Component {
  static propTypes = {
    getUser: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  render() {
    const {
      avatar_url,
      bio,
      blog,
      company,
      followers,
      following,
      hireable,
      html_url,
      location,
      login,
      public_repos,
      public_gists,
      name,
    } = this.props.user;
    const { loading } = this.props;

    if (loading) {
      return <Spinner />;
    }

    return (
      <Fragment>
        <Link className="btn btn-light" to="/">
          Back To Search
        </Link>
        Hireable:{' '}
        {hireable ? (
          <i className="fas fa-check text-success" />
        ) : (
          <i className="fas fa-times-circle text-danger" />
        )}
        <div className="card grid-2">
          <div className="all-center">
            <img
              src={avatar_url}
              alt="User headshot"
              className="round-img"
              style={{ width: '150px' }}
            />
            <h1>{name}</h1>
            <p>Location: {location}</p>
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <a href={html_url} className="btn btn-dark my-1">
              Visit Github Profile
            </a>
            <ul>
              <li>
                {login && (
                  <Fragment>
                    <strong>Username: </strong> {login}
                  </Fragment>
                )}
              </li>
              <li>
                {login && (
                  <Fragment>
                    <strong>Company: </strong> {company}
                  </Fragment>
                )}
              </li>
              <li>
                {login && (
                  <Fragment>
                    <strong>Blog: </strong> {blog}
                  </Fragment>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="card text-center">
          <div className="badge badge-primary">Followers: {followers} </div>
          <div className="badge badge-success">Following: {following} </div>
          <div className="badge badge-danger">
            Public Repos: {public_repos}{' '}
          </div>
          <div className="badge badge-dark">Public Gists: {public_gists} </div>
        </div>
      </Fragment>
    );
  }
}

export default User;
