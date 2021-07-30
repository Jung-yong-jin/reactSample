import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import withStyles, { css } from '../../css/withStyles';

//자식 프로퍼티로 전달받은 노드를 span 엘리먼트 안에 출력합니다.
class Text extends PureComponent {
  render() {
    const { children, styles, xsmall, small, large, xlarge, secondary, primary } = this.props;
    console.log(styles);
    console.log(styles.default);
    console.log(css(styles.default));
    console.log({ ...css(styles.default) });
    return (
      <span
        {...css(
          styles.default,
          xsmall && styles.xsmall,
          small && styles.small,
          large && styles.large,
          xlarge && styles.xlarge,
          secondary && styles.secondary,
          primary && styles.primary,
        )}
      >
        {children}
      </span>
    );
  }
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  xsmall: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  xlarge: PropTypes.bool,
  secondary: PropTypes.bool,
  primary: PropTypes.bool,
};

export default withStyles(({ color, size }) => ({
  default: {
    color: color.default,
    fontSize: size.md,
  },
  xsmall: {
    fontSize: size.xs,
  },
  small: {
    fontSize: size.sm,
  },
  large: {
    fontSize: size.lg,
  },
  xlarge: {
    fontSize: size.xg,
  },
  secondary: {
    color: color.secondary,
  },
  primary: {
    color: color.primary,
  },
}))(Text);
