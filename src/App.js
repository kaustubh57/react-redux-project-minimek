import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';

import './App.css';
import SampleComponent from "./app/SampleComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header inverted as="h1">Project Mimi-Mek</Header>
        </div>
        <SampleComponent/>
      </div>
    );
  }
}

export default App;
