import React, { Component } from 'react';
import Title from '../title/Index';
class Page extends Component {
  render() {
    return (
      <div>
        <h1>
          <Title />
        </h1>
        책 목록
        <ul>
          <Title />
        </ul>
      </div>
    );
  }
}

export default Page;
