import React from 'react'
import WithError from './WithError'
import Input from '../input/Input'
export default {
    title: 'Example/Error',
    component : WithError,
}

const InputWithError = WithError('올바르지 못한 값입니다.')(Input);
const Template = (args)=> (<InputWithError {...args} />);

export const 기본_예제 = Template.bind({});
기본_예제.args = {
    hasError : true,
    type: 'text',
    name: 'test',
    errorMessage: 'error',
}