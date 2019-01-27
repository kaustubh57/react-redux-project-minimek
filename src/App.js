import React, { Component } from 'react';
import {
  Header,
  Container
} from 'semantic-ui-react';

import './App.css';
import TabBarContainer from "./features/tabs/TabBarContainer";

class App extends Component {
  render() {
    const tabs = [
      {name: 'unitInfo', label: 'Unit Info'},
      {name: 'pilots', label: 'Pilots'},
      {name: 'mechs', label: 'Mechs'},
      {name: 'unitOrganization', label: 'Unit Organization'}
    ];

    return (
      <div className="App">
        <div className="App-header">
          <Header inverted as="h1">Project Mimi-Mek</Header>
        </div>
        <Container>
          <TabBarContainer tabs={tabs} size="massive"/>
        </Container>
      </div>
    );
  }
}

export default App;
