import React, { Component } from 'react';
import PropType from 'prop-types'; //1prop-types 라이브러리를 propTypes라는 이름으로 임포트

class PropsComponent extends Component {
  render() {
    return (
      <div className="message-container">
        <div>{this.props.name}</div>
      </div>
    );
  }
}

//자료형을 선언하는 예제
PropsComponent.propTypes = {
  //3 PropsComponent의 propTypes라는 특수 변수(prop-types 라이브러리 임포트 이름 PropTypes와 다릅니다.)를 사용하여 프로퍼티의 자료형을 정의 했습니다.
  name: PropType.string, //4 프로퍼티의 자료형을 객체 형태로 지정하여 PropsComponent.propTypes에 저장했습니다.
};

export default PropsComponent;
