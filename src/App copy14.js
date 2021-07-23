import './App.css';

import React, { Component } from 'react';
import Input from './03/Input';

class App extends Component {
  constructor(props) {
    super(props);
    state = {};
  }

  render() {
    let inputText = '';
    return (
      <div className="body">
        <Input
          label="입력박스 : "
          name="test"
          errorMessage=""
          value={inputText}
          type="text"
          onChange={(name, value) => (inputText = value)}
        />
      </div>
    );
  }
}

export default App;
