import './sass/materialize.scss';
import './App.css';

import React, { Component } from 'react';
import { default as Text } from './components/text/Text.stories';

class App extends Component {
  render() {
    return <div>{Text.node}</div>;
  }
}

export default App;
