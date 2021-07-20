import './App.css';

import React, { Component } from 'react';
import ForceUpdateExample from './03/ForceUpdateExample';

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
        <ForceUpdateExample />
      </div>
    );
  }
}

export default App;
