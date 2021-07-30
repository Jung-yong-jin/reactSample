import React from 'react';
import InputWithStyle from './Index';

export default {
  title: 'Example/Input',
  component: InputWithStyle,
};

const Template = (args) => <InputWithStyle {...args} />;

export const 기본_설정 = Template.bind({});
기본_설정.args = {
  name: 'name',
};
export const label_예제 = Template.bind({});
label_예제.args = {
  name: 'name',
  label: '이름',
};
export const value_예제 = Template.bind({});
value_예제.args = {
  name: 'name',
  label: '이름',
  value: '두잇',
};

export const errorMessage_예제 = Template.bind({});
errorMessage_예제.args = {
  name: 'name',
  label: '이름',
  errorMessage: '이름을 입력해주세요.',
};
