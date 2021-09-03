import React from 'react';
import PropTypes from 'prop-types';

import {Provider} from './FormContext';

export default class FormProvider extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            values: {}, //입력된 값을 모두 저장하는 객체입니다.
            errors: {}, //유효성 검사 함수가 반환한 오류 메시지를 입력 항목 이름과 함계 해시맵 구조로 저장한 객체입니다.
        }

        this.onChange = this.onChange.bind(this);
        this.reset    = this.reset.bind(this);
        this.submit   = this.submit.bind(this);
        this.validate = this.validate.bind(this);
    }
    
    //Input 컴포넌트에서 입력값이 변경될 때 실행될 콜백 함수입니다.
    onChange(name, updateValue){
        this.setState( ({values}) => ({
                        values: {   ...values,
                                    [name]: updateValue //입력값 values의 새값으로 변경합니다.
                                }
                    })
                    ,
                    () => this.validate(this.state.values) //state가 변경된 다음 변경된 state의 값으로 유효성 검사 함수를 실행합니다.
        );
    }

    reset(){
        this.setState({values: {}, errors: {}}); //컨텍스트의 values, errors값을 초기화합니다.
    }

    submit(){
        this.props.onSubmit(this.state.values); //소비자에서 submit 함수가 호출되면 onSubmit 프로퍼티로 전달받은 콜백 함수에 현재 입력된 값을 인자로 전달합니다. 
    }

    validate(values){
        const {validate} = this.props;
        if(!validate){
            return;
        }

        const errors = validate(values); //폼 공급자는 유효성 검사 로직을 포함하지 않고 validate 프로퍼티로 전달된 콜백 함수를 실행하여 유효성 오류 결과값만을 저장합니다. 
        this.setState(({
            errors,//유효성 검증의 오류 메시지를 컨텍스트의 errors에 저장합니다.
        }))
    }


    render(){
        const {values, errors} = this.state;
        return (
            <React.Fragment>
                <Provider value={{errors, values, onChange: this.onChange, reset: this.reset, submit: this.submit}}>
                    {this.props.children}
                </Provider>
            </React.Fragment>
        );
    }
}

FormProvider.propTypes = {
    validate: PropTypes.func,
}
