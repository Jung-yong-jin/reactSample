import './App.css';

import React, { Component } from 'react';

class MyComponent extends React.Component {
  componentDidUpdate() {
    console.log('MyComponent 새로고침');
  }

  render() {
    return <div></div>;
  }
}

class MyPureComponent extends React.PureComponent {
  componentDidUpdate() {
    console.log('MyPureComponent 새로고침');
  }

  render() {
    return <div></div>;
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.listValue = [{ name: 'Park' }, { name: 'Lee' }];
    this.state = { version: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    setTimeout(() => {
      this.listValue[0].name = 'Justin';
      this.setState({ version: 1 });
    }, 100);

    setTimeout(() => {
      this.listValue = [{ name: 'Justin' }, { name: 'Lee' }];
      this.setState({ version: 2 });
    }, 200);
  }

  render() {
    return (
      <div className="body">
        <MyComponent value={this.listValue} />
        <MyPureComponent value={this.listValue} />
        <button onClick={this.handleClick}> 버튼 </button>
      </div>
    );
  }
}

export default App;
