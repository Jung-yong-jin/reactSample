import './App.css';

import React, { Component } from 'react';
import TodaysPlan from './03/TodaysPlan';

class App extends Component {
  render() {
    return (
      <div className="body">
        <TodaysPlan name="TEST App" />
      </div>
    );
  }
}

export default App;
