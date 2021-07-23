import React from 'react';
import PropTypes from 'prop-types';

//함수형 컴포넌트는 state와 생명주기 함수를 사용할 수 없습니다.
//그해서 함수형 컴포넌트는 단순한 구조의 UI 컴포넌트를 제작할때 구성한다.
function SFC(props) {
  //클래스형 컴포넌트의 this.props값과 동일합니다.
  const { somePropValue } = props;

  //클래스형 컴포넌트의 this.context와 동일합니다.
  //context는 6장에서 자세히 다룹니다.
  const { someContextValue } = context;
  return <div></div>;
}

SFC.propTypes = {
  somePropValue: PropTypes.any,
};
SFC.defaultProps = { somePropValue: 'default value' };

export default SFC;
