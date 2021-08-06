import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import withStyles, { css } from '../../css/withStyles';

class CheckBox extends PureComponent {
  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this); //콜백 함수(setRef) 안에 this 변수를 참조하므로 bind() 함수를 사용하여  this의 범위가 checkBox 컴포넌트의 객체로 정의하도록 합니다.
    this.handleChange = this.handleChange.bind(this); //콜백 함수(handleClick) 안에 this 변수를 참조하므로 bind() 함수를 사용하여  this의 범위가 checkBox 컴포넌트의 객체로 정의하도록 합니다.
  }

  componentDidMount() {
    if (this.props.autoFocus) {
      //autoFocus값이 true일 경우 출력 후 input에 자동으로 커서를 배치합니다.
      this.ref.focus();
    }
  }

  handleChange(e) {
    const { name, onChange, checked } = this.props;
    onChange(name, e.target.checked); //onchange 함수를 호출할 때 첫 번째 인자는 name 프로퍼티를 전달하고, 두 번째 인자는 e.target.checked 값을 전달합니다.
  }

  setRef(ref) {
    this.ref = ref;
  }

  render() {
    const { name, onFocus, errorMessage, label, children, styles, checked } = this.props;
    //5 input의 타입은 checkbox 입니다.
    //6 checked 프로퍼티가 true일 경우 checked값을 선언합니다.
    //7 input 엘리먼트를 클릭할 경우 onChange 함수를 호출합니다.
    return (
      <label>
        {label}
        <div>
          <input
            ref={this.setRef}
            type="checkbox"
            checked={checked && 'checked'}
            onChange={this.handleChange}
          />
          {children}
        </div>
        {errorMessage && (
          <div>
            <span {...css(styles.errorText)}>{errorMessage}</span>
          </div>
        )}
      </label>
    );
  }
}

CheckBox.propTypes = {
  name: PropTypes.string.isRequired,
  autoFocus: PropTypes.bool,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

CheckBox.defaultProps = {
  autoFocus: false,
  checked: false,
  onChange: () => {},
};

export default withStyles(({ color, size }) => ({
  errorText: {
    fontSize: size.sm,
    color: color.error,
  },
}))(CheckBox);
