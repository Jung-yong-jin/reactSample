import React, { Component } from 'react';

//글래스 인스턴스 변수와 forceUpdate() 함수로 state 관리하기
class ForceUpdateExample extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    //state 정의
    this.loading = true; //1 클래스 변수로 초기값을 정의합였습니다.
    this.formData = 'no data'; //2 클래스 변수로 초기값을 정의합였습니다.
    //이후 콜백 함수를 다룰 때 bind 를 선언하는 부분에 대해 다룹니다.
    this.handleData = this.handleData.bind(this);
    //4초 후에 handleData를 호출합니다.
    setTimeout(this.handleData, 4000);
  }

  handleData() {
    const data = 'new data';
    this.loading = false; //3 내부 state를 변경하였습니다.
    this.formData = data + this.formData; //4 내부 state를 변경하였습니다.
    this.forceUpdate(); //5 컴포넌트 내장 함수 forceUpdate()를 호출하여 강제로 화면을 새로고침합니다. 단, 이 방법은 리액트 성능에 제약이 있으므로 매버 ㄴ새롭게 화면을 출력해야 되는 경우가 아니라면 가급적 사용하지 않기를 권함
  }

  render() {
    return (
      <div>
        <span>로딩중 : {String(this.loading)}</span>
        <span>결과 : {this.formData}</span>
      </div>
    );
  }
}

export default ForceUpdateExample;
