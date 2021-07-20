import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChildComponent2 extends Component {
  render() {
    const { objValue, requiredStringValue } = this.props;
    return (
      <div>
        <div>객체값 : {String(Object.entries(objValue))}</div>
        <div>필수값 : {String(requiredStringValue)}</div>
      </div>
    );
  }
}

//객체 프로퍼티의 자료형은 PropTypes의 shape를 사용하여 정의합니다.
ChildComponent2.propTypes = {
  objValue: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
  }),
  //필수 프로퍼티
  //PropTypes에 정의된 변수( string, object, bool, ...) 안의 특수 변수 isRequired를 이용하여 requireStringValue 를 필수 프로퍼티로 지정했습니다.
  requiredStringValue: PropTypes.string.isRequired,
};

export default ChildComponent2;
