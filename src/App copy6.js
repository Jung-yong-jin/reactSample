import './App.css';

import React, { Component } from 'react';
import StateExample from './03/StateExample';

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
  render() {
    return (
      <div>
        <StateExample />
      </div>
    );
  }
}

export default App;
