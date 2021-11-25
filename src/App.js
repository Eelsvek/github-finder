import React, { Component } from 'react';
import NavBar from './components/layout/NavBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <NavBar icon='fab fa-github' title='Github Finder' />
      </div>
    );
  }
}

export default App;
