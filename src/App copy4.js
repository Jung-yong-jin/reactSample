import './App.css';

import React, { Component } from 'react';
import DefaultPropsComponent from './03/DefaultPropsComponent';

class App extends Component {
  render() {
    //render 지역변수
    return (
      <div className="body">
        <DefaultPropsComponent />
      </div>
    );
  }
}

export default App;
