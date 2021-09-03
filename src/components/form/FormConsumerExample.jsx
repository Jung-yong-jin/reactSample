import React from 'react';
import { Consumer } from './FormContext';
import Input from '../input/Index'

class FormConsumerExample extends React.PureComponent {
    render(){
        const {name, ...otherProps} = this.props;
        return (
            <Consumer>
            {
                ({values, errors, onChange}) => (
                    <Input
                        {...otherProps}
                        name={name}  //name 프로퍼티의 값을 input 컴포넌트의 프로퍼티로 전달합니다.
                        onChange={onChange} //컨텍스트의 onChange 콜백 함수를 input 컴포넌트의 프로퍼티로 전달합니다. input 입력 컴포넌트에 입력한 값이 변경되면 onChange 콜백 함수가 호출될 것입니다.
                        value={values[name]} //입력값 중 name 프로퍼티의 키값을 input 컴포넌트의 입려값으로 전달합니다.
                        errorMessage={errors[name]} //공급자에서 전달받은 오류 메시지 중 name 프로퍼티의 키에 해당하는 오류 메시지만을 errorMessage 프로퍼티에 전달합니다.
                    />
                )
            }
            </Consumer>
        )
    }
}

export default FormConsumerExample;