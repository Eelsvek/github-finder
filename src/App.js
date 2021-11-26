import React, { Component, Fragment } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/layout/NavBar';
import Alert from './components/layout/Alert';
import Users from './components/users/Users';
import Search from './components/users/Search';
import About from './components/pages/About';
import User from './components/users/User';

class App extends Component {
  state = {
    users: [],
    user: null,
    loading: false,
    alert: null,
  };

  clearUsers = () => this.setState({ users: [], loading: false });

  setAlert = (msg, type) => {
    this.setState({
      alert: {
        msg,
        type,
      },
    });

    setTimeout(() => this.setState({ alert: null }), 2000);
  };

  searchUsers = async (text) => {
    this.setState({ loading: true });

    if (!text) {
      this.setAlert('Please enter something', 'light');
    } else {
      const res = await axios.get(
        `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );

      this.setState({
        users: res.data.items,
        loading: false,
      });
    }
  };

  getUser = async (username) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${username}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ user: res.data, loading: false });
  };

  render() {
    const { users, loading, alert, user } = this.state;

    return (
      <Router>
        <div className='App'>
          <NavBar icon='fab fa-github' title='Github Finder' />
          <div className='container'>
            <Alert alert={alert} />
            <Routes>
              <Route
                exact
                path='/'
                element={
                  <Fragment>
                    <Search
                      clearUsers={this.clearUsers}
                      searchUsers={this.searchUsers}
                      setAlert={this.setAlert}
                      showClear={!!users.length}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                }
              />
              <Route exact path='/about' element={<About />} />
              <Route
                exact
                path='/user/:login'
                element={
                  <User getUser={this.getUser} user={user} loading={loading} />
                }
              />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
