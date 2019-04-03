import React, { Component } from 'react';
import './App.css';

import DataList from './DataList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <DataList />
        </header>
      </div>
    );
  }
}

export default App;
