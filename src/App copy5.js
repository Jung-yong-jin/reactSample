import './App.css';

import React, { Component } from 'react';
import ChildProperty from './03/ChildProperty';

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
        <ChildProperty
          children={
            <div>
              <span>자식노드2</span>
            </div>
          }
        />
      </div>
    );
  }
}

export default App;
