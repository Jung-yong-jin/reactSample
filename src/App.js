import './sass/materialize.scss';
import './App.css';

import React, { Component } from 'react';


import HomePageComponent from './06/HomePageComponent';

class App extends Component {
  render() {
    //const aa = ()=> fetch('http://localhost:5070/sample/list').then((response) => { return response.json()})
    //.then((data) => {console.log(data); return data});
    return (<div>
      <HomePageComponent/>
      </div>);
  }
}

export default App;
