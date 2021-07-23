import React from 'react';

export default class ScrollSpy extends React.Component {
  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this);
    this.checkPosition = this.checkPosition.bind(this);
    this.clickEvent = this.clickEvent.bind(this);
    window.addEventListener('scroll', this.checkPosition); //1윈도우의 스크롤 이동 이벤트를 감지하여 checkPosition() 함수가 실행되도록 하였습니다.
    window.addEventListener('click', this.clickEvent);
  }

  setRef(ref) {
    this.ref = ref; //2 ref 프로퍼티에서 반환된 객체를 컴포넌트 변수에 할당
  }

  clickEvent() {
    if (!this.ref) {
      return;
    }

    console.log('clickEvent');
  }

  checkPosition() {
    if (!this.ref) {
      return;
    }
    console.log(this.ref.getBoundingClientRect().top);
    console.log(window.innerHeight);

    //3현재 dom객체의 위치가 스크롤 화면 안팎인지 측정하고 있습니다.
    if (this.ref.getBoundingClientRect().top < window.innerHeight) {
      console.log('enter');
    } else {
      console.log('exit');
    }
  }

  componentDidMount() {
    this.checkPosition();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.checkPosition); //4컴포넌트가 소멸할 때 화면 스크롤 감시 함수를 메모리에서 제거하였습니다.
  }

  render() {
    return <div ref={this.setRef} style={{ height: 900 + 'px' }} />;
  }
}
