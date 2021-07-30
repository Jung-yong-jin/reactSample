import React, { Component } from 'react';
import PropTypes from 'prop-types';

//자식 프로퍼티로 전달받은 노드를 span 엘리먼트 안에 출력합니다.
class Text extends Component {
  render() {
    const { children } = this.props;
    return <span>{children}</span>;
  }
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Text;
