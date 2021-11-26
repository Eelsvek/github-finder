import React, { Component } from 'react';
import NavBar from './components/layout/NavBar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  clearUsers = () => this.setState({ users: [], loading: false });

  searchUsers = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({
      users: res.data.items,
      loading: false,
    });
  };

  render() {
    return (
      <div className='App'>
        <NavBar icon='fab fa-github' title='Github Finder' />
        <div className='container'>
          <Search
            clearUsers={this.clearUsers}
            searchUsers={this.searchUsers}
            showClear={!!this.state.users.length}
          />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
