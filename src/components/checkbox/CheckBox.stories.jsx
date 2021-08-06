import React from 'react';
import CheckBox from './CheckBox';
import Text from '../text/Index';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Example/Checkbox',
  component: CheckBox,
};

const Template = (args) => <CheckBox {...args} />;

export const 기본설정 = Template.bind({});
기본설정.args = {
  name: 'agree',
};

const Template2 = (args) => (
  <CheckBox {...args}>
    <Text>동의합니다.</Text>
  </CheckBox>
);

export const label_예제 = Template2.bind({});
label_예제.args = {
  name: 'agree',
  label: '이름',
};

export const onChange_예제 = Template2.bind({});
onChange_예제.args = {
  name: 'agree',
  onChange: action('onChange 이벤트 발생'),
};

export const checked_예제 = Template2.bind({});
checked_예제.args = {
  name: 'agree',
  label: '이름',
  checked: true,
};

export const errorMessage_예제 = Template2.bind({});
errorMessage_예제.args = {
  name: 'agree',
  errorMessage: '동의가 필요합니다',
};
