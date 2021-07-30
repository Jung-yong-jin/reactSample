import { ref } from 'airbnb-prop-types';
import React from 'react';

class InputWithStyle extends React.Component {
  render() {
    const { errorMessage, label, value, name, type } = this.props;
    return (
      <div className="input-field">
        <input
          id={`input_${name}`}
          className={`validate ${errorMessage && 'invalid'}`}
          ref={this.setRef}
          type={type}
          onChange={this.handleChange}
          value={value}
        />
        <label className="active" for={`input_${name}`}>
          {label}
        </label>
        {errorMessage && (
          <span className="helper-text" data-error={errorMessage}>
            {errorMessage}
          </span>
        )}
      </div>
    );
  }
}

export default InputWithStyle;
