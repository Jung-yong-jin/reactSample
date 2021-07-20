import React, { Component } from 'react';

class LifeCycleExample extends Component {
  //component 가 호출되는 시점에 한번 호출
  constructor(props) {
    super(props);
    this.state = {
      text: 'test',
      count: 0,
    };
    console.log('constructor 호출');
  }

  //이 함수는 상위 컴포넌트에서 전달받은 프로퍼티로 state값을 연동할 때 주로 사용되며, 반환값으로 state를 변경합니다.
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps 호출');
    return { text: 'new text' };
  }

  //render() 함수가 jsx를 화면에 그린 이후에 호출
  componentDidMount() {
    console.log('componentDidMount 호출');
    //this.setState({ text: 'mount test' });
    this.forceUpdate();
  }

  //함수는 프로퍼티를 변경하거나 setState() 함수를 호출하여 state값을 변경하면 ‘화면을 새로 출력해야 하는지 판단하는 함수입니다
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate 호출');
    return false;
  }

  //컴포넌트의 변경된 내용이 가상 화면에 완성된 이후 호출되는 함수입니다
  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate 호출');
    return {};
  }

  //컴포넌트가 실제 화면에 출력된 이후 호출되는 함수입니다
  componentDidUpdate() {
    console.log('componentDidUpdate 호출');
    return null;
  }

  //컴포넌트가 소멸되기 직전에 호출되는 함수입니다.
  componentWillUnmount() {
    console.log('componentWillUnmount 호출');
  }

  //반환하는 jsx(JavaScript eXtension)를 화면에 그려줍니다.
  render() {
    console.log('render 호출');
    return <div>{this.state.text}</div>;
  }
}

export default LifeCycleExample;
