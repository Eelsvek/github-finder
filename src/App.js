import React, { Fragment, Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const name = 'Kevin';
    const loading = false;
    const showName = true;

    return (
      <Fragment>
        <div className='App'>
          {loading ? <h4>Loading...</h4> : <h1>Hello {showName && name}</h1>}
        </div>
        <h2>Hmm</h2>
      </Fragment>
    );
  }
}

export default App;
