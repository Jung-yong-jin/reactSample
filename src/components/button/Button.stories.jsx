import React, { Component } from 'react';
import Button from './index';

export default {
  title: 'Example/Button',
  component: Button,
};

const Template = (args) => <Button {...args}>전송하기</Button>;
export const 기본_예제 = Template.bind({});
기본_예제.args = {
  onPress: () => {
    console.log('OnPress 호출');
  },
};

export const large_예제 = Template.bind({});
large_예제.args = {
  onPress: () => {
    console.log('OnPress 호출');
  },
  large: true,
};
export const xlarge_예제 = Template.bind({});
xlarge_예제.args = {
  onPress: () => {
    console.log('OnPress 호출');
  },
  xlarge: true,
};

export const small_예제 = Template.bind({});
small_예제.args = {
  onPress: () => {
    console.log('OnPress 호출');
  },
  small: true,
};

export const xsmall_예제 = Template.bind({});
xsmall_예제.args = {
  onPress: () => {
    console.log('OnPress 호출');
  },
  xsmall: true,
};

export const primary_예제 = Template.bind({});
primary_예제.args = {
  onPress: () => {
    console.log('OnPress 호출');
  },
  primary: true,
};

export const secondary_예제 = Template.bind({});
secondary_예제.args = {
  onPress: () => {
    console.log('OnPress 호출');
  },
  secondary: true,
};

export const primary_large_예제 = Template.bind({});
primary_large_예제.args = {
  onPress: () => {
    console.log('OnPress 호출');
  },
  primary: true,
  large: true,
};
