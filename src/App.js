import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AlertState from './context/alert/AlertState';
import GithubState from './context/github/GithubState';

import NavBar from './components/layout/NavBar';
import Alert from './components/layout/Alert';
import Users from './components/users/Users';
import Search from './components/users/Search';
import About from './components/pages/About';
import User from './components/users/User';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <NavBar icon="fab fa-github" title="Github Finder" />
            <div className="container">
              <Alert />
              <Switch>
                <Route
                  exact
                  path="/"
                  render={() => (
                    <Fragment>
                      <Search />
                      <Users />
                    </Fragment>
                  )}
                />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
