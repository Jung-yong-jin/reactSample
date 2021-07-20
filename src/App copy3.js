import './App.css';

import React, { Component } from 'react';
import ChildComponent2 from './03/ChildComponent2';

class App extends Component {
  render() {
    //render 지역변수
    return (
      <div className="body">
        <ChildComponent2 objValue={{ age: 20 }} requiredStringValue="문자" />
      </div>
    );
  }
}

export default App;
