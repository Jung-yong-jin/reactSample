import './App.css';

import React, { Component } from 'react';
import BooleanComponent from './03/BooleanComponent';

class App extends Component {
  render() {
    //render 지역변수
    return (
      <div className="body">
        <div>
          <b>지루할 때 :</b> <BooleanComponent bored />
        </div>
        <div>
          <b>즐거울 때 :</b> <BooleanComponent />
        </div>
      </div>
    );
  }
}

export default App;
