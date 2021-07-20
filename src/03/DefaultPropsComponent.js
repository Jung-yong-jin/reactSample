import React from 'react';
import PropTypes from 'prop-types';

class DefaultPropsComponent extends React.Component {
  render() {
    //render 지역변수 선언
    let message1 = '';
    if (this.props.boolValue === false) {
      message1 = 'boolValue 기본값이 false 입니다.';
    }

    let message2 = '';
    if (this.props.boolValueWithoutDefault === false) {
      message2 = 'boolValueWithoutDefault 기본값이 false 입니다.';
    }

    return (
      <div>
        {message1}
        {message2}
      </div>
    );
  }
}

DefaultPropsComponent.propTypes = {
  boolValue: PropTypes.bool,
  boolValueWithoutDefault: PropTypes.bool,
};

DefaultPropsComponent.defaultProps = {
  boolValue: false,
};

export default DefaultPropsComponent;
