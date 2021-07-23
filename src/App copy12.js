import './App.css';

import React, { Component } from 'react';
import Counter from './03/Counter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };

    this.increaseCount = this.increaseCount.bind(this);
  }

  increaseCount() {
    this.setState(({ count }) => ({ count: count + 1 }));
  }

  render() {
    return (
      <div className="body">
        <Counter count={this.state.count} />
      </div>
    );
  }
}

export default App;
