import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import withStyles, { css } from '../../css/withStyles';

class Button extends PureComponent {
  render() {
    const {
      children,
      disabled,
      onPress,
      styles,
      large,
      xlarge,
      small,
      xsmall,
      primary,
      secondary,
    } = this.props;

    //1.버튼 엘리먼트를 클릭할 경우 onPress() 함수를 호출합니다.
    //2.프로퍼티로 전달받은 children 노드를 출력합니다.
    return (
      <div>
        <button
          {...css(
            styles.default,
            large && styles.large,
            xlarge && styles.xlarge,
            small && styles.small,
            xsmall && styles.xsmall,
            primary && styles.primary,
            secondary && styles.secondary,
          )}
          onClick={onPress}
        >
          {children}
        </button>
      </div>
    );
  }
}

//3 4.onPress 프로퍼티는 함수 타입으로, 기본값으로 빈 실행 함수를 전달하여 프로퍼티가 선언되지 않아도
//엘리먼트의 이벤트에서 콜백 함수를 실행할 때 undefined 오류가 발생하는 것을 방지합니다.
Button.propTypes = {
  children: PropTypes.node.isRequired,
  onPress: PropTypes.func,
  large: PropTypes.bool,
  xlarge: PropTypes.bool,
  small: PropTypes.bool,
  xsmall: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
};

//4.
Button.defaultProps = {
  onPress: () => {},
  large: false,
  xlarge: false,
  small: false,
  xsmall: false,
  primary: false,
  secondary: false,
};
export default withStyles(({ color, size, unit, responsive }) => ({
  default: {
    border: 1,
    borderStyle: 'solid',
    borderColor: color.default,
    borderRadius: 2,
    color: color.default,
    fontSize: size.md,
    padding: unit * 2,
    cursor: 'pointer',
    [responsive.small]: {
      width: '100%',
    },
  },
  large: {
    fontSize: size.lg,
  },
  xlarge: {
    fontSize: size.xg,
  },
  small: {
    fontSize: size.sm,
    padding: unit,
  },
  xsmall: {
    fontSize: size.xs,
    padding: unit,
  },
  primary: {
    borderColor: color.primary,
    color: color.white,
    backgroundColor: color.primary,
  },
  secondary: {
    borderColor: color.secondary,
    color: color.secondary,
  },
}))(Button);
