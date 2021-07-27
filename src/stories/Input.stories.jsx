import React, { Component } from 'react';

import Input from '../03/Input'; //Input 컴포넌트를 임포트했습니다.

import { action } from '@storybook/addon-actions';
import { jsxDecorator } from 'storybook-addon-jsx';

export default {
  title: 'Example/Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const 기본설정 = Template.bind({});
기본설정.args = {
  name: 'name',
};

export const label_예제 = Template.bind({});
label_예제.args = {
  name: 'name',
  label: '이름 : ',
};
export const onChange_예제 = Template.bind({});
onChange_예제.args = {
  name: 'name',
  onChange: action('onChange 이벤트 발생'),
};
