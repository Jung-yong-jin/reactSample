import React from 'react';
import PropTypes from 'prop-types';

import { Consumer } from './FormContext';
import Button from '../button/Button'

class FormSubmitButton extends React.PureComponent {
    render(){
        const {children} = this.props;
        return (
            <Consumer>
                {
                    //컨텍스트의 폼 전송을 위한 submit() 콜백 함수를 Button 컴포넌트의 onPress 프로퍼티로 전달합니다. 
                    //공급자 프로퍼티의 onSubmit 콜백 함수를 입력된 값과 함께 호출하게 됩니다.
                    ({submit}) => (
                        <Button primary onPress={submit}>
                            {children}
                        </Button>
                    )
                }
            </Consumer>
        )
    }
}

FormSubmitButton.propTypes = {
    children: PropTypes.node.isRequired,
}

export default FormSubmitButton;