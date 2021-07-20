import './App.css';

import React, { Component } from 'react';
import Counter from './03/Counter';
import NewCounter from './03/NewCounter';

// class App extends Component {
//   render() {
//     //render 지역변수
//     return (
//       <div className="body">
//         <ChildProperty>
//           <div>
//             <span>자식노드</span>
//           </div>
//         </ChildProperty>
//       </div>
//     );
//   }
// }

class App extends Component {
  constructor(props) {
    super(props);
    console.log('super constructor 호출');
    this.state = { hasDestroyed: false };
  }

  componentDidMount() {
    console.log('super componentDidMount 호출');
    this.setState({ hasDestroyed: true });
  }
  render() {
    console.log('super render 호출');
    return <div>{this.state.hasDestroyed ? null : <Counter />}</div>;
  }
}

export default App;
