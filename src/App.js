import './sass/materialize.scss';
import './App.css';

import React, { Component } from 'react';
import Text from './components/text/Index';
import { PageWithLoadData, PageWithLoadDataAndLoading } from './components/with/Page'
class App extends Component {
  render() {
    const aa = ()=> fetch('http://localhost:5070/sample/list').then((response) => { return response.json()})
    .then((data) => {console.log(data); return data});
    return (<div>
      <PageWithLoadData loadData={aa}/>
      </div>);
  }
}

export default App;
