import React from 'react';

class InputWithStyle extends React.PureComponent {
  constructor(props){
    super(props);
    this.setRef = this.setRef.bind(this);
    this.handleChange = this.handleChange.bind(this);
    
  }

  handleChange(e){
    const {name, onChange} = this.props;
    if(onChange){
      onChange(name, e.target.value);
    }
  }

  componentDidMount(){
    if(this.props.autoFocus){
      this.ref.focus();
    }
  }

  setRef(ref) {
    this.ref = ref;
  }


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
        <label className="active" htmlFor={`input_${name}`}>
          {label}
        </label>
        {errorMessage && (
          <span className="error" data-error={errorMessage}>
            {errorMessage}
          </span>
        )}
      </div>
    );
  }
}

export default InputWithStyle;
