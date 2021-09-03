import React from 'react';
import {action} from '@storybook/addon-actions'


import Form from './Form';
import FormConsumerExample from './FormConsumerExample';
import FormSubmitButton from './FormSubmitButton';

export default  {
    title: 'Example/formSample',
}


const validate = ({name, age}) => {
                            let errors = {};
                            if(!name){
                                errors['name'] = '이름을 입력해야 합니다.';
                            }

                            if(age && age < 18){
                                errors['age'] = '나이는 18세 이상이어야 합니다.';
                            }

                            return errors;
                        }


const Template = (args) => (
    <Form validate={validate} onSubmit={action('폼 전송')}>
        <FormConsumerExample name="name" label="이름" />
        <FormConsumerExample name="age" label="나이" />
        <FormConsumerExample name="totalAmount" label="금액" />
        <FormSubmitButton>전송</FormSubmitButton>
    </Form>
)


export const 폼전송 = Template.bind({});
폼전송.args = {
    
}